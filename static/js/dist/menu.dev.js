"use strict";

var menu_is_open = Boolean(document.querySelector('.open-menu'));
var body = document.querySelector('body');
var content = document.querySelector('.content');

if (menu_is_open) {
  body.classList.add('hidden-body');
  content.classList.add('with-shadow');
}