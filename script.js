/*new Swiper('.swiper-container',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    spaceBetween: 30,
   
    breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    
    430: {
      slidesPerView: 2.1,
    },
    
    768: {
      slidesPerView: 3,
    },
    
    1120: {
      slidesPerView: 4,
      
    }
  }
}); */



const toggleButton = document.getElementById('toggleButton');
const toggleIcon = document.getElementById('icon');
const toggleText = document.getElementById('text');


toggleButton.addEventListener('click', () => {
toggleButton.classList.toggle('expanded'); 

  if (toggleButton.classList.contains('expanded')) {
    toggleText.textContent = 'Скрыть';
    toggleIcon.src = 'icon_reverse.svg'; /*почему не работает?*/ 
  } else {
    toggleText.textContent = 'Показать еще';
  }
});



    let swiperInstance = null;

    function toggleSwiper() {
        const isMobile = window.innerWidth <= 767;
        const swiperContainer = document.querySelector('.swiper-container');

        if (!swiperContainer) return;

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
        } else if (!isMobile && swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    }

  
    window.addEventListener('load', toggleSwiper);

  
    window.addEventListener('resize', toggleSwiper);