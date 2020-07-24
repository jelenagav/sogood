//Parallax
// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();
//   $(".section-1, nav, .img-holder > img").css("transform","translateY(" +  (scroll/4)  + "px)");
// });


//nav
$(document).ready(function(){
  $('.menu__icon').click(function(){
    $(this).toggleClass('open');
    $(".menu__overlay, .menu__overlay a").toggleClass("open");
  });

  $('.menu__overlay a').on("click", function() {
    $('.menu__icon').click();
  });

});

// animate on scroll
AOS.init();

AOS.init({
  disable: 'mobile',
  // duration: 800,
  mirror: false,
  easing: 'ease-in-out'
  // once: true,
});

// slider
const items = document.querySelectorAll('.slider');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
  items[count].className = items[count].className.replace(/\bslider--active\b/g, " ").trim();

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].className += " slider--active";
  console.log(count);
}

function showPreviousItem() {
  items[count].className = items[count].className.replace(/\bslider--active\b/g, " ").trim();

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].className += " slider--active";
  console.log(count);
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);

//trigger swing animation -- fix cross browser
$(document).ready(function() {

    $('.flex-container__content, .flex-container__img').hover(function() {
      $('.flex-container__img > img').addClass('swing');
    });

    $('.flex-container__img > img').bind('webkitAnimationEnd mozAnimationEnd animationEnd', function() {
      $(this).removeClass('swing');
    });

});

// $(document).ready(function() {

//     $('.img-holder ').hover(function() {
//       $('.img-holder ').addClass('swing');
//     });

//     $('.img-holder ').bind('webkitAnimationEnd mozAnimationEnd animationEnd', function() {
//       $(this).removeClass('swing');
//     });

// });

//parallax cursor follow
const scene = document.getElementById('scene')

const parallaxInstance = new Parallax(scene, {
  relativeInput:true,
  originX:-1,
  originY:0.5,
  limitY: 10,
  limitX: 25,
  frictionX: .1,
  frictionY: .05
});


