'use strict';
console.log('Hello');

// Implementing mobile navigation

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
console.log(headerEl);

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});
