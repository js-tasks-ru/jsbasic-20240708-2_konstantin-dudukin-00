function initCarousel() {
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');

  const carousel = document.querySelector('.carousel');
  const carouselInner = carousel.querySelector('.carousel__inner');
  const carouselItems = carousel.querySelectorAll('.carousel__slide');


  let width = carouselItems[0].offsetWidth;
  let currentSlideIndex = 0;
  arrowLeft.style.display = 'none';
  
  
  function updateArrows() {
    if (currentSlideIndex === 0) {
        arrowLeft.style.display = 'none';
    } else {
        arrowLeft.style.display = ''; 
    }

    if (currentSlideIndex === carouselItems.length - 1) {
        arrowRight.style.display = 'none'; 
    } else {
        arrowRight.style.display = ''; 
    }
}

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${width * currentSlideIndex}px)`;
    updateArrows(); 
}

arrowRight.addEventListener('click', () => {
    if (currentSlideIndex < carouselItems.length - 1) {
        currentSlideIndex++;
        updateCarousel();
    }
});

arrowLeft.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateCarousel();
    }
});

updateArrows();

}