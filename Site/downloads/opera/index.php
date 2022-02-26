<?php 
$file = file("count.txt");
$count = implode("", $file);
$count++;
$myfile = fopen("count.txt", "w");
fputs($myfile, $count);
fclose($myfile);

function file_force_download($file) {
    if (file_exists($file)) {
        if (ob_get_level()) {
            ob_end_clean();
        }

        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename=' . basename($file));
        header('Content-Transfer-Encoding: binary');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($file));

        readfile($file);
        exit;
    }
}

file_force_download("XDL v1.0.crx");
?>
