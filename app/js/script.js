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

/* Skift tekst i udtalelser */

const arrowRight = document.querySelector(".right")
const arrowLeft = document.querySelector(".left")
let udtalelser = document.querySelector(".p-udtalelser");
let navn = document.querySelector(".navn")
let by = document.querySelector(".by")
let andreUdtalelser = ["lorem", "ipsum", "dolor", "sit", "amet"];
let andreNavne = ["Maria, 23", "Carsten, 59", "Sille, 19", "Berit, 43", "Emil, 25"]
let andreByer = ["Odense", "Aabenraa", "Esbjerg", "Fredericia", "Kolding"]
let lastElementUdtalelser = andreUdtalelser[andreUdtalelser.length - 1];
let counter = 2;
let arrayLength = andreUdtalelser.length - 1;

arrowRight.addEventListener("click", handleClickRight)
arrowLeft.addEventListener("click", handleClickLeft)

console.log(arrowLeft)

function handleClickRight() {
  if(counter === arrayLength) {
    counter = 2;
    }
    else {
        counter++;  
    }
    udtalelser.innerHTML = andreUdtalelser[counter];
    navn.innerHTML = andreNavne[counter];
    by.innerHTML = andreByer[counter];

    udtalelser.classList.add("animation")
    navn.classList.add("animation")
    by.classList.add("animation")

    arrowLeft.classList.remove("hidden")

    if(counter === 4) {
      arrowRight.classList.add("hidden")
    }

    function fadeIn() {
      var fade = document.getElementById("body");
      var opacity = 0;
      var intervalID = setInterval(function() {

          if (opacity < 1) {
              opacity = opacity + 0.1
              fade.style.opacity = opacity;
          } else {
              clearInterval(intervalID);
          }
      }, 200);
  }
  }



  function handleClickLeft() {

  //Virker bedst so far
  
    if(lastElementUdtalelser === arrayLength) { 
      counter = 0;
      }
      else if(counter >= 0) {
        counter--;  
      }
        
      udtalelser.innerHTML = andreUdtalelser[counter];
      navn.innerHTML = andreNavne[counter];
      by.innerHTML = andreByer[counter];

    if(counter < 4) {
      arrowRight.classList.remove("hidden")
    }

    if(counter === 0) {
      arrowLeft.classList.add("hidden")
    }
  }