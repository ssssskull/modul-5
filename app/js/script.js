"use strict";

const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Luk Hamburger Menu
    header.classList.remove("open");
    body.style.overflow = "auto";
  } else {
    // Åben Hamburger Menu
    header.classList.add("open");
    body.style.overflow = "hidden";
  }
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = `-${header.clientHeight}px`;
  }
  prevScrollpos = currentScrollPos;
};

/* Toggle tba-class */

// const items = document.querySelectorAll(".item")

// function handleClick(_e) {
//   items.classList.remove("tbr")
//   items.classList.add("tba")
// }


// const udtalelser = document.querySelectorAll(".udtalelsernav")

// udtalelser.forEach(udtalelsernav => udtalelsernav.addEventListener("click", handleClick));
// const udtalelser = Array.from(document.querySelectorAll(".item"));
// for(let i = 0; i < udtalelser.length; i++) {

// }




// function toggleCheckedbox() {
//   var checkedBox = document.getElementsByClassName("item");
//   checkedBox[0].classList.toggle("checkedbox")
// }

/* SKAL MÅSKE BRUGES

const udtalelser = Array.from(document.querySelectorAll(".udtalelsernav"));



const handleClick = (e) => {
  udtalelser.forEach(node => {
    node.classList.remove('tba');
  });
  e.currentTarget.classList.add('tba');
}

udtalelser.forEach(node => {
  node.addEventListener('click', handleClick)
}); 

*/

// udtalelser.forEach(udtalelsernav => udtalelsernav.addEventListener("click", handleClick));

// function handleClick(e) {
//   console.log(e.currentTarget)
//   e.currentTarget.classList.add("tba");
// };

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  // Update css classes for gallery
  updateGallery() {
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i+1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState(direction) {

    if (direction.className == 'gallery-controls-previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    
    this.updateGallery();
  }

  // Construct the carousel navigation
  // setNav() {
    // galleryContainer.appendChild(document.createElement('ul')).className = 'gallery-nav';

    // this.carouselArray.forEach(item => {
    //   const nav = galleryContainer.lastElementChild;
    //   nav.appendChild(document.createElement('li'));
    // }); 
  // }s

  // Construct the carousel controls
  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;

      document.querySelector(`.gallery-controls-${control}`).innerText = control;
    });
  }
 
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();

        if (control.className == 'gallery-controls-add') {
          const newItem = document.createElement('img');
          const latestItem = this.carouselArray.length;
          const latestIndex = this.carouselArray.findIndex(item => item.getAttribute('data-index') == this.carouselArray.length)+1;

          // Assign the necessary properties for new gallery item
          Object.assign(newItem,{
            className: 'gallery-item',
            src: `http://fakeimg.pl/300/?text=${this.carouselArray.length+1}`
          });
          newItem.setAttribute('data-index', this.carouselArray.length+1);

          // Then add it to the carouselArray and update the gallery
          this.carouselArray.splice(latestIndex, 0, newItem);
          document.querySelector(`[data-index="${latestItem}"]`).after(newItem);
          this.updateGallery();

        } else {
          this.setCurrentState(control);
        }

      });
    });
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
// exampleCarousel.setNav();
exampleCarousel.useControls();


  
  



  // for (let i = 1; i < boks.length; i++) {
  //     boks[i].classList.add("tba")
  // }

  // boks[1].classList.add("tba")
  // boks[0].classList.remove("tba")


// const boks = Array.from(document.querySelectorAll(".item"));

