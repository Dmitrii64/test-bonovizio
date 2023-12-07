//mobile-menu

let burgerButton = document.querySelector(".header__burger");
let menu = document.querySelector(".header__nav");
const body = document.querySelector("body");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle('header__burger--open');
  menu.classList.toggle('header__nav--open');
  body.classList.toggle("no-scroll");
})

//slider

const blogSwiper = new Swiper('.speakers-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,

      pagination: {
        dynamicBullets: false,
      },
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
  },
});

// arrow animation

let speakersBlock = document.querySelector('.speakers');
let speakersBlockPosition = speakersBlock.getBoundingClientRect().top + window.scrollY;
let posterArrow = document.querySelector('.poster__arrow');

posterArrow.addEventListener("click", () => {
  window.scrollTo(0, speakersBlockPosition);
})

//form validation

let form = document.querySelector('.contact__form');
let formFields = form.querySelectorAll('.form-value');
let formValues = {};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  formFields.forEach(field => {
    field.classList.remove('invalid');
    if (field.value) {
      formValues[field.name] = field.value;
    } else {
      formValues[field.name] = null;
      field.classList.add('invalid');
    }
  })
  if (!Object.values(formValues).includes(null)) {
    console.log(formValues);
  }
})