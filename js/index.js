const burger = document.querySelector('.ham');
const body = document.querySelector('body');
const language = document.querySelector('.header__user-language');
const modalBG = document.querySelector('.my-modal.language');
const close = document.querySelector('.show-modal .close');

burger.addEventListener('click', () => {
  body.classList.toggle('show-nav');
});

body.addEventListener('click', (e) => {
  if (
    e.target.matches('.header__user-language') ||
    e.target.matches('.header__user-language svg') ||
    e.target.matches('.my-modal-footer button') ||
    e.target.matches('.my-modal.language')
  ) {
    body.classList.toggle('show-modal');
  }

  if (e.target.matches('.my-close path')) {
    body.classList.remove('show-modal');
  }
});

var swiper = new Swiper('.mySwiper-announcements', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.announcements-swiper-button-next',
    prevEl: '.announcements-swiper-button-prev',
  },
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
  centeredSlides: true,
  centeredSlidesBounds: true,
  direction: 'horizontal',
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  watchOverflow: true,
  breakpoints: {
    480: {
      direction: 'vertical',
      slidesPerView: 3,
    },
  },
});
var galleryTop = new Swiper('.gallery-top', {
  direction: 'horizontal',
  spaceBetween: 10,
  navigation: {
    nextEl: '.product-swiper-button-next',
    prevEl: '.product-swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
  keyboard: {
    enabled: true,
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
galleryTop.on('slideChangeTransitionStart', function () {
  galleryThumbs.slideTo(galleryTop.activeIndex);
});
galleryThumbs.on('transitionStart', function () {
  galleryTop.slideTo(galleryThumbs.activeIndex);
});

$('.img_producto_container')
  .on('mouseover', function () {
    $(this)
      .children('.img_producto')
      .css({ transform: 'scale(' + $(this).attr('data-scale') + ')' });
  })
  .on('mouseout', function () {
    $(this).children('.img_producto').css({ transform: 'scale(1)' });
  })
  .on('mousemove', function (e) {
    $(this)
      .children('.img_producto')
      .css({
        'transform-origin':
          ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
          '% ' +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
          '%',
      });
  });

document.querySelector('.stars').addEventListener('click', (e) => {
  document.querySelector('.reviews__number').innerText = `${e.target.value}/0`;
});

document
  .querySelector('.product__frame-content')
  .addEventListener('mousemove', (e) => {
    if (e.target.matches('.product__frame-white')) {
      document.querySelector('.product__img').classList.add('active-white');
      document.querySelector('.product__img').classList.remove('active-black');
    } else if (e.target.matches('.product__frame-black')) {
      document.querySelector('.product__img').classList.add('active-black');
      document.querySelector('.product__img').classList.remove('active-white');
    }
  });

document
  .querySelector('.product__frame-content')
  .addEventListener('mouseout', () => {
    document.querySelector('.product__img').classList.remove('active-black');
    document.querySelector('.product__img').classList.remove('active-white');
  });

document
  .querySelector('.product__frame-content')
  .addEventListener('click', (e) => {
    if (e.target.matches('.product__frame-white')) {
      document
        .querySelector('.product__frame-black')
        .classList.remove('active');
      e.target.classList.add('active');
    }
    if (e.target.matches('.product__frame-black')) {
      document
        .querySelector('.product__frame-white')
        .classList.remove('active');
      e.target.classList.add('active');
    }
  });

$('.moreless-button').click(function () {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == 'Read more') {
    $(this).text('Read less');
  } else {
    $(this).text('Read more');
  }
});

sessionStorage.setItem('added', 0);
var status_add = sessionStorage.getItem('added');
$('.list_add-review-cta').click(function () {
  sessionStorage.setItem('added', 1);
  console.log(status_add);
  let username = document.getElementById('review-username').value;
  let message = document.getElementById('rewiew_message').value;
  let userimage = $('#review-userimage').val();
  $('.main_reviews-container').append(
    '<div class="border py-3 my-2 border-dark rounded faq_inner container"><div class="accordian-link d-flex align-items-center pointer py-2"><i class="fa-solid fa-face-smile fa-2xl"></i><h4 class="reveiew_user_name ps-3">' +
      username +
      '</h4></div><p class="review_answer">' +
      message +
      '</p></div>'
  );
  clearvalues();
});
function clearvalues() {
  document.getElementById('review-username').value = '';
  document.getElementById('rewiew_message').value = '';
  $('#review-userimage').val('');
}
