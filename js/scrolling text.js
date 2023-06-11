"use strict";

var indexValue_text = 1;
showText(indexValue_text);
function btm_slide_text(ee){showText(indexValue_text = ee);}
function side_slide_text(ee){showText(indexValue_text += ee);}
function showText(ee){
var i_text;
const div = document.querySelectorAll('div.extra');
const slider_text = document.querySelectorAll('.btm-slides_1 span');
if(ee > div.length){indexValue_text = 1}
if(ee < 1){indexValue_text = div.length}
for(i_text = 0; i_text < div.length; i_text++){
div[i_text].style.display = "none";
}
for(i_text = 0; i_text < slider_text.length; i_text++){
slider_text[i_text].style.background = "#2B333E";
}
div[indexValue_text-1].style.display = "block";
slider_text[indexValue_text-1].style.background = "red";
}

$(function() {
var interval = setInterval(function(){
$(".pokazatel-snimka_1.right_1").click();
}, 4000);
$(".btm-slides_1 span, .pokazatel-snimka.left_1").click(function(){
clearInterval(interval);
});
});
