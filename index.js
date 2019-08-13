//nav


$(document).ready(function(){
  $('#menu-wrapper__icon').click(function(){
    $(this).toggleClass('open');
    $(".overlay, .overlay a").toggleClass("open");
  });

  $('.overlay a').on("click", function() {
    $('#menu-wrapper__icon').click();
  });

});

// animate on scroll
AOS.init();

AOS.init({
  disable: 'mobile',
  duration: 800,
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

//swing animation -- fix cross browser issue
$(document).ready(function() {

    $('.flex-container__content').hover(function() {
      $('.flex-container__img > img').addClass('swing');
    });

    $('.flex-container__img > img').bind('webkitAnimationEnd mozAnimationEnd animationEnd', function() {
      $(this).removeClass('swing');
    });

});

//parallax cursor follow
const scene = document.getElementById('scene')

const parallaxInstance = new Parallax(scene, {
  relativeInput:true,
  originX:-1,
  originY:0.5,
  limitY: 50,
  limitX: 50,
  frictionX: .1,
  frictionY: .1
});


