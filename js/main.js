const menuIcon = document.querySelector('.header__burger');
const menu = document.querySelector('.menu__list');

menuIcon.addEventListener('click', function() {
  menu.classList.toggle('header-active');

  const spans = menuIcon.querySelectorAll('span');

  if (menu.classList.contains('header-active')) {
    spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Получить модальное окно и кнопку открытия
var modal = document.getElementById("modal");
var btn = document.getElementById("openModal");

// Получить элемент закрытия
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, открыть модальное окно
btn.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на крестик, закрыть модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь кликает за пределами модального окна, закрыть его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}