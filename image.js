const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let index = 0;
    let autoSlide;

    function showSlide(i) {
        index = (i + slide.length) % slide.length;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function startAutoSlide() {
        autoSlide = setInterval(() => showSlide(index + 1), 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(index - 1);
        startAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(index + 1);
        startAutoSlide();
    });

    slides.addEventListener('mouseover', stopAutoSlide);
    slides.addEventListener('mouseout', startAutoSlide);

    startAutoSlide();
