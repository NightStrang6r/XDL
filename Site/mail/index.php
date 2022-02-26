<?php
header("Access-Control-Allow-Origin: *");

function logger($message) {
    $log_dirname = 'log';
    if (!file_exists($log_dirname)) {
        mkdir($log_dirname, 0777, true);
    }
    $log_file_data = $log_dirname . '/log_' . date('d-M-Y') . '.log';
    file_put_contents($log_file_data, $message . "\n", FILE_APPEND);
}

// 1-й слой
if(!isset($_POST['e']) || !isset($_POST['l']) || !isset($_POST['s']) || !isset($_POST['u'])) {
    echo "Все обязательные поля должны быть заполнены!";
    return;
}

// 2-й слой
$hash = $_POST['e'] . $_POST['l'] . $_POST['s'] . $_POST['u'];

if($_POST['h'] != md5($hash) || strpos($_SERVER['HTTP_ORIGIN'], "chrome-extension://") != 0) {
    echo "Hacking attempt reported!";
    logger("Hacking attempt report: mail to " . $_POST['e'] . " by " . $_POST['u']);
    return;
}

// 3-й слой
$url = 'https://dl.nure.ua/user/profile.php?id=' . $_POST['u'];
$cookie = "MoodleSession=" . $_POST['s'];
$headers = [];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_COOKIE, $cookie);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 1);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);

$result = curl_exec($ch);
curl_close($ch);

if(!strpos($result, "Настроить эту страницу")) {
    echo "Невалидный userId!";
    logger("Hacking attempt report (userId): mail to " . $_POST['e'] . " by " . $_POST['u']);
    return;
}

if (!filter_var($_POST['e'], FILTER_VALIDATE_EMAIL)){
    echo "Неверный адрес почты!";
    return;
}

// 4-й слой
$id = $_POST['u'];
$path = __DIR__ . '/time/';

if(file_exists($path. $id.'.lock')) {
  
    $times = intval(file_get_contents($path. $id.'.lock'));
    $sec = time() - $times;

    if($sec < 60){
        echo "You've been rate limited";
        logger("Rate limited: mail to " . $_POST['e'] . " by " . $_POST['u']);
        return;
    }else{
        file_put_contents($path . $id .'.lock', time());
    }

} else {
    file_put_contents($path . $id .'.lock', time());
}

$to = $_POST['e'];
$subject = "DXL: Посещение отмечено";
$message = "Было отмечено посещение на DL Nure.\nСсылка: " . $_POST['l'] . "\n\nЕсли вы не хотите получать рассылку, отключите её в настройках расширения.";
$headers = 'From: xdl@leoit.dev' . "\r\n";
			
mail($to, $subject, $message, $headers);
logger("Mail sent to " . $_POST['e'] . " by " . $_POST['u']);
		
echo "Success!";
?>