new Swiper('.swiper-container',{
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
});



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
