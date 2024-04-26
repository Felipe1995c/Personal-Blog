// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const body = document.querySelector('body');
const headers = document.querySelector('h1');
const link = document.getElementById('email');

// Set default mode to dark
let mode = 'dark-mode';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark-mode') {
    mode = 'light';
    body.setAttribute('class', 'light');
    headers.setAttribute('class', 'light-header');
    link.setAttribute('class', 'link');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark-mode';
    body.setAttribute('class', 'dark-mode');
    headers.setAttribute('class', 'dark-header');
    link.setAttribute('class', 'dark-link');
  }
});