//console.log
console.log("header +5\n preview +9\n steps +8\ndestinations +8\nstories +9\nfooter+5")

// mobail-menu
let menuBtn = document.querySelector('.button-burger');
let menu = document.querySelector('.header__mobail-menu');
let menuClose = document.querySelector('.button-close')
menuBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
})

menuClose.addEventListener('click', function () {
  menu.classList.remove('active');
})
