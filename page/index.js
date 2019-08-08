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

// swing animation
$(document).ready(function() {

    $('.section-1 > img').hover(function() {
      $(this).addClass('swing');
    });

    $('.section-1 > img').bind('webkitAnimationEnd mozAnimationEnd animationEnd', function() {
      $(this).removeClass('swing');
    });

});

