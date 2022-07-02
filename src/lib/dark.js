function getDarkCSS() { 
    return `
html {
    background-color: #181a1b !important;
}
html {
    color-scheme: dark !important;
}
html, body, input, textarea, select, button {
    background-color: #181a1b;
}
html, body, input, textarea, select, button {
    border-color: #736b5e;
    color: #e8e6e3;
}
a {
    color: #3391ff;
}
table {
    border-color: #545b5e;
}
::placeholder {
    color: #b2aba1;
}
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
    background-color: #404400 !important;
    color: #e8e6e3 !important;
}
::-webkit-scrollbar {
    background-color: #202324;
    color: #aba499;
}
::-webkit-scrollbar-thumb {
    background-color: #454a4d;
}
::-webkit-scrollbar-thumb:hover {
    background-color: #575e62;
}
::-webkit-scrollbar-thumb:active {
    background-color: #484e51;
}
::-webkit-scrollbar-corner {
    background-color: #181a1b;
}
::selection {
    background-color: #004daa !important;
    color: #e8e6e3 !important;
}
::-moz-selection {
    background-color: #004daa !important;
    color: #e8e6e3 !important;
}

/* Invert Style */
.jfk-bubble.gtx-bubble, .captcheck_answer_label > input + img, span#closed_text > img[src^="https://www.gstatic.com/images/branding/googlelogo"], span[data-href^="https://www.hcaptcha.com/"] > #icon, #bit-notification-bar-iframe, ::-webkit-calendar-picker-indicator {
    filter: invert(100%) hue-rotate(180deg) contrast(90%) !important;
}

/* Variables Style */
:root {
   --darkreader-neutral-background: #131516;
   --darkreader-neutral-text: #d8d4cf;
   --darkreader-selection-background: #004daa;
   --darkreader-selection-text: #e8e6e3;
}

/* Modified CSS */
.yui3-widget-stacked .yui3-widget-shim {
    border-color: initial;
}
.yui3-skin-sam .yui3-widget-mask {
    background-color: rgb(0, 0, 0);
}
.yui3-skin-sam .yui3-panel-content {
    box-shadow: rgb(38, 42, 43) 0px 0px 5px;
    border-color: rgb(140, 130, 115);
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.yui3-skin-sam .yui3-panel .yui3-widget-hd {
    color: rgb(232, 230, 227);
    background-image: -webkit-gradient(linear,
    0% 100%,
    0% 0%,
    from(rgb(38, 71, 160)),
    color-stop(0.07,
    rgb(38, 71, 160)),
    color-stop(0.5,
    rgb(61, 103, 206)),
    to(rgb(66, 111, 217)));
    background-color: initial;
}
.yui3-skin-sam .yui3-panel .yui3-widget-ft {
    background-image: initial;
    background-color: rgb(29, 32, 33); 
}
.yui3-skin-sam .yui3-panel .yui3-widget-hd .yui3-button-close {
    background-image: initial; background-color: transparent; border-color: initial; box-shadow: none; 
}
body#page-question-type-calculated div[id^="fgroup_id_"][id*="answeroptions_"], body#page-question-type-calculatedmulti div[id^="fgroup_id_"][id*="answeroptions_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-top-color: rgb(67, 73, 76);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-bottom-color: initial; 
}
body#page-question-type-calculated div[id^="fgroup_id_"][id*="answertolerance_"], body#page-question-type-calculated div[id^="fgroup_id_"][id*="answerdisplay_"], body#page-question-type-calculatedmulti div[id^="fgroup_id_"][id*="answertolerance_"], body#page-question-type-calculatedmulti div[id^="fgroup_id_"][id*="answerdisplay_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-top-color: initial; border-bottom-color: initial; 
}
body#page-question-type-calculated div[id^="fitem_id_"][id*="feedback_"], body#page-question-type-calculatedmulti div[id^="fitem_id_"][id*="feedback_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-bottom-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76);
    border-top-color: initial;
}
.que.calculatedmulti .answer .specificfeedback {
    background-image: initial;
    background-color: rgb(67, 54, 0);
}
.que.calculatedmulti .answer .specificfeedback * {
    background-image: initial;
    background-color: rgb(67, 54, 0); 
}
body#page-question-type-calculatedsimple div[id^="fgroup_id_"][id*="answeroptions_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-top-color: rgb(67, 73, 76);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-bottom-color: initial; 
}
body#page-question-type-calculatedsimple div[id^="fgroup_id_"][id*="answertolerance_"], body#page-question-type-calculatedsimple div[id^="fgroup_id_"][id*="answerdisplay_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-top-color: initial; border-bottom-color: initial; 
}
body#page-question-type-calculatedsimple div[id^="fitem_id_"][id*="feedback_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-bottom-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76);
    border-top-color: initial;
}
.que.ddimageortext .dropbackground,
form.mform fieldset#id_previewareaheader .dropbackground {
    border-color: rgb(140, 130, 115);
}
.que.ddimageortext .dropzone {
    border-color: rgb(140, 130, 115);
}
.que.ddimageortext .dropzone:focus,
.que.ddimageortext .droparea .draghome:focus,
.que.ddimageortext .dropzone.valid-drag-over-drop,
.que.ddimageortext .draghome.placed.valid-drag-over-drop {
    border-color: rgb(0, 204, 0);
    box-shadow: rgb(85, 85, 0) 0px 0px 5px 5px;
    outline-color: initial;
}
.que.ddimageortext .draghome,
.que.ddimageortext .drag,
form.mform fieldset#id_previewareaheader .droppreview {
    border-color: rgb(140, 130, 115);
}
form.mform fieldset#id_previewareaheader .drag.beingdragged,
.que.ddimageortext .drag.beingdragged,
.que.ddimageortext .draghomes .draghome.beingdragged,
.que.ddimageortext .droparea .draghome.beingdragged {
    box-shadow: rgb(0, 0, 0) 3px 3px 4px;
}
.que.ddimageortext .group1,
form.mform fieldset#id_previewareaheader .group1 {
    background-color: rgb(24, 26, 27);
}
.que.ddimageortext .group2,
form.mform fieldset#id_previewareaheader .group2 {
    background-color: rgb(35, 56, 83);
}
.que.ddimageortext .group3,
form.mform fieldset#id_previewareaheader .group3 {
    background-color: rgb(44, 47, 49);
}
.que.ddimageortext .group4,
form.mform fieldset#id_previewareaheader .group4 {
    background-color: rgb(70, 43, 70);
}
.que.ddimageortext .group5,
form.mform fieldset#id_previewareaheader .group5 {
    background-color: rgb(5, 77, 121);
}
.que.ddimageortext .group6,
form.mform fieldset#id_previewareaheader .group6 {
    background-color: rgb(174, 132, 26);
}
.que.ddimageortext .group7,
form.mform fieldset#id_previewareaheader .group7 {
    background-color: rgb(153, 129, 0);
}
.que.ddimageortext .group8,
form.mform fieldset#id_previewareaheader .group8 {
    background-color: rgb(86, 78, 11); 
}
body#page-question-type-ddimageortext div[id^="fgroup_id_"][id*="drags_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-top-color: rgb(67, 73, 76);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-bottom-color: initial; 
}
body#page-question-type-ddimageortext div[id^="fitem_id_"][id*="dragitem_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-top-color: initial; border-bottom-color: initial; 
}
body#page-question-type-ddimageortext div[id^="fitem_id_"][id*="draglabel_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-bottom-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76);
    border-top-color: initial;
}
.que.ddmarker .dropbackground,
form.mform fieldset#id_previewareaheader .dropbackground {
    border-color: rgb(140, 130, 115);
}
.que.ddmarker .droparea .marker span.markertext,
.que.ddmarker .draghomes .marker span.markertext,
.que.ddmarker div.markertexts span.markertext,
form.mform fieldset#id_previewareaheader div.markertexts span.markertext {
    background-color: rgb(24, 26, 27);
    border-color: rgb(140, 130, 115);
    color: rgb(232, 230, 227);
}
.que.ddmarker div.markertexts span.markertext {
    background-color: rgb(153, 153, 0);
    border-color: rgb(125, 114, 16);
}
.que.ddmarker span.wrongpart {
    background-color: rgb(153, 153, 0);
    border-color: rgb(125, 114, 16);
}
.que.ddmarker .marker.beingdragged span.markertext {
    box-shadow: rgb(0, 0, 0) 3px 3px 4px;
}
.que.ddmarker .dropzone .shape {
    fill: rgb(232, 230, 227);
    stroke: rgb(232, 230, 227);
}
.que.ddmarker .dropzone.color0 .shape {
    fill: rgb(232, 230, 227);
}
.que.ddmarker .dropzone.color1 .shape {
    fill: rgb(164, 192, 217);
}
.que.ddmarker .dropzone.color2 .shape {
    fill: rgb(210, 206, 200);
}
.que.ddmarker .dropzone.color3 .shape {
    fill: rgb(208, 179, 208);
}
.que.ddmarker .dropzone.color4 .shape {
    fill: rgb(122, 201, 249);
}
.que.ddmarker .dropzone.color5 .shape {
    fill: rgb(226, 178, 58);
}
.que.ddmarker .dropzone.color6 .shape {
    fill: rgb(255, 219, 26);
}
.que.ddmarker .dropzone.color7 .shape {
    fill: rgb(239, 228, 129);
}
.que.ddmarker .dropzone .handle {
    fill: rgb(232, 230, 227);
}
.que.ddmarker .dropzone .handle.move {
    stroke: rgb(255, 109, 109);
}
.que.ddmarker .dropzone .handle.edit {
    stroke: rgb(122, 171, 255); 
}
body#page-question-type-ddmarker div[id^="fitem_id_"][id*="hint_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-top-color: rgb(67, 73, 76);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-bottom-color: initial; 
}
body#page-question-type-ddmarker div[id^="fitem_id_"][id*="hintoptions_"], body#page-question-type-ddmarker div[id^="fitem_id_"][id*="hintshownumcorrect_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-top-color: initial; border-bottom-color: initial; 
}
body#page-question-type-ddmarker div[id^="fitem_id_"][id*="hintclearwrong_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-bottom-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76);
    border-top-color: initial;
}
.que.ddwtos .drop.active {
    border-color: rgb(140, 130, 115);
}
.que.ddwtos .draghome {
    background-image: initial;
    background-color: transparent;
    border-color: rgb(140, 130, 115);
}
.que.ddwtos .draghome.beingdragged {
    box-shadow: rgb(0, 0, 0) 3px 3px 4px;
}
.que.ddwtos .drop:focus,
.que.ddwtos .drop.valid-drag-over-drop,
.que.ddwtos .draghome.placed:focus:not(.beingdragged),
.que.ddwtos .draghome.placed.valid-drag-over-drop {
    border-color: rgb(0, 204, 0);
    box-shadow: rgb(85, 85, 0) 0px 0px 5px 5px;
}
.que.ddwtos span.incorrect {
    background-color: rgb(102, 0, 0);
}
.que.ddwtos span.correct {
    background-color: rgb(26, 102, 0);
}
.que.ddwtos .group1 {
    background-color: rgb(24, 26, 27);
}
.que.ddwtos .group2 {
    background-color: rgb(44, 47, 49);
}
.que.ddwtos .group3 {
    background-color: rgb(35, 56, 83);
}
.que.ddwtos .group4 {
    background-color: rgb(70, 43, 70);
}
.que.ddwtos .group5 {
    background-color: rgb(5, 77, 121);
}
.que.ddwtos .group6 {
    background-color: rgb(174, 132, 26);
}
.que.ddwtos .group7 {
    background-color: rgb(153, 129, 0);
}
.que.ddwtos .group8 {
    background-color: rgb(86, 78, 11);
}
.que.essay .qtype_essay_response.readonly {
    background-color: rgb(24, 26, 27); 
}
body#page-question-type-match div[id^="fitem_id_"][id*="subquestions_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-top-color: rgb(67, 73, 76);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-bottom-color: initial; 
}
body#page-question-type-match div[id^="fitem_id_"][id*="subanswers_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-bottom-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76);
    border-top-color: initial;
}
.que.multianswer .feedbackspan {
    background-image: initial;
    background-color: rgb(67, 54, 0);
    box-shadow: rgb(0, 0, 0) 0.5em 0.5em 1em;
}
.que.multianswer .answer .specificfeedback {
    background-image: initial;
    background-color: rgb(67, 54, 0);
}
.que.multianswer .answer .specificfeedback * {
    background-image: initial;
    background-color: rgb(67, 54, 0);
}
.que.multichoice .answer .specificfeedback {
    background-image: initial;
    background-color: rgb(67, 54, 0); 
}
body#page-question-type-multichoice div[id^="fitem_id_"][id*="answer_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-top-color: rgb(67, 73, 76);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-bottom-color: initial; 
}
body#page-question-type-multichoice div[id^="fitem_id_"][id*="fraction_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-top-color: initial; border-bottom-color: initial; 
}
body#page-question-type-multichoice div[id^="fitem_id_"][id*="feedback_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-bottom-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-top-color: initial; 
}
body#page-question-type-numerical div[id^="fgroup_id_"][id*="answeroptions_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-top-color: rgb(67, 73, 76);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-bottom-color: initial; 
}
body#page-question-type-numerical div[id^="fitem_id_"][id*="fraction_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-top-color: initial; border-bottom-color: initial; 
}
body#page-question-type-numerical div[id^="fitem_id_"][id*="feedback_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-bottom-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-top-color: initial; 
}
body#page-question-type-shortanswer div[id^="fgroup_id_"][id*="answeroptions_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-top-color: rgb(67, 73, 76);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-bottom-color: initial; 
}
body#page-question-type-shortanswer div[id^="fitem_id_"][id*="fraction_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76); border-top-color: initial; border-bottom-color: initial; 
}
body#page-question-type-shortanswer div[id^="fitem_id_"][id*="feedback_"] {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-right-color: rgb(67, 73, 76);
    border-bottom-color: rgb(67, 73, 76);
    border-left-color: rgb(67, 73, 76);
    border-top-color: initial;
}
.path-mod-assign table.generaltable table td {
    border-color: initial;
}
.path-mod-assign .submittedlate {
    color: rgb(255, 26, 26);
}
.path-mod-assign td.submissionstatus,
.path-mod-assign div.submissionstatus,
.path-mod-assign a:link.submissionstatus {
    color: rgb(232, 230, 227);
    background-color: rgb(33, 36, 37);
}
.path-mod-assign td.submissionstatusdraft,
.path-mod-assign div.submissionstatusdraft,
.path-mod-assign a:link.submissionstatusdraft {
    color: rgb(232, 230, 227);
    background-color: rgb(50, 50, 17);
}
.path-mod-assign td.submissionstatussubmitted,
.path-mod-assign div.submissionstatussubmitted,
.path-mod-assign a:link.submissionstatussubmitted {
    color: rgb(232, 230, 227);
    background-color: rgb(34, 67, 22);
}
.path-mod-assign td.submissionlocked,
.path-mod-assign div.submissionlocked {
    color: rgb(232, 230, 227);
    background-color: rgb(50, 50, 17);
}
.path-mod-assign td.submissionreopened,
.path-mod-assign div.submissionreopened {
    color: rgb(232, 230, 227);
    background-color: rgb(33, 36, 37);
}
.path-mod-assign td.submissiongraded,
.path-mod-assign div.submissiongraded {
    color: rgb(232, 230, 227);
    background-color: rgb(34, 67, 22);
}
.path-mod-assign td.submissionnotgraded,
.path-mod-assign div.submissionnotgraded {
    color: rgb(232, 230, 227);
    background-color: rgb(33, 36, 37);
}
.path-mod-assign td.latesubmission,
.path-mod-assign a:link.latesubmission,
.path-mod-assign div.latesubmission {
    color: rgb(232, 230, 227);
    background-color: rgb(67, 22, 22);
}
.path-mod-assign td.earlysubmission,
.path-mod-assign div.earlysubmission {
    color: rgb(232, 230, 227);
    background-color: rgb(34, 67, 22);
}
.path-mod-assign td.gradingreminder,
.path-mod-assign div.gradingreminder {
    color: rgb(232, 230, 227);
    background-color: rgb(67, 22, 22);
}
.path-mod-assign .gradingtable tr.selectedrow td {
    background-color: rgb(82, 54, 0);
}
.path-mod-assign .gradingtable tr.unselectedrow td {
    background-color: rgb(24, 26, 27);
}
.path-mod-assign .gradingtable .yui3-menu .yui3-menu-content {
    border-color: initial;
}
.path-mod-assign div.gradingtable tr .quickgrademodified {
    background-color: rgb(112, 56, 0);
}
.path-mod-assign td.submissioneditable {
    color: rgb(255, 26, 26);
}
.path-mod-assign .previousfeedbackwarning {
    color: rgb(205, 201, 194);
}
.path-mod-assign .submissionhistory {
    background-color: rgb(69, 74, 77);
}
.path-mod-assign .submissionhistory .cell.historytitle {
    background-color: rgb(96, 104, 108);
}
.path-mod-assign .submissionhistory .cell {
    background-color: rgb(51, 55, 57);
}
.path-mod-assign.jsenabled .mod-assign-history-link-open {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/expanded");
    background-color: initial;
}
.path-mod-assign.jsenabled .mod-assign-history-link-closed {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/collapsed"); background-color: initial; 
}
.path-mod-assign [data-region="configure-filters"] {
    background-color: rgb(24, 26, 27);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px; 
}
.path-mod-assign [data-region="configure-filters"]::before, .path-mod-assign [data-region="configure-filters"]::after {
    border-right-color: transparent; border-bottom-color: transparent; border-left-color: transparent; border-top-color: initial; 
}
.path-mod-assign [data-region="configure-filters"]::before {
    border-bottom-color: rgba(140, 130, 115, 0.2); 
}
.path-mod-assign [data-region="configure-filters"]::after {
    border-bottom-color: rgb(48, 52, 54); 
}
.path-mod-assign [data-region="grading-navigation-panel"] {
    border-bottom-color: rgb(58, 62, 65); 
}
.path-mod-assign [data-region="user-info"] a {
    text-decoration-color: initial; 
}
.path-mod-assign [data-region="review-panel"] [data-region="review-panel-toggle"] {
    border-right-color: rgb(62, 68, 70);
    border-bottom-color: rgb(62, 68, 70);
    border-left-color: rgb(62, 68, 70);
    border-top-color: initial;
    background-color: rgb(24, 26, 27); 
}
.path-mod-assign [data-region="review-panel"] .pageheader {
    border-right-color: rgb(58, 62, 65); 
}
.path-mod-assign [data-region="review-panel"] .drawingregion {
    border-color: rgb(58, 62, 65); 
}
.path-mod-assign [data-region="grade-panel"] {
    background-color: rgb(30, 32, 33); 
}
.path-mod-assign [data-region="grade-panel"] .submissionsummarytable table.generaltable td {
    background-color: transparent; 
}
.path-mod-assign [data-region="grade-panel"] .submissionsummarytable .generaltable tbody > tr:nth-child(2n+1) > td, .path-mod-assign [data-region="grade-panel"] .submissionsummarytable .generaltable tbody tr:hover > td {
    background-color: transparent; 
}
.path-mod-assign [data-region="grade-panel"] div.submissionsummarytable table tbody tr.lastrow td.c0, .path-mod-assign [data-region="grade-panel"] div.submissionsummarytable table tbody tr.lastrow td.c1 {
    border-bottom-color: rgb(58, 62, 65); 
}
.path-mod-assign .overdue, .path-mod-assign .overduesubmission, .path-mod-assign [data-region="grade-panel"] td.submissionnotgraded, .path-mod-assign [data-region="grade-panel"] div.submissionnotgraded {
    color: rgb(226, 85, 70); background-color: transparent; 
}
.path-mod-assign [data-region="grade-panel"] .mform .fitem.fitem_ftext, .path-mod-assign [data-region="grade-panel"] .mform .fitem.fitem_f, .path-mod-assign [data-region="grade-panel"] .mform .fitem.fitem_feditor, .path-mod-assign [data-region="grade-panel"] .mform .fitem.fitem_fgrading, .path-mod-assign [data-region="grade-panel"] .mform .fitem.fitem_ffilemanager {
    background-color: rgb(24, 26, 27);
    border-color: rgb(58, 62, 65); 
}
.path-mod-assign #page-content [data-region="grade-panel"] .mform:not(.unresponsive) .fitem.fitem_ftext .fitemtitle, .path-mod-assign #page-content [data-region="grade-panel"] .mform:not(.unresponsive) .fitem.fitem_f .fitemtitle, .path-mod-assign #page-content [data-region="grade-panel"] .mform:not(.unresponsive) .fitem.fitem_feditor .fitemtitle, .path-mod-assign #page-content [data-region="grade-panel"] .mform:not(.unresponsive) .fitem.fitem_fgrading .fitemtitle, .path-mod-assign #page-content [data-region="grade-panel"] .mform:not(.unresponsive) .fitem.fitem_ffilemanager .fitemtitle {
    border-bottom-color: rgb(58, 62, 65);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px; 
}
.path-mod-assign #page-content [data-region="grade-panel"] .mform:not(.unresponsive) #fitem_id_grade.fitem .fitemtitle {
    border-bottom-color: initial; box-shadow: none; 
}
.path-mod-assign [data-region="grade-panel"] .gradingform_rubric .criterion .levels {
    background-color: rgb(24, 26, 27); 
}
.path-mod-assign [data-region="grade-panel"] .gradingform_rubric .criterion, .path-mod-assign [data-region="grade-panel"] .gradingform_rubric .criterion.even {
    background-color: transparent; 
}
.path-mod-assign [data-region="grade-panel"] .gradingform_rubric.evaluate .criterion .levels .level:hover {
    background-color: rgb(41, 60, 23); 
}
.path-mod-assign [data-region="grade-panel"] .gradingform_rubric .criterion .levels .level.checked {
    background-color: rgb(41, 60, 23);
    border-top-color: initial;
    border-right-color: initial;
    border-bottom-color: initial;
    border-left-color: rgb(58, 62, 65); 
}
.path-mod-assign [data-region="grade-panel"] .gradingform_rubric .criterion .levels .level .score {
    color: rgb(126, 189, 127); 
}
.path-mod-assign [data-region="grade-panel"] .gradingform_guide .criterion, .path-mod-assign [data-region="grade-panel"] .gradingform_guide .criterion.even {
    background-color: transparent; 
}
.path-mod-assign [data-region="grade-panel"] .showmarkerdesc, .path-mod-assign [data-region="grade-panel"] .showstudentdesc {
    background-color: rgb(30, 32, 33); 
}
.path-mod-assign [data-region="grade-panel"] .fitem.popout {
    border-color: rgba(140, 130, 115, 0.3);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 7px; 
}
.path-mod-assign [data-region="grade-panel"] #id_attemptsettings > legend {
    border-bottom-color: initial; 
}
.path-mod-assign #page-content [data-region="grade-panel"] .mform:not(.unresponsive) #id_attemptsettings .fitem:last-of-type .fitemtitle, .path-mod-assign #page-content [data-region="grade-panel"] .mform:not(.unresponsive) #id_attemptsettings .fitem:last-of-type .felement {
    border-bottom-color: rgb(58, 62, 65); 
}
.path-mod-assign [data-region="grade-actions-panel"] {
    border-top-color: rgb(58, 62, 65); 
}
.path-mod-assign [data-region="overlay"] {
    background-color: rgb(43, 47, 49);
}
@media (max-width: 767px) {
    .path-mod-assign [data-region="assignment-info"] {
        border-bottom-color: rgb(58, 62, 65); 
    }
    .path-mod-assign [data-region="review-panel"] .pageheader {
        border-right-color: initial; 
    }
    .path-mod-assign [data-region="review-panel"] [data-region="review-panel-toggle"] {
        border-color: rgb(62, 68, 70);
        background-color: rgb(24, 26, 27);
    }
}
.path-mod-assign table.generaltable table td.ygtvcell {
    border-color: initial;
}
.path-mod-attendance .attbtn {
    border-color: rgb(72, 78, 81);
}
.path-mod-attendance .userwithoutenrol,
.path-mod-attendance .userwithoutenrol a {
    color: rgb(152, 143, 129);
}
.path-mod-attendance .userwithoutdata,
.path-mod-attendance .userwithoutdata a {
    color: rgb(255, 26, 26);
}
.path-mod-attendance table.userinfobox {
    border-color: rgb(53, 57, 59);
}
.path-mod-attendance table.userinfobox td.left {
    background-color: rgb(34, 36, 38);
}
.path-mod-attendance table.allsessions tr.grouper td {
    background-color: rgb(34, 36, 38);
}
.path-mod-attendance .remarkholder .remarkcontent {
    background-color: rgb(24, 26, 27);
    border-color: rgb(62, 68, 70);
    box-shadow: rgb(53, 57, 59) 3px 3px 5px;
}
.path-mod-attendance .attendancestatus-P {
    color: rgb(114, 255, 114);
}
.path-mod-attendance .attendancestatus-E {
    color: rgb(45, 206, 255);
}
.path-mod-attendance .attendancestatus-L {
    color: rgb(248, 156, 48);
}
.path-mod-attendance .attendancestatus-A {
    color: rgb(255, 26, 26);
}
.path-mod-attendance .attreport .contrast {
    background-color: rgb(36, 39, 40);
}
#page-mod-attendance-report .attendancereporttable .headcol {
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.path-mod-book .navtop img.icon,
.path-mod-book .navbottom img.icon {
    border-color: initial;
}
.path-mod-book .book_toc_indented li {
    list-style-image: initial;
}
.path-mod-book .book_toc_bullets li {
    list-style-image: initial;
}
.path-mod-book .book_toc_numbered li {
    list-style-image: initial;
}
.path-mod-book .book_toc_none li {
    list-style-image: initial;
}
.path-mod-chat .yui-layout-unit-top {
    background-image: initial;
    background-color: rgb(82, 59, 0);
}
.path-mod-chat .yui-layout-unit-right {
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.path-mod-chat .yui-layout-unit-bottom {
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.path-mod-chat .yui-layout .yui-layout-hd {
    border-color: initial;
}
.path-mod-chat .yui-layout .yui-layout-unit div.yui-layout-bd {
    border-color: initial;
    background-image: initial;
    background-color: transparent;
}
.path-mod-chat .yui-layout .yui-layout-unit div.yui-layout-unit-right {
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
#page-mod-data-view img.list_picture {
    border-color: initial;
}
.mod-data-default-template.notapproved {
    background-color: rgb(82, 0, 0);
}
.path-mod-feedback div.feedback_is_dependent {
    background-image: initial;
    background-color: rgb(43, 47, 49);
}
.path-mod-feedback span.feedback_depend {
    color: rgb(255, 26, 26);
}
.path-mod-feedback hr.feedback_pagebreak {
    color: rgb(178, 172, 162);
    background-color: rgb(72, 78, 81);
    border-color: initial;
}
.path-mod-feedback table.analysis {
    border-top-color: rgb(72, 78, 81);
}
.path-mod-feedback table.analysis tr:hover {
    background-image: initial;
    background-color: rgb(30, 32, 33);
}
.forumpost {
    border-color: rgb(140, 130, 115);
}
.forumpost.unread .row.header,
.path-course-view .unread,
span.unread {
    background-color: rgb(54, 54, 0);
}
.forumpost.unread .row.header {
    border-bottom-color: rgb(58, 62, 65);
}
.path-mod-forum :target > .forumpost::before {
    background-image: initial;
    background-color: rgb(0, 90, 134);
}
.path-mod-forum .discussion-nav ul {
    list-style-image: initial;
}
.path-mod-forum .preload-subscribe {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/mod_forum/1656028964/t/subscribed");
    background-color: initial;
}
.path-mod-forum .preload-unsubscribe {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/mod_forum/1656028964/t/unsubscribed");
    background-color: initial;
}
.path-mod-forum article .nav .nav-link + .nav-link {
    border-left-color: rgb(58, 62, 65);
}
.forum-post-container:focus {
    outline-color: initial;
}
.post-actions .btn:focus {
    outline-color: rgb(186, 123, 0);
}
.forum-post-container:focus > .focus-target {
    outline-color: rgb(186, 123, 0);
}
.hr-sect::before,
.hr-sect::after {
    background-image: initial;
    background-color: rgba(0, 0, 0, 0.35);
}
.path-mod-glossary .printicon {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/print");
    background-color: transparent;
}
#page-mod-googlemeet-mod #generateurlroomLoading {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/mod_googlemeet/1656028964/i/processing64");
    background-color: initial;
}
#googlemeetcontentlog {
    color: rgb(255, 97, 103);
}
#googlemeet_upcoming_events span + span {
    border-left-color: rgb(77, 83, 86);
}
#googlemeet_recordings_table table tr.warning {
    color: rgb(178, 172, 162);
}
#googlemeet_syncimg {
    background-color: rgb(24, 26, 27);
}
#googlemeet_recordings #syncbutton {
    background-image: initial;
    background-color: rgb(30, 32, 33);
    border-color: rgb(56, 61, 63);
}
#googlemeet_recordings_table .dt-container .dt-loading {
    background-image: linear-gradient(to right,
    rgba(24, 26, 27, 0) 0px,
    rgba(24, 26, 27, 0.9) 25%,
    rgba(24, 26, 27, 0.9) 75%,
    rgba(24, 26, 27, 0) 100%);
    background-color: initial;
}
#googlemeet_recordings_table .dt-pagination ul li {
    list-style-image: initial;
}
#googlemeet_recordings_table .dt-pagination a,
#googlemeet_recordings_table .dt-pagination span {
    border-color: transparent;
    text-decoration-color: initial;
    color: inherit;
}
#googlemeet_recordings_table .dt-pagination a:hover {
    background-color: rgb(45, 49, 51);
}
#googlemeet_recordings_table .dt-pagination .active a,
#googlemeet_recordings_table .dt-pagination .active a:focus,
#googlemeet_recordings_table .dt-pagination .active a:hover {
    background-color: rgb(45, 49, 51);
}
#googlemeet_recordings_table .dt-table th.dt-sorter::before,
#googlemeet_recordings_table .dt-table th.dt-sorter::after {
    border-left-color: transparent;
    border-right-color: transparent;
}
#googlemeet_recordings_table .dt-table th.dt-sorter::before {
    border-top-color: rgb(140, 130, 115);
}
#googlemeet_recordings_table .dt-table th.dt-sorter::after {
    border-bottom-color: rgb(140, 130, 115);
    border-top-color: transparent;
}
#page-mod-imscp-view .yui-layout-hd {
    background-image: none;
    background-color: rgb(43, 47, 49);
}
#page-mod-imscp-view .yui-layout-hd h2 {
    color: rgb(232, 230, 227);
}
.path-mod-lti .late {
    color: rgb(255, 26, 26);
}
#choice-list {
    list-style-image: initial;
    border-bottom-color: rgb(56, 61, 63);
}
#external-registration-container iframe {
    border-color: rgb(55, 60, 62);
}
.tool-card {
    border-color: rgb(55, 60, 62);
}
.tool-card:hover,
.tool-card:focus {
    border-color: rgb(0, 129, 194);
    box-shadow: rgba(0, 84, 171, 0.25) 0px 1px 4px;
}
.tool-card .overlay-container {
    background-color: rgba(24, 26, 27, 0.8);
}
.tool-card.announcement.capabilities .overlay-container {
    background-color: rgb(24, 26, 27);
}
.tool-card-header {
    background-color: rgb(30, 32, 33);
}
.tool-card-body {
    border-top-color: rgb(55, 60, 62); 
}
.tool-card [contenteditable="true"] {
    border-color: transparent; 
}
.tool-card [contenteditable="true"]:hover {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px inset;
    background-color: rgb(24, 26, 27);
    border-color: rgb(56, 61, 63); 
}
.tool-card [contenteditable="true"]:focus {
    outline-color: initial;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px inset,
    rgba(16, 91, 150, 0.6) 0px 0px 8px;
    background-color: rgb(24, 26, 27);
    border-color: rgba(16, 87, 144, 0.8);
}
#contentframe {
    border-color: rgb(58, 62, 65);
}
#page-mod-questionnaire-questions .qcontainer .qnums {
    color: rgb(152, 143, 129);
}
#page-mod-questionnaire-questions .moving {
    border-color: rgb(217, 0, 0);
}
td.selected {
    background-color: rgb(33, 36, 37);
    border-color: rgb(84, 91, 94);
}
#page-mod-questionnaire-myreport div.respdate {
    border-bottom-color: rgb(84, 91, 94);
}
#page-mod-questionnaire-complete .message,
#page-mod-questionnaire-complete .notifyproblem,
#page-mod-questionnaire-preview .message,
#page-mod-questionnaire-preview .notifyproblem,
#page-mod-questionnaire-complete .thankbody,
#page-mod-questionnaire-complete .thankhead {
    background-color: rgb(24, 26, 27);
}
#page-mod-questionnaire-complete .notifyproblem,
#page-mod-questionnaire-preview .notifyproblem {
    border-color: rgb(179, 0, 0);
}
#page-mod-questionnaire-complete .message,
#page-mod-questionnaire-preview .message,
#page-mod-questionnaire-complete .thankbody,
#page-mod-questionnaire-complete .thankhead {
    border-color: rgb(0, 0, 179);
}
.surveyPage {
    background-color: rgb(34, 36, 38);
    border-bottom-color: rgb(140, 130, 115);
}
#page-mod-questionnaire-complete .c0,
#page-mod-questionnaire-preview .c0,
#page-mod-questionnaire-print .c0,
#page-mod-questionnaire-report .individual .c0,
#page-mod-questionnaire-myreport .individual .c0 {
    background-color: rgb(27, 29, 30);
    border-color: rgb(66, 71, 74);
}
#page-mod-questionnaire-complete .raterow:hover,
#page-mod-questionnaire-preview .raterow:hover {
    background-color: rgb(33, 36, 37);
}
#page-mod-questionnaire-complete td.raterow:hover,
#page-mod-questionnaire-preview td.raterow:hover {
    border-color: rgb(0, 0, 217);
}
#page-mod-questionnaire-complete td.notanswered,
#page-mod-questionnaire-preview td.notanswered {
    background-color: rgb(27, 29, 30);
}
#page-mod-questionnaire-complete td.notcompleted,
#page-mod-questionnaire-preview td.notcompleted {
    border-color: rgb(179, 0, 0);
    background-color: rgb(27, 29, 30);
}
#page-mod-questionnaire-complete .c1,
#page-mod-questionnaire-preview .c1,
#page-mod-questionnaire-print .c1,
#page-mod-questionnaire-report .individual .c1,
#page-mod-questionnaire-myreport .individual .c1 {
    background-color: rgb(34, 36, 38);
    border-color: rgb(66, 71, 74);
}
#page-mod-questionnaire-myreport .individualresp,
#page-mod-questionnaire-preview .individualresp,
#page-mod-questionnaire-print .individualresp {
    border-color: rgb(66, 71, 74);
}
#page-mod-questionnaire-complete .questionnaire-progressbar {
    border-color: rgb(57, 62, 64);
}
#page-mod-questionnaire-complete .questionnaire-progressbar-progress {
    background-color: rgb(14, 95, 167);
}
.qn-question {
    background-color: rgb(33, 36, 37);
}
.unselected {
    color: rgb(152, 143, 129);
}
.respondentsnavbar {
    background-color: rgb(31, 34, 35);
}
#page-mod-questionnaire-questions .qn-container {
    border-color: rgb(84, 91, 94);
}
.qn-info {
    background-image: initial;
    background-color: rgb(34, 36, 38);
}
.qdepend {
    color: rgb(255, 26, 26);
}
.qdepend-or {
    color: rgb(255, 174, 26);
}
.hidedependquestion {
    color: rgb(255, 26, 26);
}
#page-mod-questionnaire-fbsections .c0,
#page-mod-questionnaire-fbsections .c1 {
    border-color: rgb(66, 71, 74);
}
#page-mod-questionnaire-fbsections .c0 {
    background-color: rgb(27, 29, 30);
}
#page-mod-questionnaire-fbsections .c1 {
    background-color: rgb(34, 36, 38);
}
#page-mod-questionnaire-report .generaltable.questionnairereport td {
    border-color: rgb(66, 71, 74);
}
#page-mod-quiz-attempt .mod_quiz-blocked_question_warning .que .formulation,
#page-mod-quiz-review .mod_quiz-blocked_question_warning .que .formulation {
    background-image: initial;
    background-color: rgb(34, 36, 38);
    border-color: rgb(58, 63, 65);
}
#page-mod-quiz-attempt #connection-ok,
#page-mod-quiz-attempt #connection-error {
    color: rgb(178, 172, 162);
    box-shadow: rgb(77, 83, 86) 5px 5px 20px 0px;
}
#page-mod-quiz-attempt #connection-error {
    background-color: rgb(82, 0, 0);
}
#page-mod-quiz-attempt #connection-ok {
    background-color: rgb(40, 92, 0);
}
#quiznojswarning {
    color: rgb(255, 26, 26);
}
.path-mod-quiz .qnbutton {
    border-color: rgb(67, 73, 76);
    background-image: initial;
    background-color: rgb(43, 47, 49);
    text-decoration-color: initial;
}
.path-mod-quiz .qnbutton:visited:hover,
.path-mod-quiz .qnbutton:link:hover {
    text-decoration-color: initial;
}
.path-mod-quiz .qnbutton.thispage {
    border-color: rgb(106, 99, 87);
}
.path-mod-quiz .qnbutton.thispage .thispageholder {
    border-color: rgb(106, 99, 87);
}
.path-mod-quiz .qnbutton.flagged .trafficlight {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNCIgaGVpZ2h0PSI0Ij48ZGVmcz48ZmlsdGVyIGlkPSJkYXJrcmVhZGVyLWltYWdlLWZpbHRlciI+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAuMjQ5IC0wLjYxNCAtMC42NzIgMC4wMDAgMS4wMzUgLTAuNjQ2IDAuMjg4IC0wLjY2NCAwLjAwMCAxLjAyMCAtMC42MzYgLTAuNjA5IDAuMjUwIDAuMDAwIDAuOTk0IDAuMDAwIDAuMDAwIDAuMDAwIDEuMDAwIDAuMDAwIiAvPjwvZmlsdGVyPjwvZGVmcz48aW1hZ2Ugd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsdGVyPSJ1cmwoI2RhcmtyZWFkZXItaW1hZ2UtZmlsdGVyKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFFQVFNQUFBQ1RQd3c5QUFBQUJsQk1WRVczeU1yQUFBRHprcUU2QUFBQUFYUlNUbE1BUU9iWVpnQUFBQTFKUkVGVWVBRmorTUQ4QXdRQkQzUUQ0aHFnNGhNQUFBQUFTVVZPUks1Q1lJST0iIC8+PC9zdmc+");
    background-color: initial;
}
.path-mod-quiz .qnbutton.blocked,
.path-mod-quiz .qnbutton.notyetanswered,
.path-mod-quiz .qnbutton.requiresgrading,
.path-mod-quiz .qnbutton.invalidanswer {
    background-color: rgb(24, 26, 27);
}
.path-mod-quiz .qnbutton.correct {
    background-color: rgb(20, 82, 0);
}
.path-mod-quiz .qnbutton.correct .trafficlight {
    border-bottom-color: rgb(0, 214, 0);
}
.path-mod-quiz .qnbutton.partiallycorrect {
    background-color: rgb(77, 77, 0);
}
.path-mod-quiz .qnbutton.notanswered,
.path-mod-quiz .qnbutton.incorrect {
    background-color: rgb(82, 0, 0);
}
.path-mod-quiz .qnbutton.blocked {
    color: rgb(168, 160, 149);
}
.path-mod-quiz .qnbutton.notanswered .trafficlight,
.path-mod-quiz .qnbutton.incorrect .trafficlight {
    border-top-color: rgb(214, 0, 0);
}
#page-mod-quiz-view table.quizattemptsummary tr.bestrow td {
    border-color: rgb(22, 90, 104);
    background-color: rgb(14, 48, 65);
}
table.quizattemptsummary .noreviewmessage {
    color: rgb(152, 143, 129);
}
body.path-mod-quiz .gradedattempt,
body.path-mod-quiz table tbody tr.gradedattempt > td {
    border-color: rgb(22, 90, 104);
    background-color: rgb(14, 48, 65);
}
table.quizreviewsummary th.cell {
    background-image: initial;
    background-color: rgb(32, 35, 37);
}
table.quizreviewsummary td.cell {
    background-image: initial;
    background-color: rgb(27, 29, 30);
}
#page-mod-quiz-report .dubious {
    background-color: rgb(82, 0, 0);
}
#page-mod-quiz-report .highlight {
    border-color: rgb(22, 90, 104);
    background-color: rgb(14, 48, 65);
}
#page-mod-quiz-report .negcovar {
    border-color: rgb(121, 0, 21);
}
#page-mod-quiz-report tr.lastrowforattempt {
    border-bottom-color: rgb(60, 65, 68);
}
#page-mod-quiz-report tr.quiz_statistics-summaryrow td.cell {
    border-top-color: initial;
}
#page-mod-quiz-edit .statusdisplay {
    background-color: rgb(61, 61, 0);
}
#page-mod-quiz-edit .slotnumber {
    background-color: rgb(49, 53, 55);
}
#page-mod-quiz-edit .section-heading .instancesectioncontainer h3 {
    color: rgb(168, 160, 149);
}
#page-mod-quiz-edit ul.slots li.section {
    border-color: initial;
}
#page-mod-quiz-edit ul.slots li.section .content {
    background-color: rgb(27, 29, 30);
}
#page-mod-quiz-edit ul.slots li.section {
    list-style-image: initial;
}
#page-mod-quiz-edit ul.slots li.section li.activity {
    background-image: initial;
    background-color: rgb(38, 41, 43);
}
#page-mod-quiz-edit ul.slots li.section li.activity.page {
    background-image: initial;
    background-color: transparent;
}
#page-mod-quiz-edit ul.slots li.section li.activity .instancemaxmarkcontainer {
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
#page-mod-quiz-edit ul.slots li.section li.activity .instancemaxmarkcontainer.infoitem {
    background-image: initial;
    background-color: transparent;
}
#page-mod-quiz-edit #categoryquestions .questionname,
#page-mod-quiz-edit ul.slots li.activity div.activityinstance .questionname {
    color: rgb(178, 172, 162);
}
#page-mod-quiz-edit ul.slots li.activity div.activityinstance .questiontext {
    color: rgb(178, 172, 162);
}
#page-mod-quiz-edit .section .activity .actions {
    background-image: initial;
    background-color: rgb(38, 41, 43);
}
#categoryquestions .header {
    border-color: initial;
}
.mod_quiz_qbank_dialogue .questionbankloading {
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
#page-mod-quiz-edit div.container div.generalbox {
    border-color: initial;
}
#page-mod-quiz-edit .paging {
    background-color: rgb(43, 47, 49);
}
#page-mod-quiz-edit .questionsortoptions {
    background-color: rgb(43, 47, 49);
}
#page-mod-quiz-edit div.questionbank .categoryquestionscontainer,
.questionbank .categorysortopotionscontainer,
.questionbank .categorypagingbarcontainer,
.questionbank .categoryselectallcontainer {
    background-color: rgb(24, 26, 27);
}
#page-mod-quiz-edit ul.slots li.section ul.section {
    list-style-image: initial;
}
.path-mod-resource .resourcedetails {
    color: rgb(178, 172, 162);
}
.resourcelinkdetails {
    color: rgb(178, 172, 162);
}
#page-mod-scorm-player #scormpage .scoframe {
    border-color: initial;
}
#page-mod-scorm-player #scormpage #scorm_object {
    border-color: initial;
}
#page-mod-scorm-player #scormpage #scorm_tree {
    border-right-color: rgb(0, 40, 107);
}
#page-mod-scorm-view .exceededmaxattempts {
    color: rgb(255, 61, 61);
}
#page-mod-scorm-player #altfinishlink {
    border-color: initial;
}
#page-mod-scorm-player #scormmode {
    border-color: initial;
}
.path-mod-survey .surveytable .whitecell {
    background-color: rgb(24, 26, 27);
}
.wiki_previewbox {
    border-color: rgb(0, 0, 179);
}
.wiki_warning {
    color: rgb(255, 26, 26);
}
.emptycomments {
    color: rgb(255, 26, 26);
}
.wiki-toc {
    border-color: rgb(67, 73, 76);
    background-image: initial;
    background-color: rgb(34, 36, 38);
}
.wiki-toc-title {
    color: rgb(168, 160, 149);
}
.wiki-upload-section {
    border-color: rgb(53, 57, 59);
}
.wiki_modifieduser img {
    border-color: rgb(140, 130, 115);
}
.wiki_histnewdate {
    border-top-color: rgb(84, 91, 94);
}
.ouw_deleted {
    background-image: initial;
    background-color: rgb(77, 77, 0);
    color: rgb(255, 26, 26);
    text-decoration-color: initial;
}
.ouw_added {
    background-image: initial;
    background-color: rgb(20, 82, 0);
    color: rgb(255, 26, 26);
}
a.wiki_newentry:link,
a.wiki_newentry:visited {
    color: rgb(255, 26, 26);
}
.wiki_newentry a {
    color: rgb(255, 26, 26);
}
.notunderlined {
    text-decoration-color: initial;
}
#wiki_printable_content a {
    color: rgb(232, 230, 227);
}
#wiki_printable_title {
    text-decoration-color: initial;
}
.wiki_grayline {
    color: rgb(152, 143, 129);
}
.wiki-diff-container .wiki-diff-heading,
.wiki-diff-container .no-overflow {
    border-color: rgb(58, 62, 65);
}
.path-mod-wiki .printicon {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/print");
    background-color: transparent;
}
.path-mod-workshop .submission-summary .userdate {
    color: rgb(200, 195, 188);
}
.path-mod-workshop .submission-full {
    border-color: rgb(58, 62, 65);
}
.path-mod-workshop .submission-full .header {
    background-color: rgb(43, 47, 49);
}
.path-mod-workshop .submission-full .header .userdate.modified {
    border-left-color: rgb(140, 130, 115);
}
.path-mod-workshop .submission-full .header .userdate {
    color: rgb(200, 195, 188);
}
.path-mod-workshop .submission-full .attachments .images div {
    border-color: rgb(58, 62, 65);
}
.path-mod-workshop .message.ok {
    color: rgb(179, 220, 128);
    background-color: rgb(51, 58, 14);
}
.path-mod-workshop .message.error {
    color: rgb(253, 50, 79);
    background-color: rgb(77, 0, 11);
}
.path-mod-workshop .message.info {
    color: rgb(108, 181, 236);
    background-color: rgb(37, 40, 41);
}
.path-mod-workshop .allocation-init-results .ok {
    color: rgb(179, 220, 128);
    background-color: rgb(51, 58, 14);
}
.path-mod-workshop .allocation-init-results .error {
    color: rgb(253, 50, 79);
    background-color: rgb(77, 0, 11);
}
.path-mod-workshop .allocation-init-results .info {
    color: rgb(108, 181, 236);
    background-color: rgb(37, 40, 41);
}
.path-mod-workshop .allocation-init-results .debug {
    color: rgb(232, 230, 227);
    background-color: rgb(43, 47, 49);
}
.path-mod-workshop .userplan {
    border-color: rgb(58, 62, 65);
}
.path-mod-workshop .userplan dt {
    color: rgb(168, 160, 149);
    border-bottom-color: rgb(58, 62, 65);
}
.path-mod-workshop .userplan dt.active {
    color: rgb(232, 230, 227);
    border-right-color: rgb(58, 62, 65);
    border-left-color: rgb(58, 62, 65);
    border-bottom-color: initial;
    border-top-color: initial;
    background-image: initial;
    background-color: rgb(51, 58, 14);
}
@media only screen and (max-width: 768px) {
    .path-mod-workshop .userplan {
        border-right-color: initial;
        border-top-color: initial;
    }
    .path-mod-workshop .userplan dl {
        border-right-color: initial;
    }
    .path-mod-workshop .userplan dt {
        border-bottom-color: initial;
        border-top-color: rgb(58, 62, 65);
    }
    .path-mod-workshop .userplan dt.active {
        border-color: initial;
    }
    .path-mod-workshop .userplan dd {
        border-left-color: rgb(58, 62, 65);
        border-top-color: rgb(58, 62, 65);
    }
}
@media only screen and (max-width: 420px) {
    .path-mod-workshop .userplan {
        border-bottom-color: initial;
    }
    .path-mod-workshop .userplan dt {
        border-bottom-color: initial;
        border-right-color: rgb(58, 62, 65);
        border-left-color: rgb(58, 62, 65);
    }
    .path-mod-workshop .userplan dd {
        border-left-color: rgb(58, 62, 65);
        border-top-color: rgb(58, 62, 65);
        border-bottom-color: rgb(58, 62, 65);
    }
}
.path-mod-workshop .userplan dd {
    border-right-color: rgb(58, 62, 65);
    background-color: rgb(30, 32, 33);
}
.path-mod-workshop .userplan dd,
.path-mod-workshop .userplan dd a,
.path-mod-workshop .userplan dd a:link,
.path-mod-workshop .userplan dd a:hover,
.path-mod-workshop .userplan dd a:visited,
.path-mod-workshop .userplan dd a:active {
    color: rgb(168, 160, 149);
}
.path-mod-workshop .userplan dd.active,
.path-mod-workshop .userplan dd.active a,
.path-mod-workshop .userplan dd.active a:link,
.path-mod-workshop .userplan dd.active a:hover,
.path-mod-workshop .userplan dd.active a:visited,
.path-mod-workshop .userplan dd.active a:active {
    color: rgb(232, 230, 227);
}
.path-mod-workshop .userplan dd.lastcol {
    border-right-color: initial;
}
.path-mod-workshop .userplan dd.active {
    border-left-color: rgb(58, 62, 65);
    border-right-color: rgb(58, 62, 65);
    background-color: rgb(51, 58, 14);
}
.path-mod-workshop .userplan dd.phasetasks li {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/mod_workshop/1656028964/userplan/task-todo");
}
.path-mod-workshop .userplan dd.phasetasks li.completed {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/mod_workshop/1656028964/userplan/task-done");
}
.path-mod-workshop .userplan dd.phasetasks li.fail {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/mod_workshop/1656028964/userplan/task-fail");
}
.path-mod-workshop .userplan dd.phasetasks li.info {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/mod_workshop/1656028964/userplan/task-info");
}
.path-mod-workshop .userplan dd.phasetasks .tasks {
    list-style-image: initial;
}
.path-mod-workshop .assessment-full {
    border-color: rgb(58, 62, 65);
}
.path-mod-workshop .assessment-full .header {
    background-color: rgb(43, 47, 49); 
}
.path-mod-workshop .assessment-summary.graded .singlebutton input[type="submit"], .path-mod-workshop .example-summary.graded .singlebutton input[type="submit"] {
    background-color: rgb(51, 58, 14); 
}
.path-mod-workshop .assessment-summary.notgraded .singlebutton input[type="submit"], .path-mod-workshop .example-summary.notgraded .singlebutton input[type="submit"] {
    background-color: rgb(77, 0, 11);
}
.path-mod-workshop .assessment-full .overallfeedback .attachments .images div {
    border-color: rgb(58, 62, 65);
}
.path-mod-workshop .grading-report {
    border-color: rgb(58, 62, 65);
}
.path-mod-workshop .grading-report del {
    color: rgb(255, 26, 26);
    text-decoration-color: initial;
}
.path-mod-workshop .grading-report ins {
    color: rgb(114, 255, 114);
    text-decoration-color: initial;
}
.path-mod-workshop .grading-report td {
    border-color: rgb(58, 62, 65);
}
.path-mod-workshop .grading-report tr.published td.submission {
    background-color: rgb(37, 40, 41);
}
.path-mod-workshop .grading-report .givengrade.null .user,
.path-mod-workshop .grading-report .receivedgrade.null .user {
    color: rgb(255, 37, 37);
}
.path-mod-workshop #workshop-viewlet-yourgrades .finalgrades .grade {
    border-color: rgb(58, 62, 65);
}
.path-mod-workshop #workshop-viewlet-yourgrades .finalgrades .grade.submissiongrade {
    background-color: rgb(37, 40, 41);
}
.path-mod-workshop #workshop-viewlet-yourgrades .finalgrades .grade.assessmentgrade {
    background-color: rgb(34, 36, 38);
}
.path-mod-workshop .feedback {
    border-color: rgb(58, 62, 65);
}
.path-mod-workshop .feedback .header {
    background-color: rgb(43, 47, 49);
}
.path-mod-workshop .nothingfound {
    color: rgb(255, 88, 26);
}
.lenauth-buttons a {
    text-decoration-color: initial;
}
.lenauth-buttons a:hover,
.lenauth-buttons a:active,
.lenauth-buttons a:focus {
    text-decoration-color: initial;
}
.lenauth-smooth.lenauth-smooth-button li a:active .link_act {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px inset;
}
.lenauth-smooth.lenauth-smooth-button li a:active .img_act {
    border-color: initial;
}
.lenauth-smooth-button li {
    background-color: rgb(34, 36, 38);
    background-image: -webkit-linear-gradient(top,
    rgb(34, 36, 38),
    rgb(53, 57, 59));
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px;
}
.lenauth-smooth-classic li {
    background-color: rgb(64, 69, 72);
}
.lenauth-smooth-classic li:hover {
    background-color: rgba(47, 51, 53, 0.5);
}
.lenauth-smooth-button .link_act {
    border-color: initial;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0.4px 1px;
}
.lenauth-smooth-classic .link_act {
    border-color: initial;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0.5px 1px;
}
.lenauth-smooth-button li .img_act {
    border-top-color: rgba(48, 52, 54, 0.5);
}
.lenauth-smooth-button .lenauth-smooth-button-facebook .link_act {
    background-color: rgb(48, 72, 122);
    background-image: -webkit-linear-gradient(top,
    rgb(54, 94, 149),
    rgb(48, 72, 122));
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-facebook .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-facebook {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-facebook .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-facebook {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-facebook .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-facebook {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-classic .lenauth-smooth-button-facebook .link_act {
    background-color: rgb(48, 72, 122);
}
.lenauth-smooth-classic.w64 .lenauth-smooth-button-facebook,
.lenauth-smooth-classic.w64 .lenauth-smooth-button-facebook .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-classic.w48 .lenauth-smooth-button-facebook,
.lenauth-smooth-classic.w48 .lenauth-smooth-button-facebook .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-classic.w32 .lenauth-smooth-button-facebook,
.lenauth-smooth-classic.w32 .lenauth-smooth-button-facebook .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button .lenauth-smooth-button-googleplus .link_act {
    background-color: rgb(169, 41, 26);
    background-image: -webkit-linear-gradient(top,
    rgb(169, 41, 26),
    rgb(133, 32, 21));
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-googleplus .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-googleplus {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-googleplus .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-googleplus {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-googleplus .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-googleplus {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-classic .lenauth-smooth-button-googleplus .link_act {
    background-color: rgb(133, 32, 21);
}
.lenauth-smooth-classic.w64 .lenauth-smooth-button-googleplus,
.lenauth-smooth-classic.w64 .lenauth-smooth-button-googleplus .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-classic.w48 .lenauth-smooth-button-googleplus,
.lenauth-smooth-classic.w48 .lenauth-smooth-button-googleplus .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-classic.w32 .lenauth-smooth-button-googleplus,
.lenauth-smooth-classic.w32 .lenauth-smooth-button-googleplus .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button .lenauth-smooth-button-yahoo .link_act {
    background-color: rgb(132, 0, 165);
    background-image: -webkit-linear-gradient(top,
    rgb(132, 0, 165),
    rgb(98, 0, 122));
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-yahoo .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-yahoo {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-yahoo .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-yahoo {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-yahoo .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-yahoo {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-classic .lenauth-smooth-button-yahoo .link_act {
    background-color: rgb(98, 0, 122);
}
.lenauth-smooth-classic.w64 .lenauth-smooth-button-yahoo,
.lenauth-smooth-classic.w64 .lenauth-smooth-button-yahoo .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-classic.w48 .lenauth-smooth-button-yahoo,
.lenauth-smooth-classic.w48 .lenauth-smooth-button-yahoo .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-classic.w32 .lenauth-smooth-button-yahoo,
.lenauth-smooth-classic.w32 .lenauth-smooth-button-yahoo .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button .lenauth-smooth-button-twitter-1 .link_act {
    background-color: rgb(0, 133, 185);
    background-image: -webkit-linear-gradient(top,
    rgb(0, 133, 185),
    rgb(0, 136, 187));
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-twitter-1 .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-twitter-1 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-twitter-1 .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-twitter-1 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-twitter-1 .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-twitter-1 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-classic .lenauth-smooth-button-twitter-1 .link_act {
    background-color: rgb(0, 136, 187);
}
.lenauth-smooth-classic .lenauth-smooth-button-twitter-1,
.lenauth-smooth-classic .lenauth-smooth-button-twitter-1 .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-classic.w48 .lenauth-smooth-button-twitter-1,
.lenauth-smooth-classic.w48 .lenauth-smooth-button-twitter-1 .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-classic.w32 .lenauth-smooth-button-twitter-1,
.lenauth-smooth-classic.w32 .lenauth-smooth-button-twitter-1 .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button .lenauth-smooth-button-twitter-2 .link_act {
    background-color: rgb(0, 133, 185);
    background-image: -webkit-linear-gradient(top,
    rgb(0, 133, 185),
    rgb(0, 136, 187));
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-twitter-2 .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-twitter-2 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-twitter-2 .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-twitter-2 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-twitter-2 .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-twitter-2 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-classic .lenauth-smooth-button-twitter-2 .link_act {
    background-color: rgb(0, 136, 187);
}
.lenauth-smooth-classic .lenauth-smooth-button-twitter-2,
.lenauth-smooth-classic .lenauth-smooth-button-twitter-2 .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-classic.w48 .lenauth-smooth-button-twitter-2,
.lenauth-smooth-classic.w48 .lenauth-smooth-button-twitter-2 .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-classic.w32 .lenauth-smooth-button-twitter-2,
.lenauth-smooth-classic.w32 .lenauth-smooth-button-twitter-2 .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button .lenauth-smooth-button-vk-en .link_act,
.lenauth-smooth-button .lenauth-smooth-button-vk-ru .link_act {
    background-color: rgb(63, 90, 118);
    background-image: -webkit-linear-gradient(top,
    rgb(63, 90, 118),
    rgb(71, 99, 128));
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-vk-en .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-vk-en {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-vk-en .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-vk-en {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-vk-en .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-vk-en {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-vk-ru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-vk-ru {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-vk-ru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-vk-ru {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-vk-ru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-vk-ru {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-classic .lenauth-smooth-button-vk-en .link_act,
.lenauth-smooth-classic .lenauth-smooth-button-vk-ru .link_act {
    background-color: rgb(63, 90, 118);
}
.lenauth-smooth-classic.w64 .lenauth-smooth-button-vk-en,
.lenauth-smooth-classic.w64 .lenauth-smooth-button-vk-en .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-classic.w48 .lenauth-smooth-button-vk-en,
.lenauth-smooth-classic.w48 .lenauth-smooth-button-vk-en .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-classic.w32 .lenauth-smooth-button-vk-en,
.lenauth-smooth-classic.w32 .lenauth-smooth-button-vk-en .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-classic.w64 .lenauth-smooth-button-vk-ru,
.lenauth-smooth-classic.w64 .lenauth-smooth-button-vk-ru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-classic.w48 .lenauth-smooth-button-vk-ru,
.lenauth-smooth-classic.w48 .lenauth-smooth-button-vk-ru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-classic.w32 .lenauth-smooth-button-vk-ru,
.lenauth-smooth-classic.w32 .lenauth-smooth-button-vk-ru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button .lenauth-smooth-button-yandex-ru .link_act,
.lenauth-smooth-button .lenauth-smooth-button-yandex-en .link_act {
    background-color: rgb(173, 0, 0);
    background-image: -webkit-linear-gradient(top,
    rgb(173, 0, 0),
    rgb(204, 0, 0));
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-yandex-ru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-yandex-ru {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-yandex-ru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-yandex-ru {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-yandex-ru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-yandex-ru {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-yandex-en .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-yandex-en {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-yandex-en .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-yandex-en {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-yandex-en .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-yandex-en {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-classic .lenauth-smooth-button-yandex-en .link_act,
.lenauth-smooth-classic .lenauth-smooth-button-yandex-ru .link_act {
    background-color: rgb(173, 0, 0);
}
.lenauth-smooth-classic.w64 .lenauth-smooth-button-yandex-ru,
.lenauth-smooth-classic.w64 .lenauth-smooth-button-yandex-ru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-classic.w48 .lenauth-smooth-button-yandex-ru,
.lenauth-smooth-classic.w48 .lenauth-smooth-button-yandex-ru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-classic.w32 .lenauth-smooth-button-yandex-ru,
.lenauth-smooth-classic.w32 .lenauth-smooth-button-yandex-ru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-classic.w64 .lenauth-smooth-button-yandex-en,
.lenauth-smooth-classic.w64 .lenauth-smooth-button-yandex-en .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-classic.w48 .lenauth-smooth-button-yandex-en,
.lenauth-smooth-classic.w48 .lenauth-smooth-button-yandex-en .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-classic.w32 .lenauth-smooth-button-yandex-en,
.lenauth-smooth-classic.w32 .lenauth-smooth-button-yandex-en .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button .lenauth-smooth-button-mailru .link_act {
    background-color: rgb(18, 113, 181);
    background-image: -webkit-linear-gradient(top,
    rgb(63, 90, 118),
    rgb(18, 113, 181));
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-mailru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w64 .lenauth-smooth-button-mailru {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-mailru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w48 .lenauth-smooth-button-mailru {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-mailru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-button.w32 .lenauth-smooth-button-mailru {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-smooth-classic .lenauth-smooth-button-mailru .link_act {
    background-color: rgb(18, 113, 181);
}
.lenauth-smooth-classic.w64 .lenauth-smooth-button-mailru,
.lenauth-smooth-classic.w64 .lenauth-smooth-button-mailru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_64px");
    background-color: initial;
}
.lenauth-smooth-classic.w48 .lenauth-smooth-button-mailru,
.lenauth-smooth-classic.w48 .lenauth-smooth-button-mailru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_48px");
    background-color: initial;
}
.lenauth-smooth-classic.w32 .lenauth-smooth-button-mailru,
.lenauth-smooth-classic.w32 .lenauth-smooth-button-mailru .img_act {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social_media_icon_sets_32px");
    background-color: initial;
}
.lenauth-style-1-4 a,
.lenauth-style-1-4 a:hover,
.lenauth-style-1-4 a:active,
.lenauth-style-1-4 a:focus {
    text-decoration-color: initial;
    color: rgb(232, 230, 227);
}
.lenauth-style-1-4.style1 a {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px,
    rgba(0, 0, 0, 0.2) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px -5px 0px inset;
}
.lenauth-style-1-4.style1 a:active {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 24px inset,
    rgba(0, 0, 0, 0.2) 0px -2px 0px inset;
}
.lenauth-style-1-4.style2 a {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px,
    rgba(0, 0, 0, 0.2) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px -5px 0px inset;
}
.lenauth-style-1-4.style2 a:active {
    box-shadow: rgba(0, 0, 0, 0.4) 0px -1px 24px inset,
    rgba(0, 0, 0, 0.2) 0px 3px 0px inset;
}
.lenauth-style-1-4.style3 a {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px,
    rgba(0, 0, 0, 0.2) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px -5px 0px inset,
    rgba(0, 0, 0, 0.1) 50px 0px 0px inset;
}
.lenauth-style-1-4.style3 a:active {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 24px inset,
    rgba(0, 0, 0, 0.4) 0px 0px 5px inset,
    rgba(0, 0, 0, 0.2) 50px 0px 0px inset;
}
.lenauth-style-1-4.style4 a {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px,
    rgba(0, 0, 0, 0.2) 0px 1px 1px,
    rgba(24, 26, 27, 0.2) 0px 3px 0px inset,
    rgba(24, 26, 27, 0.2) 0px -3px 0px inset,
    rgba(24, 26, 27, 0.2) 50px 0px 0px inset;
}
.lenauth-style-1-4.style4 a:active {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 24px inset,
    rgba(0, 0, 0, 0.4) 0px 0px 5px inset,
    rgba(0, 0, 0, 0.2) 50px 0px 0px inset;
}
.lenauth-ico-facebook {
    background-color: rgb(49, 71, 122);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/facebook");
}
.lenauth-light .lenauth-ico-facebook {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/facebook-light");
}
.lenauth-dark .lenauth-ico-facebook {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBM0ZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOUzFqTURFMElEYzVMakUxTVRRNE1Td2dNakF4TXk4d015OHhNeTB4TWpvd09Ub3hOU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBsTjJOaU1qVTBaUzFpWXpZMUxUTTROR010WW1Fd055MDJOelZpTkdWaFl6UXdaamdpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TWprd05EVXhOMFV4UlRCRk1URkZNemhCTmtJNE5EY3dPRE5CUVVOR01qUWlJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZNamt3TkRVeE4wUXhSVEJGTVRGRk16aEJOa0k0TkRjd09ETkJRVU5HTWpRaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElDaFhhVzVrYjNkektTSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPbVV5WWpFNU4yUmhMV1kxTlRFdE9HTTBPUzFoTkRVMExUWTFNRFk0TURBMFlXSTVOU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBsTjJOaU1qVTBaUzFpWXpZMUxUTTROR010WW1Fd055MDJOelZpTkdWaFl6UXdaamdpTHo0Z1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0lEd3ZjbVJtT2xKRVJqNGdQQzk0T25odGNHMWxkR0UrSUR3L2VIQmhZMnRsZENCbGJtUTlJbklpUHo2dGcrbnZBQUFCQmtsRVFWUjQybUw4Ly84L3cwQUNKb1lCQnFNT0dIVUFSUTVnWkdRMEJlSkZRSHdkaUY4QThSTWdQa3FTSWFCc1NBNEdna0FnL2c0eUFnMi9JY1VjUm5MS0FhQXZoWUhVVlNBV3h5TDlIbWltRUxGbXNaQVorclpvbGw4RDRyVkEvQnVJUDVCaUVMa09rRUhqVndCOXZYa2djOEZYZXVlQ0gyajg3K1E2Z0lYRXhCY0RwRGlBMkFsTktnUW9wdzFsL3dSR3gyS2l6U1FsRndBdCtRNTFBRDd3QldnbUw2Mmk0QnNSYXQ3U01nMzhvM2FDSkRVYk9rUDFoQU54R1pKNEpoQ2ZJaUdVeUhNQU1HNHZ3ZW9BTkttclFMbHo5TXlHckdoODl0SDJ3SWh6QUxvK3hvRU9BY2FCRGdHeVBVSnVlK0FMRUwvQ1V6c1NIM1NqWGJOUkJ3eTBBd0FDREFBWFRvN0RrUjdYU2dBQUFBQkpSVTVFcmtKZ2dnPT0iIC8+PC9zdmc+");
}
.lenauth-ico-facebook .tooltip-text-lenauth {
    background-image: initial;
    background-color: rgb(49, 71, 122);
}
.lenauth-ico-google-plus {
    background-color: rgb(151, 38, 22);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/google-plus");
}
.lenauth-light .lenauth-ico-google-plus {
    background-color: rgb(151, 38, 22);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/google-plus-light");
}
.lenauth-dark .lenauth-ico-google-plus {
    background-color: rgb(151, 38, 22);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBM0ZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOUzFqTURFMElEYzVMakUxTVRRNE1Td2dNakF4TXk4d015OHhNeTB4TWpvd09Ub3hOU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBsTjJOaU1qVTBaUzFpWXpZMUxUTTROR010WW1Fd055MDJOelZpTkdWaFl6UXdaamdpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2Tmpnd1JFWXdSall4UlRCRk1URkZNMEl6TmpsQlFUTXdOVFkwUlVJMlEwVWlJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZOamd3UkVZd1JqVXhSVEJGTVRGRk0wSXpOamxCUVRNd05UWTBSVUkyUTBVaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElDaFhhVzVrYjNkektTSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPbVV5WWpFNU4yUmhMV1kxTlRFdE9HTTBPUzFoTkRVMExUWTFNRFk0TURBMFlXSTVOU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBsTjJOaU1qVTBaUzFpWXpZMUxUTTROR010WW1Fd055MDJOelZpTkdWaFl6UXdaamdpTHo0Z1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0lEd3ZjbVJtT2xKRVJqNGdQQzk0T25odGNHMWxkR0UrSUR3L2VIQmhZMnRsZENCbGJtUTlJbklpUHo0OHRkSUJBQUFDZzBsRVFWUjQydXlYWFdoUFlSekg5OTlNVFgrSmhaU1hsbUZhaHFXVlVxS1ZSRmtpQ2NXbFJTNTJzNHRkYzBHN2NldENXVU5lTGtpN0dGa29ZVGRlOGhwRmtwZE5pWVdGdjgrdnZuODlUdWM1YjA3dHdwNzY5Snh6bnQvNVBiL3pQTCtYNXhSS3BWTEZXTGJLaWpGdTR3Wk1TQ0pVb05GdGdEWm9obG53QzM0NkgxS0VyOUFMQi9HdDRVUVdtQk5HUVZzSzErQTdISU1EY0ZUM0pmRVVPbUdMMlJ1bjh5LzlNWk0zd1R0TnNqWXd0aEtHTlRZQ085Sk1uTlNBUGszUTd4bmY0NnlDR1RFbnJRR1ZFZnMrMzc1YXR5ODhZaWZocGE0bndlbzhvMkFSVE5UMUZJLy9mS083NUR5YW02Y0I3bGlqSWlHc1BYU3UzNGFzWkkyUnhZREhNS3JyQm1qeHlKVkQwYUppSUdUOERKek5GSWEwRTQ2VERZU0ZHTzJDeHZkN2ROeUZlMW1qWURyY2NJeXdKRE5QWTdWd0NINVlib2pRY1JzR2ZlT0Z1R3JJL2hXVmZEYkRBbmdGUTJCUk1odDJvYVBIa2Jkb09BY3paWFNEczZYbVJ4K1FYL2RIUGswNVJybEZ3eEs0cmtmUGVIOWgwT25vanNNTUdiQkNRNE15WUloM3RpWk94U0ZMMnV4c2lZWGg3aGg1MjRJN21Yd2dRdWtWeHdqakNGUjdaTy9EQTUrdXBOV3dYbGx4bVp5dk5pRFNZWHVObk5XRFR4RjVJblVZcm9ITEtyTVdUdDNtZEVxNVZveE9CVmJpdk9XV2dJNHFJL1VXMExwVTg2M0l0RVhJN1pVdmxJMVkvOC9Wa0xiUlViZzlnVS9zVkQ2d204TjVHSEJWeWo3QzFJU09XVTVZM1htVTQzcjExVkNUTUUyOFVYOHpqMnBZcnZGRkhUcmlvc1FNWFFWUDRHS3FldXhaemsyT0Q0d3F6Q1o3WktmQmFYZ1B5OVBtRkc4cTVxdjIyZW5XSnRhajF6cDhQSUl2ZXQ0SXJUcVV0cVByZWRvRFNXUXR3SWpGZE51VWhPcVVnT3lGenpwODNMSmFqNDcrclA4RmhmRi93Ly9lZ044Q0RBQ1g5ODVSVFJwdDJBQUFBQUJKUlU1RXJrSmdnZz09IiAvPjwvc3ZnPg==");
}
.lenauth-ico-google-plus .tooltip-text-lenauth {
    background-image: initial;
    background-color: rgb(151, 38, 22);
}
.lenauth-ico-yahoo {
    background-color: rgb(114, 29, 136);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/yahoo");
}
.lenauth-light .lenauth-ico-yahoo {
    background-color: rgb(114, 29, 136);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/yahoo-light");
}
.lenauth-dark .lenauth-ico-yahoo {
    background-color: rgb(114, 29, 136);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBM0ZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOUzFqTURFMElEYzVMakUxTVRRNE1Td2dNakF4TXk4d015OHhNeTB4TWpvd09Ub3hOU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBsTjJOaU1qVTBaUzFpWXpZMUxUTTROR010WW1Fd055MDJOelZpTkdWaFl6UXdaamdpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TURBNU1EaERNakl4UlRCR01URkZNMEkyTkRkRE1ERXhOVEpDUWpBNE1EZ2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZNREE1TURoRE1qRXhSVEJHTVRGRk0wSTJORGRETURFeE5USkNRakE0TURnaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElDaFhhVzVrYjNkektTSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPbVV5WWpFNU4yUmhMV1kxTlRFdE9HTTBPUzFoTkRVMExUWTFNRFk0TURBMFlXSTVOU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBsTjJOaU1qVTBaUzFpWXpZMUxUTTROR010WW1Fd055MDJOelZpTkdWaFl6UXdaamdpTHo0Z1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0lEd3ZjbVJtT2xKRVJqNGdQQzk0T25odGNHMWxkR0UrSUR3L2VIQmhZMnRsZENCbGJtUTlJbklpUHo2WnpkTzBBQUFCbFVsRVFWUjQydXlXenl0RVVSVEg1L28xb2xGK0xtUkY5aGJzL0FPa2JDenNaaU4vZ01KL29md0RrZzFsSTVTeWxaUUZaYUZFMlZpWUtVbWlJZWI1bnZxcTYvUm01dDJMZVp0NzZ0TjA3enYzbk84OWI5NDkxMFJSbEVuVEdqSXBXeEFRQkFRQlRYckNHRE9QbjA1UUFrV1pBcjJXMkVhdUV4N0FCczZTRjI4RmNoRFp3TTVsdWdxZjRCbmNnbjNRb1dPNFlQUkppQXJJem5ySUtGaVZKSmJMSHBqQnVuZTFMa3QvcVZDWlFvM2w4c1lOU09LemloV0lxY2drZUZWVm1JM3hrOWRXcUZFOTRmVEh1aVJsZ2sxeFY5OUJIc0ZnakY4ZkdBRVQ0TTd5M3dWNU1BYmFuQVV3K0xMYXlSSElWdkJkb2s4aHJscGVBaGg0VTRsWVY4OWJ3UnFmSFlQaG1qRWRCZVRBaVJJeHgyZmQ0SkJ6MnlJbVVVelh6d2JXRCs0dEFVOUF6bzVyamhlZDR2bDh1N0JwOWFlTWZKSjdDNkNJSFpYOHdDZk9iM3JCcFJwZjFMc1o2YlVmOVJaUVRyc2R0NnZ4Z0U4UWsvUmFqbVlqQ1JaQUZ4Z0M0ekZ1TjJ3NjBqdFdFSHZMK1Q1UXhYSk1Mb3F2ZUJTWCtDb01xOWxDMzJiMmdyK3JRTGdUQmdGQndIL1psd0FEQU5rSHMzdnFyajZVQUFBQUFFbEZUa1N1UW1DQyIgLz48L3N2Zz4=");
}
.lenauth-ico-yahoo .tooltip-text-lenauth {
    background-image: initial;
    background-color: rgb(114, 29, 136);
}
.lenauth-ico-twitter {
    background-color: rgb(0, 138, 190);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/twitter");
}
.lenauth-light .lenauth-ico-twitter {
    background-color: rgb(0, 138, 190);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/twitter-light");
}
.lenauth-dark .lenauth-ico-twitter {
    background-color: rgb(0, 138, 190);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBM0ZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOUzFqTURFMElEYzVMakUxTVRRNE1Td2dNakF4TXk4d015OHhNeTB4TWpvd09Ub3hOU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBsTjJOaU1qVTBaUzFpWXpZMUxUTTROR010WW1Fd055MDJOelZpTkdWaFl6UXdaamdpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TXpjNU9UWTNNek14UlRCRk1URkZNMEV5UVRsRU5rWTNSRGxDTVRGRE1UY2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZNemM1T1RZM016SXhSVEJGTVRGRk0wRXlRVGxFTmtZM1JEbENNVEZETVRjaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElDaFhhVzVrYjNkektTSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPbVV5WWpFNU4yUmhMV1kxTlRFdE9HTTBPUzFoTkRVMExUWTFNRFk0TURBMFlXSTVOU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBsTjJOaU1qVTBaUzFpWXpZMUxUTTROR010WW1Fd055MDJOelZpTkdWaFl6UXdaamdpTHo0Z1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0lEd3ZjbVJtT2xKRVJqNGdQQzk0T25odGNHMWxkR0UrSUR3L2VIQmhZMnRsZENCbGJtUTlJbklpUHo3dHFmclVBQUFCMEVsRVFWUjQydXpYenlzRVlSekhjY1A2L2F2V3Ixb0hVZktqS0NkdGNpQXVUbkpSOXVCR0tTY0hGeGR4a3FJVXloOGdQNjZFUWprb055a3JJVnFFSExpd1F0Wjc2cUdsWjJhZUdWTjdzRSs5bWpEUDkvdVo4VHdQcTBVaWtZUllqc1NFR0k5NGdKZ0g4TGhWU05NMEw1ZGVOQ0VmbDFqSEhBdjlUZHhUeUtXQXJ3Ky9KK3E3NERkR0QveXlueG5jWDRlZ1hrNWlFd0ZNNEF6MVArWktpcVVqaEN2VUtqVFBGWVVqQ2daUWFSV2dCR0V4NFJydEZnRUdGWnZmWUEvalZnSDAzOU5qMU1RUHpNSm5FR0JiTVlCdUNWbW1BVVRSTllNbkdOTmZJWktpN3QxVmJMNFNQYzhxUUl0Sm9SY2NZQjZqT0ZVTU1DM3I1WkZzcDJLeFBTZlJyNmYrZFVzcWFnUTdJMnpuSEZnVzYrQkRFc0RwQ0NtZGhMd1dmZVZ2UUg4VHlTNGVla0hwZHczV2dCK3ZObGEzbFZ2a1NYdVo3TytBbU9oR2dCbkRQaVlCMHRDTmZSY0NORGdKNE1PRjJIWi9hYjVnZXBKYUhMTmRmMnorZ0FySEFVU0lUcHc3REJDd3JLLzQ1ellGZmJpejBYeFlxYlpDOHh4MFlBdnZialkzT29wYnVWUWpFNlZvUnBuaVlYT0NJUW92S2g5UGtpY3V4eFR1YmJ6dVk0ekFxL3JrWHpTakR5YThpV3d1YldoRUZZcVFJUm8raWZWd2hCMnNVdWZaMGYrUzhVOUc4UUQvUHNDbkFBTUE5emVHMFZtZk9PMEFBQUFBU1VWT1JLNUNZSUk9IiAvPjwvc3ZnPg==");
}
.lenauth-ico-twitter .tooltip-text-lenauth {
    background-image: initial;
    background-color: rgb(0, 138, 190);
}
.lenauth-ico-vk-en {
    background-color: rgb(62, 94, 130);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/vk-en");
}
.lenauth-light .lenauth-ico-vk-en {
    background-color: rgb(46, 83, 117);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/vk-light-en");
}
.lenauth-dark .lenauth-ico-vk-en {
    background-color: rgb(46, 83, 117);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBMmRwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOUzFqTURJeElEYzVMakUxTlRjM01pd2dNakF4TkM4d01TOHhNeTB4T1RvME5Eb3dNQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG8wTVRVNU1EZ3dSakZETWtSRk1ERXhRVFpFTWtNNE9EUTRORVJETmpKRVJpSWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEbzJOVEZFTkRNeVFUUkZSRGd4TVVVMFFUazJOVVF6TWpRMk56ZzFRVGd4TlNJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRvMk5URkVORE15T1RSRlJEZ3hNVVUwUVRrMk5VUXpNalEyTnpnMVFUZ3hOU0lnZUcxd09rTnlaV0YwYjNKVWIyOXNQU0pCWkc5aVpTQlFhRzkwYjNOb2IzQWdRME1nS0UxaFkybHVkRzl6YUNraVBpQThlRzF3VFUwNlJHVnlhWFpsWkVaeWIyMGdjM1JTWldZNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEb3pRVU0zUTBFM016UkZSRGd4TVVVMFFVVXpOa1F5TWpSR09FRXhORU13T1NJZ2MzUlNaV1k2Wkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvelFVTTNRMEUzTkRSRlJEZ3hNVVUwUVVVek5rUXlNalJHT0VFeE5FTXdPU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUHI5WlluNEFBQUZFU1VSQlZIamFZdnovL3ovRFFBSW1oZ0VHb3c0WWRjQ29BMFlkd0lKTmtKR1JNUjlKN2c4UUx3YmlkMUFIVHdmaU1DQm1oc3JkQitJb0lMNkpaRVE0RU10QTJhQ2k5aHV3eEoyQjFRV2dvaGdkQThGdnFFWVlYZ0Z6R3hDN29NbUJjQnFTa2NwWTVQOWpzd2RzRnc0SGhHTXhoQi9Ka2pWb2NtRkljdk94NkMwajFRRWc4QUROa0NWSWxpeEdrd3VDaWt0aHNmdzhycEFtNUlCQUxJWVpRZVZXb0ltclFjV1BZOUVqU2E0RFFPQXFtbUZQZ2RnR2lDK2hpU2NCY1RvV3l3UHdwVFZpSEtDRExVRVJpZWNUU3V3Z1RLZ2N1QUxFL1dSbWNTMGc1aUtvaWtBSTRJb0tZdkV0SUJha0pBcGdRQmlJbitHeGFBTVF4K0p4QkNlbERnQUJNU0RlajhNU1dEbmdna1ArTERVY0FBTWduMjRENHNkQS9BbUlYd0d4T1pKOEFMUlkvZ2pFNzRINEF4RGZ3ZVVBeHRGVzhhZ0RSaDB3Nm9BUjd3Q0FBQU1BR2V6aURTL0pjVWtBQUFBQVNVVk9SSzVDWUlJPSIgLz48L3N2Zz4=");
}
.lenauth-ico-vk-en .tooltip-text-lenauth {
    background-image: initial;
    background-color: rgb(46, 83, 117);
}
.lenauth-ico-vk-ru {
    background-color: rgb(62, 94, 130);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/vk-ru");
}
.lenauth-light .lenauth-ico-vk-ru {
    background-color: rgb(46, 83, 117);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/vk-light-ru");
}
.lenauth-dark .lenauth-ico-vk-ru {
    background-color: rgb(46, 83, 117);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4zMzMgLTAuNjY3IC0wLjY2NyAwLjAwMCAxLjAwMCAtMC42NjcgMC4zMzMgLTAuNjY3IDAuMDAwIDEuMDAwIC0wLjY2NyAtMC42NjcgMC4zMzMgMC4wMDAgMS4wMDAgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBSUFBQUQ4R08yakFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBVlpKUkVGVWVOcGkvUC8vUHdNdEFSTURqY0dvQmFNV1VBNVk4RXVycUtpOGV2V0tsWlVWd2dWbUdpQ2JsNWRYVTFNekx5L1AxZFdWc0EzLzhRSWhJU0U4ZXBjc1dmS2ZFQ0RXQWlrcHFkRFFVRGMzTjBsSlNiZ0ZabVptVkxNZ01EQVFJbkx6NWswQkFRR0lvTHk4L0pjdlgvQ2JRSElrS3lnb1NFaElRTmpTMHRMYzNOd1VSVEljZlAvKy9lM2J0OSsrZlZ1eFlzV05HemNnZ3ZuNStWU0xaQllXRmg0ZUhnNE9EcmpHbnA2ZS8wUUE4bE9ScUtob1JVWEY3OSsvOFp0QWJCRHA2ZW1scDZjRGpYdjkrdlhxMWF0djNib0ZaSFIwZEFEelJGVlZGUldDQ0o2S2dBQm9PaDhmSDBSY1hWMmR5cWtJQ0dSa1pFUkVSQ0Jzb0Qrb1h4WXRYNzc4M3IxNzhLeEFuV1I2NU1nUllEWUdldm5seTVmWHJsMkRpOGZIeDlPd0xFcEpTZm43OXk5RnFVaFFVQkNZY3VDbEtjUkIvUHo4K3ZyNmlZbUovdjcrQkwzT09OcHNHYlZnMUFMYVd3QVFZQUM5TUNmRENORXVKQUFBQUFCSlJVNUVya0pnZ2c9PSIgLz48L3N2Zz4=");
}
.lenauth-ico-vk-ru .tooltip-text-lenauth {
    background-image: initial;
    background-color: rgb(46, 83, 117);
}
.lenauth-ico-yandex-en {
    background-color: rgb(24, 26, 27);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4zMzMgLTAuNjY3IC0wLjY2NyAwLjAwMCAxLjAwMCAtMC42NjcgMC4zMzMgLTAuNjY3IDAuMDAwIDEuMDAwIC0wLjY2NyAtMC42NjcgMC4zMzMgMC4wMDAgMS4wMDAgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBSUFBQUQ4R08yakFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBVmxKUkVGVWVOcnNWcS9Md2xBVVBjb3dLT2hFdEtqZ0gyQXdEQzFpTW9nSWdob0dOclBOZjhCc3NBc210WnJFWnAwZzJnd1c0N3FZTExyN3ZRdUNmSVBQUFhFckh6dU15OTNaZmVmc1BkNnZBQkhCU3dUaE1Yd0RMdzJtVTRURHFOZmZWeWtPS3FhSit4M0pKQ0lSKzZmNUhMY2JOTTFCZ2Q2ajNSYXptQVlETzcvZE1xOG9kRHkrRjNBYW9sYUw0M0tKNi9VWHYxcHhyRlNRejMvWGc4dUZNaG4rMmNua1JUNGVWQ2pZeVQ4QXh3cnE5MW1yV24weCt6MHpxa3FtNllhQlliQmNLRVNuMDVNWkRwblJkWktBaElGbFViSElpcVBSazlFMGZsMnZYVElRR0k5WnNWVGlYRXdia1F0TE9jZ3R0RTRIOFRoMk81elBNQXhtZE4zVmxaek5vdGZqWkxIQVpzTkpzeW03NENWN1NvY0RqMHdzeHJIUklHbEF2cFRLWlZZWHoyd20zK2lUemE3YjVaaEtvVmJ6WmpmTjVUZ21FbEJWYnd3c3l6L1IvcjJCT0lHalVhVFRDSDdRS3VEZjdIeURyL0Vqd0FBSGE5NnRQTDdEcXdBQUFBQkpSVTVFcmtKZ2dnPT0iIC8+PC9zdmc+");
}
.lenauth-ico-yandex-en,
.lenauth-ico-yandex-en:hover,
.lenauth-ico-yandex-en:active,
.lenauth-ico-yandex-en:focus {
    color: rgb(232, 230, 227) !important;
}
.lenauth-light .lenauth-ico-yandex-en {
    background-color: rgb(24, 26, 27);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/yandex-light-en");
}
.lenauth-dark .lenauth-ico-yandex-en {
    background-color: rgb(24, 26, 27);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4zMzMgLTAuNjY3IC0wLjY2NyAwLjAwMCAxLjAwMCAtMC42NjcgMC4zMzMgLTAuNjY3IDAuMDAwIDEuMDAwIC0wLjY2NyAtMC42NjcgMC4zMzMgMC4wMDAgMS4wMDAgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBSUFBQUQ4R08yakFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBWHRKUkVGVWVOcnNWcSt2Z2xBWVJlY011dmxqVEl1eThTY1luQllUSXprM2dzVk10cEZzWmdNVjNVejgrQk5zVmluYUNBU2JJMUdnV1pUN3podWJleVBBOVQwcGI1eHc5KzNjNzU3emJkenZ1NVFJSVV5ZUtETTVvekRJMFdDLzM5ZHF0ZWwwbXA1V1NkLzJQTy94ZUhRNm5YcTludGd5RE9OK3Z3K0h3NHhDU0NybTh6bHlGRVZKOExadGYxZFhxVGlPazY2UVlXQlpGb1I0bmcvRDhDZS9XcTNBQzRKQXNwQmhFQVJCdjkrSDFtNjNlNUhQNTNNd0dDVElYeG9BeStVU1dxSW92cGp6K1F5bTFXcmhDMzNBNEhRNlFhNWFyYnF1R3pQcjlSck1ZckVnRk1nMmlLSm9OQnBCY2JQWnhFeDhjdzZIdzJjTUFGVlZvVGdlanhIajJpQ0dKYUVEbGNIdGRtdTMyOUM5WHEvYjdSWUJMQ2tOcURxWjR6aFpsaEdZcG5rOEhoRklra1RiOFpTRlhDNFhKRGViVGF5ejJZeFFnNkZQblV3bWNVMjZydWRpb0drYTFMdmRydS83OUtmZW1LWVlHRmhabGtXTDVUS3UwUkRGaS9iZkRmQUNOeHFOWHE5WExyOXhxbFQ4MlJVR2Y4YVhBQU1BNVArMXFER1VZUjBBQUFBQVNVVk9SSzVDWUlJPSIgLz48L3N2Zz4=");
}
.lenauth-ico-yandex-en .tooltip-text-lenauth {
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.lenauth-ico-yandex-ru {
    background-color: rgb(24, 26, 27);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4zMzMgLTAuNjY3IC0wLjY2NyAwLjAwMCAxLjAwMCAtMC42NjcgMC4zMzMgLTAuNjY3IDAuMDAwIDEuMDAwIC0wLjY2NyAtMC42NjcgMC4zMzMgMC4wMDAgMS4wMDAgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBSUFBQUQ4R08yakFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeVpwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOUzFqTURJeElEYzVMakUxTlRjM01pd2dNakF4TkM4d01TOHhNeTB4T1RvME5Eb3dNQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01UUWdLRmRwYm1SdmQzTXBJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPalUxUlVRNE4wRXlORVZGTWpFeFJUUkNOMFpCUWpoQlF6azFNVVZCUWtGR0lpQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qVTFSVVE0TjBFek5FVkZNakV4UlRSQ04wWkJRamhCUXprMU1VVkJRa0ZHSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk5UVkZSRGczUVRBMFJVVXlNVEZGTkVJM1JrRkNPRUZET1RVeFJVRkNRVVlpSUhOMFVtVm1PbVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TlRWRlJEZzNRVEUwUlVVeU1URkZORUkzUmtGQ09FRkRPVFV4UlVGQ1FVWWlMejRnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrSUR3dmNtUm1PbEpFUmo0Z1BDOTRPbmh0Y0cxbGRHRStJRHcvZUhCaFkydGxkQ0JsYm1ROUluSWlQejVUbFAwcUFBQUJvVWxFUVZSNDJtTDgvLzgvQXkwQkV3T053YWdGQkFFTENXcGZ2L3EzWWUyUEEzdit2bjhQNURGeWNqRUxDWFBPWGtnbEM2NWYrMXhaeFBEckY1REpMQ2JHOE9mdjMzZHYveno5UmlVZmZQLzJ1VGdIU0hPNWVUR25aakJ3OHpCOGVQODVLcGlSaFlVNkZ2eGJzZ2hJc3Fsck1CZVVRSVgrL0tWZUpQLy8vMjNIWmlETkhoU0dFUHo5aTNvV1BIdjYvL3QzRUVOZWtUYko5UDA3S0lPTGk4YjU0TzlmMmxnZ0pnN0xCNjlwWlFHTGhDUW80ZXpjU3FzZzRrd0haWUx2ZTNjeDdOd09GWktVZ2lRd0ttVTBjMHN1TDc5djJ6WjludGpOZm1BM2k0THkvMjlmUWVMczdBUzFNcEpRNFJ6Yy8zWE90SDl2MzhJRm1BV0Z1SmF1b1Y0cXNuZGtZdWNBMHJ5NVJid3RYYUFjRHZFSHRVclRmOU1uLzNuMmxGbGNnc0hUQjFaZy9LRmVQdmp3NGV2bTlhRGNscG9GNGo1OUFnNWdScXBaOEh0aUQ1QmtsVk5nc0xJQjYyT2lhazUrOVBESHlXTkFtaU1wbFNiNTRHZC9KeWk2Z0lXZG1TVU5MRGk0LzlmTkc2RHNscEdERk9QL1FQbU1pRWdtbklwK2Jsak55TUhCcHE3Sm9HK0lwSThGV0NjenNiSlJOYU9OTnJ4R0xjQU9BQUlNQUV1YWliVXNmNGQzQUFBQUFFbEZUa1N1UW1DQyIgLz48L3N2Zz4=");
}
.lenauth-ico-yandex-ru,
.lenauth-ico-yandex-ru:hover,
.lenauth-ico-yandex-ru:active,
.lenauth-ico-yandex-ru:focus {
    color: rgb(232, 230, 227) !important;
}
.lenauth-light .lenauth-ico-yandex-ru {
    background-color: rgb(24, 26, 27);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/yandex-light-ru");
}
.lenauth-dark .lenauth-ico-yandex-ru {
    background-color: rgb(24, 26, 27);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeVpwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOUzFqTURJeElEYzVMakUxTlRjM01pd2dNakF4TkM4d01TOHhNeTB4T1RvME5Eb3dNQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01UUWdLRmRwYm1SdmQzTXBJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPalZHTnpKQ1FVUTRORVZGTVRFeFJUUkNRekExUmpkRVJqZ3pORGcyUVRReElpQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qVkdOekpDUVVRNU5FVkZNVEV4UlRSQ1F6QTFSamRFUmpnek5EZzJRVFF4SWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk5VWTNNa0pCUkRZMFJVVXhNVEZGTkVKRE1EVkdOMFJHT0RNME9EWkJOREVpSUhOMFVtVm1PbVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TlVZM01rSkJSRGMwUlVVeE1URkZORUpETURWR04wUkdPRE0wT0RaQk5ERWlMejRnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrSUR3dmNtUm1PbEpFUmo0Z1BDOTRPbmh0Y0cxbGRHRStJRHcvZUhCaFkydGxkQ0JsYm1ROUluSWlQejV4d0wvRUFBQUJWRWxFUVZSNDJtTDgvLzgvdzBBQ0pvWUJCcU1PR0ZvT1lHUmtRc2J5UUR3QmlGOEM4WDhvL2dURXQwbHlBU2dYRUl1QlRvQmhheUQrRHNUL29mZ1JFRCtIOFVreWt3d0g4Q0paUEIrSUJhRGlFbEN4WDdSMlFEL1VvdE5JSVFMQ3N2UndBREROTUg2R1doU0I1Z0JWcVBoUFVzd2tOUmNBTFdIZ2diS3ZERVEybEVSaWZ4cm9jb0JsSUJ6d0VJa3RPeEFPdUEvRklKQ0tYcVNRNVFJeXNxRS9Vam1RaXBZVFFHSy9TVEdUa1pUMkFLZ0lob0taUUp3R1pSOEU0c3RBekFmRWNhREUrZi8vUDM1YUY4VWdIQVhFejVCQ0E0WmYwTEljUUFiTGdQZ2JsSjBKeEo1UU5pODlLaU1RbmdyMThRTkswZ0M1RGhCREN2SmdxSmdHUFlwaUdKZ0hwYThEOFZvbyt5KzlTa0p0SVBhR3Npc0dvaWhlQUtXdkFmRW1lanNBbVBVWVRLRHNmRFE1WmlqTlJzc0twUkNJdndJeHNESENzQWRON2hjUUE5c0tERDlKYW1lTzlveEdIVERpSFFBUVlBQzMyR0lNaVUreWlRQUFBQUJKUlU1RXJrSmdnZz09IiAvPjwvc3ZnPg==");
}
.lenauth-ico-yandex-ru .tooltip-text-lenauth {
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.lenauth-ico-mailru {
    background-color: rgb(18, 113, 181);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/mailru");
}
.lenauth-light .lenauth-ico-mailru {
    background-color: rgb(18, 113, 181);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/mailru-light");
}
.lenauth-dark .lenauth-ico-mailru {
    background-color: rgb(18, 113, 181);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeVpwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOUzFqTURJeElEYzVMakUxTlRjM01pd2dNakF4TkM4d01TOHhNeTB4T1RvME5Eb3dNQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01UUWdLRmRwYm1SdmQzTXBJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPall6UkVZM1FrWkVORVZFUkRFeFJUUTRNVVF3UWpjMVFrSTFRMEpCUkRnMUlpQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qWXpSRVkzUWtaRk5FVkVSREV4UlRRNE1VUXdRamMxUWtJMVEwSkJSRGcxSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk5qTkVSamRDUmtJMFJVUkVNVEZGTkRneFJEQkNOelZDUWpWRFFrRkVPRFVpSUhOMFVtVm1PbVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TmpORVJqZENSa00wUlVSRU1URkZORGd4UkRCQ056VkNRalZEUWtGRU9EVWlMejRnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrSUR3dmNtUm1PbEpFUmo0Z1BDOTRPbmh0Y0cxbGRHRStJRHcvZUhCaFkydGxkQ0JsYm1ROUluSWlQejcza2FGZ0FBQUNYMGxFUVZSNDJ1eVhTMGlWUVJpR3oyaUlnbENodUFoQkVWU0UzS2lJcGFRU0pCZ29Ta2k2Q1VNSUJWMHBnU3MzWHNERldkUkNjYUdCcExnd1FndEZKQldDckVXS2dTR0k2MENEUkx4MDhmY2RlSVdQWWM1L09TN09valB3OFAwelorYWJkMjdmekZHTzQ0UmltUkpDTVU1eEFURVhjTTFXcUpTcnJuSlFEQXBBS2pnQk8yQURMQVBycm5hY2MvOENYTkk5VUE5S1FKNFFzQXR5UUNKWURPUlJIME1UeklFSlJxMVdnT09EVGRCbytyRDFvMUcyT0dBc1FTL29GL2tQWUJWODRlaHZja2Fxd0IxUjd3WG84bG9DcnhrWUVDTmJBOFdXMlpGZ2lkU3lhRFBoTlFOdUFocUVveW5SaVJZeHlxbmVCbTlBa3lIa3BXamJGbzJBSlBDVERyYUU0eUdYdFg4TndxSittT1ZZSnBVYVZNQlQ0YmlRRGdkRkdkWlhWWU83b0FQc0dHSksyT2FVK2ZhZ0F1Ylo4Qk1kRlFqblRaYTF4NjVWbjBXZGVwWlBNdjgra29CSUVhZVE5aTF0RCswQ21MSFUxMXY4aVR4SXRDdTB0NE9HNG5UYWI3UkZoaUJid29ZTTdWMGVMdG9mdEduUjNnVi9qSWg1N0ZIL3pLaWZaTXlJYndIN3RQbGlkRHFWdVhSK0MrUWFmck5wRDRNSzJLSjlTQnVtYldYTXQ2VlIzZ1Z5NXU3VGZnOTZGN1NKSFozRkhmMktlUjBmV2dEMmlVb0JGZUNkY1F3ejJPWWY4OTFCajJFeStNWEc2K0s0VFJvZC9SWGZIOEZYZnVQVXFERisvd1kzb2duRmo0VHphU0hpQVpnRFIveE5kL3FjdjNWYUltUnp0SGVCWmxnNDBoMVZlbHhHT2lETkFzUUZkUUNlWGVVeXVxVFBHTkU2YjhsYXJ2OWpNRTZCZFd5VENhNzdlUS80ZlpCVUd0ZHNKQVlqemM1VkhpUXlsWUlhUGtDeStTUTdaZ1JjQWlQaUNQcDZFNnI0UDZPNGdQOWV3SVVBQXdEVDhFbDg1MVEzZVFBQUFBQkpSVTVFcmtKZ2dnPT0iIC8+PC9zdmc+");
}
.lenauth-ico-mailru .tooltip-text-lenauth {
    background-image: initial;
    background-color: rgb(18, 113, 181);
}
.lenauth-dark,
.lenauth-dark a {
    color: rgb(232, 230, 227);
}
.lenauth-blue a {
    background-color: rgb(0, 96, 164) !important;
}
.lenauth-blue a:hover {
    background-color: rgb(18, 108, 171) !important;
}
.lenauth-grey a {
    background-color: rgb(88, 96, 99) !important;
}
.lenauth-grey a:hover {
    background-color: rgb(80, 87, 90) !important;
}
.lenauth-green a {
    background-color: rgb(79, 127, 3) !important;
}
.lenauth-green a:hover {
    background-color: rgb(90, 138, 13) !important;
}
.lenauth-yellow {
    background-color: rgb(154, 130, 0) !important;
}
.lenauth-yellow:hover {
    background-color: rgb(173, 147, 5) !important;
}
.lenauth-orange a {
    background-color: rgb(164, 94, 2) !important;
}
.lenauth-orange a:hover {
    background-color: rgb(177, 110, 23) !important;
}
.lenauth-red a {
    background-color: rgb(150, 6, 6) !important;
}
.lenauth-red a:hover {
    background-color: rgb(160, 22, 22) !important;
}
.lenauth-purple a {
    background-color: rgb(96, 0, 152) !important;
}
.lenauth-purple a:hover {
    background-color: rgb(122, 18, 182) !important;
}
.lenauth-pink {
    background-color: rgb(151, 0, 146) !important;
}
.lenauth-pink:hover {
    background-color: rgb(180, 18, 174) !important;
}
.lenauth-white a {
    background-color: rgb(24, 26, 27) !important;
}
.lenauth-white a:hover {
    background-color: rgb(54, 59, 61) !important;
}
.lenauth-black a {
    background-color: rgb(0, 0, 0) !important;
}
.lenauth-black a:hover {
    background-color: rgb(0, 0, 0) !important;
}
.lenauth-style-5 a {
    border-color: initial;
    text-decoration-color: initial;
    color: rgb(232, 230, 227);
}
.lenauth-style-5 a:hover,
.lenauth-style-5 a:focus,
.lenauth-style-5 a:active {
    outline-color: initial;
    text-decoration-color: initial;
    color: rgb(232, 230, 227);
}
.lenauth-style-5 a span {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/auth_lenauth/1656028964/social-sprite");
}
.lenauth-simple-3d a {
    background-image: initial;
    background-color: rgb(30, 32, 33);
    text-shadow: rgba(84, 91, 94, 0) 0px 1px 1px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.3) 0px -5px 0px 0px inset,
    rgba(24, 26, 27, 0.5) 0px 2px 0px 0px inset;
}
.lenauth-simple-3d a:active {
    box-shadow: rgb(24, 26, 27) 1px 1px 0px,
    rgba(0, 0, 0, 0.4) 0px 1px 3px inset;
}
.lenauth-simple-3d a:hover {
    background-color: rgb(30, 32, 33);
}
.lenauth-simple-3d.small a {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.3) 0px -4px 0px 0px inset,
    rgba(24, 26, 27, 0.5) 0px 2px 0px 0px inset;
}
.lenauth-simple-3d.small a:active {
    box-shadow: rgb(24, 26, 27) 1px 1px 0px,
    rgba(0, 0, 0, 0.4) 0px 1px 3px inset;
}
.lenauth-simple-flat a {
    background-image: initial;
    background-color: rgb(30, 32, 33);
    text-shadow: rgba(84, 91, 94, 0) 0px 1px 1px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0) 0px -2px 0px 0px inset,
    rgba(24, 26, 27, 0.5) 0px 2px 0px 0px inset;
}
.lenauth-simple-flat a:active {
    box-shadow: rgb(24, 26, 27) 1px 1px 0px,
    rgba(0, 0, 0, 0.3) 0px 1px 15px inset;
}
.lenauth-simple-flat a:hover {
    background-color: rgb(30, 32, 33);
}
.lenauth-circle-3d a {
    background-image: initial;
    background-color: rgb(30, 32, 33);
    text-shadow: rgba(84, 91, 94, 0) 0px 1px 1px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.3) 0px -5px 0px 0px inset,
    rgba(24, 26, 27, 0.5) 0px 2px 0px 0px inset;
}
.lenauth-circle-3d a:active {
    box-shadow: rgb(24, 26, 27) 1px 1px 0px,
    rgba(0, 0, 0, 0.4) 0px 1px 3px inset;
}
.lenauth-circle-3d a:hover {
    background-color: rgb(30, 32, 33);
}
.lenauth-circle-3d.small a {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.3) 0px -4px 0px 0px inset,
    rgba(24, 26, 27, 0.5) 0px 2px 0px 0px inset;
}
.lenauth-circle-3d.small a:active {
    box-shadow: rgb(24, 26, 27) 1px 1px 0px,
    rgba(0, 0, 0, 0.4) 0px 1px 3px inset;
}
.lenauth-circle-flat a {
    background-image: initial;
    background-color: rgb(30, 32, 33);
    color: rgb(232, 230, 227);
    text-shadow: rgba(84, 91, 94, 0) 0px 1px 1px;
}
.lenauth-circle-flat a:active {
    box-shadow: rgb(24, 26, 27) 1px 1px 0px,
    rgba(0, 0, 0, 0.3) 0px 1px 15px inset;
}
.lenauth-circle-flat a:hover {
    background-color: rgb(30, 32, 33);
}
.lenauth-style-5 .lenauth-style5-facebook {
    background-image: initial;
    background-color: rgb(47, 71, 122);
}
.lenauth-style-5 .lenauth-style5-facebook:hover {
    background-color: rgb(38, 65, 121);
}
.lenauth-style-5 .lenauth-style5-googlep {
    background-image: initial;
    background-color: rgb(27, 29, 30);
}
.lenauth-style-5 .lenauth-style5-googlep:hover {
    background-color: rgb(27, 29, 30);
}
.lenauth-style-5 .lenauth-style5-yahoo {
    background-image: initial;
    background-color: rgb(80, 12, 86);
}
.lenauth-style-5 .lenauth-style5-yahoo:hover {
    background-color: rgb(80, 12, 86);
}
.lenauth-style-5 .lenauth-style5-twitter {
    background-image: initial;
    background-color: rgb(0, 150, 196);
}
.lenauth-style-5 .lenauth-style5-twitter:hover {
    background-color: rgb(0, 138, 181);
}
.lenauth-style-5 .lenauth-style5-vk-en,
.lenauth-style-5 .lenauth-style5-vk-ru {
    background-image: initial;
    background-color: rgb(62, 94, 130);
}
.lenauth-style-5 .lenauth-style5-vk-en:hover,
.lenauth-style-5 .lenauth-style5-vk-ru:hover {
    background-color: rgb(62, 94, 130);
}
.lenauth-style-5 .lenauth-style5-yandex-ru,
.lenauth-style-5 .lenauth-style5-yandex-en {
    background-image: initial;
    background-color: rgb(183, 15, 21);
}
.lenauth-style-5 .lenauth-style5-yandex-ru:hover,
.lenauth-style-5 .lenauth-style5-yandex-en:hover {
    background-color: rgb(183, 15, 21);
}
.lenauth-style-5 .lenauth-style5-mailru {
    background-image: initial;
    background-color: rgb(18, 113, 181);
}
.lenauth-style-5 .lenauth-style5-mailru:hover {
    background-color: rgb(18, 113, 181);
}
a.btn.btn-default.lenauth-bootstrap-facebook {
    background-image: initial;
    background-color: rgb(47, 71, 122);
    color: rgb(232, 230, 227);
    border-color: rgb(54, 81, 138);
}
a.btn.btn-default.lenauth-bootstrap-facebook:hover,
a.btn.btn-default.lenauth-bootstrap-facebook:focus {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(54, 81, 138);
    color: rgb(127, 165, 205);
}
a.btn.btn-default.lenauth-bootstrap-google {
    background-image: initial;
    background-color: rgb(163, 40, 29);
    color: rgb(232, 230, 227);
    border-color: rgb(146, 36, 26);
}
a.btn.btn-default.lenauth-bootstrap-google:hover,
a.btn.btn-default.lenauth-bootstrap-google:focus {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(146, 36, 26);
    color: rgb(222, 84, 72);
}
a.btn.btn-default.lenauth-bootstrap-yahoo {
    background-image: initial;
    background-color: rgb(51, 1, 116);
    color: rgb(232, 230, 227);
    border-color: rgb(93, 1, 210);
}
a.btn.btn-default.lenauth-bootstrap-yahoo:hover,
a.btn.btn-default.lenauth-bootstrap-yahoo:focus {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(93, 1, 210);
    color: rgb(169, 103, 254);
}
a.btn.btn-default.lenauth-bootstrap-twitter {
    background-image: initial;
    background-color: rgb(15, 91, 148);
    color: rgb(232, 230, 227);
    border-color: rgb(14, 88, 144);
}
a.btn.btn-default.lenauth-bootstrap-twitter:hover,
a.btn.btn-default.lenauth-bootstrap-twitter:focus {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(14, 88, 144);
    color: rgb(90, 176, 238);
}
a.btn.btn-default.lenauth-bootstrap-yandex {
    background-image: initial;
    background-color: rgb(153, 122, 0);
    color: rgb(232, 230, 227);
    border-color: rgb(179, 143, 0);
}
a.btn.btn-default.lenauth-bootstrap-yandex:hover,
a.btn.btn-default.lenauth-bootstrap-yandex:focus {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(179, 143, 0);
    color: rgb(232, 230, 227);
}
a.btn.btn-default.lenauth-bootstrap-vk {
    background-image: initial;
    background-color: rgb(55, 82, 114);
    color: rgb(232, 230, 227);
    border-color: rgb(63, 93, 129);
}
a.btn.btn-default.lenauth-bootstrap-vk:hover,
a.btn.btn-default.lenauth-bootstrap-vk:focus {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(179, 143, 0);
    color: rgb(135, 168, 197);
}
a.btn.btn-default.lenauth-bootstrap-simple-facebook {
    background-image: initial;
    background-color: rgb(47, 71, 122);
    border-color: rgb(54, 81, 138);
    color: rgb(232, 230, 227);
}
a.btn.btn-default.lenauth-bootstrap-simple-facebook:hover,
a.btn.btn-default.lenauth-bootstrap-simple-facebook:focus {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(54, 81, 138);
    color: rgb(127, 165, 205);
}
a.btn.btn-default.lenauth-bootstrap-simple-google {
    background-image: initial;
    background-color: rgb(163, 40, 29);
    border-color: rgb(146, 36, 26);
    color: rgb(232, 230, 227);
}
a.btn.btn-default.lenauth-bootstrap-simple-google:hover,
a.btn.btn-default.lenauth-bootstrap-simple-google:focus {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(146, 36, 26);
    color: rgb(222, 84, 72);
}
a.btn.btn-default.lenauth-bootstrap-simple-yahoo {
    background-image: initial;
    background-color: rgb(51, 1, 116);
    border-color: rgb(93, 1, 210);
    color: rgb(232, 230, 227);
}
a.btn.btn-default.lenauth-bootstrap-simple-yahoo:hover,
a.btn.btn-default.lenauth-bootstrap-simple-yahoo:focus {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(93, 1, 210);
    color: rgb(169, 103, 254);
}
a.btn.btn-default.lenauth-bootstrap-simple-twitter {
    background-image: initial;
    background-color: rgb(15, 91, 148);
    border-color: rgb(14, 88, 144);
    color: rgb(232, 230, 227);
}
a.btn.btn-default.lenauth-bootstrap-simple-twitter:hover,
a.btn.btn-default.lenauth-bootstrap-simple-twitter:focus {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(14, 88, 144);
    color: rgb(90, 176, 238);
}
a.btn.btn-default.lenauth-bootstrap-simple-yandex {
    background-image: initial;
    background-color: rgb(153, 122, 0);
    color: rgb(232, 230, 227);
    border-color: rgb(179, 143, 0);
}
a.btn.btn-default.lenauth-bootstrap-simple-yandex:hover,
a.btn.btn-default.lenauth-bootstrap-simple-yandex:focus {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(179, 143, 0);
    color: rgb(232, 230, 227);
}
a.btn.btn-default.lenauth-bootstrap-simple-vk,
a.btn.btn-default.lenauth-bootstrap-simple-vk-en {
    background-image: initial;
    background-color: rgb(55, 82, 114);
    border-color: rgb(63, 93, 129);
    color: rgb(232, 230, 227);
}
a.btn.btn-default.lenauth-bootstrap-simple-vk:hover,
a.btn.btn-default.lenauth-bootstrap-simple-vk:focus,
a.btn.btn-default.lenauth-bootstrap-simple-vk-en:hover,
a.btn.btn-default.lenauth-bootstrap-simple-vk-en:focus {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(179, 143, 0);
    color: rgb(135, 168, 197);
}
.block_accessreview_success,
.block_accessreview.block_accessreview_success.hasinfo {
    color: rgb(201, 196, 189);
    background-image: initial;
    background-color: rgb(40, 55, 35);
    border-color: rgb(61, 66, 68);
}
.block_accessreview_danger,
.block_accessreview.block_accessreview_danger.hasinfo {
    color: rgb(223, 141, 138);
    background-image: initial;
    background-color: rgb(65, 17, 15);
    border-color: rgb(100, 24, 22);
}
.block_accessreview_warning,
.block_accessreview.block_accessreview_warning.hasinfo {
    color: rgb(214, 178, 129);
    background-image: initial;
    background-color: rgb(68, 43, 6);
    border-color: rgb(109, 68, 9);
}
.block_accessreview_table {
    border-color: rgb(54, 58, 60);
}
#page-blocks-configurable_reports-viewreport .generaltable {
    border-color: rgb(84, 91, 94);
}
#page-blocks-configurable_reports-viewreport .generaltable th.header {
    background-color: rgb(45, 45, 13);
}
.linkbutton {
    box-shadow: rgb(35, 38, 39) 0px 1px 0px 0px inset;
    background-image: -webkit-gradient(linear,
    0% 0%,
    0% 100%,
    color-stop(0.05,
    rgb(189, 219, 250)),
    to(rgb(128, 181, 234)));
    background-color: rgb(44, 48, 50);
    border-color: rgb(13, 71, 130);
    color: rgb(232, 230, 227);
    text-decoration-color: initial;
    text-shadow: rgb(42, 92, 143) 1px 1px 0px;
}
.linkbutton:hover {
    background-image: -webkit-gradient(linear,
    0% 0%,
    0% 100%,
    color-stop(0.05,
    rgb(128, 181, 234)),
    to(rgb(189, 219, 250)));
    background-color: rgb(20, 70, 120);
}
table.dataTable thead th {
    border-bottom-color: rgb(140, 130, 115);
}
table.dataTable tfoot th {
    border-top-color: rgb(140, 130, 115);
}
table.dataTable tr.odd {
    background-color: rgb(32, 35, 36);
}
table.dataTable tr.even {
    background-color: rgb(24, 26, 27);
}
table.dataTable tr.odd td.sorting_1 {
    background-color: rgb(36, 39, 41);
}
table.dataTable tr.odd td.sorting_2 {
    background-color: rgb(34, 37, 39);
}
table.dataTable tr.odd td.sorting_3 {
    background-color: rgb(33, 35, 37);
}
table.dataTable tr.even td.sorting_1 {
    background-color: rgb(30, 32, 34);
}
table.dataTable tr.even td.sorting_2 {
    background-color: rgb(28, 30, 31);
}
table.dataTable tr.even td.sorting_3 {
    background-color: rgb(26, 28, 29);
}
.paginate_disabled_previous,
.paginate_enabled_previous,
.paginate_disabled_next,
.paginate_enabled_next {
    color: rgb(221, 218, 214) !important;
}
.paginate_disabled_previous:hover,
.paginate_enabled_previous:hover,
.paginate_disabled_next:hover,
.paginate_enabled_next:hover {
    text-decoration-color: initial !important;
}
.paginate_disabled_previous:active,
.paginate_enabled_previous:active,
.paginate_disabled_next:active,
.paginate_enabled_next:active {
    outline-color: initial;
}
.paginate_disabled_previous,
.paginate_disabled_next {
    color: rgb(168, 160, 149) !important;
}
.paginate_enabled_previous {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_configurable_reports/1656028964/datatable/back_enabled");
    background-color: initial;
}
.paginate_enabled_previous:hover {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTkiIGhlaWdodD0iMTkiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQk1BQUFBVENBWUFBQUJ5VURiTUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeUpwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVNQzFqTURZd0lEWXhMakV6TkRjM055d2dNakF4TUM4d01pOHhNaTB4Tnpvek1qb3dNQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5UTlNCTllXTnBiblJ2YzJnaUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk1VWXdRekJHT1VVeFFqTkZNVEZGTVRnek1qazROVGczUmpWR01UZzBSRElpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TVVZd1F6QkdPVVl4UWpORk1URkZNVGd6TWprNE5UZzNSalZHTVRnMFJESWlQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRG94UmpCRE1FWTVRekZDTTBVeE1VVXhPRE15T1RnMU9EZEdOVVl4T0RSRU1pSWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEb3hSakJETUVZNVJERkNNMFV4TVVVeE9ETXlPVGcxT0RkR05VWXhPRFJFTWlJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BwSTYzV3NBQUFIVFNVUkJWSGphWXZ6Ly96OER0UUFUQXhVQlZRMWpBSG1UQks4eUJrWGZzZmFQdUtZSGRRZ2pGSVBOSU1WbGpFQkQ5SUZVSlZDbkNaRFBCc1RNeUFwWWlERWxJUEtHTEJNVFN4UWpJM011MEREcG56L2Y3Z01LOHdEeE55RCtDY1IvQ1JybUczYVJuNFdGMjUrUmtURURhSkFsVFB6N3R4Y2dnL2loaHZ6QzZ6STcxeFVzSW1JbVRrQlhaQUlOOFFBS2NTREwvL3I1SG1RUUh4Qi9ob1VaaG1FK29lZDQyZGo0VElIeTRZeU1USUZBV2hTYlpYOStmK1VDVXV6UU1NTnFHQ013WUxtQWtSTEl4TVNjaHMvNy8vNy9aVUVQZkl4MGRuUmZ3cnNuRHpkUCtmenhUdTJmUDEvdjRVbFFqTmhFVWJ6NS90MWxodE5IQzE4Qm1hdmxsVU1lS3FwRWhQTUxhRnF6c0hJTGtKTURRS24zRHlqQ0h0NWRjK1BBenBDWjF5NU5tUGJoM1pVei8vNzkva1hJTUJZMGcvNUIwODFIR1B2MjlkbGZIdDFmZjFWRkk5RktSdDdibFlkWFFZMkprWVVScXA0Qlg2SUZHZkFiU29OYzhoMFUvVDkvdlBsMDlVTDNtOGNQTmw3UU1TeDMvL0hqOVF1b0QvNGpHOG9JeTVmQWhJa3RDSmloMllZYm1raUZvV3lRWmErQitBWFVGNzlCNXVETEFmK2d0djZGdWhia3lpOVF3NWlnV2VrWFZCMVJlUlBtamQ5SWhuNkJ1dmdQMUxEL0pHVjBKQmZDd3BJSnlTSzRZUUFCQmdBWk1LMkxjT2RSSFFBQUFBQkpSVTVFcmtKZ2dnPT0iIC8+PC9zdmc+");
    background-color: initial;
}
.paginate_disabled_previous {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_configurable_reports/1656028964/datatable/back_disabled");
    background-color: initial;
}
.paginate_enabled_next {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_configurable_reports/1656028964/datatable/forward_enabled");
    background-color: initial;
}
.paginate_enabled_next:hover {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTkiIGhlaWdodD0iMTkiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQk1BQUFBVENBWUFBQUJ5VURiTUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeUpwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVNQzFqTURZd0lEWXhMakV6TkRjM055d2dNakF4TUM4d01pOHhNaTB4Tnpvek1qb3dNQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5UTlNCTllXTnBiblJ2YzJnaUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk1VWXdRekJHT1VFeFFqTkZNVEZGTVRnek1qazROVGczUmpWR01UZzBSRElpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TVVZd1F6QkdPVUl4UWpORk1URkZNVGd6TWprNE5UZzNSalZHTVRnMFJESWlQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRG94UmpCRE1FWTVPREZDTTBVeE1VVXhPRE15T1RnMU9EZEdOVVl4T0RSRU1pSWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEb3hSakJETUVZNU9URkNNMFV4TVVVeE9ETXlPVGcxT0RkR05VWXhPRFJFTWlJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BodzBNb29BQUFIWFNVUkJWSGphWXZ6Ly96OER0UURqNERlTUVRaUNvdTk2TUREOE4vejQvdWJzdmR1ODN3S0YvME14UVFBeWh3blo0SDkvZjhrek1ySzA4Z21vci9RS09oR2lwVmZBRHhSbkJza1JZeUNLWVgvK2ZBTnJZbUppY2VUZ0ZKdXZxcGs2eDkzL2dETlFpQldxbHBGWXc1aisvZnZGRERlWmtZbUxoWlU3bUp0SFpxRnYyTVUrSjg5TldrQmhGalE5T0ExaitQZnZOek5Hb0RLeVNMQ3g4V2Z6QzJpczlRNCtuV2Z2dGtwZVVFaVhGWnNybVZBajR4OU9iekF4czZseGNJcjI4UEtyVkN1cVJzb2hlUjBPV0lpTjlyOS9mMzc2K3ZuaDBmZHZMNTE1OW1RUEcxQ0lIZVFaNUJobklSemxmLzU4K25ENzVxUDdHdzdkdmJuZ0JORFFwMUJEV05DOWl0ZXdyMThlUDNyNmFOdkpPemNXWFBqKzdmbHJvTkFYSVA0T3hMK1FYSVhkTUdBTWdzTUFtRVRlUFgreTk5aWQ2M011dm50NzhSbFE2Q01RdjBYQ240RDRKOVJBN0liOS8vLzM5ODhmYjQ5Y3VkQzErY0dkbGUraExuaUhaQWpJMEs5UWcvNmc1eEJrdy81LytmVGc0dmZ2THo0RERYb0JsUU41NncwUXY0ZXlmd0R4YjF6WkREbHZnalR6QXJFUWxQNEx4SitocnZrT05lUWZycndLTWdmWk1HWm9kSE5CMDlCdnFFdCtRQTMrVHlpam81UWEwRXdOOC9vL3FDSC9pQ2s1c0JuR2dKUjIvcVBSQkEwRENEQUFrK1hjZjdGTGpBOEFBQUFBU1VWT1JLNUNZSUk9IiAvPjwvc3ZnPg==");
    background-color: initial;
}
.paginate_disabled_next {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_configurable_reports/1656028964/datatable/forward_disabled");
    background-color: initial;
}
.paging_full_numbers a:active {
    outline-color: initial;
}
.paging_full_numbers a:hover {
    text-decoration-color: initial;
}
.paging_full_numbers a.paginate_button,
.paging_full_numbers a.paginate_active {
    border-color: rgb(72, 78, 81);
    color: rgb(200, 195, 188) !important;
}
.paging_full_numbers a.paginate_button {
    background-color: rgb(43, 47, 49);
}
.paging_full_numbers a.paginate_button:hover {
    background-color: rgb(53, 57, 59);
    text-decoration-color: initial !important;
}
.paging_full_numbers a.paginate_active {
    background-color: rgb(0, 29, 112);
}
.dataTables_processing {
    border-color: rgb(58, 62, 65);
    color: rgb(168, 160, 149);
    background-color: rgb(24, 26, 27);
}
.sorting {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_configurable_reports/1656028964/datatable/sort_both");
    background-color: initial;
}
.sorting_asc {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_configurable_reports/1656028964/datatable/sort_asc");
    background-color: initial;
}
.sorting_desc {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_configurable_reports/1656028964/datatable/sort_desc");
    background-color: initial;
}
.sorting_asc_disabled {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_configurable_reports/1656028964/datatable/sort_asc_disabled");
    background-color: initial;
}
.sorting_desc_disabled {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_configurable_reports/1656028964/datatable/sort_desc_disabled");
    background-color: initial;
}
table.dataTable thead th:active,
table.dataTable thead td:active {
    outline-color: initial;
}
.CodeMirror {
    color: rgb(232, 230, 227);
}
.CodeMirror-scrollbar-filler,
.CodeMirror-gutter-filler {
    background-color: rgb(24, 26, 27);
}
.CodeMirror-gutters {
    border-right-color: rgb(58, 62, 65);
    background-color: rgb(29, 31, 32);
}
.CodeMirror-linenumber {
    color: rgb(168, 160, 149);
}
.CodeMirror-guttermarker {
    color: rgb(232, 230, 227);
}
.CodeMirror-guttermarker-subtle {
    color: rgb(168, 160, 149);
}
.CodeMirror-cursor {
    border-left-color: rgb(140, 130, 115);
    border-right-color: initial;
}
.CodeMirror div.CodeMirror-secondarycursor {
    border-left-color: rgb(66, 71, 74);
}
.cm-fat-cursor .CodeMirror-cursor {
    background-image: initial;
    background-color: rgb(44, 127, 16);
    border-color: initial !important;
}
.cm-fat-cursor-mark {
    background-color: rgba(48, 192, 0, 0.5);
}
.cm-animate-fat-cursor {
    border-color: initial;
    background-color: rgb(44, 127, 16);
}
.cm-tab {
    text-decoration-color: inherit;
}
.CodeMirror-ruler {
    border-left-color: rgb(62, 68, 70);
}
.cm-s-default .cm-header {
    color: rgb(51, 125, 255);
}
.cm-s-default .cm-quote {
    color: rgb(97, 255, 97);
}
.cm-negative {
    color: rgb(223, 81, 81);
}
.cm-positive {
    color: rgb(106, 222, 106);
}
.cm-link {
    text-decoration-color: initial;
}
.cm-strikethrough {
    text-decoration-color: initial;
}
.cm-s-default .cm-keyword {
    color: rgb(237, 109, 255);
}
.cm-s-default .cm-atom {
    color: rgb(119, 102, 238);
}
.cm-s-default .cm-number {
    color: rgb(140, 236, 197);
}
.cm-s-default .cm-def {
    color: rgb(51, 125, 255);
}
.cm-s-default .cm-variable-2 {
    color: rgb(102, 186, 255);
}
.cm-s-default .cm-variable-3,
.cm-s-default .cm-type {
    color: rgb(109, 255, 200);
}
.cm-s-default .cm-comment {
    color: rgb(255, 170, 85);
}
.cm-s-default .cm-string {
    color: rgb(238, 90, 90);
}
.cm-s-default .cm-string-2 {
    color: rgb(255, 102, 26);
}
.cm-s-default .cm-meta {
    color: rgb(178, 172, 162);
}
.cm-s-default .cm-qualifier {
    color: rgb(178, 172, 162);
}
.cm-s-default .cm-builtin {
    color: rgb(136, 85, 255);
}
.cm-s-default .cm-bracket {
    color: rgb(157, 148, 136);
}
.cm-s-default .cm-tag {
    color: rgb(140, 255, 121);
}
.cm-s-default .cm-attribute {
    color: rgb(82, 145, 255);
}
.cm-s-default .cm-hr {
    color: rgb(168, 160, 149);
}
.cm-s-default .cm-link {
    color: rgb(82, 145, 255);
}
.cm-s-default .cm-error {
    color: rgb(255, 26, 26);
}
.cm-invalidchar {
    color: rgb(255, 26, 26);
}
.CodeMirror-composing {
    border-bottom-color: initial;
}
div.CodeMirror span.CodeMirror-matchingbracket {
    color: rgb(73, 255, 73);
}
div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: rgb(223, 94, 94);
}
.CodeMirror-matchingtag {
    background-image: initial;
    background-color: rgba(204, 120, 0, 0.3);
}
.CodeMirror-activeline-background {
    background-image: initial;
    background-color: rgb(30, 33, 34);
}
.CodeMirror {
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.CodeMirror-scroll {
    outline-color: initial;
}
.CodeMirror-sizer {
    border-right-color: transparent;
}
.CodeMirror-gutter-wrapper {
    background-image: none !important;
    background-color: initial !important;
    border-color: initial !important;
}
.CodeMirror-gutter-wrapper ::selection {
    background-color: transparent;
}
.CodeMirror pre {
    background-image: initial;
    background-color: transparent;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
}
.CodeMirror-code {
    outline-color: initial;
}
.CodeMirror-selected {
    background-image: initial;
    background-color: rgb(45, 49, 51);
}
.CodeMirror-focused .CodeMirror-selected {
    background-image: initial;
    background-color: rgb(40, 44, 45);
}
.CodeMirror-line::selection,
.CodeMirror-line > span::selection,
.CodeMirror-line > span > span::selection {
    background-image: initial;
    background-color: rgb(40, 44, 45);
}
.cm-searching {
    background-color: rgba(153, 153, 0, 0.4); 
}
span.CodeMirror-selectedtext {
    background-image: none; background-color: initial; 
}
.block_lp ul {
    list-style-image: initial; 
}
.block_navigation .block_tree .depth_1 > .tree_item.branch {
    background-image: none; 
}
.block_navigation .block_tree [aria-expanded="true"] {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/expanded"); 
}
.block_navigation .block_tree [aria-expanded="false"] {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/collapsed"); 
}
.block_navigation .block_tree [aria-expanded="true"].emptybranch {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/collapsed_empty"); 
}
.block_navigation .block_tree [aria-expanded="false"] p.loading {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/i/loading_small"); 
}
.block_private_files ul, .block_private_files li {
    list-style-image: initial; 
}
.block_private_files [role="treeitem"]:not([aria-expanded]) {
}
.block_private_files [role="group"] {
    background-image: repeating-linear-gradient(to top,
    rgba(0, 0, 0, 0.5) 0px,
    rgba(0, 0, 0, 0.5) 1px,
    rgba(24, 26, 27, 0) 1px,
    rgba(24, 26, 27, 0) 2px); 
}
.block_rss_client .list li {
    border-top-color: initial; 
}
.block_settings .block_tree [aria-expanded="true"] {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/expanded"); 
}
.block_settings .block_tree [aria-expanded="false"] {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/collapsed"); 
}
.block_settings .block_tree [aria-expanded="true"].emptybranch {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/collapsed_empty"); 
}
.block_settings .block_tree [aria-expanded="false"] p.loading {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/i/loading_small");
}
.block_site_main_menu li .buttons {
    border-color: initial;
    background-color: inherit;
}
.block_stash nav .nav-button {
    text-decoration-color: initial;
    color: rgb(200, 195, 188);
}
.block_stash nav .nav-button:hover {
    background-image: initial;
    background-color: rgb(34, 36, 38);
}
.block-stash-item .item-image .item-label,
.block-stash-item .item-image .item-quantity {
    color: rgb(232, 230, 227);
    background-color: rgba(0, 0, 0, 0.6);
}
.block-stash-item.item-small:hover .item-label,
.block-stash-item.item-xsmall:hover .item-label {
    background-color: rgb(0, 0, 0); 
}
.path-blocks-stash .block-stash-item-drops {
    list-style-image: initial; 
}
.block-stash-snippet-ui [name="snippet"] {
    background-color: rgb(24, 26, 27);
}
.block-stash-trade {
    border-color: rgb(67, 73, 76);
}
.trade-label {
    border-bottom-color: rgb(67, 73, 76);
    background-image: initial;
    background-color: rgb(31, 34, 35);
}
.dimmed {
    color: rgb(168, 160, 149);
}
#block_stash_full_trade_form {
    border-color: rgb(53, 57, 59);
}
.block_stash_item_box {
    border-color: rgb(53, 57, 59);
}
.block-stash-will-do-for-now {
    border-color: rgb(53, 57, 59);
}
.block_xp .xp-border-gray-100 {
    --tw-border-opacity: 1;
    border-color: rgb(51, 55, 57);
}
.block_xp .xp-bg-yellow-200 {
    --tw-bg-opacity: 1;
    background-color: rgb(90, 73, 2);
}
.block_xp .xp-bg-gray-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(30, 32, 34);
}
.block_xp .xp-text-gray-500 {
    --tw-text-opacity: 1;
    color: rgb(158, 149, 137);
}
.block_xp .xp-text-gray-900 {
    --tw-text-opacity: 1;
    color: rgb(214, 211, 205);
}
.block_xp .xp-text-gray-600 {
    --tw-text-opacity: 1;
    color: rgb(177, 170, 160);
}
.block_xp .xp-no-underline {
    text-decoration-color: initial;
}
.block_xp-level {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_xp/1656028964/10");
    background-color: initial;
    color: rgb(232, 230, 227);
}
.block_xp-level.level-1 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_xp/1656028964/1");
}
.block_xp-level.level-2 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_xp/1656028964/2");
}
.block_xp-level.level-3 {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PGZpbHRlciBpZD0iZGFya3JlYWRlci1pbWFnZS1maWx0ZXIiPjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwLjI0OSAtMC42MTQgLTAuNjcyIDAuMDAwIDEuMDM1IC0wLjY0NiAwLjI4OCAtMC42NjQgMC4wMDAgMS4wMjAgLTAuNjM2IC0wLjYwOSAwLjI1MCAwLjAwMCAwLjk5NCAwLjAwMCAwLjAwMCAwLjAwMCAxLjAwMCAwLjAwMCIgLz48L2ZpbHRlcj48L2RlZnM+PGltYWdlIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjZGFya3JlYWRlci1pbWFnZS1maWx0ZXIpIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBRElDQVlBQUFDdFdLNmVBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQ0lwSlJFRlVlTnJzblVGMkdrY1Foa2Q2MmVNYm1CdEFUaUN5aVpZbUp4QjVMMTVIMlhrWHNySjJ4bXN2akU1Z3RQUXF3d21DYm9CdklKOUE2YlpxN0JGQ01EQTlNMVhkMy9jZXhwWmxqSnI1cWZybzZaNlQrL3Y3RFBUdyt2eHE3TzVXSHo2L1dUTWEzWFBLRUtnS3g5RGRmWEszaGZ2OUMwYUVnTUNQY1BUZFhTNS9ITGpiakZFaElQQVFEbDh0RnU3V0szMzV3bjE5d3VnUUVIaW9Gb010WC84b2JSY1FrR1NyeDZXdkZqdStKY2RIQ0VpcTRSaTV1M2Q3dnExWGNoTWdJRWxKK2FMaXR3L2M5ODhaTlFLU3NwVHZBMmtuSU1rd2YwYks5NEcwRTVEb3E4ZlUzYjJxOFJCSU93R0pOaHorTkpLL2F6NU03d0IzQVFKaUpoeERhYTFDY09ZZWo1bjJGampoWk1YV3BEdy8wanQyOGZ1SHoyL21qREFWSkZVcDM4Y01hU2NnMXF2SHJLYVU3L1VScEoyQVdBM0h4TjM5MmZCLzh4SnBKeUJXcGJ3dGtVYmFrWFJ6VXI2U2QvYzJRZHFwSUNaWWRCQU9wSjJBbUpIeXM0NytlNlNkZ0NRdjVWV2tuVGFMZ0tpVThvOUtuczRyT2VjTGtIUTFVcjdPRGp0OXZRMStjOUxPUjhCVWtNN0pGWWJETTBmYUNValgxY1AzK3dPbFQ2OG5JVUhhQ1VoblVuNmgvR2tPa0hZQ2tycVVJKzFJdXFwdzlMT0htZktlc2FlT3RCT1F4c1BSMU5xT052anFia00yeHFiRmFwS1owWEFVMHM1TU93RnBySHJzMndYUkFteU1UWXZWU0RoRzd1N2ZpSDZrdjF5clJWQUlTTkpTdm85ZlhFaHlYbUZhckxwU3ZvZ3dISm40U0o5WG1ZRFVZVzVZeXBGMkF0Sm85WmhtelcyNGdMVGpJS2JENFhkQi9KVFFqNHkwRTVESzRmQ25rZVNSZXNjdWZuWWhXWEVFRUpCOVVwNUg3QjI3OERQdGZSZVNPNDRFSENSRkthOGk3VG1IQUFGNXJubzB1UXVpR1dubmFsYTBXTnZDTWNuc25MN2VCdXl4UlVDU2wzS2tuWUJVa3ZJdWRrRkUybkVRRXl3SUI5Sk9RSjZYOGpOeWdMVFRZaUhsU0RzQk9VaksvK09ZUDloSFJxbEplM0lCVWJ3TG9nVytaQTlyMnBPUjloUWRKQ2NjUjVQYzFheVNxU0RTVmswelpzcERjTzJxeUlTQXhDUGpmck9GQWNkMThIYkxTL3NzNXBZcnlvRElNdElpR0xSVExWUVVDY3FLZ09nT3hraENRUnZWRFV0ZlZXTDZPTmg4UU9SVHFiSDRCVFBpdEY4RXBOUkdUU1VjdEZHMFh3UkVnakdXTm9wVFJHaS9DRWlwamJvVThhYU5zdDkrelNRc2R3U2tYakNHRW93TGpxdm84S2V1K0VuSHFlYmQ1bFVHaExtTEpOdXZtY1pybDZnSkNITVhvTEg5Nmp3Z3pGMkE1dmFyazRBd2R3RlcycTlXQThMY0JkUnN2L3l4czJpei9Xb2xJTXhkUU9EMmF5NVZaVzAySU14ZFFBdmNTRkJ5TXdGaDdnSmlhcitDQllTNUM0aXgvYW9WRUpIdW9vMUN1aUc2OXV1b2dEQjNBZGJhcjJOUGtxd2NFSkh1b28xQ3VzRmkrMVhNMHErREJZUzVDNGlRYXdsS2ZuUkFSTHI5amJrTGlKVmI4WlI1cFlBd2R3RzBYNC9icjI4QkVlbjJvV0R1QW1pL1N1M1h5UisvdnZVVjR4M2pBdkMwL2ZKYmo4Nmx4QURBRC95RTk4ZFRtWnFmTWg0QVQ5M2syK2JWTGlSZVVMNHdIZ0NQdUN6djdqNWhQQUMrcy9RZi8zNFBpRmo3RGVNQzhGQTkvQytuVzc2SXNFUHF2QzkyZ253VUVKa2ttVEUra0xLWVo2VVByYlpkWVFwaGg2UmJxL0tpcXljQmtiKzhaSndnVlRFdmYySHJOUXBsaTVVbDR3VXBpdm5lZ0FnVHhndFNGUE5LQVJGaGY4KzRRV3BpWHJXQ1pQS1ArTmdYa2hMenlnRkIyQ0ZGTVQra2dtVHlqeEYyU0ViTUR3cElxZFVDU0VMTUR3NkluS2QxelhoQ0NtSitUQVVwU2hIQ0R0R0wrVkVCWVdFVnBDTG14MWFRWW1IVkxlTUxNWXY1MFFFNTlNRUJMSXA1cllDd3NBcGlGL082RlFSaGg2akZ2SFpBV0ZnRk1ZdDVpQXJpUStKTEZRdXJJRG94RHhJUWhCMWlGZk5nQVdGaEZjUW81aUVyaUdmQ2F3QXhpWG5RZ0lpdy84UHJBTEdJZWVnSzRwbGxmT3dMK3BqV2ZZQWdBV0ZoRlNqa3V1NFZia05XRUJaV2dUWXhEL0tHZlJyNGlWRkZRRVZyVlVmTXl4eDFuZlJkdkQ2LzhwV0VTN2xCVjl5NmNBeERQZGhwQTArUTg3U2dTNEoyTWNFRHdzSXFzQzdtVFZjUUZsYUJhVEZ2UENBSU8xZ1c4MFlsSFdFSDYyTGVWZ1hKTXJZdUJZTmkzbHBBV0ZnRkZzVzh6UXJDd2lvd0orYXRCa1NZOEZxQ0ZURnZUZEkzaE4yWHdUTmVVOUF1NWwxVUVLb0ltQkh6VGdMQ3dpcXdJdVpkVlJBUGw1Z0c5V0xlV1VBNFR3c3NpSGtua282d2d4VXg3N0xGYWxXd0FERTNHUkRaeEl0TFRJTktNZGRRUWJLTTg3UkFxWmlyQ0FqQ0RsckZ2SE5KM3hCMjMyNE5PQVpBaTVocmFiRVFkbEIvZkhRZUVDNHhEZHJFWEZzRnlYQVIwQ1RtNmdJaTUya0JsRmwxSmVZYUt3akFKbmNhbmdRQkFiVVZoSUE4aG4yMFFCMmFBbkxIeXdFRUJJQVdDd0JKai9JZEF3QUhBU29JTFJaWVJ0WU1FUkFBV2l3Y0JBZ0lEZ0xCV0JJUUFDb0lBQUhCUVNBMGF3S3lnWVp6LzRHQTBHSUJFQkNBT0FQQ21oRHc1QVJrTzNnSVVFRUFDQWpBOGF3SnlIYVlDd0ZWMjBEaElBQzBXQUFFQk9KZ1NVQndFS0NDNENCQVFBQkNzeVlnQUFRRUJ3RmFyS0N3SmdRSUNNQnVjZ0lDUUFVNUd0YUVBQUhaQVI2U05pc0NBdkFNMmo2b0lTQUF4Z0xDWEVpNmZDVWdPQWdZZW5Pa3hRSWdJQUE0Q05CaTRTQVFOWGNFQklBV0M0QUtnb01BRHRJMnJBa0JBZ0pnaEo4WUFoWDRVeXh5dWZrS09uYTNrYnYxYUxFSXlEYjhtcEJCSW9ISVhWdTVlV0RNL1Mrdno2K0dFaFFmbUxQWTA2R3h2ZFlha0JnOVpGa0tSRjd4Z0ZuSnUrcE1Bak1xQldhUUFTMVdTb0dvRUppaTZreGRXRjVJV0lyQXZJeWdxaEtRaUxtVmczY1JLaEFWMnBHRjNDNWRZUHFsd0l3TUJtWkZRQTRickRNamdTaXFSS2R0b1Z4VFk3N0ZYMGFKQ2o4T2tuSWdhdmpMS0FYaHA4VnFuaThiZ1ZoYi9tRksvcEp0K010SWlmRG5CSVJBYUFsTDJWK0t3SXdOKzB1U0R0STB4VnpFSXZaQVZBeE0yVi82RzRIcEVaRDRIV1RmNUJ3OEZ2NVp5VitHcGNBMDVTOXJBdEkrTndRaXFQQm5KZUVmQi9ZWEF0SUN3U2Zub0xMd2oyUDBGK3NPUWlEMENYOS9JekNtL2VYay92NWU1Uk56QTczdGlkMldBckhnOE5UUHhvVGxxeDFCTzZHQ0hJNnB5VG5ZNlM4bVQ3ajhYNEFCQU51NzU5ako5alNVQUFBQUFFbEZUa1N1UW1DQyIgLz48L3N2Zz4=");
}
.block_xp-level.level-4 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_xp/1656028964/4");
}
.block_xp-level.level-5 {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PGZpbHRlciBpZD0iZGFya3JlYWRlci1pbWFnZS1maWx0ZXIiPjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwLjI0OSAtMC42MTQgLTAuNjcyIDAuMDAwIDEuMDM1IC0wLjY0NiAwLjI4OCAtMC42NjQgMC4wMDAgMS4wMjAgLTAuNjM2IC0wLjYwOSAwLjI1MCAwLjAwMCAwLjk5NCAwLjAwMCAwLjAwMCAwLjAwMCAxLjAwMCAwLjAwMCIgLz48L2ZpbHRlcj48L2RlZnM+PGltYWdlIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjZGFya3JlYWRlci1pbWFnZS1maWx0ZXIpIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBRElDQVlBQUFDdFdLNmVBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQ0pkSlJFRlVlTnJzbmRGMUdrY1VobGM2ZWNkdjBmR0w2UUJTQWFTQVNLUUM0UXFpVkJCU2dYRUZSaFVZdVlFc0ZRUjFnQjZpNDBlcEFqSWozWlVYaEdEWm5kMjlNL045NXhBU0ltTTA3TWU5UDdNemU3SmVyeFBRdy8zWitjamNMZDkvLzdaaU5Ocm5sQ0ZRSlVmZjNIMDF0N241OTNlTUNJTEFEem02NWk2Vi8reVoyNVJSUVJCNGxzTldpN201ZFhJUFg1ckh4NHdPZ3NCenRlanRlUHlMdEYyQUlORldqeXRiTGZiOFNFb2VRWkJZNVJpYXUwOEhmcXlUeXlhQUlGR0Y4bm5CSCsrWm41OHhhZ2dTY3lnL0JLRWRRYUpoOWtZb1B3U2hIVUdDcng0VGMzZFI0U2tJN1FnU3JCejJOSksvS2o1TjU0anNBZ2ppalJ4OWFhMWNNRERQeDB4N0E1eHdzbUpqb1R3dG1UdjI4Zkg5OTI4elJwZ0tFbXNvUDhTVTBJNGd2bGVQYWNWUWZqQ1BFTm9SeEZjNXh1YnVqNXIvbWcrRWRnVHhOWlEzRmFRSjdZUjA3MEw1VWo3ZG00VFFUZ1h4Z25rTGNoRGFFY1NiVUQ1bzZhOG50Q05JOUtHOFNHaW56VUlRbGFIOGk1S1hjeUhuZkFFaFhVMG9YeVhIbmI3ZUJMK2IwTTVYd0ZTUTFra1Z5bUdaRWRvUnBPM3FZZnY5bnRLWDF4RkpDTzBJMGxvb3YxVCtNbnVFZGdTSlBaUVQyZ25wcXVUb0pzOHo1UjNQWGpxaEhVRnFsNk91dFIxTjhHaHVmVGJHcHNXcWs2bW5jbVNoblpsMkJLbXRlaHphQmRFSDJCaWJGcXNXT1libTdwK0FmcVUvVGF1RktBZ1NkU2cveEs5R2twUjNtQmFyYWlpZkJ5aEhJbm1reTd1TUlGV1llUnpLQ2UwSVVtdjFtQ1QxYmJoQWFDZURlQzJIM1FYeGEwUy9NcUVkUVFyTFlVOGpTUVBOSGZ2NHhVaXk1QWhBa0VPaFBBMDRkK3pEenJSM2pTUVBIQWxra0JoRGVaSFFubklJSU1oYjFhUE9YUkM5Q2UxY3pZb1dhNWNjNDhTZjA5ZWJnRDIyRUNUNlVFNW9SNUJDb2J5TlhSQUo3V1FRTDVnakI2RWRRZDRPNVFNOElMVFRZaEhLQ2UwSWNsUW8vNWRqL3VnOE1vd3R0RWNuaU9KZEVIM2dMbmxlMHg1TmFJOHhnNlRJVVpyb3JtWVZUUVdSdG1xU01GUHVnbXRUUmNZSUVrNFl0NXN0OURpdW5iZGJOclJQUTI2NWdoUkVscEZtWXRCT05WQlJSSlFsZ3VnV1l5aFMwRWExdzhKV2xaQytEdlplRVBsV2FpVDVnaGx4Mmk4RXliVlJFNUdETm9yMkMwRkVqSkcwVVp3aVF2dUZJTGsyNmtxQ04yMlUvKzNYVkdSNVFKQnFZdlJGakV1T3ErQ3dwNjdZU2NlSjV0M21WUXJDM0VXVTdkZFU0N1ZMMUFqQzNBVm9iTDlhRjRTNUM5RGNmclVpQ0hNWDRFdjcxYWdnekYxQXhmYkxIanZ6SnR1dlJnUmg3Z0ljdDE4enFTb3Jid1ZoN2dJYTRFWkVTYjBSaExrTENLbjljaVlJY3hjUVl2dFZTUkFKM1ZrYlJlaUc0TnF2VW9Jd2R3Ryt0VjlsVDVJc0xJaUU3cXlOSW5TRGorMVhOa3UvY2lZSWN4Y1FJTmNpU2xwYUVBbmQ5c2JjQllUS3JlU1VXU0ZCbUxzQTJxL045dXRKRUFuZFZncm1Mb0QySzlkK25mejM4MisyWW54aVhBQmV0MTlXRVBhcUJYaURVNW1hbnpBVUFLK3p5VXRJTnpsa1JUQUgyT0JqZm5mM01lTUI4TUxDZnYzN0lvaWs5aHZHQmVDSnE2Y01zdVBCUjhZR0l1ZHp0aFBraGlBeVNUSmxmQ0RtWUo3a3ZyVGFkWVVwSzhnZDR3U3h0bGI1UlZldkJKSC9lY1U0UWF6QlBQL0F6bXNVeWhZckM4WUxZZ3ptQndVUnhvd1h4QmpNQ3draWdmMHo0d2F4QmZPaUZTU1JQOFRYdmhCVk1DOHNDSUVkWWd6bXgxU1FSUDR3Z1IyaUNlWkhDWkpydFFDaUNPWkhDeUxuYVYwem5oQkRNQzlUUWJKU1JHQ0g0SU41S1VGWVdBV3hCUE95RmNSS1lzL1R1bVY4SWVSZ1hscVFZNThjd01kZ1hra1FGbFpCNk1HOGFnVWhzRVBRd2J5eUlDeXNncENEdVlzS1lpV3hwWXFGVlJCY01IY2lDSUVkUWczbXpnUmhZUldFR014ZFZoRExtUGNBUWdybVRnV1J3UDQzN3dPRUVzeGRWeERMTk9Gclg5REhwT29UT0JHRWhWV2drT3VxVjdoMVdVRllXQVhhZ3JtVEQreFR4eStNS2dJcVdxc3F3VHhQcWV1azcrUCs3TnhXRWk3bEJtMXhhK1RvdTNxeTB4cGVJT2RwUVpzNDdXS2NDOExDS3ZBOW1OZGRRVmhZQlY0SDg5b0ZJYkNEejhHODFwQk9ZQWZmZzNsVEZTUkoyTG9VUEF6bWpRbkN3aXJ3TVpnMzFtTGxXaTByQ3BlWWhqcUNlYmVPN05GVWk1VXg1cjBFWDRKNTR4VkVxb2d0Z3dQZVU5QWV6TnVvSUZRUjhDYVl0eUlJQzZ2QWwyRGVWZ1d4Y0lscGNCSE1HNXVFYmxRUXp0TUNINEo1S3lHZHdBNitCUE0yVzZ4R0F4WVF6TDBVUkRieDRoTFRvREtZYTZnZ1NjSjVXcUEwbUtzUWhNQU9Xb041NnlGOUs3RGJkcXZITVFCYWdybVdGb3ZBRHVxUGo5WUY0UkxUb0MyWWE2c2dDVmtFTkFWemRZTEllVm9BZVpadEJYT05GUVJnbXdjTkx3SkJRRzBGUVpCTjJFY0wxS0ZKa0FmZURrQVFBRm9zQUVKNmtKOFlBR1FRb0lMUVlvSFB5Sm9oQkFHZ3hTS0RBSUtRUWNBWkN3UUJvSUlBSUFnWkJGeXpRcEF0Tkp6N0R3aENpd1dBSUFCaENzS2FFTENrQ0xJYmNnaFFRUUFRQktBOEt3VFpEWE1ob0dvYktESUlBQzBXQUlKQUdDd1FoQXdDVkJBeUNDQUlnR3RXQ0FLQUlHUVFvTVZ5Q210Q0FFRUE5cE1pQ0FBVnBEU3NDUUVFMlFNNUpHNldDQUx3QnRxK3FFRVFBTThFWVM0a1hoNFJoQXdDSG4wNDBtSUJJQWdBR1FSb3NjZ2dFRFFQQ0FKQWl3VkFCU0dEQUJta2FWZ1RBZ2dDNEFrL01RUXFzS2RZcEhLekZYUmtia056NjlCaUljZ3U3SnFRWGlSQ3BLYXQzRDR3WnZZZjkyZm5mUkhGQ2pNSTNRNk43YlZXUVVMTUlZdWNFR25CQTJZcG42cFRFV2FZRTZhWEFDMVdURUlVRUNhck9oTWp5enVSSlJQbVF3QlZGVUVDNWxZTzNya3JJUXEwSTNPNVhSbGh1amxoaGg0S3MwU1E0d1pyNElrUVdaVm90UzJVYTJyTWR1U1hZYVNCbnd3U3N4QVY4c3N3aHNCUGkxVS9kMXRDckh6K1pYTDVKZG5LTDBNbGdUOUZFSVRRSWtzK3YyVENqRHpPTDFGbWtMcko1aUxtb1F0UlVKaDhmdWx1Q2ROQmtQQXp5S0hKT2RnTS9OTmNmdW5uaEtrcnY2d1FwSGx1RU1KcDRFOXlnWC9rT0w4Z1NBTTRuNXlEd29GL0ZHSis4VDJESUlTK3dOL2RFc2JyL0hLeVhxOVZ2akF6MEx0ZTJHMU9pRG1IcDM2Mkppd3Y5b2gyZ2lESEMrTFY1QndVZWwrSHlZNFRMclVLOHI4QUF3Q3ZEKzYzQ2o0WnlBQUFBQUJKUlU1RXJrSmdnZz09IiAvPjwvc3ZnPg==");
}
.block_xp-level.level-6 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_xp/1656028964/6");
}
.block_xp-level.level-7 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_xp/1656028964/7");
}
.block_xp-level.level-8 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_xp/1656028964/8");
}
.block_xp-level.level-9 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/block_xp/1656028964/9");
}
.block_xp-level.level-badge,
.block_xp-level.level-badge.small {
    background-image: none;
    background-color: initial;
}
.block_xp nav .nav-button {
    text-decoration-color: initial;
    color: rgb(200, 195, 188);
}
.block_xp nav .nav-button:hover {
    background-image: initial;
    background-color: rgb(34, 36, 38);
}
.block_xp-recent-activity h5 {
    color: rgb(168, 160, 149);
}
.block_xp-recent-activity .activity-entry .date {
    color: rgb(168, 160, 149);
}
.block_xp-level-progress .xp-bar-wrapper {
    background-color: rgb(53, 57, 59);
}
.block_xp-level-progress .xp-bar {
    background-color: rgb(40, 124, 148);
    background-image: linear-gradient(rgb(28, 115, 141),
    rgb(41, 124, 148));
}
.block_xp-level-progress .xp-bar-txt {
    color: rgb(232, 230, 227);
    text-shadow: rgba(0, 0, 0, 0.25) 0px -1px 0px;
}
.block_xp-level-progress .xp-togo-txt {
    color: rgb(168, 160, 149);
}
.block_xp-table tr.highlight-row > td {
    background-color: rgb(14, 48, 65) !important;
}
.block_xp-page-nav .has-new {
    background-color: rgb(148, 35, 32);
}
.block_xp-rulepicker-content .rule {
    border-bottom-color: rgb(53, 57, 59);
}
.block_xp-rulepicker-content .rule:focus,
.block_xp-rulepicker-content .rule:hover {
    background-color: rgb(33, 36, 37);
}
.block-xp-filters-wrapper ul {
    list-style-image: initial;
}
.block-xp-filters-wrapper .filter {
    border-color: rgb(58, 62, 65);
}
.block-xp-filters-wrapper .filter-rules > .rule {
    border-color: initial;
}
.block-xp-filters-wrapper .filter-rules > .rule::before {
    border-color: initial;
}
.block-xp-filters-wrapper .rule-type-ruleset > .rule-definition {
    background-color: rgb(32, 35, 36);
}
.block-xp-filters-wrapper .rule-rules .rule {
    border-left-color: rgb(62, 68, 70);
}
.block-xp-filters-wrapper .rule-rules .rule::before {
    border-top-color: rgb(62, 68, 70);
}
.block-xp-filters-wrapper .rule-add::before,
.block-xp-filters-wrapper .rule-rules .rule:last-child::before {
    border-bottom-color: rgb(62, 68, 70);
    border-left-color: rgb(62, 68, 70);
    border-top-color: initial;
}
.block-xp-filters-wrapper .rule-rules .rule:last-child {
    border-color: initial;
}
.block_xp-level-grid .block_xp-level-no {
    color: rgb(232, 230, 227);
}
.block_xp-level-grid .block_xp-level-box {
    background-color: rgb(33, 36, 37);
}
.dir-rtl .block-xp-filters-wrapper .rule-rules .rule {
    border-left-color: initial;
    border-right-color: rgb(62, 68, 70);
}
.dir-rtl .block-xp-filters-wrapper .rule-add::before,
.dir-rtl .block-xp-filters-wrapper .rule-rules .rule:last-child::before {
    border-left-color: initial;
    border-right-color: rgb(62, 68, 70);
}
.block_xp .odd\:xp-bg-gray-100:nth-child(2n+1) {
    --tw-bg-opacity: 1;
    background-color: rgb(30, 32, 34);
}
.block_xp .hover\:xp-bg-gray-50:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(27, 29, 30);
}
.block_xp .hover\:xp-text-gray-900:hover {
    --tw-text-opacity: 1;
    color: rgb(214, 211, 205);
}
.video-js {
    color: rgb(232, 230, 227);
    background-color: rgb(0, 0, 0); 
}
.video-js[tabindex="-1"] {
    outline-color: initial;
}
.vjs-no-js {
    color: rgb(232, 230, 227);
    background-color: rgb(0, 0, 0);
}
.vjs-no-js a,
.vjs-no-js a:visited {
    color: rgb(110, 172, 207);
}
.video-js .vjs-big-play-button {
    border-color: rgb(48, 52, 54);
    background-color: rgba(34, 41, 50, 0.7);
}
.video-js:hover .vjs-big-play-button,
.video-js .vjs-big-play-button:focus {
    border-color: rgb(48, 52, 54);
    background-color: rgba(78, 93, 114, 0.5);
}
.video-js button {
    background-image: none;
    background-color: initial;
    border-color: initial;
    color: inherit;
    text-decoration-color: initial;
}
.video-js .vjs-modal-dialog {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8),
    rgba(24, 26, 27, 0));
    background-color: initial;
}
.vjs-menu li {
    list-style-image: initial;
}
.vjs-menu li.vjs-menu-item:focus,
.vjs-menu li.vjs-menu-item:hover,
.js-focus-visible .vjs-menu li.vjs-menu-item:hover {
    background-color: rgba(78, 93, 114, 0.5);
}
.vjs-menu li.vjs-selected,
.vjs-menu li.vjs-selected:focus,
.vjs-menu li.vjs-selected:hover,
.js-focus-visible .vjs-menu li.vjs-selected:hover {
    background-color: rgb(24, 26, 27);
    color: rgb(199, 194, 186);
}
.vjs-menu-button-popup .vjs-menu {
    border-top-color: rgba(123, 114, 101, 0.7);
}
.vjs-menu-button-popup .vjs-menu .vjs-menu-content {
    background-color: rgba(34, 41, 50, 0.7);
}
.video-js .vjs-control-bar {
    background-color: rgba(34, 41, 50, 0.7);
}
.video-js .vjs-control:focus::before,
.video-js .vjs-control:hover::before,
.video-js .vjs-control:focus {
    text-shadow: rgb(24, 26, 27) 0em 0em 1em;
}
.video-js .vjs-control-text {
    border-color: initial;
}
.video-js .vjs-play-progress {
    background-color: rgb(24, 26, 27);
}
.video-js .vjs-load-progress {
    background-image: initial;
    background-color: rgba(78, 93, 114, 0.5);
}
.video-js .vjs-load-progress div {
    background-image: initial;
    background-color: rgba(78, 93, 114, 0.75);
}
.video-js .vjs-time-tooltip {
    background-color: rgba(24, 26, 27, 0.8);
    color: rgb(232, 230, 227);
}
.video-js .vjs-progress-control .vjs-mouse-display {
    background-color: rgb(0, 0, 0);
}
.vjs-mouse-display .vjs-time-tooltip {
    color: rgb(232, 230, 227);
    background-color: rgba(0, 0, 0, 0.8);
}
.video-js .vjs-slider {
    background-color: rgba(78, 93, 114, 0.5);
}
.video-js .vjs-slider:focus {
    text-shadow: rgb(24, 26, 27) 0em 0em 1em;
    box-shadow: rgb(24, 26, 27) 0px 0px 1em;
}
.video-js .vjs-volume-level {
    background-color: rgb(24, 26, 27);
}
.video-js .vjs-volume-vertical {
    background-color: rgba(34, 41, 50, 0.7);
}
.vjs-poster {
    background-color: rgb(0, 0, 0);
}
.vjs-seek-to-live-control .vjs-icon-placeholder {
    color: rgb(157, 148, 136);
}
.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge .vjs-icon-placeholder {
    color: rgb(255, 26, 26);
}
.vjs-subtitles {
    color: rgb(232, 230, 227);
}
.vjs-captions {
    color: rgb(255, 202, 97);
}
.vjs-error .vjs-error-display::before {
    color: rgb(232, 230, 227);
    text-shadow: rgb(0, 0, 0) 0.05em 0.05em 0.1em;
}
.vjs-loading-spinner {
    border-color: rgba(123, 114, 101, 0.7);
}
.vjs-loading-spinner::before,
.vjs-loading-spinner::after {
    border-color: rgb(48, 52, 54) transparent transparent;
}
.vjs-seeking .vjs-loading-spinner::before,
.vjs-waiting .vjs-loading-spinner::before {
    border-top-color: rgb(48, 52, 54);
}
.vjs-seeking .vjs-loading-spinner::after,
.vjs-waiting .vjs-loading-spinner::after {
    border-top-color: rgb(48, 52, 54);
}
.vjs-modal-dialog.vjs-text-track-settings {
    background-color: rgba(34, 41, 50, 0.75);
    color: rgb(232, 230, 227);
}
.vjs-text-track-settings fieldset {
    border-color: initial;
}
.vjs-text-track-settings legend {
    color: rgb(232, 230, 227);
}
.vjs-text-track-settings .vjs-label {
    border-color: initial;
}
.vjs-track-settings-controls button:focus,
.vjs-track-settings-controls button:active {
    background-image: linear-gradient(0deg,
    rgb(24, 26, 27) 88%,
    rgb(78, 93, 114) 100%);
}
.vjs-track-settings-controls button:hover {
    color: rgba(199, 194, 186, 0.75);
}
.vjs-track-settings-controls button {
    background-color: rgb(24, 26, 27);
    background-image: linear-gradient(-180deg,
    rgb(24, 26, 27) 88%,
    rgb(78, 93, 114) 100%);
    color: rgb(199, 194, 186);
}
.vjs-resize-manager {
    border-color: initial;
}
.js-focus-visible .video-js :focus:not(.focus-visible) {
    outline-color: initial;
    background-image: none;
    background-color: initial;
}
.video-js :focus:not(:focus-visible),
.video-js .vjs-menu :focus:not(:focus-visible) {
    outline-color: initial;
    background-image: none;
    background-color: initial;
}
span.wrs_ok.wrs_plugin.wrs_filter {
    color: rgb(97, 255, 97);
}
span.wrs_error.wrs_plugin.wrs_filter {
    color: rgb(255, 49, 49);
}
table.wrs_plugin.wrs_filter,
th.wrs_plugin.wrs_filter,
td.wrs_plugin.wrs_filter,
tr.wrs_plugin.wrs_filter {
    border-color: rgb(140, 130, 115);
}
th.wrs_plugin.wrs_filter {
    background-color: rgb(34, 36, 38);
}
img.wrs_plugin.wrs_filter {
    border-color: initial;
}
.format-singleactivity .tree_item.orphaned a {
    color: rgb(255, 26, 26);
}
#benchmark h3 {
    border-color: rgb(58, 62, 65);
    background-image: initial;
    background-color: rgb(30, 32, 33);
}
#benchmark h3 span {
    color: rgb(85, 255, 85);
}
#benchmarkresult td.success {
    background-color: rgb(41, 60, 23);
}
#benchmarkresult td.warning {
    background-color: rgb(47, 40, 5);
}
#benchmarkresult td.danger {
    background-color: rgb(56, 22, 22);
}
#benchmarkresult .cell.c1 small {
    color: rgb(157, 148, 136);
}
#benchmarkresult .footer td {
    background-color: rgb(24, 26, 27);
}
#page-report-completion-index .export-actions {
    list-style-image: initial;
}
.report-eventlist-name {
    color: rgb(157, 148, 136);
}
table.flexible > tbody > tr:nth-child(n).newrow > td {
    background-image: initial;
    background-color: rgb(48, 52, 54);
}
#page-report-progress-index #completion-progress th,
#page-report-progress-index #completion-progress td {
    border-right-color: rgb(53, 57, 59);
}
#page-report-progress-index .progress-actions {
    list-style-image: initial;
}
.path-grade-report-grader .gradeparent .graderreportoverlay {
    background-color: rgb(24, 26, 27);
    border-color: rgb(62, 68, 70);
}
.path-grade-report-grader .gradeparent table {
    border-color: rgb(62, 68, 70);
}
.path-grade-report-grader .gradeparent .cell {
    border-color: rgb(62, 68, 70);
}
.path-grade-report-grader .gradeparent .user.cell .userpicture {
    border-color: initial;
}
.path-grade-report-grader .gradeparent tr:nth-child(n) td.overridden:nth-child(n) {
    background-color: rgb(73, 56, 13);
}
.path-grade-report-grader .gradeparent tr:nth-child(n) td.ajaxoverridden:nth-child(n) {
    background-color: rgb(81, 57, 0);
}
.path-grade-report-grader .gradeparent .excludedfloater {
    color: rgb(255, 26, 26);
}
.path-grade-report-grader .gradeparent .text {
    border-color: rgb(106, 99, 87);
}
.path-grade-report-grader .gradeparent .quickfeedback {
    border-color: rgb(140, 130, 115);
}
.path-grade-report-grader .yui3-overlay {
    border-color: initial;
    background-image: none;
    background-color: inherit;
}
.path-grade-report-grader .yui3-overlay {
    background-color: rgb(24, 26, 27);
    border-color: rgb(62, 68, 70);
}
.gradereport_history_usp .usp-ajax-content {
    border-top-color: rgb(62, 68, 70);
    border-bottom-color: rgb(62, 68, 70);
}
.gradereport_history_usp .usp-loading-lightbox {
    background-color: rgb(24, 26, 27);
}
.gradereport_history_usp .usp-user {
    border-top-color: rgb(53, 57, 59);
}
.gradereport_history_usp .usp-user:nth-child(2n+1) {
    background-color: rgb(27, 30, 31);
}
.gradereport_history_usp .usp-first-added {
    border-top-color: rgb(67, 73, 76);
}
.gradereport_history_usp .usp-more-results {
    border-top-color: rgb(67, 73, 76);
}
.path-grade-report-user .user-grade {
    border-color: initial;
}
.gradingform_guide-regrade {
    background-image: initial;
    background-color: rgb(71, 0, 0);
    border-color: rgb(179, 0, 0);
}
.gradingform_guide-restored {
    background-image: initial;
    background-color: rgb(54, 54, 0);
    border-color: rgb(179, 179, 0);
}
.gradingform_guide-error {
    color: rgb(255, 26, 26);
}
.gradingform_guide_editform .status {
    border-color: rgb(53, 57, 59);
}
.gradingform_guide_editform .status.ready {
    background-color: rgb(51, 58, 14);
    border-color: rgb(22, 111, 22);
}
.gradingform_guide_editform .status.draft {
    background-color: rgb(72, 71, 10);
    border-color: rgb(161, 161, 12);
}
.gradingform_guide .criterion {
    border-color: rgb(58, 62, 65);
}
.gradingform_guide .criterion.even {
    background-image: initial;
    background-color: rgb(32, 35, 37);
}
.gradingform_guide .plainvalue.empty {
    color: rgb(178, 172, 162);
}
.gradingform_guide.editor .delete input,
.gradingform_guide.editor .moveup input,
.gradingform_guide.editor .movedown input {
    border-color: initial;
}
.gradingform_guide.editor .criterion .controls .delete input {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/delete");
    background-color: transparent;
}
.gradingform_guide.editor .moveup input {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/up");
    background-color: transparent;
}
.gradingform_guide.editor .movedown input {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/down");
    background-color: transparent;
}
.gradingform_guide.editor .addcriterion input,
.gradingform_guide.editor .addcomment input {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/add");
    background-color: transparent;
    color: rgb(178, 172, 162);
    text-decoration-color: initial;
}
.gradingform_guide .criterion .description.error {
    background-image: initial;
    background-color: rgb(71, 0, 0);
}
.gradingform_guide.editor .pseudotablink {
    background-color: transparent;
    border-color: initial;
    color: transparent;
}
.gradingform_rubric_editform .status {
    border-color: rgb(53, 57, 59);
}
.gradingform_rubric_editform .status.ready {
    background-color: rgb(51, 58, 14);
    border-color: rgb(22, 111, 22);
}
.gradingform_rubric_editform .status.draft {
    background-color: rgb(72, 71, 10);
    border-color: rgb(161, 161, 12);
}
.gradingform_rubric .criterion {
    border-color: rgb(58, 62, 65);
}
.gradingform_rubric .criterion.even {
    background-image: initial;
    background-color: rgb(32, 35, 37);
}
.gradingform_rubric .criterion .levels .level {
    border-left-color: rgb(58, 62, 65);
}
.gradingform_rubric .criterion .levels .level.last {
    border-right-color: rgb(58, 62, 65);
}
.gradingform_rubric .plainvalue.empty {
    color: rgb(178, 172, 162);
}
.gradingform_rubric .criterion .levels .level .score {
    color: rgb(168, 160, 149);
}
.gradingform_rubric .criterion .levels .level.currentchecked {
    background-image: initial;
    background-color: rgb(60, 0, 0);
}
.gradingform_rubric .criterion .levels .level.checked {
    background-image: initial;
    background-color: rgb(20, 79, 0);
    border-color: rgb(112, 104, 92);
}
.gradingform_rubric.evaluate .criterion .levels .level:hover {
    background-image: initial;
    background-color: rgb(44, 175, 0);
}
.gradingform_rubric.editor .delete input,
.gradingform_rubric.editor .duplicate input,
.gradingform_rubric.editor .moveup input,
.gradingform_rubric.editor .movedown input {
    border-color: initial;
}
.gradingform_rubric.editor .criterion .controls .delete input {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/delete");
    background-color: transparent;
}
.gradingform_rubric.editor .criterion .controls .duplicate input {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/copy");
    background-color: transparent;
}
.gradingform_rubric.editor .levels .level .delete input {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/delete");
    background-color: transparent;
}
.gradingform_rubric.editor .moveup input {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/up");
    background-color: transparent;
}
.gradingform_rubric.editor .movedown input {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/down");
    background-color: transparent;
}
.gradingform_rubric.editor .addcriterion input,
.gradingform_rubric.editor .addlevel input {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/add");
    background-color: rgb(24, 26, 27);
    color: rgb(178, 172, 162);
    text-decoration-color: initial;
}
.gradingform_rubric .criterion .levels.error {
    border-color: rgb(179, 0, 0);
}
.gradingform_rubric .criterion .description.error,
.gradingform_rubric .criterion .levels .level .definition.error,
.gradingform_rubric .criterion .levels .level .score.error {
    background-image: initial;
    background-color: rgb(71, 0, 0);
}
.gradingform_rubric-regrade {
    background-image: initial;
    background-color: rgb(71, 0, 0);
    border-color: rgb(179, 0, 0);
}
.gradingform_rubric-restored {
    background-image: initial;
    background-color: rgb(54, 54, 0);
    border-color: rgb(179, 179, 0);
}
.gradingform_rubric-error {
    color: rgb(255, 26, 26); 
}
.gradingform_rubric.editor .pseudotablink {
    background-color: transparent; border-color: initial; color: transparent; 
}
.gradingpanel-gradingform_rubric [aria-checked="true"] {
    border-color: rgb(140, 130, 115);
}
.path-admin-mnet-service-enrol table.remotecourses th.categoryname {
    background-color: rgb(29, 32, 33);
}
.path-admin-mnet-service-enrol .collapsibleregioninner {
    border-color: rgb(58, 62, 65);
}
.qbehaviour_deferredcbm_slightlyunderconfident,
.qbehaviour_deferredcbm_slightlyoverconfident {
    color: rgb(255, 133, 133);
}
.qbehaviour_deferredcbm_underconfident,
.qbehaviour_deferredcbm_overconfident {
    color: rgb(255, 61, 61);
}
.qbehaviour_deferredcbm_judgementok {
    color: rgb(109, 255, 109);
}
span.strikeplagiarismreport span.rank10,
span.strikeplagiarismreport span.rank9,
span.strikeplagiarismreport span.rank8,
span.strikeplagiarismreport span.rank7,
span.strikeplagiarismreport span.rank6,
span.strikeplagiarismreport span.rank5,
span.strikeplagiarismreport span.rank4,
span.strikeplagiarismreport span.rank3,
span.strikeplagiarismreport span.rank2,
span.strikeplagiarismreport span.rank1 {
    color: rgb(232, 230, 227);
}
span.strikeplagiarismreport span.rank1 {
    background-image: initial;
    background-color: rgb(0, 0, 0);
}
span.strikeplagiarismreport span.rank2 {
    background-image: initial;
    background-color: rgb(0, 0, 0);
}
span.strikeplagiarismreport span.rank3 {
    background-image: initial;
    background-color: rgb(139, 31, 26);
}
span.strikeplagiarismreport span.rank4 {
    background-image: initial;
    background-color: rgb(171, 33, 31);
}
span.strikeplagiarismreport span.rank5 {
    background-image: initial;
    background-color: rgb(145, 18, 15);
}
span.strikeplagiarismreport span.rank6 {
    background-image: initial;
    background-color: rgb(191, 90, 12);
}
span.strikeplagiarismreport span.rank7 {
    background-image: initial;
    background-color: rgb(149, 117, 0);
}
span.strikeplagiarismreport span.rank8 {
    background-image: initial;
    background-color: rgb(113, 99, 0);
    color: rgb(200, 195, 188);
}
span.strikeplagiarismreport span.rank9 {
    background-image: initial;
    background-color: rgb(82, 82, 0);
    color: rgb(200, 195, 188);
}
span.strikeplagiarismreport span.rank10 {
    background-image: initial;
    background-color: rgb(82, 122, 42);
}
#page-admin-tool-behat-index .steps-definitions .step {
    border-color: rgb(53, 57, 59);
}
#page-admin-tool-behat-index .steps-definitions .steptype {
    color: rgb(110, 184, 238);
}
#page-admin-tool-behat-index .steps-definitions .stepregex {
    color: rgb(133, 255, 133);
}
.tool_brickfield_grid_item_shape {
    background-color: rgb(24, 26, 27);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 20px 0px;
}
.tool_brickfield_grid_heading {
    color: rgb(218, 215, 210);
}
.tool_brickfield_grid_content {
    color: rgb(218, 215, 210);
}
.tool_brickfield_advanced_button {
    color: rgb(232, 230, 227);
    background-color: rgb(51, 67, 142);
    border-color: rgb(48, 52, 54);
}
.tool_brickfield_advanced_button:hover {
    background-color: rgb(30, 43, 108);
}
.path-admin-tool-capability .comparisontable thead th {
    background-image: none;
    background-color: initial;
}
.path-admin-tool-capability .comparisontable tbody th {
    background-color: rgb(34, 36, 38);
    border-color: rgb(57, 62, 64);
}
.path-admin-tool-capability .comparisontable tbody th span {
    color: rgb(168, 160, 149);
}
.path-admin-tool-capability .comparisontable tbody td {
    border-color: rgb(57, 62, 64);
}
.path-admin-tool-capability .comparisontable .inherit {
    color: rgb(168, 160, 149);
}
.path-admin-tool-capability .comparisontable .allow {
    background-color: rgb(0, 82, 0);
    color: rgb(232, 230, 227);
}
.path-admin-tool-capability .comparisontable .prevent {
    background-color: rgb(138, 82, 3);
    color: rgb(232, 230, 227);
}
.path-admin-tool-capability .comparisontable .prohibit {
    background-color: rgb(109, 0, 0);
    color: rgb(232, 230, 227);
}
.path-admin-tool-filetypes .generaltable .deleted .c0 span {
    text-decoration-color: initial;
}
.path-admin-tool-health div#healthnoproblemsfound {
    border-color: rgb(140, 130, 115);
}
.path-admin-tool-health dl.critical dt,
.path-admin-tool-health dl.critical dd {
    background-color: rgb(134, 17, 1);
}
.path-admin-tool-health dl.significant dt,
.path-admin-tool-health dl.significant dd {
    background-color: rgb(169, 82, 6);
}
.path-admin-tool-health dl.annoyance dt,
.path-admin-tool-health dl.annoyance dd {
    background-color: rgb(175, 134, 6);
}
.path-admin-tool-health dl.notice dt,
.path-admin-tool-health dl.notice dd {
    background-color: rgb(124, 118, 16);
}
.path-admin-tool-health dl dt.solution,
.path-admin-tool-health dl dd.solution,
.path-admin-tool-health div#healthnoproblemsfound {
    background-color: rgb(73, 147, 50);
}
.path-admin-tool-health dl.healthissues dt,
.path-admin-tool-health dl.healthissues dd {
    border-color: rgb(140, 130, 115); 
}
.path-admin-tool-health dl.healthissues dt {
    border-bottom-color: initial; 
}
.path-admin-tool-health dl.healthissues dd {
    border-top-color: initial; 
}
.path-admin-tool-lp [data-region="managecompetencies"] ul[data-enhance="tree"], .path-admin-tool-lp [data-region="plans"] ul[data-enhance="tree"], .path-admin-tool-lp [data-region="competencylinktree"] ul[data-enhance="linktree"], .path-badges [data-region="competencylinktree"] ul[data-enhance="linktree"], .path-admin-tool-lp [data-region="competencymovetree"] ul[data-enhance="movetree"] {
    border-color: rgb(62, 68, 70);
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px inset; 
}
.path-admin-tool-lp [data-region="competencylinktree"] ul [aria-selected="true"] > span, .path-badges [data-region="competencylinktree"] ul [aria-selected="true"] > span, .path-admin-tool-lp [data-region="competencymovetree"] ul [aria-selected="true"] > span, .path-admin-tool-lp [data-region="plans"] ul [aria-selected="true"] > span, .path-admin-tool-lp [data-region="managecompetencies"] ul [aria-selected="true"] > span {
    background-color: rgb(42, 46, 47); 
}
.path-admin-tool-lp [data-region="competencylinktree"] ul [tabindex="0"] > span, .path-badges [data-region="competencylinktree"] ul [tabindex="0"] > span, .path-admin-tool-lp [data-region="competencymovetree"] ul [tabindex="0"] > span, .path-admin-tool-lp [data-region="plans"] ul [tabindex="0"] > span, .path-admin-tool-lp [data-region="managecompetencies"] ul [tabindex="0"] > span {
    border-color: rgb(0, 136, 205);
}
.path-admin-tool-lp span.currentdragtarget {
    border-color: initial;
}
.tool-lp-sub-menu {
    list-style-image: initial;
}
.tool-lp-menu .tool-lp-sub-menu .menu-focus a {
    color: rgb(232, 230, 227);
    text-decoration-color: initial;
    background-color: rgb(0, 84, 126);
    background-image: linear-gradient(rgb(0, 90, 134),
    rgb(0, 76, 114)); 
}
.user-evidence-documents {
    list-style-image: initial; 
}
[data-region="user-evidence-list"] .user-evidence-competencies, [data-region="user-evidence-list"] .user-evidence-documents {
    list-style-image: initial;
}
#page-admin-tool-messageinbound-index .handler-function {
    color: rgb(157, 148, 136);
}
.eupopup-container {
    background-color: rgba(19, 20, 21, 0.9);
    color: rgb(222, 219, 215);
}
.eupopup-closebutton {
    color: rgb(173, 166, 156);
}
.eupopup-button:hover,
.eupopup-button:focus {
    text-decoration-color: initial;
    color: rgb(247, 170, 48);
}
.eupopup-closebutton:hover,
.eupopup-closebutton:active {
    text-decoration-color: initial;
}
.eupopup-button {
    color: rgb(247, 170, 48);
}
.path-admin-tool-profiling .profiling_worse {
    color: rgb(255, 26, 26);
}
.path-admin-tool-profiling .profiling_better {
    color: rgb(114, 255, 114);
}
.path-admin-tool-profiling .profiling_same {
    color: rgb(166, 158, 146);
}
#page-admin-tool-task-scheduledtasks .task-class,
#page-admin-tool-task-runningtasks .task-class {
    color: rgb(157, 148, 136); 
}
[data-region="displaytemplateexample"] {
    border-color: rgb(56, 61, 63); 
}
body div[data-flexitour="step-background-fader"], body div[data-flexitour="step-background"] {
    background-image: inherit;
    background-color: inherit;
}
.tour-actions > ul > li {
    background-color: rgb(30, 32, 33);
}
.tour-actions > ul > li {
    background-color: rgb(30, 32, 33);
    border-color: rgb(62, 68, 70);
}
.navbar .localnavbarplus a,
.navbar .localnavbarplus .icon {
    color: inherit;
}
.assignfeedback_editpdf_widget .drawingcanvas {
    background-color: rgb(53, 57, 59);
    box-shadow: rgba(24, 26, 27, 0.2) 0px 1px 0px inset,
    rgba(0, 0, 0, 0.2) 0px 1px 20px;
}
.assignfeedback_editpdf_widget .drawingregion {
    border-color: rgb(62, 68, 70);
    background-color: rgb(53, 57, 59);
}
.assignfeedback_editpdf_widget .pageheader {
    background-color: rgb(35, 38, 40);
    border-bottom-color: rgb(62, 68, 70);
}
.assignfeedback_editpdf_widget .pageheader button:active {
    background-color: rgb(53, 57, 59);
}
.assignfeedback_editpdf_widget .pageheader select,
.assignfeedback_editpdf_widget .pageheader button {
    background-image: none;
    background-color: initial;
    border-color: initial;
}
.assignfeedback_editpdf_widget .pageheader select {
    background-color: rgb(24, 26, 27);
}
.assignfeedback_editpdf_widget .pageheader .navigation button + button,
.assignfeedback_editpdf_widget .pageheader .toolbar button + button,
.assignfeedback_editpdf_widget .pageheader .navigation select + button,
.assignfeedback_editpdf_widget .pageheader .toolbar select + button {
    border-left-color: rgb(62, 68, 70);
    border-right-color: initial;
}
.assignfeedback_editpdf_widget .pageheader .navigation button {
    border-right-color: rgb(62, 68, 70);
}
.assignfeedback_editpdf_widget .pageheader .toolbar,
.assignfeedback_editpdf_widget .pageheader .navigation-search,
.assignfeedback_editpdf_widget .pageheader .navigation-expcol,
.assignfeedback_editpdf_widget .pageheader .navigation {
    border-color: rgb(62, 68, 70) rgb(62, 68, 70) rgb(69, 75, 78);
    background-color: rgb(24, 26, 27);
}
.assignfeedback_editpdf_commentsearch ul li pre {
    background-color: rgb(33, 36, 37);
}
.assignfeedback_editpdf_commentsearch ul li pre:hover {
    background-color: rgb(43, 47, 49);
}
.assignfeedback_editpdf_widget .toolbar button {
    box-shadow: none;
}
.assignfeedback_editpdf_dropdown button {
    border-right-color: initial;
    border-bottom-color: initial;
    border-left-color: initial;
    background-image: none;
    background-color: initial;
    border-top-color: rgb(62, 68, 70);
}
.assignfeedback_editpdf_dropdown li:first-child button {
    border-top-color: initial;
}
.moodle-dialogue-base .moodle-dialogue.assignfeedback_editpdf_dropdown .moodle-dialogue-wrap {
    box-shadow: none;
}
.assignfeedback_editpdf_menu li a {
    text-decoration-color: initial;
    color: rgb(178, 172, 162);
}
.assignfeedback_editpdf_search li a {
    text-decoration-color: initial;
    color: rgb(178, 172, 162);
}
.assignfeedback_editpdf_menu li:hover {
    background-color: rgb(35, 38, 40);
}
.assignfeedback_editpdf_menu li button {
    background-image: none;
    background-color: initial;
}
.assignfeedback_editpdf_widget .pageheader button:hover {
    background-color: rgb(35, 38, 40);
    background-image: radial-gradient(at center center,
    rgb(24, 26, 27) 60%,
    rgb(42, 46, 47) 100%);
}
.assignfeedback_editpdf_widget .pageheader button.assignfeedback_editpdf_selectedbutton:hover,
.assignfeedback_editpdf_widget .pageheader button.assignfeedback_editpdf_selectedbutton {
    background-color: rgb(42, 46, 47);
    background-image: radial-gradient(at center center,
    rgb(24, 26, 27) 40%,
    rgb(42, 46, 47) 100%);
}
.assignfeedback_editpdf_widget .commentdrawable a {
    background-color: rgb(24, 26, 27);
    border-left-color: rgb(62, 68, 70);
    border-bottom-color: rgb(62, 68, 70);
}
.assignfeedback_editpdf_widget .commentdrawable textarea {
    color: rgb(232, 230, 227);
    border-color: rgb(62, 68, 70);
}
.assignfeedback_editpdf_widget .commentdrawable textarea:focus {
    outline-color: rgb(186, 123, 0);
}
.path-mod-workshop .mform.frozen #id_rubric-grid-wrapper,
.path-mod-workshop .assessmentform.rubric #id_rubric-grid-wrapper {
    border-color: initial;
}
.path-mod-workshop .mform.frozen #id_rubric-grid-wrapper th,
.path-mod-workshop .mform.frozen #id_rubric-grid-wrapper td,
.path-mod-workshop .assessmentform.rubric.grid #id_rubric-grid-wrapper th,
.path-mod-workshop .assessmentform.rubric.grid #id_rubric-grid-wrapper td {
    border-color: rgb(58, 62, 65);
}
.path-mod-workshop .mform.frozen #id_rubric-grid-wrapper .fitem .felement {
    border-color: initial;
}
.path-mod-workshop .mform.frozen .fitem.description.rubric + .fitem .fitemtitle + .felement,
.path-mod-workshop .assessmentform.rubric.list .fitem .felement {
    border-color: initial;
}
.path-mod-workshop .manual-allocator .allocations tbody tr:nth-of-type(2n+1) {
    background-color: rgb(34, 36, 38);
}
.path-mod-workshop .manual-allocator .allocations tbody tr:nth-of-type(2n+1).highlightreviewerof,
.path-mod-workshop .manual-allocator .allocations tbody tr:nth-of-type(2n+1).highlightreviewedby {
    background-color: inherit;
}
.path-mod-workshop .manual-allocator .allocations .highlightreviewedby .reviewedby,
.path-mod-workshop .manual-allocator .allocations .highlightreviewerof .reviewerof {
    background-color: rgb(58, 43, 0);
}
.path-mod-workshop .manual-allocator .allocations tr td ul li {
    list-style-image: initial;
}
.path-mod-workshop .manual-allocator .allocations tr td.peer {
    border-left-color: rgb(62, 68, 70);
    border-right-color: rgb(62, 68, 70);
}
.path-mod-workshop .manual-allocator .allocations .reviewedby .info,
.path-mod-workshop .manual-allocator .allocations .peer .info,
.path-mod-workshop .manual-allocator .allocations .reviewerof .info {
    color: rgb(157, 148, 136); 
}
.atto_backcolor_button .dropdown-menu .atto_menuentry a[role="menuitem"]:hover, .atto_backcolor_button .dropdown-menu .atto_menuentry a[role="menuitem"]:focus {
    box-shadow: rgb(12, 89, 158) 0px 0px 3px 1px;
}
.atto_backcolor_button .dropdown-menu .coloroption {
    border-color: rgb(62, 68, 70); 
}
.emoji-picker-dialogue .emoji-picker {
    border-color: initial; box-shadow: none !important; 
}
.atto_fontcolor_button .dropdown-menu .atto_menuentry a[role="menuitem"]:hover, .atto_fontcolor_button .dropdown-menu .atto_menuentry a[role="menuitem"]:focus {
    box-shadow: rgb(12, 89, 158) 0px 0px 3px 1px;
}
.atto_fontcolor_button .dropdown-menu .coloroption {
    border-color: rgb(62, 68, 70);
}
.editor_atto_content_wrap .h5p-placeholder {
    color: rgb(158, 150, 137);
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/atto_h5p/1656028964/icon-white");
    background-color: rgb(88, 95, 99);
}
div.editor_atto_content td,
div.editor_atto_content th,
div.editor_atto_content caption {
    border-color: rgb(67, 73, 76);
}
div.availablecolors {
    background-color: rgb(34, 36, 38);
}
.fa-border {
    border-color: rgb(53, 57, 59);
}
.fa-inverse {
    color: rgb(232, 230, 227); 
}
.sr-only {
    border-color: initial; 
}
:root {
    --blue: #1177d1; --indigo: #6610f2; --purple: #613d7c; --pink: #e83e8c; --red: #d9534f; --orange: #f0ad4e; --yellow: #ff7518; --green: #5cb85c; --teal: #20c997; --cyan: #5bc0de; --white: #fff; --gray: #868e96; --gray-dark: #373a3c; --primary: #447198; --secondary: #e9ecef; --success: #20c997; --info: #5bc0de; --warning: #f0ad4e; --danger: #d9534f; --light: #f8f9fa; --dark: #373a3c; --breakpoint-xs: 0; --breakpoint-sm: 576px; --breakpoint-md: 768px; --breakpoint-lg: 992px; --breakpoint-xl: 1200px; --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",
    monospace;
}
html {
    -webkit-tap-highlight-color: rgba(232, 230, 227, 0);
}
body {
    color: rgb(196, 191, 183);
    background-color: rgb(36, 53, 52); 
}
[tabindex="-1"]:focus:not(:focus-visible) {
    outline-color: initial !important;
}
abbr[title],
abbr[data-original-title] {
    text-decoration-color: initial;
    border-bottom-color: initial;
}
a {
    color: rgb(129, 168, 198);
    text-decoration-color: initial;
    background-color: transparent;
}
a:hover {
    color: rgb(160, 190, 213);
    text-decoration-color: initial;
}
a:not([href]):not([class]) {
    color: inherit;
    text-decoration-color: initial;
}
a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration-color: initial;
}
caption {
    color: rgb(161, 152, 140);
}
button:focus:not(:focus-visible) {
    outline-color: initial;
}
fieldset {
    border-color: initial;
}
legend {
    color: inherit;
}
hr {
    border-right-color: initial;
    border-bottom-color: initial;
    border-left-color: initial;
    border-top-color: rgba(140, 130, 115, 0.1);
}
mark,
.mark {
    background-color: rgb(47, 40, 5);
}
.list-unstyled {
    list-style-image: initial;
}
.list-inline {
    list-style-image: initial;
}
.blockquote-footer {
    color: rgb(161, 152, 140);
}
.img-thumbnail {
    background-color: rgb(36, 53, 52);
    border-color: rgb(56, 61, 63);
}
.figure-caption {
    color: rgb(161, 152, 140);
}
code {
    color: rgb(233, 74, 147);
}
a > code {
    color: inherit;
}
kbd {
    color: rgb(232, 230, 227);
    background-color: rgb(28, 30, 31);
}
pre {
    color: rgb(209, 205, 199);
}
pre code {
    color: inherit;
}
.table {
    color: rgb(196, 191, 183);
}
.table th,
.table td {
    border-top-color: rgb(56, 61, 63);
}
.table thead th {
    border-bottom-color: rgb(56, 61, 63);
}
.table tbody + tbody {
    border-top-color: rgb(56, 61, 63);
}
.table-bordered {
    border-color: rgb(56, 61, 63);
}
.table-bordered th,
.table-bordered td {
    border-color: rgb(56, 61, 63);
}
.table-borderless th,
.table-borderless td,
.table-borderless thead th,
.table-borderless tbody + tbody {
    border-color: initial;
}
.table-striped tbody tr:nth-of-type(2n+1) {
    background-color: rgba(0, 0, 0, 0.05);
}
.table-hover tbody tr:hover {
    color: rgb(196, 191, 183);
    background-color: rgba(0, 0, 0, 0.07);
}
.table-primary,
.table-primary > th,
.table-primary > td {
    background-color: rgb(47, 51, 53);
}
.table-primary th,
.table-primary td,
.table-primary thead th,
.table-primary tbody + tbody {
    border-color: rgb(53, 75, 95);
}
.table-hover .table-primary:hover {
    background-color: rgb(41, 59, 74);
}
.table-hover .table-primary:hover > td,
.table-hover .table-primary:hover > th {
    background-color: rgb(41, 59, 74);
}
.table-secondary,
.table-secondary > th,
.table-secondary > td {
    background-color: rgb(27, 29, 30);
}
.table-secondary th,
.table-secondary td,
.table-secondary thead th,
.table-secondary tbody + tbody {
    border-color: rgb(51, 55, 57);
}
.table-hover .table-secondary:hover {
    background-color: rgb(34, 37, 38);
}
.table-hover .table-secondary:hover > td,
.table-hover .table-secondary:hover > th {
    background-color: rgb(34, 37, 38);
}
.table-success,
.table-success > th,
.table-success > td {
    background-color: rgb(19, 78, 65);
}
.table-success th,
.table-success td,
.table-success thead th,
.table-success tbody + tbody {
    border-color: rgb(28, 117, 91);
}
.table-hover .table-success:hover {
    background-color: rgb(22, 91, 75);
}
.table-hover .table-success:hover > td,
.table-hover .table-success:hover > th {
    background-color: rgb(22, 91, 75);
}
.table-info,
.table-info > th,
.table-info > td {
    background-color: rgb(14, 57, 70);
}
.table-info th,
.table-info td,
.table-info thead th,
.table-info tbody + tbody {
    border-color: rgb(22, 90, 111);
}
.table-hover .table-info:hover {
    background-color: rgb(17, 68, 82);
}
.table-hover .table-info:hover > td,
.table-hover .table-info:hover > th {
    background-color: rgb(17, 68, 82);
}
.table-warning,
.table-warning > th,
.table-warning > td {
    background-color: rgb(77, 48, 6);
}
.table-warning th,
.table-warning td,
.table-warning thead th,
.table-warning tbody + tbody {
    border-color: rgb(121, 75, 11);
}
.table-hover .table-warning:hover {
    background-color: rgb(91, 56, 7);
}
.table-hover .table-warning:hover > td,
.table-hover .table-warning:hover > th {
    background-color: rgb(91, 56, 7);
}
.table-danger,
.table-danger > th,
.table-danger > td {
    background-color: rgb(71, 17, 16);
}
.table-danger th,
.table-danger td,
.table-danger thead th,
.table-danger tbody + tbody {
    border-color: rgb(111, 28, 24);
}
.table-hover .table-danger:hover {
    background-color: rgb(84, 19, 18);
}
.table-hover .table-danger:hover > td,
.table-hover .table-danger:hover > th {
    background-color: rgb(84, 19, 18);
}
.table-light,
.table-light > th,
.table-light > td {
    background-color: rgb(25, 27, 28);
}
.table-light th,
.table-light td,
.table-light thead th,
.table-light tbody + tbody {
    border-color: rgb(49, 53, 55);
}
.table-hover .table-light:hover {
    background-color: rgb(32, 35, 36);
}
.table-hover .table-light:hover > td,
.table-hover .table-light:hover > th {
    background-color: rgb(32, 35, 36);
}
.table-dark,
.table-dark > th,
.table-dark > td {
    background-color: rgb(55, 60, 62);
}
.table-dark th,
.table-dark td,
.table-dark thead th,
.table-dark tbody + tbody {
    border-color: rgb(77, 83, 87);
}
.table-hover .table-dark:hover {
    background-color: rgb(62, 68, 70);
}
.table-hover .table-dark:hover > td,
.table-hover .table-dark:hover > th {
    background-color: rgb(62, 68, 70);
}
.table-active,
.table-active > th,
.table-active > td {
    background-color: rgba(0, 0, 0, 0.07);
}
.table-hover .table-active:hover {
    background-color: rgba(0, 0, 0, 0.07);
}
.table-hover .table-active:hover > td,
.table-hover .table-active:hover > th {
    background-color: rgba(0, 0, 0, 0.07);
}
.table .thead-dark th {
    color: rgb(232, 230, 227);
    background-color: rgb(43, 47, 49);
    border-color: rgb(115, 107, 94);
}
.table .thead-light th {
    color: rgb(181, 175, 166);
    background-color: rgb(35, 38, 39);
    border-color: rgb(56, 61, 63);
}
.table-dark {
    color: rgb(232, 230, 227);
    background-color: rgb(43, 47, 49);
}
.table-dark th,
.table-dark td,
.table-dark thead th {
    border-color: rgb(115, 107, 94);
}
.table-dark.table-bordered {
    border-color: initial;
}
.table-dark.table-striped tbody tr:nth-of-type(2n+1) {
    background-color: rgba(24, 26, 27, 0.05);
}
.table-dark.table-hover tbody tr:hover {
    color: rgb(232, 230, 227);
    background-color: rgba(24, 26, 27, 0.07);
}
@media (max-width: 575.98px) {
    .table-responsive-sm > .table-bordered {
        border-color: initial;
    }
}
@media (max-width: 767.98px) {
    .table-responsive-md > .table-bordered {
        border-color: initial;
    }
}
@media (max-width: 991.98px) {
    .table-responsive-lg > .table-bordered {
        border-color: initial;
    }
}
@media (max-width: 1199.98px) {
    .table-responsive-xl > .table-bordered {
        border-color: initial;
    }
}
.table-responsive > .table-bordered {
    border-color: initial;
}
.form-control {
    color: rgb(181, 175, 166);
    background-color: rgb(24, 26, 27);
    border-color: rgb(60, 65, 68);
}
.form-control:focus {
    color: rgb(181, 175, 166);
    background-color: rgb(24, 26, 27);
    border-color: rgb(46, 77, 104);
    outline-color: initial;
    box-shadow: rgba(54, 90, 122, 0.25) 0px 0px 0px 0.2rem;
}
.form-control::-webkit-input-placeholder {
    color: rgb(161, 152, 140);
}
.form-control::placeholder {
    color: rgb(161, 152, 140);
}
.form-control:disabled,
.form-control[readonly] {
    background-color: rgb(35, 38, 39);
}
.form-control-plaintext {
    color: rgb(196, 191, 183);
    background-color: transparent;
    border-color: transparent;
}
.form-check-input[disabled] ~ .form-check-label,
.form-check-input:disabled ~ .form-check-label {
    color: rgb(161, 152, 140);
}
.valid-feedback {
    color: rgb(70, 226, 180);
}
.valid-tooltip {
    color: rgb(232, 230, 227);
    background-color: rgba(26, 161, 121, 0.9);
}
.was-validated .form-control:valid,
.form-control.is-valid {
    border-color: rgb(25, 160, 120);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2320c997' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
}
.was-validated .form-control:valid:focus,
.form-control.is-valid:focus {
    border-color: rgb(25, 160, 120);
    box-shadow: rgba(26, 161, 121, 0.25) 0px 0px 0px 0.2rem;
}
.was-validated .custom-select:valid,
.custom-select.is-valid {
    border-color: rgb(25, 160, 120);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNCIgaGVpZ2h0PSI1Ij48ZGVmcz48ZmlsdGVyIGlkPSJkYXJrcmVhZGVyLWltYWdlLWZpbHRlciI+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAuMjQ5IC0wLjYxNCAtMC42NzIgMC4wMDAgMS4wMzUgLTAuNjQ2IDAuMjg4IC0wLjY2NCAwLjAwMCAxLjAyMCAtMC42MzYgLTAuNjA5IDAuMjUwIDAuMDAwIDAuOTk0IDAuMDAwIDAuMDAwIDAuMDAwIDEuMDAwIDAuMDAwIiAvPjwvZmlsdGVyPjwvZGVmcz48aW1hZ2Ugd2lkdGg9IjQiIGhlaWdodD0iNSIgZmlsdGVyPSJ1cmwoI2RhcmtyZWFkZXItaW1hZ2UtZmlsdGVyKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnJTNlJTNjcGF0aCBmaWxsPSclMjMzNzNhM2MnIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLyUzZSUzYy9zdmclM2UiIC8+PC9zdmc+"),
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2320c997' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-color: rgb(24, 26, 27);
}
.was-validated .custom-select:valid:focus,
.custom-select.is-valid:focus {
    border-color: rgb(25, 160, 120);
    box-shadow: rgba(26, 161, 121, 0.25) 0px 0px 0px 0.2rem;
}
.was-validated .form-check-input:valid ~ .form-check-label,
.form-check-input.is-valid ~ .form-check-label {
    color: rgb(70, 226, 180);
}
.was-validated .custom-control-input:valid ~ .custom-control-label,
.custom-control-input.is-valid ~ .custom-control-label {
    color: rgb(70, 226, 180);
}
.was-validated .custom-control-input:valid ~ .custom-control-label::before,
.custom-control-input.is-valid ~ .custom-control-label::before {
    border-color: rgb(25, 160, 120);
}
.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before,
.custom-control-input.is-valid:checked ~ .custom-control-label::before {
    border-color: rgb(23, 147, 110);
    background-color: rgb(26, 161, 131);
}
.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before,
.custom-control-input.is-valid:focus ~ .custom-control-label::before {
    box-shadow: rgba(26, 161, 121, 0.25) 0px 0px 0px 0.2rem;
}
.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before,
.custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {
    border-color: rgb(25, 160, 120);
}
.was-validated .custom-file-input:valid ~ .custom-file-label,
.custom-file-input.is-valid ~ .custom-file-label {
    border-color: rgb(25, 160, 120);
}
.was-validated .custom-file-input:valid:focus ~ .custom-file-label,
.custom-file-input.is-valid:focus ~ .custom-file-label {
    border-color: rgb(25, 160, 120);
    box-shadow: rgba(26, 161, 121, 0.25) 0px 0px 0px 0.2rem;
}
.invalid-feedback {
    color: rgb(219, 94, 90);
}
.invalid-tooltip {
    color: rgb(232, 230, 227);
    background-color: rgba(148, 35, 32, 0.9);
}
.was-validated .form-control:invalid,
.form-control.is-invalid {
    border-color: rgb(137, 33, 30);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23d9534f' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23d9534f' stroke='none'/%3e%3c/svg%3e");
}
.was-validated .form-control:invalid:focus,
.form-control.is-invalid:focus {
    border-color: rgb(137, 33, 30);
    box-shadow: rgba(148, 35, 32, 0.25) 0px 0px 0px 0.2rem;
}
.was-validated .custom-select:invalid,
.custom-select.is-invalid {
    border-color: rgb(137, 33, 30);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNCIgaGVpZ2h0PSI1Ij48ZGVmcz48ZmlsdGVyIGlkPSJkYXJrcmVhZGVyLWltYWdlLWZpbHRlciI+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAuMjQ5IC0wLjYxNCAtMC42NzIgMC4wMDAgMS4wMzUgLTAuNjQ2IDAuMjg4IC0wLjY2NCAwLjAwMCAxLjAyMCAtMC42MzYgLTAuNjA5IDAuMjUwIDAuMDAwIDAuOTk0IDAuMDAwIDAuMDAwIDAuMDAwIDEuMDAwIDAuMDAwIiAvPjwvZmlsdGVyPjwvZGVmcz48aW1hZ2Ugd2lkdGg9IjQiIGhlaWdodD0iNSIgZmlsdGVyPSJ1cmwoI2RhcmtyZWFkZXItaW1hZ2UtZmlsdGVyKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnJTNlJTNjcGF0aCBmaWxsPSclMjMzNzNhM2MnIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLyUzZSUzYy9zdmclM2UiIC8+PC9zdmc+"),
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23d9534f' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23d9534f' stroke='none'/%3e%3c/svg%3e");
    background-color: rgb(24, 26, 27);
}
.was-validated .custom-select:invalid:focus,
.custom-select.is-invalid:focus {
    border-color: rgb(137, 33, 30);
    box-shadow: rgba(148, 35, 32, 0.25) 0px 0px 0px 0.2rem;
}
.was-validated .form-check-input:invalid ~ .form-check-label,
.form-check-input.is-invalid ~ .form-check-label {
    color: rgb(219, 94, 90);
}
.was-validated .custom-control-input:invalid ~ .custom-control-label,
.custom-control-input.is-invalid ~ .custom-control-label {
    color: rgb(219, 94, 90);
}
.was-validated .custom-control-input:invalid ~ .custom-control-label::before,
.custom-control-input.is-invalid ~ .custom-control-label::before {
    border-color: rgb(137, 33, 30);
}
.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before,
.custom-control-input.is-invalid:checked ~ .custom-control-label::before {
    border-color: rgb(124, 30, 27);
    background-color: rgb(122, 29, 26);
}
.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before,
.custom-control-input.is-invalid:focus ~ .custom-control-label::before {
    box-shadow: rgba(148, 35, 32, 0.25) 0px 0px 0px 0.2rem;
}
.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before,
.custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {
    border-color: rgb(137, 33, 30);
}
.was-validated .custom-file-input:invalid ~ .custom-file-label,
.custom-file-input.is-invalid ~ .custom-file-label {
    border-color: rgb(137, 33, 30);
}
.was-validated .custom-file-input:invalid:focus ~ .custom-file-label,
.custom-file-input.is-invalid:focus ~ .custom-file-label {
    border-color: rgb(137, 33, 30);
    box-shadow: rgba(148, 35, 32, 0.25) 0px 0px 0px 0.2rem;
}
.btn {
    color: rgb(196, 191, 183);
    background-color: transparent;
    border-color: transparent;
}
.btn:hover {
    color: rgb(196, 191, 183);
    text-decoration-color: initial;
}
.btn:focus,
.btn.focus {
    outline-color: initial;
    box-shadow: rgba(54, 90, 122, 0.25) 0px 0px 0px 0.2rem;
}
.btn-primary {
    color: rgb(232, 230, 227);
    background-color: rgb(54, 90, 122);
    border-color: rgb(58, 97, 131);
}
.btn-primary:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(45, 74, 101);
    border-color: rgb(63, 105, 141);
}
.btn-primary:focus,
.btn-primary.focus {
    color: rgb(232, 230, 227);
    background-color: rgb(45, 74, 101);
    border-color: rgb(63, 105, 141);
    box-shadow: rgba(71, 102, 128, 0.5) 0px 0px 0px 0.2rem;
}
.btn-primary.disabled,
.btn-primary:disabled {
    color: rgb(232, 230, 227);
    background-color: rgb(54, 90, 122);
    border-color: rgb(58, 97, 131);
}
.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active,
.show > .btn-primary.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(42, 70, 94);
    border-color: rgb(64, 107, 144);
}
.btn-primary:not(:disabled):not(.disabled):active:focus,
.btn-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-primary.dropdown-toggle:focus {
    box-shadow: rgba(71, 102, 128, 0.5) 0px 0px 0px 0.2rem;
}
.btn-secondary {
    color: rgb(209, 205, 199);
    background-color: rgb(35, 38, 39);
    border-color: rgb(53, 58, 60);
}
.btn-secondary:hover {
    color: rgb(209, 205, 199);
    background-color: rgb(45, 49, 51);
    border-color: rgb(61, 66, 68);
}
.btn-secondary:focus,
.btn-secondary.focus {
    color: rgb(209, 205, 199);
    background-color: rgb(45, 49, 51);
    border-color: rgb(61, 66, 68);
    box-shadow: rgba(52, 56, 58, 0.5) 0px 0px 0px 0.2rem;
}
.btn-secondary.disabled,
.btn-secondary:disabled {
    color: rgb(209, 205, 199);
    background-color: rgb(35, 38, 39);
    border-color: rgb(53, 58, 60);
}
.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
    color: rgb(209, 205, 199);
    background-color: rgb(49, 53, 55);
    border-color: rgb(62, 68, 70);
}
.btn-secondary:not(:disabled):not(.disabled):active:focus,
.btn-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: rgba(52, 56, 58, 0.5) 0px 0px 0px 0.2rem;
}
.btn-success {
    color: rgb(232, 230, 227);
    background-color: rgb(26, 161, 121);
    border-color: rgb(25, 160, 120);
}
.btn-success:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(22, 134, 101);
    border-color: rgb(28, 173, 130);
}
.btn-success:focus,
.btn-success.focus {
    color: rgb(232, 230, 227);
    background-color: rgb(22, 134, 101);
    border-color: rgb(28, 173, 130);
    box-shadow: rgba(38, 155, 129, 0.5) 0px 0px 0px 0.2rem;
}
.btn-success.disabled,
.btn-success:disabled {
    color: rgb(232, 230, 227);
    background-color: rgb(26, 161, 121);
    border-color: rgb(25, 160, 120);
}
.btn-success:not(:disabled):not(.disabled):active,
.btn-success:not(:disabled):not(.disabled).active,
.show > .btn-success.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(20, 126, 94);
    border-color: rgb(28, 176, 133);
}
.btn-success:not(:disabled):not(.disabled):active:focus,
.btn-success:not(:disabled):not(.disabled).active:focus,
.show > .btn-success.dropdown-toggle:focus {
    box-shadow: rgba(38, 155, 129, 0.5) 0px 0px 0px 0.2rem;
}
.btn-info {
    color: rgb(209, 205, 199);
    background-color: rgb(28, 115, 141);
    border-color: rgb(27, 110, 134);
}
.btn-info:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(32, 131, 160);
    border-color: rgb(30, 120, 147);
}
.btn-info:focus,
.btn-info.focus {
    color: rgb(232, 230, 227);
    background-color: rgb(32, 131, 160);
    border-color: rgb(30, 120, 147);
    box-shadow: rgba(49, 120, 142, 0.5) 0px 0px 0px 0.2rem;
}
.btn-info.disabled,
.btn-info:disabled {
    color: rgb(209, 205, 199);
    background-color: rgb(28, 115, 141);
    border-color: rgb(27, 110, 134);
}
.btn-info:not(:disabled):not(.disabled):active,
.btn-info:not(:disabled):not(.disabled).active,
.show > .btn-info.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(34, 136, 166);
    border-color: rgb(30, 123, 150);
}
.btn-info:not(:disabled):not(.disabled):active:focus,
.btn-info:not(:disabled):not(.disabled).active:focus,
.show > .btn-info.dropdown-toggle:focus {
    box-shadow: rgba(49, 120, 142, 0.5) 0px 0px 0px 0.2rem;
}
.btn-warning {
    color: rgb(209, 205, 199);
    background-color: rgb(153, 95, 13);
    border-color: rgb(147, 91, 12);
}
.btn-warning:hover {
    color: rgb(209, 205, 199);
    background-color: rgb(174, 108, 15);
    border-color: rgb(161, 100, 14);
}
.btn-warning:focus,
.btn-warning.focus {
    color: rgb(209, 205, 199);
    background-color: rgb(174, 108, 15);
    border-color: rgb(161, 100, 14);
    box-shadow: rgba(151, 104, 38, 0.5) 0px 0px 0px 0.2rem;
}
.btn-warning.disabled,
.btn-warning:disabled {
    color: rgb(209, 205, 199);
    background-color: rgb(153, 95, 13);
    border-color: rgb(147, 91, 12);
}
.btn-warning:not(:disabled):not(.disabled):active,
.btn-warning:not(:disabled):not(.disabled).active,
.show > .btn-warning.dropdown-toggle {
    color: rgb(209, 205, 199);
    background-color: rgb(181, 113, 15);
    border-color: rgb(165, 103, 14);
}
.btn-warning:not(:disabled):not(.disabled):active:focus,
.btn-warning:not(:disabled):not(.disabled).active:focus,
.show > .btn-warning.dropdown-toggle:focus {
    box-shadow: rgba(151, 104, 38, 0.5) 0px 0px 0px 0.2rem;
}
.btn-danger {
    color: rgb(232, 230, 227);
    background-color: rgb(148, 35, 32);
    border-color: rgb(137, 33, 30);
}
.btn-danger:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(166, 39, 36);
    border-color: rgb(149, 36, 33);
}
.btn-danger:focus,
.btn-danger.focus {
    color: rgb(232, 230, 227);
    background-color: rgb(166, 39, 36);
    border-color: rgb(149, 36, 33);
    box-shadow: rgba(132, 32, 28, 0.5) 0px 0px 0px 0.2rem;
}
.btn-danger.disabled,
.btn-danger:disabled {
    color: rgb(232, 230, 227);
    background-color: rgb(148, 35, 32);
    border-color: rgb(137, 33, 30);
}
.btn-danger:not(:disabled):not(.disabled):active,
.btn-danger:not(:disabled):not(.disabled).active,
.show > .btn-danger.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(161, 38, 35);
    border-color: rgb(153, 37, 33);
}
.btn-danger:not(:disabled):not(.disabled):active:focus,
.btn-danger:not(:disabled):not(.disabled).active:focus,
.show > .btn-danger.dropdown-toggle:focus {
    box-shadow: rgba(132, 32, 28, 0.5) 0px 0px 0px 0.2rem;
}
.btn-light {
    color: rgb(209, 205, 199);
    background-color: rgb(27, 30, 31);
    border-color: rgb(50, 54, 56);
}
.btn-light:hover {
    color: rgb(209, 205, 199);
    background-color: rgb(38, 41, 43);
    border-color: rgb(57, 62, 64);
}
.btn-light:focus,
.btn-light.focus {
    color: rgb(209, 205, 199);
    background-color: rgb(38, 41, 43);
    border-color: rgb(57, 62, 64);
    box-shadow: rgba(45, 49, 51, 0.5) 0px 0px 0px 0.2rem;
}
.btn-light.disabled,
.btn-light:disabled {
    color: rgb(209, 205, 199);
    background-color: rgb(27, 30, 31);
    border-color: rgb(50, 54, 56);
}
.btn-light:not(:disabled):not(.disabled):active,
.btn-light:not(:disabled):not(.disabled).active,
.show > .btn-light.dropdown-toggle {
    color: rgb(209, 205, 199);
    background-color: rgb(42, 45, 47);
    border-color: rgb(59, 64, 66);
}
.btn-light:not(:disabled):not(.disabled):active:focus,
.btn-light:not(:disabled):not(.disabled).active:focus,
.show > .btn-light.dropdown-toggle:focus {
    box-shadow: rgba(45, 49, 51, 0.5) 0px 0px 0px 0.2rem;
}
.btn-dark {
    color: rgb(232, 230, 227);
    background-color: rgb(43, 47, 49);
    border-color: rgb(121, 112, 99);
}
.btn-dark:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(29, 31, 33);
    border-color: rgb(129, 120, 106);
}
.btn-dark:focus,
.btn-dark.focus {
    color: rgb(232, 230, 227);
    background-color: rgb(29, 31, 33);
    border-color: rgb(129, 120, 106);
    box-shadow: rgba(66, 71, 74, 0.5) 0px 0px 0px 0.2rem;
}
.btn-dark.disabled,
.btn-dark:disabled {
    color: rgb(232, 230, 227);
    background-color: rgb(43, 47, 49);
    border-color: rgb(121, 112, 99);
}
.btn-dark:not(:disabled):not(.disabled):active,
.btn-dark:not(:disabled):not(.disabled).active,
.show > .btn-dark.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(24, 26, 27);
    border-color: rgb(131, 122, 108);
}
.btn-dark:not(:disabled):not(.disabled):active:focus,
.btn-dark:not(:disabled):not(.disabled).active:focus,
.show > .btn-dark.dropdown-toggle:focus {
    box-shadow: rgba(66, 71, 74, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-primary {
    color: rgb(129, 168, 198);
    border-color: rgb(58, 97, 131);
}
.btn-outline-primary:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(54, 90, 122);
    border-color: rgb(58, 97, 131);
}
.btn-outline-primary:focus,
.btn-outline-primary.focus {
    box-shadow: rgba(54, 90, 122, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
    color: rgb(129, 168, 198);
    background-color: transparent;
}
.btn-outline-primary:not(:disabled):not(.disabled):active,
.btn-outline-primary:not(:disabled):not(.disabled).active,
.show > .btn-outline-primary.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(54, 90, 122);
    border-color: rgb(58, 97, 131);
}
.btn-outline-primary:not(:disabled):not(.disabled):active:focus,
.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-primary.dropdown-toggle:focus {
    box-shadow: rgba(54, 90, 122, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-secondary {
    color: rgb(220, 217, 212);
    border-color: rgb(53, 58, 60);
}
.btn-outline-secondary:hover {
    color: rgb(209, 205, 199);
    background-color: rgb(35, 38, 39);
    border-color: rgb(53, 58, 60);
}
.btn-outline-secondary:focus,
.btn-outline-secondary.focus {
    box-shadow: rgba(35, 38, 39, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
    color: rgb(220, 217, 212);
    background-color: transparent;
}
.btn-outline-secondary:not(:disabled):not(.disabled):active,
.btn-outline-secondary:not(:disabled):not(.disabled).active,
.show > .btn-outline-secondary.dropdown-toggle {
    color: rgb(209, 205, 199);
    background-color: rgb(35, 38, 39);
    border-color: rgb(53, 58, 60);
}
.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,
.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-secondary.dropdown-toggle:focus {
    box-shadow: rgba(35, 38, 39, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-success {
    color: rgb(70, 226, 180);
    border-color: rgb(25, 160, 120);
}
.btn-outline-success:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(26, 161, 121);
    border-color: rgb(25, 160, 120);
}
.btn-outline-success:focus,
.btn-outline-success.focus {
    box-shadow: rgba(26, 161, 121, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-success.disabled,
.btn-outline-success:disabled {
    color: rgb(70, 226, 180);
    background-color: transparent;
}
.btn-outline-success:not(:disabled):not(.disabled):active,
.btn-outline-success:not(:disabled):not(.disabled).active,
.show > .btn-outline-success.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(26, 161, 121);
    border-color: rgb(25, 160, 120);
}
.btn-outline-success:not(:disabled):not(.disabled):active:focus,
.btn-outline-success:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-success.dropdown-toggle:focus {
    box-shadow: rgba(26, 161, 121, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-info {
    color: rgb(98, 195, 223);
    border-color: rgb(27, 110, 134);
}
.btn-outline-info:hover {
    color: rgb(209, 205, 199);
    background-color: rgb(28, 115, 141);
    border-color: rgb(27, 110, 134);
}
.btn-outline-info:focus,
.btn-outline-info.focus {
    box-shadow: rgba(28, 115, 141, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-info.disabled,
.btn-outline-info:disabled {
    color: rgb(98, 195, 223);
    background-color: transparent;
}
.btn-outline-info:not(:disabled):not(.disabled):active,
.btn-outline-info:not(:disabled):not(.disabled).active,
.show > .btn-outline-info.dropdown-toggle {
    color: rgb(209, 205, 199);
    background-color: rgb(28, 115, 141);
    border-color: rgb(27, 110, 134);
}
.btn-outline-info:not(:disabled):not(.disabled):active:focus,
.btn-outline-info:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-info.dropdown-toggle:focus {
    box-shadow: rgba(28, 115, 141, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-warning {
    color: rgb(241, 176, 84);
    border-color: rgb(147, 91, 12);
}
.btn-outline-warning:hover {
    color: rgb(209, 205, 199);
    background-color: rgb(153, 95, 13);
    border-color: rgb(147, 91, 12);
}
.btn-outline-warning:focus,
.btn-outline-warning.focus {
    box-shadow: rgba(153, 95, 13, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-warning.disabled,
.btn-outline-warning:disabled {
    color: rgb(241, 176, 84);
    background-color: transparent;
}
.btn-outline-warning:not(:disabled):not(.disabled):active,
.btn-outline-warning:not(:disabled):not(.disabled).active,
.show > .btn-outline-warning.dropdown-toggle {
    color: rgb(209, 205, 199);
    background-color: rgb(153, 95, 13);
    border-color: rgb(147, 91, 12);
}
.btn-outline-warning:not(:disabled):not(.disabled):active:focus,
.btn-outline-warning:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-warning.dropdown-toggle:focus {
    box-shadow: rgba(153, 95, 13, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-danger {
    color: rgb(219, 94, 90);
    border-color: rgb(137, 33, 30);
}
.btn-outline-danger:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(148, 35, 32);
    border-color: rgb(137, 33, 30);
}
.btn-outline-danger:focus,
.btn-outline-danger.focus {
    box-shadow: rgba(148, 35, 32, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
    color: rgb(219, 94, 90);
    background-color: transparent;
}
.btn-outline-danger:not(:disabled):not(.disabled):active,
.btn-outline-danger:not(:disabled):not(.disabled).active,
.show > .btn-outline-danger.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(148, 35, 32);
    border-color: rgb(137, 33, 30);
}
.btn-outline-danger:not(:disabled):not(.disabled):active:focus,
.btn-outline-danger:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-danger.dropdown-toggle:focus {
    box-shadow: rgba(148, 35, 32, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-light {
    color: rgb(228, 226, 222);
    border-color: rgb(50, 54, 56);
}
.btn-outline-light:hover {
    color: rgb(209, 205, 199);
    background-color: rgb(27, 30, 31);
    border-color: rgb(50, 54, 56);
}
.btn-outline-light:focus,
.btn-outline-light.focus {
    box-shadow: rgba(27, 30, 31, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-light.disabled,
.btn-outline-light:disabled {
    color: rgb(228, 226, 222);
    background-color: transparent;
}
.btn-outline-light:not(:disabled):not(.disabled):active,
.btn-outline-light:not(:disabled):not(.disabled).active,
.show > .btn-outline-light.dropdown-toggle {
    color: rgb(209, 205, 199);
    background-color: rgb(27, 30, 31);
    border-color: rgb(50, 54, 56);
}
.btn-outline-light:not(:disabled):not(.disabled):active:focus,
.btn-outline-light:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-light.dropdown-toggle:focus {
    box-shadow: rgba(27, 30, 31, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-dark {
    color: rgb(196, 191, 183);
    border-color: rgb(121, 112, 99);
}
.btn-outline-dark:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(43, 47, 49);
    border-color: rgb(121, 112, 99);
}
.btn-outline-dark:focus,
.btn-outline-dark.focus {
    box-shadow: rgba(43, 47, 49, 0.5) 0px 0px 0px 0.2rem;
}
.btn-outline-dark.disabled,
.btn-outline-dark:disabled {
    color: rgb(196, 191, 183);
    background-color: transparent;
}
.btn-outline-dark:not(:disabled):not(.disabled):active,
.btn-outline-dark:not(:disabled):not(.disabled).active,
.show > .btn-outline-dark.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(43, 47, 49);
    border-color: rgb(121, 112, 99);
}
.btn-outline-dark:not(:disabled):not(.disabled):active:focus,
.btn-outline-dark:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-dark.dropdown-toggle:focus {
    box-shadow: rgba(43, 47, 49, 0.5) 0px 0px 0px 0.2rem;
}
.btn-link {
    color: rgb(129, 168, 198);
    text-decoration-color: initial;
}
.btn-link:hover {
    color: rgb(160, 190, 213);
    text-decoration-color: initial;
}
.btn-link:focus,
.btn-link.focus {
    text-decoration-color: initial;
}
.btn-link:disabled,
.btn-link.disabled {
    color: rgb(161, 152, 140);
}
.dropdown-toggle::after {
    border-top-color: initial;
    border-right-color: transparent;
    border-bottom-color: initial;
    border-left-color: transparent;
}
.dropdown-menu {
    color: rgb(196, 191, 183);
    list-style-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.15);
}
.dropup .dropdown-toggle::after {
    border-top-color: initial;
    border-right-color: transparent;
    border-bottom-color: initial;
    border-left-color: transparent;
}
.dropright .dropdown-toggle::after {
    border-top-color: transparent;
    border-right-color: initial;
    border-bottom-color: transparent;
    border-left-color: initial;
}
.dropleft .dropdown-toggle::before {
    border-top-color: transparent;
    border-right-color: initial;
    border-bottom-color: transparent;
}
.dropdown-divider {
    border-top-color: rgb(53, 58, 60);
}
.dropdown-item {
    color: rgb(209, 205, 199);
    background-color: transparent;
    border-color: initial;
}
.dropdown-item:hover,
.dropdown-item:focus {
    color: rgb(217, 213, 208);
    text-decoration-color: initial;
    background-color: rgb(35, 38, 39);
}
.dropdown-item.active,
.dropdown-item:active {
    color: rgb(232, 230, 227);
    text-decoration-color: initial;
    background-color: rgb(48, 52, 54);
}
.dropdown-item.disabled,
.dropdown-item:disabled {
    color: rgb(185, 179, 170);
    background-color: transparent;
}
.dropdown-header {
    color: rgb(161, 152, 140);
}
.dropdown-item-text {
    color: rgb(209, 205, 199);
}
.input-group-text {
    color: rgb(181, 175, 166);
    background-color: rgb(35, 38, 39);
    border-color: rgb(60, 65, 68);
}
.custom-control-input:checked ~ .custom-control-label::before {
    color: rgb(232, 230, 227);
    border-color: rgb(58, 97, 131);
    background-color: rgb(54, 90, 122);
}
.custom-control-input:focus ~ .custom-control-label::before {
    box-shadow: rgba(54, 90, 122, 0.25) 0px 0px 0px 0.2rem;
}
.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
    border-color: rgb(46, 77, 104);
}
.custom-control-input:not(:disabled):active ~ .custom-control-label::before {
    color: rgb(232, 230, 227);
    background-color: rgb(36, 60, 82);
    border-color: rgb(41, 69, 94);
}
.custom-control-input[disabled] ~ .custom-control-label,
.custom-control-input:disabled ~ .custom-control-label {
    color: rgb(161, 152, 140);
}
.custom-control-input[disabled] ~ .custom-control-label::before,
.custom-control-input:disabled ~ .custom-control-label::before {
    background-color: rgb(35, 38, 39);
}
.custom-control-label::before {
    background-color: rgb(24, 26, 27);
    border-color: rgb(69, 75, 78);
}
.custom-control-label::after {
    background-image: initial;
    background-color: initial;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
}
.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {
    border-color: rgb(58, 97, 131);
    background-color: rgb(54, 90, 122);
}
.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e");
}
.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {
    background-color: rgba(54, 90, 122, 0.5);
}
.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {
    background-color: rgba(54, 90, 122, 0.5);
}
.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {
    background-color: rgba(54, 90, 122, 0.5);
}
.custom-switch .custom-control-label::after {
    background-color: rgb(66, 71, 74);
}
.custom-switch .custom-control-input:checked ~ .custom-control-label::after {
    background-color: rgb(24, 26, 27);
}
.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {
    background-color: rgba(54, 90, 122, 0.5);
}
.custom-select {
    color: rgb(181, 175, 166);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNCIgaGVpZ2h0PSI1Ij48ZGVmcz48ZmlsdGVyIGlkPSJkYXJrcmVhZGVyLWltYWdlLWZpbHRlciI+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAuMjQ5IC0wLjYxNCAtMC42NzIgMC4wMDAgMS4wMzUgLTAuNjQ2IDAuMjg4IC0wLjY2NCAwLjAwMCAxLjAyMCAtMC42MzYgLTAuNjA5IDAuMjUwIDAuMDAwIDAuOTk0IDAuMDAwIDAuMDAwIDAuMDAwIDEuMDAwIDAuMDAwIiAvPjwvZmlsdGVyPjwvZGVmcz48aW1hZ2Ugd2lkdGg9IjQiIGhlaWdodD0iNSIgZmlsdGVyPSJ1cmwoI2RhcmtyZWFkZXItaW1hZ2UtZmlsdGVyKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnJTNlJTNjcGF0aCBmaWxsPSclMjMzNzNhM2MnIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLyUzZSUzYy9zdmclM2UiIC8+PC9zdmc+");
    background-color: rgb(24, 26, 27);
    border-color: rgb(60, 65, 68);
}
.custom-select:focus {
    border-color: rgb(46, 77, 104);
    outline-color: initial;
    box-shadow: rgba(54, 90, 122, 0.25) 0px 0px 0px 0.2rem;
}
.custom-select[multiple],
.custom-select[size]:not([size="1"]) {
    background-image: none;
}
.custom-select:disabled {
    color: rgb(161, 152, 140);
    background-color: rgb(35, 38, 39);
}
.custom-file-input:focus ~ .custom-file-label {
    border-color: rgb(46, 77, 104);
    box-shadow: rgba(54, 90, 122, 0.25) 0px 0px 0px 0.2rem;
}
.custom-file-input[disabled] ~ .custom-file-label,
.custom-file-input:disabled ~ .custom-file-label {
    background-color: rgb(35, 38, 39);
}
.custom-file-label {
    color: rgb(181, 175, 166);
    background-color: rgb(24, 26, 27);
    border-color: rgb(60, 65, 68);
}
.custom-file-label::after {
    color: rgb(181, 175, 166);
    background-color: rgb(35, 38, 39);
    border-left-color: inherit;
}
.custom-range {
    background-color: transparent;
}
.custom-range:focus {
    outline-color: initial;
}
.custom-range:focus::-webkit-slider-thumb {
    box-shadow: rgb(36, 53, 52) 0px 0px 0px 1px,
    rgba(54, 90, 122, 0.25) 0px 0px 0px 0.2rem;
}
.custom-range::-webkit-slider-thumb {
    background-color: rgb(54, 90, 122);
    border-color: initial;
}
.custom-range::-webkit-slider-thumb:active {
    background-color: rgb(36, 60, 82);
}
.custom-range::-webkit-slider-runnable-track {
    color: transparent;
    background-color: rgb(40, 44, 45);
    border-color: transparent;
}
.custom-range:disabled::-webkit-slider-thumb {
    background-color: rgb(66, 71, 74);
}
.nav {
    list-style-image: initial;
}
.nav-link:hover,
.nav-link:focus {
    text-decoration-color: initial;
}
.nav-link.disabled {
    color: rgb(161, 152, 140);
}
.nav-tabs {
    border-bottom-color: rgb(56, 61, 63);
}
.nav-tabs .nav-link {
    border-color: transparent;
}
.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
    border-color: rgb(53, 58, 60) rgb(53, 58, 60) rgb(56, 61, 63);
}
.nav-tabs .nav-link.disabled {
    color: rgb(161, 152, 140);
    background-color: transparent;
    border-color: transparent;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
    color: rgb(181, 175, 166);
    background-color: rgb(36, 53, 52);
    border-color: rgb(56, 61, 63) rgb(56, 61, 63) rgb(57, 61, 64);
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
    color: rgb(232, 230, 227);
    background-color: rgb(54, 90, 122);
}
.navbar-brand:hover,
.navbar-brand:focus {
    text-decoration-color: initial;
}
.navbar-nav {
    list-style-image: initial;
}
.navbar-toggler {
    background-color: transparent;
    border-color: transparent;
}
.navbar-toggler:hover,
.navbar-toggler:focus {
    text-decoration-color: initial;
}
.navbar-toggler-icon {
    background-image: initial;
    background-color: initial;
}
.navbar-light .navbar-brand {
    color: rgba(232, 230, 227, 0.9);
}
.navbar-light .navbar-brand:hover,
.navbar-light .navbar-brand:focus {
    color: rgba(232, 230, 227, 0.9);
}
.navbar-light .navbar-nav .nav-link {
    color: rgba(232, 230, 227, 0.5);
}
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
    color: rgb(232, 230, 227);
}
.navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(232, 230, 227, 0.3);
}
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
    color: rgba(232, 230, 227, 0.9);
}
.navbar-light .navbar-toggler {
    color: rgba(232, 230, 227, 0.5);
    border-color: rgba(140, 130, 115, 0.1);
}
.navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCclM2UlM2NwYXRoIHN0cm9rZT0ncmdiYSUyODAsIDAsIDAsIDAuNSUyOScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2UiIC8+PC9zdmc+");
}
.navbar-light .navbar-text {
    color: rgba(232, 230, 227, 0.5);
}
.navbar-light .navbar-text a {
    color: rgba(232, 230, 227, 0.9);
}
.navbar-light .navbar-text a:hover,
.navbar-light .navbar-text a:focus {
    color: rgba(232, 230, 227, 0.9);
}
.navbar-dark .navbar-brand {
    color: rgb(232, 230, 227);
}
.navbar-dark .navbar-brand:hover,
.navbar-dark .navbar-brand:focus {
    color: rgb(232, 230, 227);
}
.navbar-dark .navbar-nav .nav-link {
    color: rgba(232, 230, 227, 0.5);
}
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
    color: rgb(232, 230, 227);
}
.navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(232, 230, 227, 0.25);
}
.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .nav-link.active {
    color: rgb(232, 230, 227);
}
.navbar-dark .navbar-toggler {
    color: rgba(232, 230, 227, 0.5);
    border-color: rgba(48, 52, 54, 0.1);
}
.navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-dark .navbar-text {
    color: rgba(232, 230, 227, 0.5);
}
.navbar-dark .navbar-text a {
    color: rgb(232, 230, 227);
}
.navbar-dark .navbar-text a:hover,
.navbar-dark .navbar-text a:focus {
    color: rgb(232, 230, 227);
}
.card {
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.13);
}
.card > .list-group {
    border-top-color: inherit;
    border-bottom-color: inherit;
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
    border-top-color: initial;
}
.card-link:hover {
    text-decoration-color: initial;
}
.card-header {
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom-color: rgba(140, 130, 115, 0.13);
}
.card-footer {
    background-color: rgba(0, 0, 0, 0.03);
    border-top-color: rgba(140, 130, 115, 0.13);
}
.card-header-tabs {
    border-bottom-color: initial;
}
@media (min-width: 576px) {
    .card-group > .card + .card {
        border-left-color: initial;
    }
}
.accordion > .card:not(:last-of-type) {
    border-bottom-color: initial;
}
.breadcrumb {
    list-style-image: initial;
    background-color: rgb(3, 64, 54);
}
.breadcrumb-item + .breadcrumb-item::before {
    color: rgb(161, 152, 140);
}
.breadcrumb-item + .breadcrumb-item:hover::before {
    text-decoration-color: initial;
}
.breadcrumb-item + .breadcrumb-item:hover::before {
    text-decoration-color: initial;
}
.breadcrumb-item.active {
    color: rgb(161, 152, 140);
}
.pagination {
    list-style-image: initial;
}
.page-link {
    color: rgb(129, 168, 198);
    background-color: rgb(24, 26, 27);
    border-color: rgb(56, 61, 63);
}
.page-link:hover {
    color: rgb(160, 190, 213);
    text-decoration-color: initial;
    background-color: rgb(35, 38, 39);
    border-color: rgb(56, 61, 63);
}
.page-link:focus {
    outline-color: initial;
    box-shadow: rgba(54, 90, 122, 0.25) 0px 0px 0px 0.2rem;
}
.page-item.active .page-link {
    color: rgb(232, 230, 227);
    background-color: rgb(54, 90, 122);
    border-color: rgb(58, 97, 131);
}
.page-item.disabled .page-link {
    color: rgb(161, 152, 140);
    background-color: rgb(24, 26, 27);
    border-color: rgb(56, 61, 63);
}
a.badge:hover,
a.badge:focus {
    text-decoration-color: initial;
}
.badge-primary {
    color: rgb(232, 230, 227);
    background-color: rgb(54, 90, 122);
}
a.badge-primary:hover,
a.badge-primary:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(42, 70, 94);
}
a.badge-primary:focus,
a.badge-primary.focus {
    outline-color: initial;
    box-shadow: rgba(54, 90, 122, 0.5) 0px 0px 0px 0.2rem;
}
.badge-secondary {
    color: rgb(209, 205, 199);
    background-color: rgb(35, 38, 39);
}
a.badge-secondary:hover,
a.badge-secondary:focus {
    color: rgb(209, 205, 199);
    background-color: rgb(49, 53, 55);
}
a.badge-secondary:focus,
a.badge-secondary.focus {
    outline-color: initial;
    box-shadow: rgba(35, 38, 39, 0.5) 0px 0px 0px 0.2rem;
}
.badge-success {
    color: rgb(232, 230, 227);
    background-color: rgb(26, 161, 121);
}
a.badge-success:hover,
a.badge-success:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(20, 126, 94);
}
a.badge-success:focus,
a.badge-success.focus {
    outline-color: initial;
    box-shadow: rgba(26, 161, 121, 0.5) 0px 0px 0px 0.2rem;
}
.badge-info {
    color: rgb(209, 205, 199);
    background-color: rgb(28, 115, 141);
}
a.badge-info:hover,
a.badge-info:focus {
    color: rgb(209, 205, 199);
    background-color: rgb(34, 136, 166);
}
a.badge-info:focus,
a.badge-info.focus {
    outline-color: initial;
    box-shadow: rgba(28, 115, 141, 0.5) 0px 0px 0px 0.2rem;
}
.badge-warning {
    color: rgb(209, 205, 199);
    background-color: rgb(153, 95, 13);
}
a.badge-warning:hover,
a.badge-warning:focus {
    color: rgb(209, 205, 199);
    background-color: rgb(181, 113, 15);
}
a.badge-warning:focus,
a.badge-warning.focus {
    outline-color: initial;
    box-shadow: rgba(153, 95, 13, 0.5) 0px 0px 0px 0.2rem;
}
.badge-danger {
    color: rgb(232, 230, 227);
    background-color: rgb(148, 35, 32);
}
a.badge-danger:hover,
a.badge-danger:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(161, 38, 35);
}
a.badge-danger:focus,
a.badge-danger.focus {
    outline-color: initial;
    box-shadow: rgba(148, 35, 32, 0.5) 0px 0px 0px 0.2rem;
}
.badge-light {
    color: rgb(209, 205, 199);
    background-color: rgb(27, 30, 31);
}
a.badge-light:hover,
a.badge-light:focus {
    color: rgb(209, 205, 199);
    background-color: rgb(42, 45, 47);
}
a.badge-light:focus,
a.badge-light.focus {
    outline-color: initial;
    box-shadow: rgba(27, 30, 31, 0.5) 0px 0px 0px 0.2rem;
}
.badge-dark {
    color: rgb(232, 230, 227);
    background-color: rgb(43, 47, 49);
}
a.badge-dark:hover,
a.badge-dark:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(24, 26, 27);
}
a.badge-dark:focus,
a.badge-dark.focus {
    outline-color: initial;
    box-shadow: rgba(43, 47, 49, 0.5) 0px 0px 0px 0.2rem;
}
.jumbotron {
    background-color: rgb(35, 38, 39);
}
.alert {
    border-color: transparent;
}
.alert-heading {
    color: inherit;
}
.alert-dismissible .close {
    color: inherit;
}
.alert-primary {
    color: rgb(172, 198, 218);
    background-color: rgb(40, 44, 45);
    border-color: rgb(45, 64, 81);
}
.alert-primary hr {
    border-top-color: rgb(48, 69, 86);
}
.alert-primary .alert-link {
    color: rgb(212, 208, 202);
}
.alert-secondary {
    color: rgb(155, 146, 133);
    background-color: rgb(26, 28, 29);
    border-color: rgb(49, 54, 56);
}
.alert-secondary hr {
    border-top-color: rgb(53, 58, 60);
}
.alert-secondary .alert-link {
    color: rgb(171, 163, 152);
}
.alert-success,
.environmenttable .ok {
    color: rgb(138, 236, 207);
    background-color: rgb(17, 68, 57);
    border-color: rgb(24, 101, 78);
}
.alert-success hr,
.environmenttable .ok hr {
    border-top-color: rgb(26, 107, 83);
}
.alert-success .alert-link,
.environmenttable .ok .alert-link {
    color: rgb(210, 206, 200);
}
.alert-info {
    color: rgb(138, 192, 207);
    background-color: rgb(13, 51, 62);
    border-color: rgb(19, 80, 99);
}
.alert-info hr {
    border-top-color: rgb(22, 86, 104);
}
.alert-info .alert-link {
    color: rgb(163, 206, 218);
}
.alert-warning,
.environmenttable .warn {
    color: rgb(214, 178, 129);
    background-color: rgb(68, 43, 6);
    border-color: rgb(109, 68, 9);
}
.alert-warning hr,
.environmenttable .warn hr {
    border-top-color: rgb(116, 72, 10);
}
.alert-warning .alert-link,
.environmenttable .warn .alert-link {
    color: rgb(223, 195, 156);
}
.alert-danger,
.environmenttable .error {
    color: rgb(213, 141, 138);
    background-color: rgb(63, 16, 14);
    border-color: rgb(98, 24, 22);
}
.alert-danger hr,
.environmenttable .error hr {
    border-top-color: rgb(105, 24, 23);
}
.alert-danger .alert-link,
.environmenttable .error .alert-link {
    color: rgb(223, 167, 165);
}
.alert-light {
    color: rgb(153, 144, 131);
    background-color: rgb(25, 27, 28);
    border-color: rgb(34, 34, 69);
}
.alert-light hr {
    border-top-color: rgb(52, 56, 58);
}
.alert-light .alert-link {
    color: rgb(166, 159, 147);
}
.alert-dark {
    color: rgb(213, 209, 204);
    background-color: rgb(46, 50, 52);
    border-color: rgb(64, 69, 72);
}
.alert-dark hr {
    border-top-color: rgb(67, 73, 76);
}
.alert-dark .alert-link {
    color: rgb(229, 227, 224);
}
.progress {
    background-color: rgb(35, 38, 39);
}
.progress-bar {
    color: rgb(232, 230, 227);
    background-color: rgb(54, 90, 122);
}
.progress-bar-striped {
    background-image: linear-gradient(45deg,
    rgba(24, 26, 27, 0.15) 25%,
    rgba(0, 0, 0, 0) 25%,
    rgba(0, 0, 0, 0) 50%,
    rgba(24, 26, 27, 0.15) 50%,
    rgba(24, 26, 27, 0.15) 75%,
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0));
}
.list-group-item-action {
    color: rgb(181, 175, 166);
}
.list-group-item-action:hover,
.list-group-item-action:focus {
    color: rgb(181, 175, 166);
    text-decoration-color: initial;
    background-color: rgb(27, 30, 31);
}
.list-group-item-action:active {
    color: rgb(196, 191, 183);
    background-color: rgb(35, 38, 39);
}
.list-group-item {
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.13);
}
.list-group-item.disabled,
.list-group-item:disabled {
    color: rgb(161, 152, 140);
    background-color: rgb(24, 26, 27);
}
.list-group-item.active {
    color: rgb(232, 230, 227);
    background-color: rgb(54, 90, 122);
    border-color: rgb(58, 97, 131);
}
.list-group-item-primary {
    color: rgb(172, 198, 218);
    background-color: rgb(47, 51, 53);
}
.list-group-item-primary.list-group-item-action:hover,
.list-group-item-primary.list-group-item-action:focus {
    color: rgb(172, 198, 218);
    background-color: rgb(41, 59, 74);
}
.list-group-item-primary.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(28, 47, 63);
    border-color: rgb(68, 114, 153);
}
.list-group-item-secondary {
    color: rgb(155, 146, 133);
    background-color: rgb(27, 29, 30);
}
.list-group-item-secondary.list-group-item-action:hover,
.list-group-item-secondary.list-group-item-action:focus {
    color: rgb(155, 146, 133);
    background-color: rgb(34, 37, 38);
}
.list-group-item-secondary.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(92, 100, 104);
    border-color: rgb(100, 93, 82);
}
.list-group-item-success {
    color: rgb(138, 236, 207);
    background-color: rgb(19, 78, 65);
}
.list-group-item-success.list-group-item-action:hover,
.list-group-item-success.list-group-item-action:focus {
    color: rgb(138, 236, 207);
    background-color: rgb(22, 91, 75);
}
.list-group-item-success.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(14, 84, 63);
    border-color: rgb(30, 188, 141);
}
.list-group-item-info {
    color: rgb(138, 192, 207);
    background-color: rgb(14, 57, 70);
}
.list-group-item-info.list-group-item-action:hover,
.list-group-item-info.list-group-item-action:focus {
    color: rgb(138, 192, 207);
    background-color: rgb(17, 68, 82);
}
.list-group-item-info.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(38, 80, 92);
    border-color: rgb(60, 127, 147);
}
.list-group-item-warning {
    color: rgb(214, 178, 129);
    background-color: rgb(77, 48, 6);
}
.list-group-item-warning.list-group-item-action:hover,
.list-group-item-warning.list-group-item-action:focus {
    color: rgb(214, 178, 129);
    background-color: rgb(91, 56, 7);
}
.list-group-item-warning.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(100, 72, 33);
    border-color: rgb(155, 111, 51);
}
.list-group-item-danger {
    color: rgb(213, 141, 138);
    background-color: rgb(71, 17, 16);
}
.list-group-item-danger.list-group-item-action:hover,
.list-group-item-danger.list-group-item-action:focus {
    color: rgb(213, 141, 138);
    background-color: rgb(84, 19, 18);
}
.list-group-item-danger.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(90, 34, 33);
    border-color: rgb(153, 58, 56);
}
.list-group-item-light {
    color: rgb(153, 144, 131);
    background-color: rgb(25, 27, 28);
}
.list-group-item-light.list-group-item-action:hover,
.list-group-item-light.list-group-item-action:focus {
    color: rgb(153, 144, 131);
    background-color: rgb(32, 35, 36);
}
.list-group-item-light.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(95, 103, 107);
    border-color: rgb(83, 90, 94);
}
.list-group-item-dark {
    color: rgb(213, 209, 204);
    background-color: rgb(55, 60, 62);
}
.list-group-item-dark.list-group-item-action:hover,
.list-group-item-dark.list-group-item-action:focus {
    color: rgb(213, 209, 204);
    background-color: rgb(62, 68, 70);
}
.list-group-item-dark.list-group-item-action.active {
    color: rgb(232, 230, 227);
    background-color: rgb(23, 24, 25);
    border-color: rgb(130, 121, 107);
}
.close {
    color: rgb(232, 230, 227);
    text-shadow: rgb(24, 26, 27) 0px 1px 0px;
}
.close:hover {
    color: rgb(232, 230, 227);
    text-decoration-color: initial;
}
button.close {
    background-color: transparent;
    border-color: initial;
}
.toast {
    background-color: rgba(24, 26, 27, 0.85);
    border-color: rgba(140, 130, 115, 0.1);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0.25rem 0.75rem;
}
.toast-header {
    color: rgb(161, 152, 140);
    background-color: rgba(24, 26, 27, 0.85);
    border-bottom-color: rgba(140, 130, 115, 0.05);
}
.modal {
    outline-color: initial;
}
.modal-content {
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.2);
    outline-color: initial;
}
.modal-backdrop {
    background-color: rgb(0, 0, 0);
}
.modal-header {
    border-bottom-color: rgb(56, 61, 63);
}
.modal-footer {
    border-top-color: rgb(56, 61, 63); 
}
.tooltip {
    text-decoration-color: initial; text-shadow: none; 
}
.tooltip .arrow::before {
    border-color: transparent; 
}
.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {
    border-top-color: rgb(140, 130, 115); 
}
.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before {
    border-right-color: rgb(140, 130, 115); 
}
.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
    border-bottom-color: rgb(140, 130, 115); 
}
.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before {
    border-left-color: rgb(140, 130, 115);
}
.tooltip-inner {
    color: rgb(232, 230, 227);
    background-color: rgb(0, 0, 0);
}
.popover {
    text-decoration-color: initial;
    text-shadow: none;
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.2); 
}
.popover .arrow::before, .popover .arrow::after {
    border-color: transparent; 
}
.bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^="top"] > .arrow::before {
    border-top-color: rgba(140, 130, 115, 0.25); 
}
.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^="top"] > .arrow::after {
    border-top-color: rgb(48, 52, 54); 
}
.bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^="right"] > .arrow::before {
    border-right-color: rgba(140, 130, 115, 0.25); 
}
.bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^="right"] > .arrow::after {
    border-right-color: rgb(48, 52, 54); 
}
.bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^="bottom"] > .arrow::before {
    border-bottom-color: rgba(140, 130, 115, 0.25); 
}
.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^="bottom"] > .arrow::after {
    border-bottom-color: rgb(48, 52, 54); 
}
.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^="bottom"] .popover-header::before {
    border-bottom-color: rgb(50, 54, 57); 
}
.bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^="left"] > .arrow::before {
    border-left-color: rgba(140, 130, 115, 0.25); 
}
.bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^="left"] > .arrow::after {
    border-left-color: rgb(48, 52, 54);
}
.popover-header {
    background-color: rgb(29, 31, 32);
    border-bottom-color: rgb(54, 58, 60);
}
.popover-body {
    color: rgb(196, 191, 183);
}
.carousel-control-prev,
.carousel-control-next {
    color: rgb(232, 230, 227);
}
.carousel-control-prev:hover,
.carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
    color: rgb(232, 230, 227);
    text-decoration-color: initial;
    outline-color: initial;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
    background-image: initial;
    background-color: initial;
}
.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}
.carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}
.carousel-indicators {
    list-style-image: initial;
}
.carousel-indicators li {
    background-color: rgb(24, 26, 27);
    border-top-color: transparent;
    border-bottom-color: transparent;
}
.carousel-caption {
    color: rgb(232, 230, 227);
}
.spinner-border {
    border-color: currentcolor transparent currentcolor currentcolor;
}
.spinner-grow {
    background-color: currentcolor;
}
.bg-primary {
    background-color: rgb(54, 90, 122) !important;
}
a.bg-primary:hover,
a.bg-primary:focus,
button.bg-primary:hover,
button.bg-primary:focus {
    background-color: rgb(42, 70, 94) !important;
}
.bg-secondary {
    background-color: rgb(35, 38, 39) !important;
}
a.bg-secondary:hover,
a.bg-secondary:focus,
button.bg-secondary:hover,
button.bg-secondary:focus {
    background-color: rgb(49, 53, 55) !important;
}
.bg-success {
    background-color: rgb(26, 161, 121) !important;
}
a.bg-success:hover,
a.bg-success:focus,
button.bg-success:hover,
button.bg-success:focus {
    background-color: rgb(20, 126, 94) !important;
}
.bg-info {
    background-color: rgb(28, 115, 141) !important;
}
a.bg-info:hover,
a.bg-info:focus,
button.bg-info:hover,
button.bg-info:focus {
    background-color: rgb(34, 136, 166) !important;
}
.bg-warning {
    background-color: rgb(153, 95, 13) !important;
}
a.bg-warning:hover,
a.bg-warning:focus,
button.bg-warning:hover,
button.bg-warning:focus {
    background-color: rgb(181, 113, 15) !important;
}
.bg-danger {
    background-color: rgb(148, 35, 32) !important;
}
a.bg-danger:hover,
a.bg-danger:focus,
button.bg-danger:hover,
button.bg-danger:focus {
    background-color: rgb(161, 38, 35) !important;
}
.bg-light {
    background-color: rgb(27, 30, 31) !important;
}
a.bg-light:hover,
a.bg-light:focus,
button.bg-light:hover,
button.bg-light:focus {
    background-color: rgb(42, 45, 47) !important;
}
.bg-dark {
    background-color: rgb(43, 47, 49) !important;
}
a.bg-dark:hover,
a.bg-dark:focus,
button.bg-dark:hover,
button.bg-dark:focus {
    background-color: rgb(24, 26, 27) !important;
}
.bg-white {
    background-color: rgb(24, 26, 27) !important;
}
.bg-transparent {
    background-color: transparent !important;
}
.border,
.filemanager-container,
.filepicker-filelist {
    border-color: rgb(56, 61, 63) !important;
}
.border-top {
    border-top-color: rgb(56, 61, 63) !important;
}
.border-right {
    border-right-color: rgb(56, 61, 63) !important;
}
.border-bottom {
    border-bottom-color: rgb(56, 61, 63) !important;
}
.border-left {
    border-left-color: rgb(56, 61, 63) !important;
}
.border-0 {
    border-color: initial !important;
}
.border-top-0 {
    border-top-color: initial !important;
}
.border-right-0 {
    border-right-color: initial !important;
}
.border-bottom-0 {
    border-bottom-color: initial !important;
}
.border-left-0 {
    border-left-color: initial !important;
}
.border-primary {
    border-color: rgb(58, 97, 131) !important;
}
.border-secondary {
    border-color: rgb(53, 58, 60) !important;
}
.border-success {
    border-color: rgb(25, 160, 120) !important;
}
.border-info {
    border-color: rgb(27, 110, 134) !important;
}
.border-warning {
    border-color: rgb(147, 91, 12) !important;
}
.border-danger {
    border-color: rgb(137, 33, 30) !important;
}
.border-light {
    border-color: rgb(50, 54, 56) !important;
}
.border-dark {
    border-color: rgb(121, 112, 99) !important;
}
.border-white {
    border-color: rgb(48, 52, 54) !important;
}
.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
    border-color: initial;
}
.sr-only {
    border-color: initial;
}
.shadow-sm {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 0.125rem 0.25rem !important;
}
.shadow {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem !important;
}
.shadow-lg {
    box-shadow: rgba(0, 0, 0, 0.18) 0px 1rem 3rem !important;
}
.shadow-none {
    box-shadow: none !important;
}
.stretched-link::after {
    background-color: rgba(0, 0, 0, 0);
}
.text-white {
    color: rgb(232, 230, 227) !important;
}
.text-primary {
    color: rgb(129, 168, 198) !important;
}
a.text-primary:hover,
a.text-primary:focus {
    color: rgb(160, 190, 213) !important;
}
.text-secondary {
    color: rgb(220, 217, 212) !important;
}
a.text-secondary:hover,
a.text-secondary:focus {
    color: rgb(196, 191, 183) !important;
}
.text-success {
    color: rgb(70, 226, 180) !important;
}
a.text-success:hover,
a.text-success:focus {
    color: rgb(116, 233, 199) !important;
}
.text-info {
    color: rgb(98, 195, 223) !important;
}
a.text-info:hover,
a.text-info:focus {
    color: rgb(75, 185, 218) !important;
}
.text-warning {
    color: rgb(241, 176, 84) !important;
}
a.text-warning:hover,
a.text-warning:focus {
    color: rgb(238, 160, 52) !important;
}
.text-danger {
    color: rgb(219, 94, 90) !important;
}
a.text-danger:hover,
a.text-danger:focus {
    color: rgb(219, 90, 86) !important;
}
.text-light {
    color: rgb(228, 226, 222) !important;
}
a.text-light:hover,
a.text-light:focus {
    color: rgb(204, 199, 193) !important;
}
.text-dark {
    color: rgb(196, 191, 183) !important;
}
a.text-dark:hover,
a.text-dark:focus {
    color: rgb(220, 217, 212) !important;
}
.text-body {
    color: rgb(196, 191, 183) !important;
}
.text-muted {
    color: rgb(161, 152, 140) !important;
}
.text-black-50 {
    color: rgba(232, 230, 227, 0.5) !important;
}
.text-white-50 {
    color: rgba(232, 230, 227, 0.5) !important;
}
.text-hide {
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border-color: initial;
}
.text-decoration-none {
    text-decoration-color: initial !important;
}
.text-reset {
    color: inherit !important;
}
#region-main {
    background-color: rgb(36, 53, 52);
}
@media (min-width: 576px) {
    #region-main {
        border-color: rgba(140, 130, 115, 0.13);
    }
}
a.dimmed,
a.dimmed:link,
a.dimmed:visited,
a.dimmed_text,
a.dimmed_text:link,
a.dimmed_text:visited,
.dimmed_text,
.dimmed_text a,
.dimmed_text a:link,
.dimmed_text a:visited,
.usersuspended,
.usersuspended a,
.usersuspended a:link,
.usersuspended a:visited,
.dimmed_category,
.dimmed_category a {
    color: rgb(161, 152, 140);
}
.aalink.focus,
.aalink:focus,
#page-footer a:not([class]).focus,
#page-footer a:not([class]):focus,
.arrow_link.focus,
.arrow_link:focus,
a:not([class]).focus,
a:not([class]):focus,
.activityinstance > a.focus,
.activityinstance > a:focus {
    outline-color: transparent;
    color: rgb(209, 205, 199);
    background-color: rgb(34, 37, 38);
    box-shadow: rgb(34, 37, 38) 0px -0.2rem,
    rgb(43, 47, 49) 0px 0.2rem;
}
.aalink:focus:hover,
#page-footer a:not([class]):focus:hover,
.arrow_link:focus:hover,
a:not([class]):focus:hover, .activityinstance > a:focus:hover {
    text-decoration-color: initial; 
}
.aabtn.focus, .aabtn:focus, .btn-link.focus, .btn-link:focus, .nav-link.focus, .nav-link:focus, .editor_atto_toolbar button.focus, .editor_atto_toolbar button:focus, [role="button"].focus, [role="button"]:focus, .list-group-item-action.focus, .list-group-item-action:focus, input[type="checkbox"].focus, input[type="checkbox"]:focus, input[type="radio"].focus, input[type="radio"]:focus, input[type="file"].focus, input[type="file"]:focus, input[type="image"].focus, input[type="image"]:focus, .sr-only-focusable.focus, .sr-only-focusable:focus, a.dropdown-toggle.focus, a.dropdown-toggle:focus, .modal-dialog[tabindex="0"].focus, .modal-dialog[tabindex="0"]:focus, .moodle-dialogue-base .closebutton.focus, .moodle-dialogue-base .closebutton:focus, button.close.focus, button.close:focus, .form-autocomplete-selection.focus, .form-autocomplete-selection:focus, [role="treeitem"]:not([aria-expanded="true"]).focus, [role="treeitem"]:not([aria-expanded="true"]):focus {
    outline-color: initial;
    box-shadow: rgba(54, 90, 122, 0.25) 0px 0px 0px 0.2rem; 
}
.aabtn:focus:hover, .btn-link:focus:hover, .nav-link:focus:hover, .editor_atto_toolbar button:focus:hover, [role="button"]:focus:hover, .list-group-item-action:focus:hover, input[type="checkbox"]:focus:hover, input[type="radio"]:focus:hover, input[type="file"]:focus:hover, input[type="image"]:focus:hover, .sr-only-focusable:focus:hover, a.dropdown-toggle:focus:hover, .modal-dialog[tabindex="0"]:focus:hover, .moodle-dialogue-base .closebutton:focus:hover, button.close:focus:hover, .form-autocomplete-selection:focus:hover, [role="treeitem"]:not([aria-expanded="true"]):focus:hover {
    text-decoration-color: initial; 
}
[role="treeitem"][aria-expanded="true"] {
    outline-color: initial; 
}
[role="treeitem"][aria-expanded="true"].focus > :first-child, [role="treeitem"][aria-expanded="true"]:focus > :first-child {
    outline-color: initial;
    box-shadow: rgba(54, 90, 122, 0.25) 0px 0px 0px 0.2rem; 
}
[role="treeitem"][aria-expanded="true"]:focus:hover {
    text-decoration-color: initial; 
}
.form-autocomplete-suggestions li[aria-selected="true"] {
    outline-color: initial;
    box-shadow: rgba(54, 90, 122, 0.25) 0px 0px 0px 0.2rem; 
}
.safari input[type="checkbox"].focus, .safari input[type="checkbox"]:focus, .safari input[type="radio"].focus, .safari input[type="radio"]:focus {
    outline-color: initial;
}
.unlist,
.unlist li,
.inline-list,
.inline-list li,
.block .list,
.block .list li,
.section li.activity,
.section li.movehere,
.tabtree li {
    list-style-image: initial;
}
.section li.movehere a {
    border-color: rgb(121, 112, 99);
}
.red,
.notifyproblem {
    color: rgb(241, 176, 84);
}
.green,
.notifysuccess {
    color: rgb(70, 226, 180);
}
.highlight {
    color: rgb(98, 195, 223);
}
.pagelayout-mydashboard #region-main {
    border-color: initial;
    background-color: transparent;
}
.collapsible-actions .collapseexpand {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/collapsed");
    background-color: initial;
}
.collapsible-actions .collapse-all {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/expanded");
}
.yui-overlay .yui-widget-bd {
    background-color: rgb(106, 94, 0);
    border-color: rgb(144, 131, 31) rgb(153, 140, 40) rgb(153, 140, 40);
    color: rgb(232, 230, 227);
}
.clearer {
    background-image: initial;
    background-color: transparent;
}
.action-menu .dropdown-toggle {
    text-decoration-color: initial;
}
.accesshide {
    border-color: initial;
}
a.skip-block,
a.skip {
    text-decoration-color: initial;
}
.comment-meta span {
    color: rgb(152, 143, 129);
}
.comment-list {
    list-style-image: initial;
}
.comment-list li {
    list-style-image: initial;
}
.comment-paging .curpage {
    border-color: rgb(62, 68, 70);
}
.completion-expired {
    color: rgb(241, 176, 84);
}
.path-tag .tag-index-items .tagarea {
    border-color: rgb(56, 61, 63);
}
.path-tag .tag-index-items .tagarea h3 {
    color: rgb(168, 160, 149);
    text-shadow: rgba(24, 26, 27, 0.5) 0px 1px 0px;
    border-bottom-color: rgb(56, 61, 63);
}
span.flagged-tag,
tr.flagged-tag,
span.flagged-tag a,
tr.flagged-tag a {
    color: rgb(241, 176, 84);
}
.path-tag .tag-management-box li a.edittag {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/i/settings");
}
.path-tag .tag-management-box li a.flagasinappropriate {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/i/flagged");
}
.path-tag .tag-management-box li a.removefrommyinterests {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/delete");
}
.path-tag .tag-management-box li a.addtomyinterests {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/add");
}
.tag_feed .media .muted a {
    color: rgb(161, 152, 140);
}
#webservice-doc-generator td {
    border-color: rgb(140, 130, 115);
}
.userenrolment .col_role .addrole > a:hover,
.userenrolment .col_group .addgroup > a:hover {
    border-bottom-color: rgb(106, 99, 87);
}
.corelightbox {
    background-color: rgb(53, 57, 59);
}
body#page-lib-editor-tinymce-plugins-moodlemedia-preview {
    background-image: none;
    background-color: initial;
}
.moodle-dialogue-base .moodle-dialogue-lightbox {
    background-color: rgb(60, 65, 68);
}
.pagelayout-popup .moodle-dialogue-base .moodle-dialogue-lightbox {
    background-color: transparent;
}
.pagelayout-popup .moodle-dialogue-base .moodle-dialogue {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0.25rem 0.5rem;
}
.moodle-dialogue-base .moodle-dialogue-wrap {
    background-color: rgb(24, 26, 27);
    border-color: rgb(62, 68, 70);
}
.moodle-dialogue-base .moodle-dialogue-wrap .moodle-dialogue-hd {
    border-bottom-color: rgb(56, 61, 63);
}
.moodle-dialogue-base .moodle-dialogue-wrap .moodle-dialogue-hd.yui3-widget-hd {
    color: initial;
    background-image: initial;
    background-color: initial;
}
.moodle-dialogue-base .closebutton {
    background-color: transparent;
    border-color: initial;
    background-image: none;
    box-shadow: none;
}
.moodle-dialogue-base .moodle-dialogue .moodle-dialogue-bd body {
    background-color: rgb(36, 53, 52);
}
.moodle-dialogue-base .moodle-dialogue-fullscreen .moodle-dialogue-content {
    border-color: initial;
}
.moodle-dialogue-exception .param-stacktrace label {
    background-color: rgb(34, 36, 38);
    border-color: rgb(62, 68, 70);
}
.moodle-dialogue-exception .param-stacktrace pre {
    border-color: rgb(62, 68, 70);
    background-color: rgb(24, 26, 27);
}
.moodle-dialogue-exception .param-stacktrace .stacktrace-file {
    color: rgb(127, 174, 255);
}
.moodle-dialogue-exception .param-stacktrace .stacktrace-line {
    color: rgb(241, 176, 84);
}
.moodle-dialogue-exception .param-stacktrace .stacktrace-call {
    color: rgb(200, 195, 188);
    border-bottom-color: rgb(53, 57, 59);
}
.moodle-dialogue-base .moodle-dialogue .moodle-dialogue-content .moodle-dialogue-ft.yui3-widget-ft {
    background-image: initial;
    background-color: initial;
}
.moodle-dialogue .moodle-dialogue-bd .content-lightbox {
    background-color: rgb(24, 26, 27);
}
.chooserdialogue .moodle-dialogue-wrap .moodle-dialogue-bd {
    background-image: initial;
    background-color: rgb(31, 34, 35);
}
.choosercontainer #chooseform .options {
    border-bottom-color: rgb(67, 73, 76);
}
.choosercontainer #chooseform .option label {
    border-bottom-color: rgb(48, 52, 54);
}
.jschooser .choosercontainer #chooseform .instruction,
.jschooser .choosercontainer #chooseform .typesummary {
    background-color: rgb(24, 26, 27);
}
.choosercontainer #chooseform .selected {
    background-color: rgb(24, 26, 27);
}
.modchooser .modal-footer {
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.modchoosercontainer .optionscontainer .option .optionactions .optionaction,
.modchoosercontainer .searchresultitemscontainer .option .optionactions .optionaction {
    color: rgb(161, 152, 140);
}
.modchoosercontainer .optionscontainer .option .optioninfo a,
.modchoosercontainer .searchresultitemscontainer .option .optioninfo a {
    color: rgb(181, 175, 166);
}
.modchoosercontainer .optionscontainer .option .optioninfo a:hover,
.modchoosercontainer .searchresultitemscontainer .option .optioninfo a:hover {
    text-decoration-color: initial;
}
.modchooser .modal-body .optionsummary {
    background-color: rgb(24, 26, 27);
}
.modchooser .modal-body .optionsummary .actions {
    border-top-color: rgb(56, 61, 63);
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.formlisting {
    background-color: rgb(24, 26, 27);
    border-color: rgb(58, 62, 65);
}
.formlistingmore {
    background-color: rgb(30, 32, 33);
    border-color: rgb(58, 62, 65);
    color: rgb(172, 165, 154);
}
.formlistingrow {
    border-color: rgb(55, 60, 62);
    background-color: rgb(28, 30, 31);
}
div.criteria-description {
    background-image: none;
    background-color: rgb(27, 30, 31);
    border-color: rgb(53, 57, 59);
}
ul.badges {
    list-style-image: initial;
}
.badges li .expireimage {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/i/expired");
}
#badge-image {
    background-color: transparent;
}
#badge-image .expireimage {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/i/expired");
}
.connected {
    color: rgb(70, 226, 180);
}
.notconnected {
    color: rgb(219, 94, 90);
}
.connecting {
    color: rgb(241, 176, 84);
}
.statusbox.active {
    background-color: rgb(17, 68, 57);
}
.statusbox.inactive {
    background-color: rgb(68, 43, 6);
}
a.disabled:hover,
a.disabled {
    text-decoration-color: initial;
    color: rgb(152, 143, 129);
}
.inplaceeditable .quickeditlink {
    color: inherit;
    text-decoration-color: inherit;
}
.hover-tooltip-container .hover-tooltip {
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.2);
}
.hover-tooltip-container .hover-tooltip::before {
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: rgba(140, 130, 115, 0.2);
}
.hover-tooltip-container .hover-tooltip::after {
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: rgb(48, 52, 54);
}
#region-flat-nav .nav {
    background-color: rgb(24, 26, 27);
}
#page-footer a {
    color: rgb(232, 230, 227);
    text-decoration-color: initial;
}
#page-footer a .icon {
    color: rgb(232, 230, 227);
}
#page-footer a:focus .icon {
    color: rgb(196, 191, 183);
}
.bg-inverse a {
    color: rgb(232, 230, 227);
    text-decoration-color: initial;
}
.bg-inverse a .icon {
    color: rgb(232, 230, 227);
}
.dropdown-item a {
    color: rgb(196, 191, 183);
}
.dropdown-item a:focus-visible {
    outline-color: initial;
}
.dropdown-item:active,
.dropdown-item:hover,
.dropdown-item:focus,
.dropdown-item:focus-within {
    outline-color: initial;
    background-color: rgb(48, 52, 54);
    color: rgb(232, 230, 227);
}
.dropdown-item:active a,
.dropdown-item:hover a,
.dropdown-item:focus a,
.dropdown-item:focus-within a {
    color: rgb(232, 230, 227);
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.overlay-icon-container {
    background-color: rgba(24, 26, 27, 0.6);
}
.text-decoration-none {
    text-decoration-color: initial !important;
}
.colour-inherit {
    color: inherit !important;
}
.matchtext {
    background-color: rgb(48, 52, 54);
    color: rgb(196, 191, 183);
}
.emoji-picker .category-button {
    border-top-color: initial;
    border-left-color: initial;
    border-right-color: initial;
    border-bottom-color: transparent;
}
.emoji-picker .category-button.selected {
    border-bottom-color: rgb(58, 97, 131);
}
.emoji-picker .picker-row .emoji-button:hover,
.emoji-picker .picker-row .emoji-button:focus {
    color: inherit;
    text-decoration-color: initial;
}
.emoji-auto-complete .btn.btn-link.btn-icon.emoji-button.active {
    background-color: rgb(35, 38, 39);
}
.alert-primary a {
    color: rgb(212, 208, 202);
}
.alert-secondary a {
    color: rgb(171, 163, 152);
}
.alert-success a,
.environmenttable .ok a {
    color: rgb(210, 206, 200);
}
.alert-info a {
    color: rgb(163, 206, 218);
}
.alert-warning a,
.environmenttable .warn a {
    color: rgb(223, 195, 156);
}
.alert-danger a,
.environmenttable .error a {
    color: rgb(223, 167, 165);
}
.alert-light a {
    color: rgb(166, 159, 147);
}
.alert-dark a {
    color: rgb(229, 227, 224);
}
@media (max-width: 767.98px) {
    .breadcrumb:not(:empty) {
        border-color: rgb(53, 58, 60);
    }
    #page-header .card {
        border-color: initial;
    }
    .nav-tabs,
    .nav-pills {
        border-color: initial;
        background-color: rgb(35, 38, 39);
    }
    .nav-tabs .nav-link,
    .nav-pills .nav-link {
        background-image: initial;
        background-color: rgb(24, 26, 27);
        border-color: initial;
    }
    .nav-tabs .nav-link.active,
    .nav-pills .nav-link.active {
        color: rgb(161, 152, 140);
        border-color: rgb(80, 87, 90);
    }
    .nav-tabs .nav-link.active:hover,
    .nav-pills .nav-link.active:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(88, 95, 99);
        border-color: rgb(80, 87, 90);
    }
    .nav-tabs .nav-link.active:focus,
    .nav-tabs .nav-link.active.focus,
    .nav-pills .nav-link.active:focus,
    .nav-pills .nav-link.active.focus {
        box-shadow: rgba(88, 95, 99, 0.5) 0px 0px 0px 0.2rem;
    }
    .nav-tabs .nav-link.active.disabled,
    .nav-tabs .nav-link.active:disabled,
    .nav-pills .nav-link.active.disabled,
    .nav-pills .nav-link.active:disabled {
        color: rgb(161, 152, 140);
        background-color: transparent;
    }
    .nav-tabs .nav-link.active:not(:disabled):not(.disabled):active,
    .nav-tabs .nav-link.active:not(:disabled):not(.disabled).active,
    .show > .nav-tabs .nav-link.active.dropdown-toggle,
    .nav-pills .nav-link.active:not(:disabled):not(.disabled):active,
    .nav-pills .nav-link.active:not(:disabled):not(.disabled).active,
    .show > .nav-pills .nav-link.active.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(88, 95, 99);
        border-color: rgb(80, 87, 90);
    }
    .nav-tabs .nav-link.active:not(:disabled):not(.disabled):active:focus,
    .nav-tabs .nav-link.active:not(:disabled):not(.disabled).active:focus,
    .show > .nav-tabs .nav-link.active.dropdown-toggle:focus,
    .nav-pills .nav-link.active:not(:disabled):not(.disabled):active:focus,
    .nav-pills .nav-link.active:not(:disabled):not(.disabled).active:focus,
    .show > .nav-pills .nav-link.active.dropdown-toggle:focus {
        box-shadow: rgba(88, 95, 99, 0.5) 0px 0px 0px 0.2rem;
    }
}
.link-underline {
    text-decoration-color: initial;
}
.link-underline:focus {
    text-decoration-color: initial;
}
.visual-scroll-x::-webkit-scrollbar-thumb {
    background-color: rgb(54, 90, 122);
    border-right-color: rgb(48, 52, 54);
}
.visual-scroll-x::-webkit-scrollbar-track {
    background-color: rgb(48, 52, 54);
    border-right-color: rgb(48, 52, 54);
}
.navbar-dark a .icon {
    color: rgba(232, 230, 227, 0.5) !important;
}
#page-admin-roles-define .capdefault {
    background-color: rgba(0, 0, 0, 0.07);
}
.form-item .form-setting .form-multicheckbox ul {
    list-style-image: initial;
}
#adminthemeselector .selectedtheme td.c0 {
    border-color: rgb(19, 80, 99);
}
#adminthemeselector .selectedtheme td.c1 {
    border-color: rgb(19, 80, 99);
}
@media (min-width: 768px) {
    .admin_colourpicker .colourdialogue {
        border-color: rgb(60, 65, 68);
    }
    .admin_colourpicker .previewcolour {
        border-color: rgb(60, 65, 68);
    }
    .admin_colourpicker .currentcolour {
        border-color: rgb(60, 65, 68);
    }
}
@media (max-width: 767.98px) {
    .admin_colourpicker .currentcolour {
        border-color: rgb(56, 61, 63);
    }
}
#page-admin-plugins #plugins-control-panel .status-missing td {
    background-color: rgb(68, 43, 6);
}
#page-admin-plugins #plugins-control-panel .pluginname .componentname {
    color: rgb(161, 152, 140);
}
#page-admin-plugins #plugins-control-panel .version .versionnumber {
    color: rgb(161, 152, 140);
}
#page-admin-plugins #plugins-control-panel .uninstall a {
    color: rgb(219, 94, 90);
}
#page-admin-plugins #plugins-control-panel .notes .requiredby {
    color: rgb(161, 152, 140);
}
#plugins-check-page #plugins-check .status-missing td,
#plugins-check-page #plugins-check .status-downgrade td {
    background-color: rgb(63, 16, 14);
}
#plugins-check-page .pluginupdateinfo,
#plugins-control-panel .pluginupdateinfo {
    background-color: rgb(13, 51, 62);
}
#plugins-check-page .pluginupdateinfo.maturity50,
#plugins-control-panel .pluginupdateinfo.maturity50 {
    background-color: rgb(63, 16, 14);
}
#plugins-check-page .pluginupdateinfo.maturity100,
#plugins-check-page .pluginupdateinfo.maturity150,
#plugins-control-panel .pluginupdateinfo.maturity100,
#plugins-control-panel .pluginupdateinfo.maturity150 {
    background-color: rgb(68, 43, 6);
}
#page-admin-search .adminpagetitle {
    border-bottom-color: initial;
}
#page-admin-search .adminpagepath {
    list-style-image: initial;
}
#page-admin-tasklogs .task-class {
    color: rgb(161, 152, 140);
}
.path-admin-tool-uploaduser .uuwarning {
    background-color: rgb(68, 43, 6);
}
.path-admin-tool-uploaduser .uuerror {
    background-color: rgb(63, 16, 14);
}
.path-admin-tool-uploaduser .uuinfo {
    background-color: rgb(17, 68, 57);
}
.block .block-controls .dropdown-toggle {
    color: rgb(196, 191, 183);
}
@media (min-width: 576px) {
    .region_main_settings_menu_proxy {
        background-color: rgb(36, 53, 52);
    }
}
.block .block-cards .course-summaryitem {
    border-color: rgb(56, 61, 63);
    background-color: rgb(36, 53, 52);
}
.block .block-cards a.coursename,
.block .block-cards span.categoryname,
.block .block-cards .btn-link {
    color: inherit;
}
.block .block-cards .btn.btn-link.btn-icon:hover,
.block .block-cards .btn.btn-link.btn-icon:focus {
    background-color: rgb(35, 38, 39); 
}
.block_settings .block_tree [aria-expanded="true"], .block_settings .block_tree [aria-expanded="true"].emptybranch, .block_settings .block_tree [aria-expanded="false"], .block_navigation .block_tree [aria-expanded="true"], .block_navigation .block_tree [aria-expanded="true"].emptybranch, .block_navigation .block_tree [aria-expanded="false"] {
    background-image: none;
}
.block.invisibleblock .card-title {
    color: rgb(161, 152, 140);
}
@media (max-width: 767.98px) {
    .block.card {
        border-left-color: initial;
        border-right-color: initial;
    }
}
.block_social_activities li a.movehere,
.block_site_main_menu li a.movehere {
    border-color: rgb(121, 112, 99);
}
.calendar_event_category {
    background-color: rgb(63, 38, 63);
}
.calendar_event_category .commands a {
    color: rgb(111, 186, 243);
}
.calendar_event_course {
    background-color: rgb(91, 30, 0);
}
.calendar_event_course .commands a {
    color: rgb(111, 186, 243);
}
.calendar_event_site {
    background-color: rgb(37, 75, 10);
}
.calendar_event_site .commands a {
    color: rgb(111, 186, 243);
}
.calendar_event_group {
    background-color: rgb(74, 53, 1);
}
.calendar_event_group .commands a {
    color: rgb(111, 186, 243);
}
.calendar_event_user {
    background-color: rgb(29, 46, 54);
}
.calendar_event_user .commands a {
    color: rgb(111, 186, 243);
}
.calendar_event_other {
    background-color: rgb(48, 52, 54);
}
.calendar_event_other .commands a {
    color: rgb(111, 186, 243);
}
.path-calendar .calendartable th,
.path-calendar .calendartable td {
    border-color: initial;
}
.path-calendar .calendar-controls .previous {
    border-color: transparent;
}
.path-calendar .calendar-controls .next {
    border-color: transparent;
}
.path-calendar .calendar-controls .drop-target {
    border-color: rgb(58, 97, 131);
}
.path-calendar .maincalendar .calendarmonth ul li > a:hover {
    text-decoration-color: initial;
}
.path-calendar .maincalendar .calendarmonth ul li > a:hover .eventname {
    text-decoration-color: initial;
}
.path-calendar .maincalendar .calendarmonth ul li .calendar-circle.calendar_event_category {
    background-color: rgb(63, 38, 63);
    border-color: rgb(110, 67, 111);
}
.path-calendar .maincalendar .calendarmonth ul li .calendar-circle.calendar_event_course {
    background-color: rgb(91, 30, 0);
    border-color: rgb(192, 64, 0);
}
.path-calendar .maincalendar .calendarmonth ul li .calendar-circle.calendar_event_site {
    background-color: rgb(37, 75, 10);
    border-color: rgb(58, 183, 26);
}
.path-calendar .maincalendar .calendarmonth ul li .calendar-circle.calendar_event_group {
    background-color: rgb(74, 53, 1);
    border-color: rgb(206, 147, 3);
}
.path-calendar .maincalendar .calendarmonth ul li .calendar-circle.calendar_event_user {
    background-color: rgb(29, 46, 54);
    border-color: rgb(66, 105, 122);
}
.path-calendar .maincalendar .calendarmonth ul li .calendar-circle.calendar_event_other {
    background-color: rgb(48, 52, 54);
    border-color: rgb(100, 93, 82);
}
.path-calendar .maincalendar .calendarmonth .clickable:hover {
    box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}
.path-calendar .maincalendar .calendar_event_category:hover a,
.path-calendar .maincalendar .calendar_event_course:hover a,
.path-calendar .maincalendar .calendar_event_site:hover a,
.path-calendar .maincalendar .calendar_event_group:hover a,
.path-calendar .maincalendar .calendar_event_user:hover a {
    color: rgb(160, 190, 213);
    text-decoration-color: initial;
}
.path-calendar .maincalendar .calendar_event_category {
    border-color: rgb(80, 47, 80);
}
.path-calendar .maincalendar .calendar_event_course {
    border-color: rgb(122, 41, 0);
}
.path-calendar .maincalendar .calendar_event_site {
    border-color: rgb(33, 104, 15);
}
.path-calendar .maincalendar .calendar_event_group {
    border-color: rgb(125, 90, 2);
}
.path-calendar .maincalendar .calendar_event_user {
    border-color: rgb(42, 66, 77);
}
.path-calendar .maincalendar .calendar_event_other {
    border-color: rgb(60, 65, 68);
}
.block .minicalendar td.weekend {
    color: rgb(161, 152, 140);
}
.block .minicalendar td a {
    color: rgb(111, 186, 243);
}
.block .minicalendar td.duration_global {
    border-top-color: rgb(33, 104, 15);
    border-bottom-color: rgb(33, 104, 15);
}
.block .minicalendar td.duration_global.duration_finish {
    background-color: rgb(37, 75, 10);
}
.block .minicalendar td.duration_category {
    border-top-color: rgb(80, 47, 80);
    border-bottom-color: rgb(80, 47, 80);
}
.block .minicalendar td.duration_category.duration_finish {
    background-color: rgb(63, 38, 63);
}
.block .minicalendar td.duration_course {
    border-top-color: rgb(122, 41, 0);
    border-bottom-color: rgb(122, 41, 0);
}
.block .minicalendar td.duration_course.duration_finish {
    background-color: rgb(91, 30, 0);
}
.block .minicalendar td.duration_group {
    border-top-color: rgb(125, 90, 2);
    border-bottom-color: rgb(125, 90, 2);
}
.block .minicalendar td.duration_group.duration_finish {
    background-color: rgb(74, 53, 1);
}
.block .minicalendar td.duration_user {
    border-top-color: rgb(42, 66, 77);
    border-bottom-color: rgb(42, 66, 77);
}
.block .minicalendar td.duration_user.duration_finish {
    background-color: rgb(29, 46, 54);
}
.block .minicalendar td.duration_other {
    border-top-color: rgb(60, 65, 68);
    border-bottom-color: rgb(60, 65, 68);
}
.block .minicalendar td.duration_other.duration_finish {
    background-color: rgb(48, 52, 54);
}
.block .calendar_filters ul {
    list-style-image: initial;
}
.block .calendar_filters li span.calendar_event_category i {
    color: rgb(111, 186, 243);
}
.block .calendar_filters li span.calendar_event_course i {
    color: rgb(111, 186, 243);
}
.block .calendar_filters li span.calendar_event_site i {
    color: rgb(111, 186, 243);
}
.block .calendar_filters li span.calendar_event_group i {
    color: rgb(111, 186, 243);
}
.block .calendar_filters li span.calendar_event_user i {
    color: rgb(111, 186, 243);
}
.block .calendar_filters li span.calendar_event_other i {
    color: rgb(111, 186, 243);
}
.block .calendar_filters li > a:hover {
    text-decoration-color: initial;
}
.block .calendar_filters li > a:hover .eventname {
    text-decoration-color: initial;
}
.cal_courses_flt {
    color: rgb(161, 152, 140);
}
.content-bank-container.view-grid .cb-unlisted::after {
    text-shadow: rgb(36, 53, 52) 0px 0px 10px;
}
.content-bank-container.view-list .cb-listitem,
.content-bank-container.view-list .cb-heading {
    border-bottom-color: rgb(56, 61, 63);
}
.content-bank-container.view-list .cb-column {
    border-right-color: rgb(56, 61, 63);
}
.content-bank-container.view-list .cb-listitem.cb-unlisted .cb-column,
.content-bank-container.view-list .cb-listitem.cb-unlisted .cb-column a {
    color: rgb(161, 152, 140);
}
@media (min-width: 576px) {
    .content-bank-container.view-list .cb-column.last {
        border-right-color: initial;
    }
}
.section .activity .stealth {
    color: rgb(161, 152, 140);
}
.section .activity a.stealth,
.section .activity a.stealth:hover {
    color: rgb(141, 177, 204) !important;
}
.section li.activity.hasinfo {
    border-bottom-color: rgb(56, 61, 63);
}
.section li.activity.hasinfo:last-child {
    border-bottom-color: initial;
}
.editing .section .activity:hover,
.editing .section .activity.action-menu-shown {
    background-color: rgba(0, 0, 0, 0.05);
}
.course-content .current::before {
    border-left-color: rgb(58, 97, 131);
}
.course-content .section-summary {
    border-color: rgb(56, 61, 63);
    list-style-image: initial;
}
.course-content .section-summary .section-summary-activities .activity-count {
    color: rgb(161, 152, 140);
}
.course-content ul li.section.main {
    border-bottom-color: rgb(56, 61, 63);
}
.course-content ul li.section.main:last-child {
    border-bottom-color: initial;
}
.course-content ul li.section.hidden .sectionname > span,
.course-content ul li.section.hidden .content > div.summary,
.course-content ul li.section.hidden .activity .activityinstance {
    color: rgb(161, 152, 140);
}
.course-content ul.topics,
.course-content ul.weeks {
    list-style-image: initial;
}
.course-content li.section ul {
    list-style-image: initial;
}
.course-content li.section ul ul {
    list-style-image: initial;
}
.course-content li.section ul ul ul {
    list-style-image: initial;
}
.course-content li.section li.activity ul {
    list-style-image: initial;
}
.course-content li.section li.activity ul ul {
    list-style-image: initial;
}
.course-content li.section li.activity ul ul ul {
    list-style-image: initial;
}
.path-course-view li.activity form.togglecompletion .ajaxworking {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4zMzMgLTAuNjY3IC0wLjY2NyAwLjAwMCAxLjAwMCAtMC42NjcgMC4zMzMgLTAuNjY3IDAuMDAwIDEuMDAwIC0wLjY2NyAtMC42NjcgMC4zMzMgMC4wMDAgMS4wMDAgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEVBQVFBUE1QQVA3ejRQN09lditpQVA3QldQN212djZwRlA3YW5QNjFOdjc0OFA3VGl2NjdSdjZ2SlA3Z3JQN0hhUDZqQlAvLy95SC9DMDVGVkZORFFWQkZNaTR3QXdFQUFBQWgvaHBEY21WaGRHVmtJSGRwZEdnZ1lXcGhlR3h2WVdRdWFXNW1id0FoK1FRRUNnRC9BQ3dBQUFBQUVBQVFBQUFFY2ZESmgyZ2JkZW9IRmtDQ0FGQ2JCQWdMNG9qSXFBRmpJaVFybkVtSU1vUE9NSHltREVEbklMaHdRQnlDY1RqaU5BbUZ6MUNpSUs1UmhZSmF1bDZ0aE1BdHFFRWtDZ3BueXpnSkxBem1CQXpBb0xBNUk4Q0J3REFBNUU4VENBTUJEd1pVQUhBbEFBRWpoeElFWXlVRUJGVVJBQ0g1QkFVS0FBOEFMQUFBQUFBUEFCQUFBQVJkOE1uNVFwT0lUaVdYQkFXalNRZXlPTUFpRUtOa0xJVWhjTk1RSThWaENVS1dTUVBCQVRBaEVGdTAxb1BSQ0FSWXlvZGgwR2hBb3gvRDZEZGhLQVpid0MraFlDQU1ESUQ2S05ZMEFBVHpWUlBReGlWempDRnpmeHlWYWlNUkFDSDVCQVVLQUE4QUxBQUFBQUFRQUE4QUFBUmE4TW41VEtKWU5xa1dRa2NtT1FQU0lZT0lWQUxUTVJOQVNNSEJnRXFTSEFLUUNEMU5JUlV6QUFXekNhR3hVZ291RW9MT0FNaDhyb3lBVnNSOXdMcVVScUxaTlFRSUNBTDZxcElrQUhBRWdJd3h6T0FQT2ZlTHoxTWlBQ0g1QkFVS0FBOEFMQUFBQUFBUUFCQUFBQVJkOE1rcERiMHlJRFRVSGdUMkhGcUhOQmd5RlVSSENDZ0NTRWtESUVwZ0dJcUFHSUtDNmhFZzNTYUVoWWg0QWNCdUNJS0J3UkExQ2dVSGFHZVlYUnFDOElFU2FnTE9RMERDc2tSMlpkN2xNTG9adGdtelRWdmkxZThuZmhjUkFDSDVCQVVLQUFnQUxBQUFBQUFRQUE0QUFBUkdFTW1KUXFCWURpa0V6OXpXSVFVb0JRTFJHVUpKRFFXQkNJZmxWYU1tYkZnbkdCZ2U1akFCR0k2Z2d5OW11V1FLdnBzRWdGRVJNY0NxajRyZ21ud1pMNFVnbkpvbUVRQWgrUVFGQ2dBT0FDd0FBQUFBRUFBUUFBQUViTkRKNlFpaDJDR0dVQXBkQUdSSXdDV0p0NHdaMEFBb1VDUVl3UUNlWVFVSFFpd0tpUzlCUUV3UWdJSGd3SklBR0JpRXd0RHBBSzVHakdFd1VDU3UySXhoc1NnMEtOa0o0R0NJWGlsUGdTQW94RlU3QlVGU1VFaG5HQUlERWxCUkZBc0NGeVFZQUFKdEdZOStFUUFoK1FRRkNnQVBBQ3dBQUFBQUVBQVFBQUFFWC9ESitRQ2dXQktFak9GR0poa0F3bnlHSWtxSlNTb01abkVNWVJtTnBPUVNZR2VOd2dDRHVHQWFESTZTSTJJMEdvT1dzcWs0SEFLcnlTQ0p5R29FZ2taWEZHZ3NCSWlHNExBcUNCSUNyRStFY0J1TmRJZkE0b2l0RUFNSFl4UVJBQ0g1QkFVS0FBNEFMQUVBQVFBUEFBOEFBQVJhMEVtQUVDR1Z5UzFKeDBURGNTQUJOSjZEcUJ2Z0FreUFBRU5TemVzWUhNR1ljNG5VYUVnSUdEWERUV2hRUzBvUXFPRU04QVFzQkwyUlFKQklLQmFJaEVBQnhDNFdCdTRRc0FVVUNvaERraUhBdkdjTFlXc3pTRVlBQUNINUJBVUtBQThBTEFBQUFBQVFBQkFBQUFSZzhNbjVFS0pZV2dTQUpWZm1jUjVnaEJoSElnbVFiVERCU0ltUnBVWmozNWpoOGhoQVlnaWNBQUxJbVlTd0lHQmFGSUJDSU5oTkZJV0V4aUU0QUFRTEE2T2hRQmdXRFluQlNUc2NHRlhKajdKQXVCRURCOC9oV1J3a0Nqd2hTRGNSQUNINUJBVUtBQTRBTEFBQUFRQVFBQThBQUFSYzBNbnBrRVdBYW1rbDJkcjFiY0IxQVpsampPREVKQVNpcFJUck5FWGVnRXhQSElLZ0FtUXd3REFBUTRFbU1iUWNzUW1pY1hCS0ZvSUdZcUhvSlFZSXdpQWdZZEFNQXdXaHdLaUFEb2cwSW5BQUVSWVN4ZkRHM0NRU0lCRUFJZmtFQlFvQUR3QXNBQUFCQUJBQUR3QUFCRjN3eVVrZnFuZ2lVQUhId0VVSlFvS2NxSVFRSDBFSzN3U3dWU0F3blNndGZQWVFRTURBVVNnRU1rREdCOEZRWUhDVkFTa21TVFNnajRNZ2dGQU1nSWFHSkdDUUVDU0dXNkFCT1BnZUJRVmlqVEE0UWZmRzRIUjhQd3hsR0JFQUlma0VCUW9BRHdBc0FBQUJBQThBRHdBQUJGN3dTVktBdlBnU3NiS1hnOEI4VXZjQWd1QUJ5TG1reG5naExHWTRSSWJzU0hJb2lvU0hCZ0FFRmtpaHJzamFFUWFlM0N3Z0tIZ1lDY0l1bEVBMEFrV0dnUlk3VFFxRUJMaGhlYlFraUVPakYwQXc2cDZHUkwwemtDUU1NaGdSQURzPSIgLz48L3N2Zz4=");
    background-color: initial;
}
span.editinstructions {
    text-decoration-color: initial;
    color: rgb(138, 192, 207);
    background-color: rgb(13, 51, 62);
    border-color: rgb(19, 80, 99);
}
span.editinstructions hr {
    border-top-color: rgb(22, 86, 104);
}
span.editinstructions .alert-link {
    color: rgb(163, 206, 218);
}
#dndupload-status {
    color: rgb(138, 192, 207);
    background-color: rgb(13, 51, 62);
    border-color: rgb(19, 80, 99);
}
#dndupload-status hr {
    border-top-color: rgb(22, 86, 104);
}
#dndupload-status .alert-link {
    color: rgb(163, 206, 218);
}
.dndupload-preview {
    color: rgb(162, 154, 142);
    border-color: rgb(79, 86, 89);
    list-style-image: initial;
}
.coursebox > .info > .coursename a {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/i/course");
}
.coursebox.remotehost > .info > .categoryname a {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/i/mnethost");
}
.courses .coursebox.even {
    background-color: rgba(0, 0, 0, 0.05);
}
.course_category_tree .category > .info > .categoryname {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/collapsed_empty");
}
.course_category_tree .category.with_children > .info > .categoryname {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/expanded");
}
.course_category_tree .category.with_children.collapsed > .info > .categoryname {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/collapsed");
}
#page-course-index-category .generalbox.info {
    border-color: rgb(58, 62, 65); 
}
#course-category-listings > div > div > ul.ml > li:first-child > div {
    border-top-color: initial; 
}
#course-category-listings ul.ml {
    list-style-image: initial; 
}
#course-category-listings .listitem[data-selected="1"] {
    border-left-color: rgb(58, 97, 131);
}
#course-category-listings .listitem > div .without-actions {
    color: rgb(200, 195, 188); 
}
#course-category-listings .listitem[data-visible="0"] {
    color: rgb(161, 152, 140); 
}
#course-category-listings .listitem[data-visible="0"] > div > a {
    color: rgb(161, 152, 140);
}
#course-category-listings .listitem.highlight {
    background-color: rgb(36, 53, 52); 
}
#course-category-listings .listitem.highlight > div, #course-category-listings .listitem.highlight > div:hover, #course-category-listings .listitem.highlight[data-selected="1"] > div {
    background-color: rgba(0, 0, 0, 0.07);
}
#course-category-listings #course-listing .listitem .categoryname {
    color: rgb(175, 168, 157);
}
#course-category-listings #category-listing .course-count {
    color: rgb(175, 168, 157);
}
#course-category-listings .listing-pagination .yui3-button {
    color: rgb(209, 205, 199);
    background-color: rgb(28, 115, 141);
    border-color: initial;
}
#course-category-listings .listing-pagination .yui3-button:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(32, 131, 160);
    border-color: rgb(30, 120, 147);
}
#course-category-listings .listing-pagination .yui3-button:focus,
#course-category-listings .listing-pagination .yui3-button.focus {
    color: rgb(232, 230, 227);
    background-color: rgb(32, 131, 160);
    border-color: rgb(30, 120, 147);
    box-shadow: rgba(49, 120, 142, 0.5) 0px 0px 0px 0.2rem;
}
#course-category-listings .listing-pagination .yui3-button.disabled,
#course-category-listings .listing-pagination .yui3-button:disabled {
    color: rgb(209, 205, 199);
    background-color: rgb(28, 115, 141);
    border-color: rgb(27, 110, 134);
}
#course-category-listings .listing-pagination .yui3-button:not(:disabled):not(.disabled):active,
#course-category-listings .listing-pagination .yui3-button:not(:disabled):not(.disabled).active,
.show > #course-category-listings .listing-pagination .yui3-button.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(34, 136, 166);
    border-color: rgb(30, 123, 150);
}
#course-category-listings .listing-pagination .yui3-button:not(:disabled):not(.disabled):active:focus,
#course-category-listings .listing-pagination .yui3-button:not(:disabled):not(.disabled).active:focus,
.show > #course-category-listings .listing-pagination .yui3-button.dropdown-toggle:focus {
    box-shadow: rgba(49, 120, 142, 0.5) 0px 0px 0px 0.2rem;
}
#course-category-listings .listing-pagination .yui3-button.active-page {
    color: rgb(232, 230, 227);
    background-color: rgb(54, 90, 122);
    border-color: rgb(58, 97, 131);
}
#course-category-listings .listing-pagination .yui3-button.active-page:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(45, 74, 101);
    border-color: rgb(63, 105, 141);
}
#course-category-listings .listing-pagination .yui3-button.active-page:focus,
#course-category-listings .listing-pagination .yui3-button.active-page.focus {
    color: rgb(232, 230, 227);
    background-color: rgb(45, 74, 101);
    border-color: rgb(63, 105, 141);
    box-shadow: rgba(71, 102, 128, 0.5) 0px 0px 0px 0.2rem;
}
#course-category-listings .listing-pagination .yui3-button.active-page.disabled,
#course-category-listings .listing-pagination .yui3-button.active-page:disabled {
    color: rgb(232, 230, 227);
    background-color: rgb(54, 90, 122);
    border-color: rgb(58, 97, 131);
}
#course-category-listings .listing-pagination .yui3-button.active-page:not(:disabled):not(.disabled):active,
#course-category-listings .listing-pagination .yui3-button.active-page:not(:disabled):not(.disabled).active,
.show > #course-category-listings .listing-pagination .yui3-button.active-page.dropdown-toggle {
    color: rgb(232, 230, 227);
    background-color: rgb(42, 70, 94);
    border-color: rgb(64, 107, 144);
}
#course-category-listings .listing-pagination .yui3-button.active-page:not(:disabled):not(.disabled):active:focus,
#course-category-listings .listing-pagination .yui3-button.active-page:not(:disabled):not(.disabled).active:focus,
.show > #course-category-listings .listing-pagination .yui3-button.active-page.dropdown-toggle:focus {
    box-shadow: rgba(71, 102, 128, 0.5) 0px 0px 0px 0.2rem;
}
#course-category-listings .listing-pagination-totals.dimmed {
    color: rgb(161, 152, 140);
}
.course-being-dragged-proxy {
    border-color: initial;
    color: rgb(129, 168, 198);
}
@media (min-width: 1200px) and (max-width: 1600px) {
    #course-category-listings.columns-3 {
        background-color: rgb(36, 53, 52);
        border-color: initial;
    }
    #course-category-listings.columns-3 #category-listing > div,
    #course-category-listings.columns-3 #course-listing > div,
    #course-category-listings.columns-3 #course-detail > div {
        background-color: rgb(36, 53, 52);
    }
}
@media (max-width: 1199px) {
    #course-category-listings.columns-2, #course-category-listings.columns-3 {
        border-color: initial; 
    }
}
[data-region="drawer"] {
    background-color: rgba(0, 50, 63, 0.8); 
}
#nav-drawer .list-group-item-action.active + .list-group-item, #nav-drawer .list-group-item.active + .list-group-item {
    border-top-color: initial; 
}
#nav-drawer .list-group ul {
    list-style-image: initial; 
}
[data-region="right-hand-drawer"].drawer {
    box-shadow: rgba(0, 0, 0, 0.08) -2px 2px 4px; 
}
.dir-rtl [data-region="right-hand-drawer"] {
    box-shadow: rgba(0, 0, 0, 0.08) 2px 2px 4px;
}
#page-my-index {
    background-color: rgb(39, 58, 57);
}
.yui3-panel-focused {
    outline-color: initial;
}
.fp-panel-button {
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.fp-navbar {
    border-top-color: rgb(60, 65, 68);
    border-right-color: rgb(60, 65, 68);
    border-left-color: rgb(60, 65, 68);
    border-bottom-color: initial;
}
.file-picker .fp-content {
    border-top-color: initial;
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.file-picker .fp-list .fp-repo.active {
    background-image: initial;
    background-color: rgb(31, 34, 35);
}
.fp-viewbar:not(.disabled) a.checked {
    background-color: rgb(49, 53, 55);
    color: rgb(209, 205, 199);
    border-color: rgb(62, 68, 70);
}
.fp-pathbar .fp-path-folder {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/theme/1656028964/fp/path_folder");
    background-color: initial;
}
.fp-iconview .fp-thumbnail {
    border-color: rgb(48, 52, 54);
}
.fp-iconview .fp-thumbnail img {
    border-color: rgb(58, 62, 65);
}
.fp-iconview .fp-thumbnail:hover {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(58, 62, 65);
}
.fp-iconview .fp-filename-field .fp-filename {
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.file-picker .yui3-datatable table {
    border-color: rgb(67, 73, 76);
}
.file-picker .ygtvtn,
.filemanager .ygtvtn {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/y/tn");
    background-color: initial;
}
.file-picker .ygtvtm,
.filemanager .ygtvtm {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/y/tm");
    background-color: initial;
}
.file-picker .ygtvtmh,
.filemanager .ygtvtmh {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/y/tm");
    background-color: initial;
}
.file-picker .ygtvtp,
.filemanager .ygtvtp {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/y/tp");
    background-color: initial;
}
.file-picker .ygtvtph,
.filemanager .ygtvtph {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/y/tp");
    background-color: initial;
}
.file-picker .ygtvln,
.filemanager .ygtvln {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/y/ln");
    background-color: initial;
}
.file-picker .ygtvlm,
.filemanager .ygtvlm {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/y/lm");
    background-color: initial;
}
.file-picker .ygtvlmh,
.filemanager .ygtvlmh {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/y/lm");
    background-color: initial;
}
.file-picker .ygtvlp,
.filemanager .ygtvlp {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/y/lp");
    background-color: initial;
}
.file-picker .ygtvlph,
.filemanager .ygtvlph {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/y/lp");
    background-color: initial;
}
.file-picker .ygtvloading,
.filemanager .ygtvloading {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/y/loading");
    background-color: transparent;
}
.file-picker .ygtvdepthcell,
.filemanager .ygtvdepthcell {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/y/vline");
    background-color: initial;
}
a.ygtvspacer:hover {
    color: transparent;
    text-decoration-color: initial;
}
.ygtvlabel,
.ygtvlabel:link,
.ygtvlabel:visited,
.ygtvlabel:hover {
    background-color: transparent;
    text-decoration-color: initial;
}
.file-picker .ygtvfocus,
.filemanager .ygtvfocus {
    background-color: rgb(34, 36, 38);
}
.fp-select .fp-thumbnail {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(58, 62, 65);
}
.fp-select .fp-thumbnail img {
    border-color: rgb(58, 62, 65);
}
.filepicker-filelist,
.filemanager-container {
    border-color: rgb(60, 65, 68);
}
.file-picker .yui3-datatable-header {
    background-image: initial;
    background-color: initial;
}
.fitem.disabled .filepicker-filelist,
.fitem.disabled .filemanager-container {
    background-color: rgb(34, 34, 25);
}
.fitem.disabled .fp-btn-choose {
    color: rgb(161, 152, 140);
}
.fp-iconview .fp-file.fp-hasreferences .fp-reficons1 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/theme/1656028964/fp/link");
    background-color: initial;
}
.fp-iconview .fp-file.fp-isreference .fp-reficons2 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/theme/1656028964/fp/alias");
    background-color: initial;
}
.filemanager .fp-iconview .fp-file.fp-originalmissing .fp-thumbnail {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/s/dead");
    background-color: initial;
}
.filemanager .yui3-datatable table {
    border-color: rgb(67, 73, 76);
}
.filemanager .yui3-datatable-header {
    background-image: initial !important;
    background-color: rgb(24, 26, 27) !important;
    border-bottom-color: rgb(62, 68, 70) !important;
    border-left-color: rgb(48, 52, 54) !important;
    color: rgb(178, 172, 162) !important;
}
.filemanager .yui3-datatable-odd .yui3-datatable-cell {
    border-left-color: rgb(51, 55, 57);
    background-color: rgb(29, 32, 33) !important;
}
.filemanager .yui3-datatable-even .yui3-datatable-cell {
    border-left-color: rgb(48, 52, 54);
    background-color: rgb(24, 26, 27) !important;
}
.filemanager .fp-filename-icon.fp-hasreferences .fp-reficons1 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/theme/1656028964/fp/link_sm");
    background-color: initial;
}
.filemanager .fp-filename-icon.fp-isreference .fp-reficons2 {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/theme/1656028964/fp/alias_sm");
    background-color: initial;
}
.filepicker-filelist .filepicker-container,
.filemanager.fm-noitems .fm-empty-container {
    border-color: rgb(67, 73, 76);
}
.filepicker-filelist .dndupload-target,
.filemanager-container .dndupload-target {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(139, 4, 4);
}
.filepicker-filelist.dndupload-over .dndupload-target,
.filemanager-container.dndupload-over .dndupload-target {
    background-image: initial;
    background-color: rgb(24, 26, 27);
    border-color: rgb(37, 63, 123);
}
.dndupload-arrow {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/theme/1656028964/fp/dnd_arrow");
    background-color: initial;
}
.filemanager.fp-select .fp-reflist .fp-value {
    background-image: initial;
    background-color: rgb(27, 30, 31);
    border-color: rgb(67, 73, 76);
}
.preferences-container .preference-table {
    border-color: rgb(58, 62, 65);
}
.preferences-container .preference-table tr th {
    border-left-color: rgb(56, 61, 63);
}
.preferences-container .preference-table tr td:nth-child(2n) {
    border-color: rgb(56, 61, 63);
}
.processor-container .loading-container {
    background-color: rgba(24, 26, 27, 0.5);
}
.notification-area {
    border-color: rgb(56, 61, 63);
}
.notification-area .control-area {
    border-right-color: rgb(56, 61, 63);
}
.notification-area .content-area .header {
    border-bottom-color: rgb(56, 61, 63);
}
.notification-area .content-area .header .timestamp {
    color: rgb(168, 160, 149);
}
@media (max-width: 979px) {
    .notification-area .control-area {
        border-right-color: initial;
    }
    .notification-area .content-area .toggle-mode {
        border-right-color: rgb(56, 61, 63);
        border-bottom-color: rgb(56, 61, 63);
    }
}
.message-app {
    background-color: rgb(36, 48, 51);
}
.message-app .contact-status.online {
    border-color: rgb(57, 61, 64);
    background-color: rgb(77, 133, 58);
}
.message-app a,
.message-app .btn-link {
    color: inherit;
}
.message-app .btn-link:hover,
.message-app .btn-link:focus {
    background-color: rgba(0, 0, 0, 0.04);
    text-decoration-color: initial;
}
.message-app .btn.btn-link.btn-icon:hover,
.message-app .btn.btn-link.btn-icon:focus {
    background-color: rgb(35, 38, 39);
}
.message-app .list-group .list-group-item {
    border-left-color: initial;
    border-right-color: initial;
}
.message-app .list-group .list-group-item:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(54, 90, 122);
}
.message-app .list-group .list-group-item:hover .badge-primary {
    background-color: rgb(24, 26, 27);
    color: rgb(129, 168, 198);
}
.message-app .list-group .list-group-item:first-child {
    border-top-color: initial;
}
.message-app .list-group .list-group-item:last-child {
    border-bottom-color: initial;
}
.message-app .message.send {
    background-color: rgb(40, 44, 45);
    color: rgb(209, 205, 199);
}
.message-app .message.send .time {
    color: rgb(209, 205, 199);
}
.message-app .message.send .tail {
    border-bottom-color: rgb(56, 61, 63);
}
.message-app .message.received {
    background-color: rgb(36, 53, 52);
    color: rgb(209, 205, 199);
}
.message-app .message.received .time {
    color: rgb(173, 166, 156);
}
.message-app .message.received .tail {
    border-bottom-color: rgb(57, 61, 64);
}
.message-app .message .tail {
    border-color: transparent;
}
.message-app .day {
    color: rgb(209, 205, 199);
}
.dir-rtl .message-drawer {
    box-shadow: rgba(0, 0, 0, 0.08) 2px 2px 4px;
}
#chooseqtype .fakeqtypes {
    border-top-color: rgb(66, 71, 74);
}
#qtypechoicecontainer_c.yui-panel-container.shadow .underlay {
    background-image: none;
    background-color: initial;
}
#qtypechoicecontainer.yui-panel .hd {
    color: rgb(200, 195, 188);
    text-shadow: rgb(24, 26, 27) 1px 1px 1px;
    border-color: rgb(62, 68, 70) rgb(62, 68, 70) rgb(67, 73, 76);
    background-image: linear-gradient(rgb(24, 26, 27) 0%,
    rgb(53, 57, 59) 100%);
}
#qtypechoicecontainer {
    color: rgb(200, 195, 188);
    background-image: initial;
    background-color: rgb(31, 34, 35);
    border-right-color: rgb(62, 68, 70);
    border-bottom-color: rgb(62, 68, 70);
    border-left-color: rgb(62, 68, 70);
    border-top-color: initial;
}
#chooseqtype .qtypes {
    border-bottom-color: rgb(67, 73, 76);
}
#chooseqtype .selected {
    background-color: rgb(24, 26, 27);
}
#chooseqtype .instruction,
#chooseqtype .qtypesummary {
    background-color: rgb(24, 26, 27);
}
#categoryquestions > tbody > tr.r1 {
    background-color: rgba(0, 0, 0, 0.05);
}
#categoryquestions > tbody > tr.highlight {
    border-color: rgb(27, 110, 134);
}
body.path-question-type .form-group .sr-only:not(legend):not([for="id_category"]) {
    border-color: initial;
}
.que .info {
    background-color: rgb(27, 30, 31);
    border-color: rgb(61, 66, 69);
}
.que .formulation,
.que .outcome,
.que .comment {
    border-color: transparent;
}
.que .outcome,
.que .comment {
    color: rgb(210, 171, 117);
    background-color: rgb(68, 43, 6);
    border-color: rgb(109, 68, 9);
}
.que .outcome hr,
.que .comment hr {
    border-top-color: rgb(116, 72, 10);
}
.que .outcome .alert-link,
.que .comment .alert-link {
    color: rgb(219, 188, 144);
}
.que .outcome a,
.que .comment a {
    color: rgb(211, 207, 201);
}
.que .formulation {
    color: rgb(212, 209, 203);
    background-color: rgb(10, 43, 53);
    border-color: rgb(19, 80, 99);
}
.que .formulation hr {
    border-top-color: rgb(22, 86, 104);
}
.que .formulation .alert-link {
    color: rgb(229, 226, 223);
}
.que .comment {
    color: rgb(138, 236, 207);
    background-color: rgb(17, 68, 57);
    border-color: rgb(24, 101, 78);
}
.que .comment hr {
    border-top-color: rgb(26, 107, 83);
}
.que .comment .alert-link {
    color: rgb(210, 206, 200);
}
.que .correctness.correct {
    color: rgb(232, 230, 227);
    background-color: rgb(26, 161, 121);
}
a.que .correctness.correct:hover,
a.que .correctness.correct:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(20, 126, 94);
}
a.que .correctness.correct:focus,
a.que .correctness.correct.focus {
    outline-color: initial;
    box-shadow: rgba(26, 161, 121, 0.5) 0px 0px 0px 0.2rem;
}
.que .correctness.partiallycorrect {
    color: rgb(232, 230, 227);
    background-color: rgb(190, 76, 0);
}
a.que .correctness.partiallycorrect:hover,
a.que .correctness.partiallycorrect:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(182, 74, 0);
}
a.que .correctness.partiallycorrect:focus,
a.que .correctness.partiallycorrect.focus {
    outline-color: initial;
    box-shadow: rgba(190, 76, 0, 0.5) 0px 0px 0px 0.2rem;
}
.que .correctness.notanswered,
.que .correctness.incorrect {
    color: rgb(232, 230, 227);
    background-color: rgb(148, 35, 32);
}
a.que .correctness.notanswered:hover,
a.que .correctness.incorrect:hover,
a.que .correctness.notanswered:focus,
a.que .correctness.incorrect:focus {
    color: rgb(232, 230, 227);
    background-color: rgb(161, 38, 35);
}
a.que .correctness.notanswered:focus,
a.que .correctness.incorrect:focus,
a.que .correctness.notanswered.focus,
a.que .correctness.incorrect.focus {
    outline-color: initial;
    box-shadow: rgba(148, 35, 32, 0.5) 0px 0px 0px 0.2rem;
}
.que .validationerror {
    color: rgb(219, 94, 90);
}
.importerror {
    border-bottom-color: rgb(112, 104, 92);
}
#page-mod-quiz-edit div.questionbank .categoryquestionscontainer {
    background-image: initial;
    background-color: transparent;
}
#page-mod-quiz-edit .questionbankwindow div.header {
    color: rgb(189, 183, 175);
    text-shadow: none;
    background-image: initial;
    background-color: transparent;
}
#page-mod-quiz-edit .questionbankwindow div.header a:link,
#page-mod-quiz-edit .questionbankwindow div.header a:visited {
    color: rgb(129, 168, 198);
}
#page-mod-quiz-edit .questionbankwindow div.header a:hover {
    color: rgb(160, 190, 213);
}
#page-mod-quiz-edit .questionbankwindow div.header .title {
    color: rgb(196, 191, 183);
}
#page-mod-quiz-edit div.container div.generalbox {
    background-color: transparent;
}
#page-mod-quiz-edit .categoryinfo {
    background-color: transparent;
    border-bottom-color: initial;
}
#page-mod-quiz-edit div.questionbank .categorypagingbarcontainer {
    background-color: transparent;
    border-top-color: initial;
    border-bottom-color: initial;
}
#page-mod-quiz-edit div.question div.content div.questioncontrols {
    background-color: rgb(36, 53, 52);
}
#page-mod-quiz-edit div.question div.content div.points {
    border-color: initial;
    background-color: rgb(36, 53, 52);
}
#page-mod-quiz-edit div.quizpage .pagecontent .pagestatus {
    background-color: rgb(36, 53, 52);
}
#page-mod-quiz-edit .quizpagedelete,
#page-mod-quiz-edit .quizpagedelete img {
    background-color: transparent;
}
#page-mod-quiz-edit div.quizpage .pagecontent {
    border-color: rgb(58, 62, 65);
}
#page-mod-quiz-edit div.editq div.question div.content {
    background-color: rgb(36, 53, 52);
    border-color: rgb(58, 62, 65);
}
a#hidebankcmd {
    color: rgb(129, 168, 198);
}
#page-user-profile .node_category ul,
.path-user .node_category ul {
    list-style-image: initial;
}
.ajax-contact-button .loading-icon {
    background-color: rgba(24, 26, 27, 0.7);
}
.userinfobox {
    border-color: initial;
}
.simplesearchform .btn-submit {
    border-color: rgb(60, 65, 68);
    color: rgb(161, 152, 140);
}
.simplesearchform .btn-close,
.simplesearchform .btn-clear {
    color: rgb(161, 152, 140);
}
.simplesearchform .btn-submit {
    background-color: rgb(27, 30, 31);
}
@media (max-width: 991.98px) {
    .simplesearchform .collapse.show,
    .simplesearchform .collapsing {
        background-color: rgb(24, 26, 27);
    }
}
.navbar.navbar-light .simplesearchform .btn-open {
    color: rgba(232, 230, 227, 0.5);
}
.navbar.navbar-light .simplesearchform .btn-open:hover {
    color: rgb(232, 230, 227);
}
#adminsettings span.error {
    border-color: rgb(98, 24, 22);
    background-color: rgb(63, 16, 14);
}
.mform fieldset {
    border-bottom-color: rgb(56, 61, 63);
}
#adminsettings .error {
    color: rgb(219, 94, 90);
}
.mform ul.file-list {
    list-style-image: initial;
}
.form-defaultinfo,
.form-label .form-shortname {
    color: rgb(161, 152, 140);
}
.formsettingheading .form-horizontal {
    color: rgb(161, 152, 140);
}
.no-felement.fstatic {
    color: rgb(161, 152, 140);
}
#adminsettings h3 {
    border-top-color: initial;
    border-right-color: initial;
    border-left-color: initial;
    border-bottom-color: rgb(55, 60, 62);
}
.availability-inner,
.availability-plugincontrols {
    border-color: rgba(140, 130, 115, 0.13); 
}
[data-fieldtype="autocomplete"] select, [data-fieldtype="tags"] select,
.form-autocomplete-original-select {
    border-color: initial;
}
.form-autocomplete-suggestions {
    background-color: rgb(24, 26, 27);
    border-color: rgb(60, 65, 68);
}
.form-autocomplete-suggestions li {
    color: rgb(196, 191, 183); 
}
.form-autocomplete-suggestions li:hover, .form-autocomplete-suggestions li:focus, .form-autocomplete-suggestions li[aria-selected="true"] {
    background-color: rgb(48, 52, 54);
    color: rgb(232, 230, 227);
}
.form-autocomplete-downarrow {
    color: rgb(196, 191, 183);
}
.form-autocomplete-downarrow .loading-icon {
    background-color: rgb(24, 26, 27); 
}
[data-fieldtype="modgrade"] {
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.13);
}
@media (min-width: 576px) {
    .mform fieldset.collapsible legend a.fheader {
        background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/expanded");
        background-color: initial;
    }
    .mform fieldset.collapsed legend a.fheader {
        background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/collapsed");
    }
}
.pagelayout-login #region-main {
    border-color: initial;
    background-color: inherit;
}
.path-mod div.activity-information {
    border-bottom-color: rgb(56, 61, 63);
}
.path-mod-forum .forumheaderlist,
.path-mod-forum .forumheaderlist td {
    border-color: initial;
}
.path-mod-forum .subscriptionmode {
    color: rgb(196, 191, 183);
}
.path-mod-forum .activesetting {
    color: rgb(196, 191, 183);
}
.forumpost {
    border-color: rgb(56, 61, 63);
}
.path-mod-forum .nested-v2-display-mode .badge-light,
.path-mod-forum.nested-v2-display-mode .badge-light {
    background-color: rgb(29, 32, 33);
    color: rgb(175, 168, 157);
}
.path-mod-forum .nested-v2-display-mode .rating-aggregate-container,
.path-mod-forum.nested-v2-display-mode .rating-aggregate-container {
    background-color: rgb(29, 32, 33);
    color: rgb(175, 168, 157);
}
.path-mod-forum .nested-v2-display-mode .alert.discussionlocked,
.path-mod-forum.nested-v2-display-mode .alert.discussionlocked {
    border-color: initial;
}
.path-mod-forum .nested-v2-display-mode .text-muted,
.path-mod-forum .nested-v2-display-mode .dimmed_text,
.path-mod-forum.nested-v2-display-mode .text-muted,
.path-mod-forum.nested-v2-display-mode .dimmed_text {
    color: rgb(161, 153, 141) !important;
}
.path-mod-forum .nested-v2-display-mode .tag_list > b,
.path-mod-forum.nested-v2-display-mode .tag_list > b {
    border-color: initial;
}
.path-mod-forum .nested-v2-display-mode .forum-post-container .replies-container .forum-post-container,
.path-mod-forum.nested-v2-display-mode .forum-post-container .replies-container .forum-post-container {
    border-top-color: rgb(56, 61, 63);
}
.path-mod-forum .nested-v2-display-mode .forum-post-container .replies-container .forum-post-container .replies-container .forum-post-container,
.path-mod-forum.nested-v2-display-mode .forum-post-container .replies-container .forum-post-container .replies-container .forum-post-container {
    border-top-color: initial;
}
.path-mod-forum .nested-v2-display-mode .forum-post-container .inline-reply-container textarea,
.path-mod-forum.nested-v2-display-mode .forum-post-container .inline-reply-container textarea {
    border-color: initial;
}
.path-mod-forum .unified-grader .grader-grading-panel .header-container .user-search-container .search-input-container .search-icon {
    color: rgb(181, 175, 166);
    background-color: rgb(24, 26, 27);
}
.path-mod-forum .unified-grader .grader-grading-panel .header-container .user-search-container .search-input-container .toggle-search-button {
    color: inherit;
}
.path-mod-forum .unified-grader .drawer-button.active::after {
    background-color: rgb(54, 90, 122);
}
.path-mod-forum .unified-grader .nested-v2-display-mode .parent-container .author-image-container::after {
    background-color: rgb(35, 38, 39);
}
.maincalendar .calendarmonth td,
.maincalendar .calendarmonth th {
    border-color: rgb(56, 61, 63);
}
.path-mod-survey .surveytable > tbody > tr:nth-of-type(2n) {
    background-color: rgba(0, 0, 0, 0.05);
}
.path-mod-quiz #mod_quiz_navblock .qnbutton {
    text-decoration-color: initial;
    background-color: rgb(24, 26, 27);
    background-image: none;
    border-color: initial;
}
.path-mod-quiz #mod_quiz_navblock span.qnbutton {
    background-color: rgb(35, 38, 39);
    color: rgb(181, 175, 166);
}
.path-mod-quiz #mod_quiz_navblock a.qnbutton:hover,
.path-mod-quiz #mod_quiz_navblock a.qnbutton:active,
.path-mod-quiz #mod_quiz_navblock a.qnbutton:focus {
    text-decoration-color: initial;
}
.path-mod-quiz #mod_quiz_navblock .qnbutton .thispageholder {
    border-color: initial;
}
.path-mod-quiz #mod_quiz_navblock .qnbutton.flagged .thispageholder {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMiIGhlaWdodD0iMTMiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJajgrQ2p3aExTMGdRM0psWVhSbFpDQjNhWFJvSUVsdWEzTmpZWEJsSUNob2RIUndPaTh2ZDNkM0xtbHVhM05qWVhCbExtOXlaeThwSUMwdFBnb0tQSE4yWndvZ0lDQjRiV3h1Y3pwa1l6MGlhSFIwY0RvdkwzQjFjbXd1YjNKbkwyUmpMMlZzWlcxbGJuUnpMekV1TVM4aUNpQWdJSGh0Ykc1ek9tTmpQU0pvZEhSd09pOHZZM0psWVhScGRtVmpiMjF0YjI1ekxtOXlaeTl1Y3lNaUNpQWdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUlLSUNBZ2VHMXNibk02YzNablBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SUtJQ0FnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JZ29nSUNCMlpYSnphVzl1UFNJeExqRWlDaUFnSUhkcFpIUm9QU0l4TXlJS0lDQWdhR1ZwWjJoMFBTSXhNeUlLSUNBZ2FXUTlJbk4yWnpJNU9UWWlJSEJ5WlhObGNuWmxRWE53WldOMFVtRjBhVzg5SW5oTmFXNVpUV2xrSUcxbFpYUWlQZ29nSUR4a1pXWnpDaUFnSUNBZ2FXUTlJbVJsWm5NeU9UazRJaUF2UGdvZ0lEeHRaWFJoWkdGMFlRb2dJQ0FnSUdsa1BTSnRaWFJoWkdGMFlUTXdNREVpUGdvZ0lDQWdQSEprWmpwU1JFWStDaUFnSUNBZ0lEeGpZenBYYjNKckNpQWdJQ0FnSUNBZ0lISmtaanBoWW05MWREMGlJajRLSUNBZ0lDQWdJQ0E4WkdNNlptOXliV0YwUG1sdFlXZGxMM04yWnl0NGJXdzhMMlJqT21admNtMWhkRDRLSUNBZ0lDQWdJQ0E4WkdNNmRIbHdaUW9nSUNBZ0lDQWdJQ0FnSUhKa1pqcHlaWE52ZFhKalpUMGlhSFIwY0RvdkwzQjFjbXd1YjNKbkwyUmpMMlJqYldsMGVYQmxMMU4wYVd4c1NXMWhaMlVpSUM4K0NpQWdJQ0FnSUNBZ1BHUmpPblJwZEd4bFBqd3ZaR002ZEdsMGJHVStDaUFnSUNBZ0lEd3ZZMk02VjI5eWF6NEtJQ0FnSUR3dmNtUm1PbEpFUmo0S0lDQThMMjFsZEdGa1lYUmhQZ29nSUR4bkNpQWdJQ0FnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01Dd3RNeWtpQ2lBZ0lDQWdhV1E5SW14aGVXVnlNU0krQ2lBZ0lDQThjR0YwYUFvZ0lDQWdJQ0FnWkQwaVRTQXdMREFnTVRNc01UTWdNVE1zTUNCNklnb2dJQ0FnSUNBZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9NQ3d6S1NJS0lDQWdJQ0FnSUdsa1BTSndZWFJvTXpBd05pSUtJQ0FnSUNBZ0lITjBlV3hsUFNKbWFXeHNPaU5sWVRBd01EQTdabWxzYkMxdmNHRmphWFI1T2pFN2MzUnliMnRsT201dmJtVWlJQzgrQ2lBZ1BDOW5QZ284TDNOMlp6NEsiIC8+PC9zdmc+");
    background-color: transparent;
}
.path-mod-quiz #mod_quiz_navblock .qnbutton .trafficlight {
    border-color: initial;
    background-image: none;
    background-color: rgb(24, 26, 27);
}
.path-mod-quiz #mod_quiz_navblock .qnbutton.notyetanswered .trafficlight,
.path-mod-quiz #mod_quiz_navblock .qnbutton.invalidanswer .trafficlight {
    background-color: rgb(24, 26, 27);
}
.path-mod-quiz #mod_quiz_navblock .qnbutton.invalidanswer .trafficlight {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/theme/1656028964/mod/quiz/warningtriangle");
}
.path-mod-quiz #mod_quiz_navblock .qnbutton.correct .trafficlight {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/theme/1656028964/mod/quiz/checkmark");
    background-color: rgb(26, 161, 121);
}
.path-mod-quiz #mod_quiz_navblock .qnbutton.blocked .trafficlight {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/locked");
    background-color: rgb(35, 38, 39);
}
.path-mod-quiz #mod_quiz_navblock .qnbutton.notanswered .trafficlight,
.path-mod-quiz #mod_quiz_navblock .qnbutton.incorrect .trafficlight {
    background-color: rgb(148, 35, 32);
}
.path-mod-quiz #mod_quiz_navblock .qnbutton.partiallycorrect .trafficlight {
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/theme/1656028964/mod/quiz/whitecircle");
    background-color: rgb(190, 76, 0);
}
.path-mod-quiz #mod_quiz_navblock .qnbutton.complete .trafficlight,
.path-mod-quiz #mod_quiz_navblock .qnbutton.answersaved .trafficlight,
.path-mod-quiz #mod_quiz_navblock .qnbutton.requiresgrading .trafficlight {
    background-color: rgb(88, 95, 99);
}
#quiz-timer-wrapper #quiz-timer {
    border-color: rgb(137, 33, 30);
    background-color: rgb(24, 26, 27);
}
#quiz-timer-wrapper #quiz-timer.timeleft0 {
    background-color: rgb(148, 35, 32);
    color: rgb(232, 230, 227);
}
#quiz-timer-wrapper #quiz-timer.timeleft1 {
    background-color: rgb(140, 33, 30);
    color: rgb(232, 230, 227);
}
#quiz-timer-wrapper #quiz-timer.timeleft2 {
    background-color: rgb(132, 32, 29);
    color: rgb(232, 230, 227);
}
#quiz-timer-wrapper #quiz-timer.timeleft3 {
    background-color: rgb(125, 30, 27);
    color: rgb(209, 205, 199);
}
#quiz-timer-wrapper #quiz-timer.timeleft4 {
    background-color: rgb(118, 28, 25);
    color: rgb(209, 205, 199);
}
#quiz-timer-wrapper #quiz-timer.timeleft5 {
    background-color: rgb(110, 25, 23);
    color: rgb(209, 205, 199);
}
#quiz-timer-wrapper #quiz-timer.timeleft6 {
    background-color: rgb(102, 25, 22);
    color: rgb(209, 205, 199);
}
#quiz-timer-wrapper #quiz-timer.timeleft7 {
    background-color: rgb(95, 23, 20);
    color: rgb(209, 205, 199);
}
#quiz-timer-wrapper #quiz-timer.timeleft8 {
    background-color: rgb(87, 20, 19);
    color: rgb(209, 205, 199);
}
#quiz-timer-wrapper #quiz-timer.timeleft9 {
    background-color: rgb(80, 20, 18);
    color: rgb(209, 205, 199);
}
#quiz-timer-wrapper #quiz-timer.timeleft10 {
    background-color: rgb(72, 17, 16);
    color: rgb(209, 205, 199);
}
#quiz-timer-wrapper #quiz-timer.timeleft11 {
    background-color: rgb(65, 15, 14);
    color: rgb(209, 205, 199);
}
#quiz-timer-wrapper #quiz-timer.timeleft12 {
    background-color: rgb(57, 14, 12);
    color: rgb(209, 205, 199);
}
#quiz-timer-wrapper #quiz-timer.timeleft13 {
    background-color: rgb(48, 12, 12);
    color: rgb(209, 205, 199);
}
#quiz-timer-wrapper #quiz-timer.timeleft14 {
    background-color: rgb(24, 26, 27);
    color: rgb(209, 205, 199);
}
#quiz-timer-wrapper #quiz-timer.timeleft15 {
    background-color: rgb(24, 26, 27);
    color: rgb(209, 205, 199);
}
#quiz-timer-wrapper #quiz-timer.timeleft16 {
    background-color: rgb(24, 26, 27);
    color: rgb(209, 205, 199); 
}
.path-mod-assign [data-region="grade-panel"] .popout {
    background-color: rgb(24, 26, 27); 
}
.path-mod-assign [data-region="grade-panel"] .fitem.has-popout {
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.13); 
}
.path-mod-assign [data-region="grade-panel"] .has-popout .col-md-3 {
    border-bottom-color: rgba(140, 130, 115, 0.1);
}
.assignfeedback_editpdf_widget .label {
    color: rgb(138, 192, 207);
    background-color: rgb(13, 51, 62);
    border-color: rgb(19, 80, 99);
}
.assignfeedback_editpdf_widget .label hr {
    border-top-color: rgb(22, 86, 104);
}
.assignfeedback_editpdf_widget .label .alert-link {
    color: rgb(163, 206, 218); 
}
.path-mod-assign [data-region="grade-panel"] .showmarkerdesc, .path-mod-assign [data-region="grade-panel"] .showstudentdesc {
    background-color: rgb(24, 26, 27);
}
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax {
    background-color: rgb(36, 53, 52);
}
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .yui-layout-unit div.yui-layout-bd-nohd,
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .yui-layout-unit div.yui-layout-bd-noft,
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .yui-layout-unit div.yui-layout-bd,
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .yui-layout-unit-right,
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .yui-layout-unit-bottom {
    border-color: initial;
}
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .yui-layout-unit div.yui-layout-bd {
    background-color: transparent;
}
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .yui-layout-unit.yui-layout-unit-center div.yui-layout-bd {
    background-color: rgb(27, 30, 31);
}
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax #chat-input-area table.generaltable,
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax #chat-input-area table.generaltable td.cell {
    border-color: initial;
}
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax #chat-userlist #users-list {
    border-top-color: rgb(56, 61, 63);
    border-bottom-color: rgb(57, 61, 64);
}
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax #chat-userlist #users-list li {
    border-top-color: rgb(57, 61, 64);
    border-bottom-color: rgb(56, 61, 63);
}
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax #chat-userlist #users-list img {
    border-color: rgb(62, 68, 70);
}
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax #chat-messages .chat-event.course-theme {
    color: rgb(181, 175, 166);
}
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax #chat-messages .chat-message.course-theme {
    border-color: rgba(140, 130, 115, 0.13);
}
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax #chat-messages .chat-message.course-theme .time {
    color: rgb(181, 175, 166);
}
.yui-skin-sam .yui-layout.path-mod-chat-gui_ajax #chat-messages .chat-message.course-theme {
    background-color: rgb(24, 26, 27);
}
.path-backup .mform .grouped_settings.section_level {
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.13);
}
.path-backup .mform .root_setting:nth-of-type(2n+1),
.path-backup .mform .grouped_settings:nth-of-type(2n+1) {
    background-color: rgba(0, 0, 0, 0.05);
}
.path-backup .mform .root_setting:nth-of-type(2n),
.path-backup .mform .grouped_settings:nth-of-type(2n) {
    background-color: rgb(24, 26, 27);
}
.path-backup .backup-section {
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.13);
}
.path-backup .notification.dependencies_enforced {
    color: rgb(219, 94, 90);
}
.path-backup .backup_progress .backup_stage {
    color: rgb(161, 152, 140);
}
.path-backup .backup_progress .backup_stage.backup_stage_current {
    color: inherit;
}
.path-backup .backup_progress span.backup_stage.backup_stage_complete {
    color: inherit;
}
#page-backup-restore .filealiasesfailures {
    background-color: rgb(63, 16, 14);
}
#page-backup-restore .filealiasesfailures .aliaseslist {
    background-color: rgb(36, 53, 52);
}
.path-backup .wibbler {
    border-bottom-color: rgb(140, 130, 115);
    border-right-color: rgb(140, 130, 115);
    border-left-color: rgb(140, 130, 115);
}
.path-backup .wibbler .state0 {
    background-image: initial;
    background-color: rgb(34, 36, 38);
}
.path-backup .wibbler .state1 {
    background-image: initial;
    background-color: rgb(43, 47, 49);
}
.path-backup .wibbler .state2 {
    background-image: initial;
    background-color: rgb(53, 57, 59);
}
.path-backup .wibbler .state3 {
    background-image: initial;
    background-color: rgb(62, 68, 70);
}
.path-backup .wibbler .state4 {
    background-image: initial;
    background-color: rgb(72, 78, 81);
}
.path-backup .wibbler .state5 {
    background-image: initial;
    background-color: rgb(82, 88, 92);
}
.path-backup .wibbler .state6 {
    background-image: initial;
    background-color: rgb(91, 99, 103);
}
.path-backup .wibbler .state7 {
    background-image: initial;
    background-color: rgb(90, 97, 101);
}
.path-backup .wibbler .state8 {
    background-image: initial;
    background-color: rgb(77, 83, 86);
}
.path-backup .wibbler .state9 {
    background-image: initial;
    background-color: rgb(64, 69, 72);
}
.path-backup .wibbler .state10 {
    background-image: initial;
    background-color: rgb(51, 55, 58);
}
.path-backup .wibbler .state11 {
    background-image: initial;
    background-color: rgb(38, 42, 43);
}
.path-backup .wibbler .state12 {
    background-image: initial;
    background-color: rgb(26, 28, 29);
}
.generaltable {
    color: rgb(196, 191, 183);
}
.generaltable th,
.generaltable td {
    border-top-color: rgb(56, 61, 63);
}
.generaltable thead th {
    border-bottom-color: rgb(56, 61, 63);
}
.generaltable tbody + tbody {
    border-top-color: rgb(56, 61, 63);
}
.generaltable tbody tr:nth-of-type(2n+1) {
    background-color: rgba(0, 0, 0, 0.05);
}
.generaltable tbody tr:hover {
    color: rgb(196, 191, 183);
    background-color: rgba(0, 0, 0, 0.07);
}
.generaltable tbody tr:hover.dimmed_text a:not(.menu-action) {
    color: rgb(196, 191, 183);
}
.btn.btn-icon:hover,
.btn.btn-icon:focus {
    background-color: rgb(35, 38, 39);
}
.btn-primary:focus,
.btn-primary.focus {
    outline-color: rgb(137, 128, 113);
    box-shadow: rgb(24, 26, 27) 0px 0px 0px 2px inset;
}
.btn-secondary:focus,
.btn-secondary.focus {
    outline-color: rgb(82, 89, 92);
    box-shadow: rgb(24, 26, 27) 0px 0px 0px 2px inset;
}
.btn-success:focus,
.btn-success.focus {
    outline-color: rgb(135, 126, 111);
    box-shadow: rgb(24, 26, 27) 0px 0px 0px 2px inset;
}
.btn-info:focus,
.btn-info.focus {
    outline-color: rgb(37, 151, 186);
    box-shadow: rgb(24, 26, 27) 0px 0px 0px 2px inset;
}
.btn-warning:focus,
.btn-warning.focus {
    outline-color: rgb(203, 126, 17);
    box-shadow: rgb(24, 26, 27) 0px 0px 0px 2px inset;
}
.btn-danger:focus,
.btn-danger.focus {
    outline-color: rgb(125, 116, 103);
    box-shadow: rgb(24, 26, 27) 0px 0px 0px 2px inset;
}
.btn-light:focus,
.btn-light.focus {
    outline-color: rgb(78, 85, 88);
    box-shadow: rgb(24, 26, 27) 0px 0px 0px 2px inset;
}
.btn-dark:focus,
.btn-dark.focus {
    outline-color: rgb(140, 130, 115);
    box-shadow: rgb(24, 26, 27) 0px 0px 0px 2px inset;
}
.btn-outline-primary:focus,
.btn-outline-primary.focus {
    outline-color: rgb(137, 128, 113);
    box-shadow: rgb(43, 47, 49) 0px 0px 0px 2px inset;
}
.btn-outline-secondary:focus,
.btn-outline-secondary.focus {
    outline-color: rgb(82, 89, 92);
    box-shadow: rgb(43, 47, 49) 0px 0px 0px 2px inset;
}
.btn-outline-success:focus,
.btn-outline-success.focus {
    outline-color: rgb(135, 126, 111);
    box-shadow: rgb(43, 47, 49) 0px 0px 0px 2px inset;
}
.btn-outline-info:focus,
.btn-outline-info.focus {
    outline-color: rgb(37, 151, 186);
    box-shadow: rgb(43, 47, 49) 0px 0px 0px 2px inset;
}
.btn-outline-warning:focus,
.btn-outline-warning.focus {
    outline-color: rgb(203, 126, 17);
    box-shadow: rgb(43, 47, 49) 0px 0px 0px 2px inset;
}
.btn-outline-danger:focus,
.btn-outline-danger.focus {
    outline-color: rgb(125, 116, 103);
    box-shadow: rgb(43, 47, 49) 0px 0px 0px 2px inset;
}
.btn-outline-light:focus,
.btn-outline-light.focus {
    outline-color: rgb(78, 85, 88);
    box-shadow: rgb(43, 47, 49) 0px 0px 0px 2px inset;
}
.btn-outline-dark:focus,
.btn-outline-dark.focus {
    outline-color: rgb(140, 130, 115);
    box-shadow: rgb(43, 47, 49) 0px 0px 0px 2px inset;
}
.path-grade-report-grader span.gradepass {
    color: rgb(70, 226, 180);
}
.path-grade-report-grader span.gradefail {
    color: rgb(219, 94, 90);
}
#page-grade-grading-manage .actions .action {
    border-color: rgb(72, 78, 81);
}
#rubric-rubric.gradingform_rubric #rubric-criteria .criterion .level .delete input:hover {
    background-color: rgb(43, 47, 49);
}
#rubric-rubric.gradingform_rubric .addcriterion input {
    color: inherit;
    text-shadow: inherit;
    border-color: initial;
    background-image: url("https://dl.nure.ua/theme/image.php/fordson/core/1656028964/t/add");
    background-color: transparent;
}
#rubric-rubric.gradingform_rubric .options .option label {
    color: inherit;
    text-shadow: none;
    background-color: transparent;
}
.path-grade-edit-tree .setup-grades td.movehere a.movehere {
    border-color: rgb(121, 112, 99);
}
.path-grade-edit-tree .setup-grades.generaltable .levelodd {
    background-color: rgba(0, 0, 0, 0.05);
}
.path-grade-report-grader .gradeparent tr .cell,
.path-grade-report-grader .gradeparent .floater .cell {
    background-color: rgb(24, 26, 27);
}
.path-grade-report-grader .gradeparent table,
.path-grade-report-grader .gradeparent .cell {
    border-color: rgb(56, 61, 63);
}
.path-grade-report-grader .gradeparent .userrow.odd .cell,
.path-grade-report-grader .gradeparent .floater .cell.odd,
.path-grade-report-grader .gradeparent .heading .cell,
.path-grade-report-grader .gradeparent .cell.category,
.path-grade-report-grader .gradeparent .avg .cell {
    background-color: rgb(27, 30, 31);
}
.path-grade-report-user .user-grade {
    border-color: initial;
}
.path-grade-report-user .user-grade.generaltable .levelodd {
    background-color: rgba(0, 0, 0, 0.05);
}
li.activity.label,
.file-picker td.label {
    background-image: inherit;
    background-color: inherit;
    color: inherit;
    border-color: inherit;
    text-shadow: none;
}
body.reset-style #page-header .card {
    border-color: initial;
}
body.reset-style #page-content #region-main-box #region-main {
    border-color: initial;
}
.phpinfo .e,
.phpinfo .v,
.phpinfo .h {
    border-color: rgb(140, 130, 115);
    color: rgb(232, 230, 227);
    background-color: rgb(53, 57, 59);
}
.phpinfo .e {
    background-color: rgb(38, 42, 43);
}
.phpinfo .h {
    background-color: rgb(48, 48, 95);
}
.popover-region-toggle::before {
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: rgb(58, 62, 65);
}
.popover-region-toggle::after {
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: rgb(48, 52, 54);
}
.count-container {
    background-color: rgb(148, 35, 32);
    color: rgb(232, 230, 227);
}
.popover-region-container {
    border-color: rgb(58, 62, 65);
    background-color: rgb(24, 26, 27);
}
.popover-region-header-container {
    border-bottom-color: rgb(58, 62, 65);
}
.popover-region-footer-container {
    border-top-color: rgb(58, 62, 65);
    background-color: rgb(24, 26, 27);
}
.navbar .count-container {
    background-color: rgb(148, 35, 32);
    color: rgb(232, 230, 227);
}
.content-item-container {
    border-bottom-color: rgb(58, 62, 65);
    color: inherit;
    text-decoration-color: initial;
}
.content-item-container:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(54, 90, 122);
}
.content-item-container:hover .content-item-footer .timestamp {
    color: rgb(232, 230, 227);
}
.content-item-container:hover .view-more {
    color: inherit;
}
.content-item-container.unread {
    background-color: rgb(30, 33, 34);
}
.content-item-container.unread:hover {
    color: rgb(232, 230, 227);
    background-color: rgb(54, 90, 122);
}
.content-item-container .context-link {
    color: inherit;
    text-decoration-color: initial;
}
.content-item-container .content-item-footer .timestamp {
    color: inherit;
}
.content-item-container .view-more:hover {
    color: inherit;
}
.content-item-container.selected {
    background-color: rgb(41, 98, 145);
    color: rgb(232, 230, 227);
    border-color: rgb(38, 89, 132);
}
.content-item-container.selected .content-item-footer .timestamp {
    color: rgb(232, 230, 227); 
}
div[data-flexitour="backdrop"] {
    background-color: rgb(0, 0, 0); 
}
span[data-flexitour="container"] div[data-role="arrow"], span[data-flexitour="container"] div[data-role="arrow"]::after {
    border-color: transparent; 
}
span[data-flexitour="container"][x-placement="top"] div[data-role="arrow"], span[data-flexitour="container"][x-placement="top-start"] div[data-role="arrow"] {
    border-top-color: rgba(140, 130, 115, 0.25); 
}
span[data-flexitour="container"][x-placement="top"] div[data-role="arrow"]::after, span[data-flexitour="container"][x-placement="top-start"] div[data-role="arrow"]::after {
    border-top-color: rgb(48, 52, 54); 
}
span[data-flexitour="container"][x-placement="bottom"] div[data-role="arrow"], span[data-flexitour="container"][x-placement="bottom-start"] div[data-role="arrow"] {
    border-bottom-color: rgba(140, 130, 115, 0.25); 
}
span[data-flexitour="container"][x-placement="bottom"] div[data-role="arrow"]::after, span[data-flexitour="container"][x-placement="bottom-start"] div[data-role="arrow"]::after {
    border-bottom-color: rgb(48, 52, 54); 
}
span[data-flexitour="container"][x-placement="left"] div[data-role="arrow"], span[data-flexitour="container"][x-placement="left-start"] div[data-role="arrow"] {
    border-left-color: rgba(140, 130, 115, 0.25); 
}
span[data-flexitour="container"][x-placement="left"] div[data-role="arrow"]::after, span[data-flexitour="container"][x-placement="left-start"] div[data-role="arrow"]::after {
    border-left-color: rgb(48, 52, 54); 
}
span[data-flexitour="container"][x-placement="right"] div[data-role="arrow"], span[data-flexitour="container"][x-placement="right-start"] div[data-role="arrow"] {
    border-right-color: rgba(140, 130, 115, 0.25); 
}
span[data-flexitour="container"][x-placement="right"] div[data-role="arrow"]::after, span[data-flexitour="container"][x-placement="right-start"] div[data-role="arrow"]::after {
    border-right-color: rgb(48, 52, 54);
}
.layout.fullscreen {
    background-color: rgb(24, 26, 27);
}
.editor_atto_content_wrap {
    background-color: rgb(24, 26, 27);
    color: rgb(200, 195, 188);
}
div.editor_atto_toolbar {
    background-image: initial;
    background-color: rgb(31, 34, 35);
    border-color: rgb(60, 65, 68);
}
div.editor_atto_toolbar button {
    background-image: none;
    background-color: initial;
    border-color: initial;
}
div.editor_atto_toolbar button + button {
    border-left-color: rgb(62, 68, 70);
}
div.editor_atto_toolbar button[disabled] {
    background-image: none;
    background-color: initial;
}
.editor_atto_toolbar button:hover {
    background-image: radial-gradient(at center center,
    rgb(24, 26, 27) 60%,
    rgb(42, 46, 47) 100%);
    background-color: rgb(35, 38, 40);
}
.editor_atto_toolbar button:active,
.editor_atto_toolbar button.highlight {
    background-image: radial-gradient(at center center,
    rgb(24, 26, 27) 40%,
    rgb(42, 46, 47) 100%);
    background-color: rgb(42, 46, 47);
}
div.editor_atto_toolbar div.atto_group {
    border-color: rgb(62, 68, 70) rgb(62, 68, 70) rgb(69, 75, 78);
    background-image: initial;
    background-color: rgb(24, 26, 27);
}
.atto_control .icon {
    background-color: rgb(24, 26, 27);
}
.editor_atto_notification .atto_info,
.editor_atto_notification .atto_warning {
    background-color: rgb(31, 34, 35);
}
.editor_atto_notification .atto_info {
    background-color: rgb(31, 34, 35);
}
.editor_atto_notification .atto_warning {
    background-color: rgb(153, 129, 0);
}
.editor_atto_content.form-control {
    border-top-color: initial;
}
.has-danger .editor_atto_content.form-control .invalid-feedback,
.has-danger .editor_atto_content.form-control-danger .invalid-feedback {
    color: rgb(219, 94, 90);
}
.has-danger .editor_atto_content.form-control .invalid-tooltip,
.has-danger .editor_atto_content.form-control-danger .invalid-tooltip {
    color: rgb(232, 230, 227);
    background-color: rgba(148, 35, 32, 0.9);
}
.was-validated .has-danger .editor_atto_content.form-control .form-control:invalid,
.has-danger .editor_atto_content.form-control .form-control.is-invalid,
.was-validated .has-danger .editor_atto_content.form-control-danger .form-control:invalid,
.has-danger .editor_atto_content.form-control-danger .form-control.is-invalid {
    border-color: rgb(137, 33, 30);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23d9534f' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23d9534f' stroke='none'/%3e%3c/svg%3e");
}
.was-validated .has-danger .editor_atto_content.form-control .form-control:invalid:focus,
.has-danger .editor_atto_content.form-control .form-control.is-invalid:focus,
.was-validated .has-danger .editor_atto_content.form-control-danger .form-control:invalid:focus,
.has-danger .editor_atto_content.form-control-danger .form-control.is-invalid:focus {
    border-color: rgb(137, 33, 30);
    box-shadow: rgba(148, 35, 32, 0.25) 0px 0px 0px 0.2rem;
}
.was-validated .has-danger .editor_atto_content.form-control .custom-select:invalid,
.has-danger .editor_atto_content.form-control .custom-select.is-invalid,
.was-validated .has-danger .editor_atto_content.form-control-danger .custom-select:invalid,
.has-danger .editor_atto_content.form-control-danger .custom-select.is-invalid {
    border-color: rgb(137, 33, 30);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNCIgaGVpZ2h0PSI1Ij48ZGVmcz48ZmlsdGVyIGlkPSJkYXJrcmVhZGVyLWltYWdlLWZpbHRlciI+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAuMjQ5IC0wLjYxNCAtMC42NzIgMC4wMDAgMS4wMzUgLTAuNjQ2IDAuMjg4IC0wLjY2NCAwLjAwMCAxLjAyMCAtMC42MzYgLTAuNjA5IDAuMjUwIDAuMDAwIDAuOTk0IDAuMDAwIDAuMDAwIDAuMDAwIDEuMDAwIDAuMDAwIiAvPjwvZmlsdGVyPjwvZGVmcz48aW1hZ2Ugd2lkdGg9IjQiIGhlaWdodD0iNSIgZmlsdGVyPSJ1cmwoI2RhcmtyZWFkZXItaW1hZ2UtZmlsdGVyKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnJTNlJTNjcGF0aCBmaWxsPSclMjMzNzNhM2MnIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLyUzZSUzYy9zdmclM2UiIC8+PC9zdmc+"),
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23d9534f' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23d9534f' stroke='none'/%3e%3c/svg%3e");
    background-color: rgb(24, 26, 27);
}
.was-validated .has-danger .editor_atto_content.form-control .custom-select:invalid:focus,
.has-danger .editor_atto_content.form-control .custom-select.is-invalid:focus,
.was-validated .has-danger .editor_atto_content.form-control-danger .custom-select:invalid:focus,
.has-danger .editor_atto_content.form-control-danger .custom-select.is-invalid:focus {
    border-color: rgb(137, 33, 30);
    box-shadow: rgba(148, 35, 32, 0.25) 0px 0px 0px 0.2rem;
}
.was-validated .has-danger .editor_atto_content.form-control .form-check-input:invalid ~ .form-check-label,
.has-danger .editor_atto_content.form-control .form-check-input.is-invalid ~ .form-check-label,
.was-validated .has-danger .editor_atto_content.form-control-danger .form-check-input:invalid ~ .form-check-label,
.has-danger .editor_atto_content.form-control-danger .form-check-input.is-invalid ~ .form-check-label {
    color: rgb(219, 94, 90);
}
.was-validated .has-danger .editor_atto_content.form-control .custom-control-input:invalid ~ .custom-control-label,
.has-danger .editor_atto_content.form-control .custom-control-input.is-invalid ~ .custom-control-label,
.was-validated .has-danger .editor_atto_content.form-control-danger .custom-control-input:invalid ~ .custom-control-label,
.has-danger .editor_atto_content.form-control-danger .custom-control-input.is-invalid ~ .custom-control-label {
    color: rgb(219, 94, 90);
}
.was-validated .has-danger .editor_atto_content.form-control .custom-control-input:invalid ~ .custom-control-label::before,
.has-danger .editor_atto_content.form-control .custom-control-input.is-invalid ~ .custom-control-label::before,
.was-validated .has-danger .editor_atto_content.form-control-danger .custom-control-input:invalid ~ .custom-control-label::before,
.has-danger .editor_atto_content.form-control-danger .custom-control-input.is-invalid ~ .custom-control-label::before {
    border-color: rgb(137, 33, 30);
}
.was-validated .has-danger .editor_atto_content.form-control .custom-control-input:invalid:checked ~ .custom-control-label::before,
.has-danger .editor_atto_content.form-control .custom-control-input.is-invalid:checked ~ .custom-control-label::before,
.was-validated .has-danger .editor_atto_content.form-control-danger .custom-control-input:invalid:checked ~ .custom-control-label::before,
.has-danger .editor_atto_content.form-control-danger .custom-control-input.is-invalid:checked ~ .custom-control-label::before {
    border-color: rgb(124, 30, 27);
    background-color: rgb(122, 29, 26);
}
.was-validated .has-danger .editor_atto_content.form-control .custom-control-input:invalid:focus ~ .custom-control-label::before,
.has-danger .editor_atto_content.form-control .custom-control-input.is-invalid:focus ~ .custom-control-label::before,
.was-validated .has-danger .editor_atto_content.form-control-danger .custom-control-input:invalid:focus ~ .custom-control-label::before,
.has-danger .editor_atto_content.form-control-danger .custom-control-input.is-invalid:focus ~ .custom-control-label::before {
    box-shadow: rgba(148, 35, 32, 0.25) 0px 0px 0px 0.2rem;
}
.was-validated .has-danger .editor_atto_content.form-control .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before,
.has-danger .editor_atto_content.form-control .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before,
.was-validated .has-danger .editor_atto_content.form-control-danger .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before,
.has-danger .editor_atto_content.form-control-danger .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {
    border-color: rgb(137, 33, 30);
}
.was-validated .has-danger .editor_atto_content.form-control .custom-file-input:invalid ~ .custom-file-label,
.has-danger .editor_atto_content.form-control .custom-file-input.is-invalid ~ .custom-file-label,
.was-validated .has-danger .editor_atto_content.form-control-danger .custom-file-input:invalid ~ .custom-file-label,
.has-danger .editor_atto_content.form-control-danger .custom-file-input.is-invalid ~ .custom-file-label {
    border-color: rgb(137, 33, 30);
}
.was-validated .has-danger .editor_atto_content.form-control .custom-file-input:invalid:focus ~ .custom-file-label,
.has-danger .editor_atto_content.form-control .custom-file-input.is-invalid:focus ~ .custom-file-label,
.was-validated .has-danger .editor_atto_content.form-control-danger .custom-file-input:invalid:focus ~ .custom-file-label,
.has-danger .editor_atto_content.form-control-danger .custom-file-input.is-invalid:focus ~ .custom-file-label {
    border-color: rgb(137, 33, 30);
    box-shadow: rgba(148, 35, 32, 0.25) 0px 0px 0px 0.2rem;
}
div.editor_atto_toolbar button .icon {
    color: rgb(181, 175, 166);
}
.toast.toast-success {
    background-color: rgba(17, 68, 57, 0.95);
    color: rgb(138, 236, 207);
}
.toast.toast-success .toast-header {
    color: rgb(138, 236, 207);
}
.toast.toast-danger {
    background-color: rgba(63, 16, 14, 0.95);
    color: rgb(213, 141, 138);
}
.toast.toast-danger .toast-header {
    color: rgb(213, 141, 138);
}
.toast.toast-info {
    background-color: rgba(13, 51, 62, 0.95);
    color: rgb(138, 192, 207);
}
.toast.toast-info .toast-header {
    color: rgb(138, 192, 207);
}
.toast.toast-warning {
    background-color: rgba(68, 43, 6, 0.95);
    color: rgb(214, 178, 129);
}
.toast.toast-warning .toast-header {
    color: rgb(214, 178, 129);
}
.toast .close {
    color: inherit;
}
.navbar {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px;
}
div#learningcontent {
    background-color: rgb(24, 26, 27);
    border-right-color: initial !important;
    border-bottom-color: initial !important;
    border-left-color: initial !important;
    border-top-color: rgb(58, 97, 131) !important;
}
.course-content .current::before {
    border-left-color: initial;
}
.section-go-link {
    background-color: rgb(27, 30, 31);
    border-color: rgb(56, 61, 63);
}
.progress_bar {
    background-color: rgb(27, 30, 31);
}
.progress_bar_completed {
    background-color: rgb(54, 90, 122);
}
#region-main {
    border-color: initial;
    background-color: rgb(24, 26, 27);
}
.mt-2.mb-1 {
    background-color: rgb(48, 70, 70);
    border-top-color: rgba(140, 130, 115, 0.2);
}
.activity-navigation {
    background-color: rgb(24, 26, 27);
    border-color: rgb(60, 65, 68);
}
div#learningcontent {
    background-color: transparent;
}
#region-main {
    border-color: rgb(56, 61, 63);
    background-color: rgb(24, 26, 27);
}
.pagelayout-mydashboard #region-main {
    background-color: rgb(24, 26, 27);
    border-color: initial !important;
}
#page-course-view-topics .course-content .section-summary {
    border-top-color: initial;
    border-right-color: initial;
    border-left-color: initial;
    border-bottom-color: rgb(69, 75, 78);
}
.market-tile {
    background-color: rgb(27, 30, 31);
    border-color: rgb(53, 58, 60);
}
.marketcontent .text_to_html {
    background-color: rgba(24, 26, 27, 0.8); 
}
#page-my-index .btn-outline-secondary, #page-my-index .dropdown-item.active, .dropdown-item:active {
    color: inherit; 
}
.moodle-dialogue-bd div[role="alert"] {
    background-color: rgb(148, 35, 32);
}
.aalink.focus,
#page-footer a:not([class]).focus,
.arrow_link.focus,
a:not([class]).focus,
.activityinstance > a.focus,
.aalink:focus,
#page-footer a:not([class]):focus,
.arrow_link:focus,
a:not([class]):focus,
.activityinstance > a:focus,
:focus {
    outline-color: transparent;
    background-color: transparent;
    box-shadow: none;
}
.fpsignup {
    background-color: rgba(24, 26, 27, 0.9);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 1px 1px;
    border-color: rgb(48, 52, 54);
}
.fpcustomtext {
    background-color: rgb(24, 26, 27);
}
div#fordsonlogin {
    background-color: rgb(24, 26, 27);
}
.fpinstructions {
    background-color: rgba(24, 26, 27, 0.7);
}
.row.loginicons {
    color: rgb(129, 168, 198);
}
.loginfeaturedimage img {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 1px 1px;
    border-color: rgb(48, 52, 54);
}
.featuretext h4 {
    border-top-color: rgb(121, 112, 99);
    border-bottom-color: rgb(53, 58, 60);
    background-color: rgb(27, 30, 31);
}
#page-my-index {
    background-color: rgb(36, 53, 52);
}
.editing aside#block-region-fp-a {
    border-color: rgb(53, 58, 60);
}
.editing aside#block-region-fp-b {
    border-color: rgb(53, 58, 60);
}
.editing aside#block-region-fp-c {
    border-color: rgb(53, 58, 60);
}
.editing aside#block-region-side-pre {
    border-color: rgb(53, 58, 60);
}
div#blockslider {
    background-color: rgb(35, 38, 39);
    border-color: rgb(60, 65, 68);
}
.blockpanelbtn .btn:focus,
.blockpanelbtn .btn-primary:focus {
    outline-color: initial;
    box-shadow: none !important;
}
ul.footercontact {
    list-style-image: initial;
}
#page-footer {
    background-color: rgb(2, 114, 140);
}
#page-footer .socials_wrapper .socials a {
    color: rgb(129, 168, 198);
    text-decoration-color: initial !important;
}
.carousel-caption.d-none.d-sm-block {
    background-image: initial;
    background-color: rgba(0, 0, 0, 0.7);
}
.carousel-indicators .active {
    background-color: rgb(24, 26, 27);
}
div#fpslider {
    border-color: rgb(53, 58, 60);
}
.alertmessage {
    background-color: rgb(190, 76, 0);
}
.marketcontent::-webkit-scrollbar-track {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 7px inset;
}
.marketcontent::-webkit-scrollbar-thumb {
    background-color: rgb(73, 79, 82);
    outline-color: rgb(84, 91, 94);
}
.class-box-fp {
    background-color: rgb(36, 53, 52);
    border-color: rgb(57, 61, 64);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
}
.class-box-fp-style3 {
    background-color: rgb(36, 53, 52);
    border-color: rgb(57, 61, 64);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
}
.class-box-fp-2col {
    background-color: rgb(36, 53, 52);
    border-color: rgb(48, 52, 54);
    box-shadow: rgba(0, 0, 0, 0.6) 2px 2px 10px 2px;
}
.class-box-fp .course-title h4 a:hover {
    text-decoration-color: initial;
}
.class-box-fp .course-title,
.class-box-fp-style3 .course-title {
    background-color: rgb(24, 26, 27);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
}
.class-box-fp-2col .course-title-2col {
    background-color: rgb(24, 26, 27);
}
.course-summary-2col {
    color: rgb(232, 230, 227);
    background-color: rgba(0, 0, 0, 0.8);
}
.class-box4 {
    border-color: rgb(48, 52, 54);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 1px 1px;
}
.class-box {
    border-color: rgb(56, 61, 63);
}
.class-fullbox {
    border-color: rgb(48, 52, 54);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 1px 1px;
}
.class-fullbox7 {
    border-color: rgb(48, 52, 54);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 1px 1px;
}
.fullbox {
    background-color: rgba(24, 26, 27, 0.7);
}
.fullbox7 {
    background-color: rgb(24, 26, 27);
}
.course-title-fullboxbkg {
    background-color: rgb(24, 26, 27);
}
.class-box .course-summary::-webkit-scrollbar-track,
.class-box4 .course-summary4::-webkit-scrollbar-track {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 7px inset;
}
.class-box .course-summary::-webkit-scrollbar-thumb,
.class-box4 .course-summary4::-webkit-scrollbar-thumb {
    background-color: rgb(35, 59, 79);
    outline-color: rgb(84, 91, 94);
}
.course-overlay {
    color: rgb(196, 191, 183);
}
.coursestyle2 {
    background-color: rgb(0, 0, 0);
    color: rgb(232, 230, 227);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 5px;
}
.coursedimmed1 {
    background-color: rgba(35, 38, 39, 0.9);
}
.coursedimmed2 {
    background-color: rgba(83, 90, 94, 0.9);
}
.coursedimmed3 {
    background-color: rgb(88, 95, 99);
}
.coursedimmed4 {
    background-color: rgba(83, 90, 94, 0.9);
}
.coursedimmed9 {
    background-color: rgba(43, 47, 49, 0.2);
}
.class-box-courseview {
    background-color: rgb(36, 53, 52);
    border-color: rgb(57, 61, 64);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
}
.coursestyle2 figcaption {
    background-color: rgba(0, 0, 0, 0.75);
}
.coursestyle2:hover p.course-summary::-webkit-scrollbar-track {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 7px inset;
}
.coursestyle2:hover p.course-summary::-webkit-scrollbar-thumb {
    background-color: rgb(73, 79, 82);
    outline-color: rgb(84, 91, 94);
}
.coursestyle9row {
    border-bottom-color: rgb(56, 61, 63);
}
.coursestyle9row:hover {
    background-color: rgb(75, 66, 0);
}
.hoverhighlight:hover {
    background-color: rgb(75, 66, 0);
}
#page-my-index .block_myoverview .card-body {
    border-color: initial;
}
.socials a:hover {
    text-decoration-color: initial;
}
.region_main_settings_menu_proxy {
    background-color: transparent;
}
.navbar {
    background-color: rgb(24, 26, 27);
}
.navbar-fhs .navbar-brand {
    color: rgb(232, 230, 227);
}
.navbar-fhs .navbar-brand:hover,
.navbar-fhs .navbar-brand:focus {
    color: rgb(232, 230, 227);
}
.navbar-fhs .navbar-nav .nav-link {
    color: rgb(232, 230, 227);
}
.navbar-fhs .navbar-nav .nav-link:hover,
.navbar-fhs .navbar-nav .nav-link:focus {
    color: rgb(232, 230, 227);
}
.navbar-fhs .navbar-nav .nav-link.disabled {
    color: rgb(232, 230, 227);
}
.navbar-fhs .navbar-nav .show > .nav-link,
.navbar-fhs .navbar-nav .active > .nav-link,
.navbar-fhs .navbar-nav .nav-link.show,
.navbar-fhs .navbar-nav .nav-link.active {
    color: rgb(232, 230, 227);
}
.navbar-fhs .navbar-toggler {
    color: rgb(232, 230, 227);
    border-color: initial;
}
.navbar-fhs .navbar-toggler-icon {
    background-image: initial;
}
.navbar-fhs .navbar-text {
    color: rgb(232, 230, 227);
}
.navbar-fhs .navbar-text a {
    color: rgb(232, 230, 227);
}
.navbar-fhs .navbar-text a:hover,
.navbar-fhs .navbar-text a:focus {
    color: rgb(232, 230, 227);
}
span.userbutton {
    color: rgb(232, 230, 227); 
}
[data-region="drawer"] {
    background-color: rgba(0, 50, 63, 0.8);
}
.studentdash .btn,
.teacherdash .btn,
.enrollcodes .btn,
.siteadminlink .btn {
    background-color: rgb(54, 90, 122);
    border-color: rgb(58, 97, 131);
    color: rgb(232, 230, 227);
}
.studentdash .btn:hover,
.teacherdash .btn:hover,
.enrollcodes .btn:hover,
.siteadminlink .btn:hover {
    background-color: rgb(24, 26, 27);
    color: rgb(196, 191, 183);
}
.completiontextposition {
    color: initial;
}
.export-group {
    background-color: rgb(27, 30, 31);
    border-color: rgb(28, 132, 143) rgb(53, 58, 60) rgb(53, 58, 60);
}
.export-group .form-group.row.fitem:first-child {
    border-bottom-color: rgb(56, 61, 63);
}
.progress.fordsonsinglepage {
    border-color: initial;
}
#page-login-index #page {
    background-color: transparent;
}
nav.fixed-top.navbar.navbar-teacher.navbar-expand.moodle-has-zindex {
    background-color: rgb(137, 127, 7);
}
nav.fixed-top.navbar.navbar-student.navbar-expand.moodle-has-zindex {
    background-color: rgb(24, 26, 27);
}
.fordsoncourseformat h3.sectionname {
    background-color: rgb(35, 38, 39);
}
li#section-0.fordsoncourseformat h3.sectionname {
    background-color: initial;
}
.course-content ul li.section.main.fordsoncourseformat {
    border-bottom-color: initial;
}
.fordsoncourseformat .progress {
    background-color: rgb(66, 71, 74);
}
.usermenu .login a {
    background-color: rgb(24, 26, 27);
    color: rgb(129, 168, 198);
    border-color: rgb(58, 97, 131);
}
.usermenu .login a:hover {
    color: rgb(232, 230, 227);
    text-decoration-color: initial;
    background-color: rgb(54, 90, 122);
    border-color: rgb(58, 97, 131);
}
.notloggedin .usermenu .login a {
    background-image: none;
}
.usermenu .menubar {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjEzMiI+PGRlZnM+PGZpbHRlciBpZD0iZGFya3JlYWRlci1pbWFnZS1maWx0ZXIiPjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwLjMzMyAtMC42NjcgLTAuNjY3IDAuMDAwIDEuMDAwIC0wLjY2NyAwLjMzMyAtMC42NjcgMC4wMDAgMS4wMDAgLTAuNjY3IC0wLjY2NyAwLjMzMyAwLjAwMCAxLjAwMCAwLjAwMCAwLjAwMCAwLjAwMCAxLjAwMCAwLjAwMCIgLz48L2ZpbHRlcj48L2RlZnM+PGltYWdlIHdpZHRoPSIzMjAiIGhlaWdodD0iMTMyIiBmaWx0ZXI9InVybCgjZGFya3JlYWRlci1pbWFnZS1maWx0ZXIpIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVVBQUFBQ0VDQVlBQUFEaG52SzhBQUFqcUVsRVFWUjQydTJkaDE4VjE3YkgvUmZ1Kzd6NzdqVXhwaGw3NzRxaU5DdUlCVlFVQzRnb0tBcW9LSUtpR095OUUyc2lsc1FXRTN1Sk5WWnNNYlpvTlBaZXNOZXN0OWNrbSt6WloyYk9uTW81c0g2ZnoxSTR6Sm5aczJmbU8ydnRzbll4SUpGSXBDS3FZbFFGSkJLSkFFZ2lrVWdFUUJLSlJDSUFra2drRWdHUVJDS1JDSUFrRW9sRUFDU1JTQ1FDSUlsRUloRUFTU1FTaVFCSUlwRklCRUFTaVVRaUFKSklKQklCa0VRaWtRaUFKQktKUkFBa2tVZ2tBaUNKUkNJUkFFa2tFb2tBU0NLUlNBUkFFb2xFSWdDU1NDUVNBWkJFSXBFSWdDUVNpVVFBSkpGSUpBSWdpVVFpZVFjQTM3MS9EM2NmUFlWejErN0FycE1YWU9HV2c1QzFmQ3NrWmErRm5sTy9oZTRUbDBLWDhUblFkY0pTaUpteUFoSm1yNGFNSlp0ZzlvLzdZTk9STTNEcWo1dHcvZjVqZVAzbUxWMUpFb25rK1FCODhPUTU3RGwxRWVadjJnOTlacXlFMEl4NTBIem9ITHN0WkZnMlJFM0lnU21yZDhLVzNMTnc5ZTVEdXFva0VzbHpBUGppOVJ2WWZ1d2NqTXpaQk8weTUwUFQxRmt1czVicGMyRGdWMnZodTkzSDRIN2VNN3JDSkJLcFlBRDQ2T2tMK0dyRFB1aVl0UWlhRHBubGRtczkvQ3ZJWExJUkx0MjhYK0FWblQ0c0UwSmFoV25hNHE5em5MYS9FeWRPbXZxK1hsbFdyVnJyY0Jud2MwZnJSTFNlc1gyVWJibGhHZmZ0MisrU2EySFdTQVJBWGQxNy9CUm1ydHZOQUpRTlRRYlBNR2NwTXlCdzBIVHdIemhOK2I5eDhsVHdHekFWbXJLL0JiRFBHaVZOZ1lCQjAvTC9IcFF5dy9TK1d3eWRCZWtMZjREejErNTRKQUJ0QVZkUkJLQ2VSWFRxcHBUMzZkTm5CRUJTd1FQdzJjdlhzR2p6QVFoaFlXaFF5blJEQzFSZ2hwQ2JBdjUvZ3k1bVVvN2lzVTM4YmpzczJYWVFjcllkZ21scmRzTEN6ZnRoK1UrNU1IWDFUekJtK1JaSW1QRXR0R0xId08vaFB0QndmOWFPaVRZcVp5TmN2L2ZJNHdDWWxKUkNBTFRUc080dVhQeWRBRWdxT0FEdVBIRWV1b3haQkVFSUloMURTQ0h3QWdaT1lRQ2JEUmxmL3dpYkQ1K0c0eGV2d2EwSGVmRG03VHRUeDNyLy9rOTQrUFE1blA3anBuTGN5U3UzUTRmTWVXeS9VNW5uT0JrQzJmOUc1VUI0ZnJQMUlMeDk5ODVqQU9ncytCUkZBSElJbXZVRUNZQWtwd0h3eGFzM01IN0ZGZ1kzOU1LbWFCb0NyM0h5SkdXYkVReDZ4eTVjWmQ3aUs2ZWVDSmJqNG8yN01QZkhQUkE2YkRiNHNlUDVENWlzV3lhMHZ0Tlh1SzNYMk94RFo5YVRJUURhWDNZQ0lNa3BBUHp0K2gySUhyOFlBaEUwR2hiQXZMSEdpUk1oZkVRMkxOdHhDRzR6TDg4ZGV2TGlKV3c3ZWhaNlR2eEdPYjVmMGtUZE1yWkttd25iY3M5NERBRE5oc0tGR1lCYTM4Y1hBNWJObFhXSG5TMTRERE5HS3VJQTNISHNMSVNrem1DUW02UnB2djNIUTFqR1hGaXo1eWc4Zi9tNlFFNE9RK1hEWnk5RDNKUWNwVHorU1pOMHl6dHYvUjRXRXI4dmNBQ2FoVkJSQXlEWDVzM2JIUGJNSEMwM3FZZ0RNR2ZiQWZCUG5xaHBqUlBIUXlObWl6YnRnN3puTHozaUpMR3RiK2Z4Yzh6Ym04RkFPRTYzN0JtTDFzRXJGODBxc1RYc3VuWHJOZ0ZRUitpcEVRQkpCUUxBeFp0K0JyL0VDWnJXTUdFc1JJOWJxTFRGZWFJZVBYME9vM00yZ0UvZk1kQ1llWVJhNXpCNDdpcDQvZmF0MndDbzl6QmJleGlMTWdDTlhpWm1Pa0lJZ0NTN0FMaGc0MTRHaWZFVzFwaDVWUTBUeHNEc3RUODV2WFBENldIeG4zL0M5dHd6RU1nOFBsOEdiSzN6U1ptN0VsNitmdU1XQUdKSWgrUFpiSVVSQVpBOFFKSWJBYmg4KzBFR3VyRVc1c3ZBNTVjNEZuNDZkdGFyVHZ6SzdmdlFZZVJzcU44blMvTzhoaTFZNDlRMlFiMkhqamVxNnczMDFRdUZpeW9BMGNQVEs3dXJ3VXNxb2dEY2N1Z1UrUFZqWVdPQzJockVaMEhva0tsdzh1SlZyeno1QjNuUElIbkdNdVU4NUhORG0vTGRGcmNBMEo2SHNxZ0NjT3k0U2JwbFIyL2FrZU5pTHpMV256V3pkZVlKeVlzQmVQcnlkUll1am1lZTNtaVYxWS8vRWxvTW1nUjNIejN4NmdyQVZGbzl4aTJBZW5HakxNNFI3YnVkaDkwQ1FQVDBiQW1GaXhvQWNlNnZVZWhyaS9mbTZEaEFXNmN0a3J3VWdFOWZ2SVNvTWZQQXQyK1d5aG93K0FVa2pZT2I5eDhWaWtwNC92SVY5SnU2Qk9yMkhtbHhya0hzUFBFbDRHb0Fvb3hDWWRucm9JSFE5czBDSVFDU1RBTncvTkwxMExEUEtKVTFpTThFbjdpUmNPYVBHNFdxSXJEenB1T0lXVkNQUVZBKzU2aXNyeHdleTJnR2dFYmJZZWhIQU5RK2xydVRJUkFBaXdBQXR4NytCUm95Mk1sV08yWTRIUGoxUXFHc2pOc1A4NkJKMGxnRjhQSjVUMWkyM2kwQXhCa1BlZytlbUFLcXFBTVFYd2oyZ29nQVNESUVJSTZYYTVjMkZSb3dFSWhXS3lZZGxtemVWNmdyNU5qNXkxQWpPczNpM05HT25QM2Q1UUEwR3dvWFpRRHlORmpPdmhZRVFBS2dvcS9XN1lBR3ZVZW9ySDVzQm9RektONSs4RmhwTTN2eTdBV3o1NUNIOWhUdEdUeCtndlpVc1VkNVQrREo4eGRlV1NrTDErK0NtZ2hCcVE0U0ppOVd4aEc2R29Bb2JOY3lDb1VwQkxZdi9IVkd1VW1GR0lBMzd6MkVaa2xqb0VHdkRKWDVNQXRJR0FWQkNabFFMeW9GYW5kTmhocWRFcUJxZUcrbzNMb0hWQWp1Q21XYlJzQVhnV0h3YWFOUUtGNjNLYlJObTY3a0NQUTJZYzl3bDh6WlVEZG1tRVU5YkQ5eXlpMEFOQXFGRVhKRnBSY1llOGYxWGdab00yZk5KUUNTbkFmQWtRdFdNZGdOVjF2c2NNVURRZ2pXaVU2RkdsMEdRTldJQktqRTRGZWV3YTlzeTY1UWlzSHYwNEF3K01nM0ZQNVRPd2pLaGZhQUptblpNR1hOTHErc21OT1hyMEdON3FrV2RkRmgyRFM3WnJ2WUNrQ2pVSmluaUhjRWdQWk93VE96RDduRHhsRVFvWmRuQkVGYncyRUNJRWtUZ05mdlBvQkE1dVg1eEE2ek1OOCtYeklJWmtDOUhrT2hWdGVCVUwxVFA2alNQZzRxdG9tQjhzSGRvSFN6VHZCNVFEaDh6THkvanhxR2dIL1NSQWpPbUE5K0tUUGg0TmsvdkxKeVVtYm1RQzBHZkxrdXRodzg2UllBR29YQ2pyWlBPVHFmRmowelYrWGwwd0tSMFRoSm94a3pCRUNTYVFCTyszWWoxTytacnJhWU5HZ1lQd29hSmZ3VkZoc0NNREFjU3ZpMFlONWhmd2dac1FoYXBHZEQ4N1M1RURwaXZwTHgyYXl3blEwenliaktjTFc0bDYrdEp6ekFjWTcxWXRLWnBhbnFwRWZXSExjQjBDZ1VkZ1NBUnJuMXpBRE02UHVPUWxnUFJFYkhkTVpBYUFKZ0VRYmdVd2FHZG9NbktzQVRyVzcwVVBCUG5BRDFlbWRDdFc1RG9ITG5BVkMrZlFLVWFSTUxwVUtpNE5ObVhhQmtRQWY0d0xjTi9MdE9jL2drc0wyeVBDV0NyOW5RT1lvRkRKNEp5ZGxyVGMrdDNYYjBIQVFPeGlVdXMxMWlJY096b2N1NEpTdzgzd21IejE4eFRJRTFlZG1QVUtOcmlrVzlIRHQveVMwQVJPR3FjYzRHb0JGWTBhTXl5a3h0bEpNUHYrdEtFQm1sd25KMEtod0JzQWdEY1BPQjQ0cDNKMXFkcUNFd1lka0dXTDNuS0d3Nzhpc2MvUFVDL0h6eUhPdzdjUWIySGpzTmU0NmVndDI1SjJIWDRST3c4OUF4Mkh2a09HVE1Yd1VCTE94dE9rUnRqWktuUXM0TzY5UEtydDkvRElHNFFoeXpvTUd1c1Nhc1BFR3NqSGdNWEdXdTE1UmxjUFEzN2ZuTVYyL2ZoMXJkQjF2VXplakZhOXdHUUF4SmpSNThlNGRvV05zbmRqRGcvakM4Uk1PZjhUTnIzM0VsQUxFTVJ2QjFKQjJXMmJuQWFMWXN3a1R5QWdDT21QY3QxSXRPemJlNlVhbmd3enlkT3c5dFMyT1B2YjRkUnMxWFZtb0xTcG1tc2taSms1UTArbnBDVHl4cDFrcGw0U1Q1dTY0MFpYVTVkc3pGV3c3QXUvZHFMeFd6U3ZjYWt3MjF1cVdvNmlkc3lBUjQ4ZXExV3dCbzdjRzNGNERXc2l2Yk16N1BIVzF4UmdrUnpIVEFPR3NHQ3FtUUFQREd2WWZnSDVmQm9EY2szNnBIRG9SSlM5Zlp0ZFBMdCs1RHcvN2pJUURYQlJFTUZ5cHFQV3cyUE5ISkZEMXZ3MTZvbnpETzRudTR1RkZqQms5bkdKWkIzajgzMy80VFlOenl6UlpqL2ZZZVB3dFZPeWVyNmdkdEMvT2EzUVZBczZHd3M5WVhkdVdpUkk0QzBLaERSSjR4UXdBa1dRWGdocDl6V2JpYm9qSjg0SGNkL2RYdUhhL1pjd3pxeFk5V2VvTkZhNUF3RmpLLy9oSCtsQ0J6NHVKVnFOL0hjbnRjMENoZ3dFU0l5TXgyaXJYUG1BTUJ5WDlscjhiMC9SYmw2enNXbG0wL3BDcmIzVWQ1VUtkN0N0VHVycTZqVVF1K2N5c0F6WVRDdGdMUTJoQVRzK2J1OFhoR0hTSllSMGFoTUFHUXBBTGcrRy9XUW0wVzRuR3IyWFVRTkVrWXFXU0RzVmNZT2liUFhBRStmYkxBci84NGxkV04reEoySFAxbkpUYnNtVzB4ZUFvMDZqZldZdHRhc1ptdzVmQXBCWmpZaWVLSXZXUDIrdTA3NXFIZWcyMjVwNkhEaURtc2ZLTXRqbGt2UGd0K3U2WU81ZEptNTBDMXpnTlU5UlNSTnRuMHpCQm5BTkJNS0d6UE5DMkVoVkZZYVMzc05kdjU0T3pPQ0NOd283ZE1BQ1JaQlNCQ29YM3FCUFpBRDhxM2Fzejd5MXE0MHVHZFAzenlUTWtaMkpCQnNGSEM2SHpETkZOKy9jZkFyUWVQbGUxU3MxZEN2YmhNMVRab2RYcU5oS3h2ZmxSZzZncmR6M3NLUStheVkvY2VwVHF1VC93b0dMRkFEYWFkdWFlZ1NrU2lxcDdxTW8vd3d0V2JiZ1dndFZEWWtYbXErRjJ6SU9STFNEcVNITlJSQU5yN01pQUFrdklCZU9QdUEvRHBNVVFaMjhjTkgvVFZPL1k3NVFDNTV5NURyWmpoeWxoQzBlcjFHZ0dKMDNQZ20wMTdvVzdzQ0l1LzErODlFb0pUSmtIZU05Zk9KOFlGa0pKbjVGaVVBY3QzKzI5QW95NWR2NjNVaTFoUGFMYTBBM3FURUI3bzJjbnI0ZkplWVJLcFVBRHc1RzhNVUYyU1ZWYTVRd0tjditLOGZIK3oxMnpUVEM1UUx6WUQ2dUI4Vytsek5NekljdmpNUmJkVXdqWDJFcWdYTzF5WjZzZVBYNnRIT213OTlFditOczlldklUQXVHRlFJekpKVlZlTGY5eGgwWjVKSXBHOEJJRHJkaCtDbXV4QjVsYWRQZUNOWTRjNk5aTUxKaGVJenByRFlKZG1PYzlZdzJwMEh3TFozMjkzYTBVa1QvdEdWYjdhUGRKZytEeDFKMGZLdE1YTUMreW5xcS8wMlRsdzE4YWhRaVFTeVVNQU9Ebm5lNmpKb01ldFdxZiswQ2x0b3NWNE9FZDE5YzU5cU4wOTFXSmFtV3kxbzFNaFl0aFVCWnJ1MUl6dk5rRk5CbDVlanJvOWhrSmt4blI0OC9aZC9qWXp2MXV2ZU1kaWZVV21UNElUTnM0S0laRklIZ0xBcEVuem9VYm54SHlyMGpFQitrM0lkc25CdGh3OEFkVWlCNm9HRktzR1gyT21tYTZENFBKTjl5K3MvdDMyL1ZDbDB3QmhJUGdRQ0IwNFRnbDl1VlpzMlEwVjIvZFIxVmRRL0REWXNPOEkzVWtra2pjQ3NFdjZSS2pCdkQ1dVZabUhNM0R5QXBjZE1IVldqakxJdWs3M3dSYUd3MHgrMkZNd01KbkFQT0Zxa1FQeXk0SkRnYnFPbUE1djMvM2pBZjZ3K3hCVURJOVgxVmZENkJSWXNYazMzVWtra2pjQ01EUXBVOG5zd3ExOFdCeE1YTExhSlFkN3o4THFQdU95R1FDVFZjTkp1R0V2NjZtTFY5eGVDVGhHc051SWFWQWpja0IrV2FwMlNvTFJDMWVwdHNPNXorWERlcXZxcTI2M0FiRG9oMjEwSjVGSTNnakFadkhwVUsxajMzeXJ5Qjd3U2QrNEJvRG9RVlVJNzJ2UjY4eXRXcWRFYURkb2pKSnkzNTM2OWZjclN0dWVXSlpLN2Z2Q3dWUG5WZHR0M0pmTFBPUStxdnFxSGRrZnNsZHRwRHVKUlBKR0FBYjJUbVVQY2grVlpjeFo0dlFEWGI1NWg0V1BmWlN3c1diblJGMnJFQllQb3hkODY3WUt1UC80Q1lRbWpXTG4zUysvRERVWWlHdXljdDU3cE83ZDNYSDRCRlJwSDYrcXExcWQrOEhjbFJ2b1RpS1J2QkdBVGVMU0ZLK0dHM3FBRTc1ZTVkU0RZRWRDeTM0WkRCNTlvSHBFZ2xVcjM2NDM3TXI5eGVVbmYvTDhKYVZjbFJqVXhPTlhVT3JBMGd2ZTlIT3VBa0N4dm1xeU1KZzhRQkxKU3dFWW5EQWNxdUpEL2JlVkRZMkJLVGxybkhvUUJHclpOajFWNEVCRG1GUmtzSk0vcnh3ZUQ3VTc5NGV6bDYvQ25RZVA0T2E5QjA2eFcvY2Z3aFhtaVI0NmRRNnk1aTlYenJkU2VKeEZtYXBIOUZXMmw3WDk0SEVvM3laV1ZWOVl6Z1ZyTjlPZFJDSjVJd0RicDJRcHFlMjVWV2dYQ3dNbnozUGFBZmFmT0FPbFcvV0FLZ3cwb2xVTzc2M0FZd1FMdHlzeGo4dmk3K3l6Y3ExN1FyazJ6clh5YUcxam9RS3p5dEl4MGNxd0Y4RDJROXJUMnpidVBRSmxXdmRRMVZlOXJvbVFzMkVIM1Vra2tqY0NNTzdMNlZBRkFmUzNWV0RRNlRkMnRsTjJqbTFvdFRzbFFFV0VUVmd2bFgwUjNCMXkxdjhGanZTWmk2Rk1TTFRGTnBYYnVkQ2tZMkVaeTdTS1p1R3NmbnNlbHJjY0E2UllYNzVSQStEN24vYlRuVVFpZVNNQXMrWXRVNEdnZkpzWWlFd2Q2M0FHRmh3L2gvc3BFeHdGbFpqWEpWcHBCci80ck9uNXMwMXcxa2NvQzhYTE1RREoyN3JhS3Y1ZG5wb2Q0MkhEbmtPRzV6Um41WG9Ga21KOXRVc2VxWVRVSkJMSkN3RzRZdk5PNWhIRjVodXU4dVlYUGRDbWRPL2EzdEoyK0xScFo2aklRa2JSeWpPQVZHZmd1Q1cxc1oyN2ZCVStieFlKRlVLajg2MThxeWluV2JtUTd2bUd2NWNKN3FZWS9wdzZkVDVjdldWOTlrbmE5SVZRRmdFbzFGZml1RGx3NCs1OTAvV0NtVlF3WTdGV3FpYWp2N2xTdUw0RjV0YXpsa25aVTRYMXhkZno0TUowVmZha0duT2xNR21zMlRXVGk0cndHdUcxRTU4QmQ5Nkx4UTcvZWg0cXNmQlBOQXhIZjc5MjArNmRYcng2QXo1ajhDdlhDbUdqdG8rRE9zSzJBN21hMzF1KzhTY28zYklMMUltSVY2eCs1NzY2NXRNNVFkTjh1L2JYdE1iZGs4QXY2aTlyM21zd0RKbzRGMWF3NC8xK3pWeldteGN2WDBGZ3o4RlFvWFdNcXE1bUxmOUJOVnZFREd4NFRqbDVZUjJlcDg3ZElPTFpsYjAxeHgzUGxJMFBEdVpLUk1oWVc5bXVJTVRUK0x2N0JlZnBMeSsrbGd0ZU83eUdhSTdrbWJRSmdIL2N1QTNWd25xclE5U1czV0h0am4xMjdSQ3p5UGgzVDRRdm1qTUFCbmRWMlNkQkhTQjkyZ0xkOUZIdkdFZ2VQTTZEaDNsUG1EMkZ2S2ZQSWUrWlpPeXpwK3dZejErODFMU1h6SFBWc2xldjN5aWhOaHIrYktzdVg3OEZaVU1zdy9sMU8yMkhGVTlvS25vREhFSUY1U0VnZE4xMTA3a0tndndCUWsvTEUzTVc4cFgxU0pZUXhHdUcxODdSSkxzMkF4RGgwQ1Iyc0NwTXhkQnc5THhsTnU4TXdaWTJkUjU4N0I4T1pWdEVxcXhVMHdnSWlrNVdQQ2x2MUw1anArQ0xGbDB0UXZwVHYxMnk2MkhsYTN1Z2w4Si8xMXZXRVc4UVBVQ0puL0VsRy9XT0tmOHVmcWIzZDlHc2hmVXlkS3pkeU5iT3g1RnR6QnpmN1A3RmM5VHpLczN1UjY5TVpxK3h0Yyt4ZkZyWHd1amF1cUxPekpaWmIxOXU4d0R4bnlFTVdoVmFSK2RiV1JhcXRvaExoVmR2YlBPVXR2NThHRW8wYWd0bG1uV3lzQThidFlIVEZ5OTc3VnNxYzg0UytLSmxWMVU5Tlk4YllwYzNpZUpMVW5MWFh5czlQdjR1cjM0bWJzTy9oL3NTMThmQW44VUhnUCtOMzFSeXlJc1BqTGlPQm02bnQrU2tlR1Bpd3lhbmwrZmw0MlhUQytmNU1jVDJINTZPbjVlRDcwTThKditNZjQvdlIxd0RCRC9qOVdiVW5DRFhpMWE1c1I3bGM3Uld2M3JucjdXZDFqVVdGNWpTcWlldGZlRng1QVd6dEtJSnJlVVU1T3N1SDB2cisrSjU2ZDAvMXE0Si81N1d2dVI2Y2lrQXY5MjhTOVg1Z0ZhcWVTUWMrdVdzNlIxZHZYa0hQZ3NJaDFJc3pQMmlTVWVWZmRBd0ZHYm1yUEphK0dIWWpSMDMyR0VpZHRDa1RISXNiUmgvc1BERzBHcC80dzM1ZUZPSU56ajNRdmpOaU4vSG4zRWJEaEZ4ZitMRHdtOHdzWjFGN3dibWpkRm9mRUYwRGpoeGFVcCtiSjQyM3g0QTh1M0ZoMThHb0xnR2lCRUF4WFZOSEFVZ3IxTjh5ZURQV3MwWDlnS1F2d1R4Yy94WmZKRlpnNUs4TDl3ZTY0NWZMMTRIOGt1Vmw0dTNsYm9MZ0ZyWFJBYWd2T3FoMndCNDd0SlZxTlE2V3RWWjhWblRUakJ6cWJrWklkaXVGdDR2RFVvMmJnT2ZCNGFyREQvck5XeThUUjBGbnFZREowL0Q1ODA2cStxblhFZzM5dUxZNmRCK3hZWEp0WG9zNVJCVnZ2bkVtMWtVdjRtNGw4SWZGZ1FuUWtzT3RZMEFLSmVWbDFNR290R0RvaGRxaVErL1ZpZU1ERURjbHArYkhnRDV2dmgyamdMUXFOeU9BbEIrb1ltZUVwb3RBSlR2RmZtYXlpRFMya1k4bGw2SWJBOEE5YTZKREVCK1QvSHQzQVpBVk95SXlhcWhJdGdPV0xkanZPTDlXTlBNSmF1Z2VQMWcrRHdnek1JK2Fkd1dGcS9lQU1kT240ZGRoNDdCM3R3VEhtMjdEeCtIN2Z1UDVOdWVJOGNoS20wY2xHYmhyMWcvUHBIOWxBNGJSeHJ0OFVMenRqK3R0V3p4d2NBYlZsNytVUWFnL0pEejdmbm4vSGYrdjl4T3FIY0RZN2w0cnh6M1VrVVlpWkExRTJyaE9mSWxOUGt4ak01ZkJLQVk3dXNCa01NRHkybk5BNVhyaFpzV09QbFFEVEZVZFJTQVJ0NlcrTUxTdWhaaVdVUUE4bzRFbytWQitmZnRiZm9RbXlCRTB3T2cwVFVSQVNpV1JhcytYUTVBSEJKU2prRlB0RThDTzhLQkU2Y05kNEJnKzAvZEZ2Q3BYMXRkSzltb05YelVzQldVOUEzMUN2dVlsVGZmV1BuTHRPaGlVVGZKNHh5YkxTTjZVTHhOVGd6L2VJakplOGJFTU5SZUFPcUZSWG9QQXNJQVAwUGo0VHIvcnJXYlZHelg1T0d4bm1lakIyYngvSGo5eU9BUUh6WSsvQVhyemhZQThuTVV6MVAyU25oNHljTndkd05RdkJab3NwZkVvU2pXdDFZN25CaSttMm42a084WnNRbUFsMFV2bExaMlRmang4YVhHaHpHWnViZGNBa0FjbUZ3M0lrNDFiQVdIc29RblplaUdyM21zZ0ZWRElxRkVnMVpxYUJRV1l6QXMzU3ppYitpcGgvUnMrZG4rek5WaU81d2N0bklJOEJ0WVhIUmNENEFpME9RUVN2YlcrTS9pZDh5RXdQSm5lakExQXdBOFIzRi9ZbWd1aG9PaXQ4RTlSRDBBeXVkbEN3Q053TVZmUXVLTHlka2hzT2hGMnhNQ2N5aUxMMUR1S1lzQWxKc3h6Rngzdmcxdm5yQWxCTFoyVGNUblFMejNDd1NBcU5USlgwRlo1dTJJOWluekFuTlBuOWNjOHRKMzVBVDRkNTFtOEpGdnE4Sm5EVU5ZK043R29qN1Ftc2VtMkwxb2s5alFLOTVFY21nbjloS0xiM1F0QUlwdmZnNG04V0VRYnlqdVdZcXdNZU1KeUkzLy9LRVRPMkMwT2tITWVJRHkrY3ZobHR3bXB3VkF1UTNSV1FEazIvQk9FTzRoYWdGUXk1UGsxOCtvTjE3c0JKRTliVE1BNUZERyt3cVB4VDBxWGlZK2hFY2VhdVdJQjJnR2dOYXVpZGpqSzRLNndBQjQ4dnhGcU1DOEczSDgzaGROTzBGZ2RCSjc0TlhEUFZhczN3ci9xdTRQSDlSdlVTanRRNThXU2c5MnVaWmRMTVkwTGx4dGZ3SlVyVjVFdVZlWTMyemk4QXMrd0ZmUEF4VGJwMFQ0NlEyWjRQQXlhZ3kzTmd4R2ZORDBoc0hJYllBY3Vsb1BOditPN0cwWURRc1IyOGhFVDhwWkFNUnpGT3RXaEphOEh6M2o5YXAzUEhILy9JVmk2ekFZc2I3NUMxSHNvZWVmaXg2MjJldXUxVE52Qm9EV3JvbFdKRlNnQUVSRkRSMERaVmpvSzFwSlAvWUczUHRQb29EcnQrK3lzTGNsZk83Zkdzb0VoUlVxS3gzWURzbzNEWU55elRwYTFBTmE3UTY5NFBiOWh3NVZ1dEdGMWVvSUVkdkdqQjVXM0U2dlU4S1ZBNkgxQnZGYSs3NlpRYkNlTWhCYUhGeHNWRzdadE5yaDlPclE3Q0IydmMrNXA2YzNpc0NXKzhLZTYyWlBtUjI1ZGk0QjRNbHo2QVYyVVExaVJrK29SdHNlK2IyZVQ1NDloM3NQSHltL0Z6YkRkczFIZVU4Z3JGODZsQXJxcUtxSDBzeVcvcmpWWTRibm1QRnlTQVVuTFFDU1BFdkZ0RDRjUEhHTzB2Z3Yyc2YrN1dEQXVKbncvczgvQzMybGJEK1F5N3plZGhaMTBDeG1nRElQbVFCSUlnQVdZZ0RpeFArcW9WSE04NHRRV2ZFR3JXSHR0ajJGdWtJd093eE81eXVsekdKUm4vKzZIWHM5cXF4OGZCcE5zUGRzQ0pLOERJQ283Ry9YTVFoMFVObm5RZTNobzhadDRiZkxWd3RsWlR4NzhRSUNveExoazRBd2kzT1BTUjlMZHd1SlZGUUFpS21wb29lT2hsSU1lcUo5eXVCUW8yMDAzSDN3c0ZCVkJHYW5qa2tid3dEZnh1S2M2M2ZzQlZkdWVGWjZKZlFzUERIcEora3Z6eHl2alNlbTVQSkd1VEpoYnpHalAxNitmaFBxaFBlRXp3UGJxNndrOHdJRHV2WHpxUFl3UjRRRHZkT25mQVVsZkZ0Ym5PdW4vbUd3WVpmbnRiR0o0L0JJbmlWNU9CUEo4UmVLcXhMMkZyTzJ3ZmZiOTJqTzhmMndRU2kwNnp0VVNUYnF6Y0lCM1FtWmsrSERocUdhNXpsNjd0Y2VXM2FqWVMra2d2WE9xV1BLdVhKVnd0NWlaamFhdEhDWkRnUmJRWWYrNlhEanpqMnZyRlNFOThRRnk2Q0VEdnk2RHg0RkwxNjljdnJEWVdic2t5UEpRczJNM2VPSk02MlZ3Mmc3RWNSeVI0elpjN1EyN3N3bzJhb3RZeFhsWXhzbE43V1cvTlJNUGV1VnhVekNVcjF6dHZVNm03M0c4bjFwclc3Rm44MlUxU2pacTczM3VyT1M2Ull6KytBT25UUUhQdk52WjJFbEdyYUNXdTJpNEl5WEpUdkZNWDlkVXpLaHVFK3c1bm0xNmoxSUdRL29xdkJJQmdiUERJT3lkYjRsbDlhTUJEeWVuRzVKbkdIQ1p3MW9IWWZQUE9IYnlRK1QxaXdHc1d4R0NURzFab3JJZWVERTQ0c3pFc1FwVkxMcFBmRGlmRk94ek9LTUhEUEpUL1dPTDU2cjF2WERheURQbWhHejYzRHBuYk5jNzBiSHQzYU50UWJRaXpPRGpHYTBpUGVkT0QzVGJFSmZhN09VdE1wbjV0NjNKNW11VFFERVRwRStJeWJxWm50Qmoybk4xbDM1UzExNnNqQ0RUZjBPUGVFajV2bHBuWTkvbDc3S2JCZFh0bWVJTjRJOG1kMVJBUEo1bkZwdEp6eHJDSi9iS2srdkU2ZE44WG1zNHB4akdVNThIaXVmTjZvSFFEa2hKdCt2bU1DVno2TVY5NitWM1lSbkZ1SGxFak9sNkhraXZHNXdXOXlYVnZKUk04bFB4VHJDeitVSFQrdjZpZk92NVRuYjRyVXhPbWN0QUdwbFlqRnpqZVZjamZMY2NEbmpEUCtkYnkrbTU4SmppS0FUcHhCYVMvYnFMQURhbTB6WEpnQXFuUVZ2MzBIYzhQRktrZ0RaTUhzSzVnUk15SnlrTEdya2lYcno5aTBzV3IyZWhlNGhTdG9ycmZOb0hCa1BWMjdjY21rNWVQNDcrY2FYTXozYkMwQiswZmtrZWY2UThRZEtmRlB6VmVwazcwcHVjT1lQR3Q3STR1Ujd2VEREYkpKU3JjU2R2RXh5R2NTVVNYcDFvQ2M1UlpoNEhIRmVzZFo1eVB2bjE0ZUhkdFlBcUpjNVI0d0d6SjZ6dUQrdGVkeG1yckZZUHExNk1ZS1RDRUE1dGI5NEREUEpYcDBCUUVlUzZkb01RQTdCeEt3cERCYXROUTNoVXIwMWUvdnNQZWhSV2FCUG5yc0FiZUpUNEFPZmxneldvWnBsYjk0ajBXV2VuMWFZdzhOZ09TVytMVWtudFFBb0p2Y1VCMG9iN1ZjdlNhYVcxeUhtNTlOcjB6R2JwRlRyZVB3elhuNmpKS0MyQWxEcllaWXp0QmdsUCtYZzRnK3hHUURxVGU2WE0rYVlPV2UrUDczclplWWFpOXNZOVZZYjFabGNKL0pTQzJaeUhXcmRzMXBKYVkzeVZUcVNUTmN1QUtMZXYvOFRKc3pQVVVDaVpaajh0SGo5bGhEZWJ5Z2NQSDRLQ25MeTNKV2J0MkhRMk9sS1crV0hEWUoxeXh3MWVCUThlSlRubGpLSmIyUTVSNXQ0OGN3a25UUkt5eVNueHRMYUx6ZTlISEZHQU5TYjRtVkxrbElqQUlwaHNXaU9lSUJHQURTVC9KUjd2M3BKUlIwRm9ObHoxanUrbVdzc2JtTzBGS3M3QVdpVWxOYklBM1FrbWE3ZEFPVDZZZnNlcU5DOEkzenMyMHJURURobzRRbXBTbXA1WExmWEhVSXY5ZlJ2bHlDSmVhcWxBdG95R0xkZ0lhOWwrVXIrYldQbmZ1MzJ0a3U4eVBqbTRvRFF1M2lPaE1EeVozcHRTbnJ0VzliQ05UR00xd3NkYmMwbEo3YlhXQnYzWlE4QXRkSkI4ZU9ZU1g1cUxUd3pDb0hGNUxaeW5abzlaMnRKVGMxY1k3RjhJdlJ0QWFCODdlWGt2R2FTdlRvakJIWWttYTdEQUVTZC9mMFBhQmJkM3pDNWFIRVdkcUpIV0t0dGQ4aFp0MWxwWTBOSU9WT1lwT0grbzhld2Z1YytDTzA5Q0Q3MENZYi8xbXZCUEw4UXpUTGg1OVZhZDFXMkx3anhHNVZEMEprQUZEdEJ4UFpHOFFia25welllU0gzY1BKdHRIclB4RVo4M3NqTjh3WGFrcVJVejV1VUU0cnljc2lwd1d3Rm9GYWpQQWVUdGVTbllsSlgyY3NXWitVWTliTEtuU0JpM1J1ZHN5MUpUYTFkWXowUFZRNkZyWG5OWXJKZWZrd09QRFBKWHAzVkNXSnZNbDJuQUJDRnlWTEhNQy9xTS84MlNpWmxQZnV3UVV2NHZ6cE5sWjlEZWcyQVdVdFhNYy93QkZ5OWRjZm05a0ljd0h6dndTUEkvZlVzTFB0aEMwU25mcWtjdi9qZkNVMk55b0hXZzIxLzYrNzlBbTJYNU8wN1J1NjdzNGZCNkEzSGtJOGpMN0FqRDluQW44V2VYZEVyc0NWSnFSNEE1YUVjZlAreVIyRXJBTVdoRy9Md0VHdkpUNjBsUHBYYjJPU00zMXJyOXNwMXFuZk9acE9hbXJuR1dpdmZhYTJqYkMwRUZvZnNpTWx1allaSmFTM1M1SXhoTVBZazAzVWFBTGxPWDdnRTNRYU5oQklzN0MzUjBNRFkzNHZYYjg0OE5MUm1VTEpSQ0xUc21RUXA0MmJBbDdNWHd1U0Z5NVR3K29jZGUrQ3JiOWZDeWswN1lOUHUvVEIzMldySW1yMEloazJlQ3hGSnc2QjBVSml5ai8vVWJRYi9yZHVjZVgwdGpZL0x6TDlMSEd6ZGQwZ0JhRUdLMzNSNkQ2KzdCa0xyalhIak54dHVaelFnV0cvUXNDT0RYczNzMzh4MzlSNDBhek0xOUpLZjhqWW5yVUhDWXNlRVVibDR2ZHR6enJZbUR6VWFkTzFJb2xNUklyaHZhOW1JakpLOTJudXZPeXVaYmpGblA5allRWUxMUzdaaFllaEhDRUxtOVZrelREOWZuSUh3LytvMFlUQnJ5bURXRlA2bnVqLzhiNjFBNWUvL1laLy9xNXFmOGovK1RkbU9lWkw0dlJJK0J2djIrZWYvK3VFOWxEVCtMNTA4czhQUkVOalQ1b3RhNitEd1Zqa2p6Ym9NT2JOL0sweXl4ZXYyQmhWejVjNTNIVG9LYmVOVC91b1F3WFUyQ3NCOE84YkNrdTgzd3F2WG5qRm5tUSt6OE5TYmlBQklBQ1FBT2xtbnpsK0U0VlBuZ205RUxIekFRbDlYVzVYZ0NFZ1lPUUYyN0Qvc2NUTlRPQUQ1R0RsUEU0WXFmSnBUWVJKdjB5UTU1MldpTndhVUFHZ2dURDZ3NS9BeG1MWjRPUVQzVElMUC9FS1YwTmRSSytrYkRBMDZ4RURtakhtd1lkYytwVGVZUkNLUlBBcUFvdEF6dzE3WW83K2VoYVhyTmtGeTFoUm8wM3NnQkhicEEvWENvcUY2cTBpbzBqSUNLalh2Q0pWYlJFQzFrRWlvMDdZNytIWHFEY0V4aWRCNzJCaVlzM1NWMHQ3NHgvV2JGc3Qya2tna2tzY0NrRVFpa1FpQUpCS0pSQUFra1Vna0FpQ0pSQ0lSQUVra0Vva0FTQ0tSU0FSQUVvbEVJZ0NTU0NRU0FaQkVJcEVJZ0NRU2lVUUFKSkZJSkFJZ2lVUWlFUUJKSkJLSkFFZ2lrVWdFUUJLSlJDSUFra2drQWlDSlJDSVJBRWtrRW9rQVNDS1JTQVJBRW9sRUlnQ1NTQ1FTQVpCRUlwRUlnQ1FTaVVRQUpKRklKQUlnaVVRaUVRQkpKQkxKNC9YL2hYS3U2Qi9XUW1FQUFBQUFTVVZPUks1Q1lJST0iIC8+PC9zdmc+");
    border-color: rgb(58, 62, 65);
}
.usermenu .menubar:hover {
    background-color: rgba(26, 28, 29, 0.88);
}
.MathJax_Hover_Frame {
    box-shadow: rgb(109, 41, 136) 0px 0px 15px;
    border-color: rgb(86, 29, 129) !important;
}
.MathJax_Menu_Button .MathJax_Hover_Arrow {
    border-color: rgb(72, 78, 81);
    color: rgb(223, 220, 215);
}
.MathJax_Menu_Button .MathJax_Hover_Arrow span {
    background-color: rgb(72, 78, 81);
    border-color: initial;
}
.MathJax_Hover_Arrow:hover {
    color: rgb(232, 230, 227) !important;
    border-color: rgb(62, 68, 70) !important;
}
.MathJax_Hover_Arrow:hover span {
    background-color: rgb(53, 57, 59) !important;
}
#MathJax_About {
    border-color: initial;
    background-color: rgb(43, 47, 49);
    color: rgb(232, 230, 227);
    box-shadow: rgb(96, 104, 108) 0px 10px 20px;
}
#MathJax_About.MathJax_MousePost {
    outline-color: initial;
}
.MathJax_Menu {
    background-color: rgb(24, 26, 27);
    color: rgb(232, 230, 227);
    border-color: rgb(62, 68, 70);
    box-shadow: rgb(96, 104, 108) 0px 10px 20px;
}
.MathJax_MenuItem {
    background-image: initial;
    background-color: transparent;
}
.MathJax_MenuArrow {
    color: rgb(168, 160, 149);
}
.MathJax_MenuActive .MathJax_MenuArrow {
    color: rgb(232, 230, 227);
}
.MathJax_MenuRule {
    border-top-color: rgb(62, 68, 70);
}
.MathJax_MenuDisabled {
    color: rgb(152, 143, 129);
}
.MathJax_MenuActive {
    background-color: rgb(46, 50, 51);
    color: rgb(232, 230, 227);
}
.MathJax_MenuDisabled:focus,
.MathJax_MenuLabel:focus {
    background-color: rgb(37, 40, 42);
}
.MathJax_ContextMenu:focus {
    outline-color: initial;
}
.MathJax_ContextMenu .MathJax_MenuItem:focus {
    outline-color: initial;
}
.MathJax_MenuClose {
    border-color: rgb(72, 78, 81);
    color: rgb(223, 220, 215);
}
.MathJax_MenuClose span {
    background-color: rgb(72, 78, 81);
    border-color: initial;
}
.MathJax_MenuClose:hover {
    color: rgb(232, 230, 227) !important;
    border-color: rgb(62, 68, 70) !important;
}
.MathJax_MenuClose:hover span {
    background-color: rgb(53, 57, 59) !important;
}
.MathJax_MenuClose:hover:focus {
    outline-color: initial;
}
.MathJax_Preview .MJXf-math {
    color: inherit !important;
}
.MJX_Assistive_MathML {
    border-color: initial !important;
}
#MathJax_Zoom {
    background-color: rgb(32, 35, 37);
    border-color: rgb(140, 130, 115);
    box-shadow: rgb(72, 78, 81) 5px 5px 15px;
}
#MathJax_ZoomOverlay {
    border-color: initial;
    background-color: rgb(24, 26, 27);
}
#MathJax_ZoomEventTrap {
    border-color: initial;
    background-color: rgb(24, 26, 27);
}
.MathJax_Preview {
    color: rgb(157, 148, 136);
}
#MathJax_Message {
    background-color: rgb(38, 41, 43);
    border-color: rgb(78, 84, 88);
    color: rgb(232, 230, 227);
}
#MathJax_MSIE_Frame {
    border-color: initial;
}
.MathJax_Error {
    color: rgb(255, 61, 61);
}
.MJXp-merror {
    background-color: rgb(92, 92, 0);
    color: rgb(255, 61, 61);
    border-color: rgb(194, 0, 0);
}
.MathJax_PHTML .noError {
    color: rgb(232, 230, 227);
    border-color: initial;
}

/* Override Style */
.vimvixen-hint {
    background-color: #7b5300 !important;
    border-color: #d8b013 !important;
    color: #f3e8c8 !important;
}
::placeholder {
    opacity: 0.5 !important;
}
#edge-translate-panel-body,
.MuiTypography-body1 {
    color: var(--darkreader-neutral-text) !important;
}
gr-main-header {
    background-color: #0f3a48 !important;
}
.tou-z65h9k,
.tou-mignzq,
.tou-1b6i2ox,
.tou-lnqlqk {
    background-color: var(--darkreader-neutral-background) !important;
}
.tou-75mvi {
    background-color: #032029 !important;
}
.tou-ta9e87,
.tou-1w3fhi0,
.tou-1b8t2us,
.tou-py7lfi,
.tou-1lpmd9d,
.tou-1frrtv8,
.tou-17ezmgn {
    background-color: #0a0a0a !important;
}
.tou-uknfeu {
    background-color: #231603 !important;
}
.tou-6i3zyv {
    background-color: #19576c !important;
}
embed[type="application/pdf"][src="about:blank"] { filter: invert(100%) contrast(90%); }
`;
}