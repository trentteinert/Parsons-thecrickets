let slideIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length;
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

showSlide(slideIndex);
