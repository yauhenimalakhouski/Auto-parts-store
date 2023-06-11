"use strict";

var indexValue = 1;
showImg(indexValue);
function btm_slide(e){showImg(indexValue = e);}
function side_slide(e){showImg(indexValue += e);}
function showImg(e){
var i;
const img = document.querySelectorAll('img.extra_2');
const slider = document.querySelectorAll('.btm-slides span');
if(e > img.length){indexValue = 1}
if(e < 1){indexValue = img.length}
for(i = 0; i < img.length; i++){
img[i].style.display = "none";
}
for(i = 0; i < slider.length; i++){
slider[i].style.background = "grey";
}
img[indexValue-1].style.display = "block";
slider[indexValue-1].style.background = "red";
}

$(function() {
var interval = setInterval(function(){
$(".pokazatel-snimka.right").click();
}, 4000);
$(".btm-slides span, .pokazatel-snimka.left").click(function(){
clearInterval(interval);
});
});

