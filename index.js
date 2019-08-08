// animate on scroll
AOS.init();

AOS.init({
  disable: 'mobile',
  duration: 800,
  mirror: false,
  easing: 'ease-in-out'
  // once: true,
  // easing: 'ease-out-back'
});

// slider
const items = document.querySelectorAll('.slider');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
  items[count].className = items[count].className.replace(/\bactive\b/g, " ").trim();

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].className += " active";
  console.log(count);
}

function showPreviousItem() {
  items[count].className = items[count].className.replace(/\bactive\b/g, " ").trim();

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].className += " active";
  console.log(count);
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);

//swing animation
$(document).ready(function() {

    $('.flex-container__content').hover(function() {
      $('.flex-container__img > img').addClass('swing');
    });

    $('.flex-container__img > img').bind('webkitAnimationEnd mozAnimationEnd animationEnd', function() {
      $(this).removeClass('swing');
    });

});
const scene = document.getElementById('scene')

const parallaxInstance = new Parallax(scene, {
  // hoverOnly:true,
  relativeInput:true,
  originX:-1,
  originY:0.5,
  limitY: 50,
  limitX: 50,
  frictionX: .1,
  frictionY: .1
});
