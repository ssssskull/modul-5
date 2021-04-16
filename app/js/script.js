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
let andreUdtalelser = ["Jeg blev glad for at se, at man kunne selvhenvende sig til et forløb hos region syddanmark. Forløbet har hjulpet mig med at tale om emnet på en god måde.", 
"Jeg havde ikke store forventninger til forløbet, men det overraskede mig, at jeg blev taget seriøst.", 
"Jeg har aldrig været god til at snakke om tingene, men forløbet fik mig til at føle mig tryg, når jeg snakkede om mine selvmordstanker.", 
"Forløbet har hjulpet mig med at håndtere mine selvmordstanker, som kommer når jeg bliver presset.", 
"Dette forløb har givet mig lysten til at leve samtidig med, at mine ønsker blev accepteret."];
let andreNavne = ["Maria, 23", "Carsten, 59", "Sille, 19", "Berit, 43", "Emil, 25"]
let andreByer = ["Odense", "Aabenraa", "Esbjerg", "Fredericia", "Kolding"]
let lastElementUdtalelser = andreUdtalelser[andreUdtalelser.length - 1];
let counter = 2;
let arrayLength = andreUdtalelser.length - 1;

arrowRight.addEventListener("click", handleClickRight)
arrowLeft.addEventListener("click", handleClickLeft)


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

    arrowLeft.classList.remove("hidden")

    if(counter === 4) {
      arrowRight.classList.add("hidden")
    }

      // udtalelser.classList.add("animation") 
      // by.classList.add("animation")
      // navn.classList.add("animation")
  }



  function handleClickLeft() {
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