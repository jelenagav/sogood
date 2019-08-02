
const items = document.querySelectorAll('.slider');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
  // items[count].classList.remove('active');
  // items[count].className.replace(/\bactive\b/g, " ").trim();
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
  // items[count].classList.remove('active');
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

// -------

