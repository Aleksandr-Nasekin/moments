"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector('.header-menu'),
    burger = document.querySelector('.header-menu__btn'),
    close = document.querySelector('.header-menu__close');
  burger.addEventListener("click", function () {
    menu.classList.toggle('show');
  });
  close.addEventListener("click", function () {
    menu.classList.toggle('show');
  });
  function smoothScroll(event) {
    event.preventDefault();
    var elementId = event.target.getAttribute("href");
    var elementOffset = document.querySelector(elementId).getBoundingClientRect().top;
    window.scrollBy({
      top: elementOffset,
      behavior: "smooth"
    });
  }
  var btn = document.querySelector('.organization__footer .btn');
  btn.addEventListener('click', smoothScroll);
});