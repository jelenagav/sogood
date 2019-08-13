//Parallax
// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();
//   $(".section-1, nav, .img-holder > img").css("transform","translateY(" +  (scroll/4)  + "px)");
// });

// Waypoints
$( document ).ready(function() {

  $('.first').waypoint(function(direction) {

    if (direction ==='down') {
      $(".first").addClass('animated fadeInLeft');
    }
    else {
      $(".first").fadeTo(400, 0.0);
      $(".first").removeClass('animated fadeInLeft');

    }
  },{
    offset: '75%'
  });

  $('.second').waypoint(function(direction) {

    if (direction ==='down') {
      $(".second").addClass('animated fadeInRight');
    }
    else {
      $(".second").fadeTo(400, 0.0);
      $(".second").removeClass('animated fadeInRight');

    }
  },{
    offset: '75%'
  });

  $('.third').waypoint(function(direction) {

    if (direction ==='down') {
      $(".third").addClass('animated fadeInUp');
    }
    else {
      $(".third").fadeTo(400, 0.0);
      $(".third").removeClass('animated fadeInUp')

    }
  },{
    offset: '75%'
  });

});
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

//trigger swing animation -- fix cross browser
$(document).ready(function() {

    $('.flex-container__content, .flex-container__img > img').hover(function() {
      $('.flex-container__img > img').addClass('swing');
    });

    $('.flex-container__img > img').bind('webkitAnimationEnd mozAnimationEnd animationEnd', function() {
      $(this).removeClass('swing');
    });

});

// change color s1
// $(document).ready(function(){
//     var scroll_pos = 0;
//     $(document).scroll(function() {
//         scroll_pos = $(this).scrollTop();
//         if(scroll_pos > 250) {
//             $("#section_1").addClass("changeColor");
//         }
//         else {
//             $("#section_1").removeClass("changeColor");
//         }
//     });
// });

//parallax cursor follow
const scene = document.getElementById('scene')

const parallaxInstance = new Parallax(scene, {
  relativeInput:true,
  originX:-1,
  originY:0.5,
  limitY: 30,
  limitX: 30,
  frictionX: .1,
  frictionY: .1
});


