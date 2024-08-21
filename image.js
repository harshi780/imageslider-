const slide = document.querySelector('.slide');
const items = document.querySelectorAll('.item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

function showSlide(i) {
    index = (i + items.length) % items.length;
    slide.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => showSlide(index - 1));
nextButton.addEventListener('click', () => showSlide(index + 1));     
