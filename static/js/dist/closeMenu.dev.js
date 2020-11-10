"use strict";

var menu = document.querySelector('.navigation');
var open_menu = document.querySelector('.close-menu');
open_menu.addEventListener("click", function (item) {
  item.target.classList.add('close-menu');
  item.target.classList.remove('open-menu');
});

function openMenu() {
  menu.classList.remove('open');
}