"use strict";

var menu = document.querySelector('.navigation');
var close_menu = document.querySelector('.close-menu');
close_menu.addEventListener("click", function (item) {
  item.target.classList.add('open-menu');
  item.target.classList.remove('close-menu');
});

function openMenu() {
  menu.classList.add('open');
}