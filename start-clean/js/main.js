const menuBtn = document.querySelector('.menu_btn');
const menuMob = document.querySelector('.header_menu-list');

menuBtn.addEventListener('click', () => {
    menuMob.classList.toggle('menu-open');
});

const swiperOne = new Swiper('.feadback_swiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },
});

const swiperTwo = new Swiper('.certificates_swiper', {

  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    360: {
      slidesPerView: 1,
    },
  },
});
  
const titles = document.querySelectorAll('.accordeon_title');
const contents = document.querySelectorAll('.accordeon_text');

titles.forEach(item => item.addEventListener('click', () => {
  activeContent = document.querySelector('#' + item.dataset.tab);

  if (activeContent.classList.contains('active')) {
    activeContent.classList.remove('active');
    item.classList.remove('active');
    activeContent.style.maxHeight = 0;
  }else{
    contents.forEach(el => {
      el.classList.remove('active');
      el.style.maxHeight = 0;
    });

    titles.forEach(el => el.classList.remove('active'));

    item.classList.add('active');
    activeContent.classList.add('active');
    activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
  }
}))