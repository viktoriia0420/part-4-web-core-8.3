const toggleButton = document.getElementById('toggleButton');
const toggleIcon = document.getElementById('icon');
const toggleText = document.getElementById('text');
const toggleWrapper = document.querySelector('.swiper-wrapper');


toggleButton.addEventListener('click', () => {
toggleButton.classList.toggle('expanded');
toggleWrapper.classList.toggle('all');

  if (toggleButton.classList.contains('expanded')) {
    toggleText.textContent = 'Скрыть';
    toggleIcon.src = 'img/icon_reverse.svg'; 
  } 
  
  else {
    toggleText.textContent = 'Показать еще';
    toggleIcon.src = 'img/icon.svg';
  }
});

  
let swiperInstance = null;
function toggleSwiper() {
    const isMobile = window.innerWidth <= 767;
    const swiperContainer = document.querySelector('.swiper-container');

      if (isMobile && !swiperInstance) {
        swiperInstance = new Swiper('.swiper-container', {
            slidesPerView: 1.3,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                550: {
                  slidesPerView: 2.2,
                  }
            },
            spaceBetween: 30,
        });
      } 
      else if (!isMobile && swiperInstance) {
          swiperInstance.destroy(true, true);
          swiperInstance = null;
      }
}

  
window.addEventListener('load', toggleSwiper);
window.addEventListener('resize', toggleSwiper);