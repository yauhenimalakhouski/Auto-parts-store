"use strict";

const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelectorAll(".jsCloseMenu");
const expandBtn = document.querySelectorAll(".expand-btn");

menuBtn.addEventListener("click", () => {
  
  document.body.classList.toggle('openedMenu');
  
});

expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
  });
});


menuItems.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.body.classList.remove('openedMenu');
  });
});


