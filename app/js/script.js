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

const arrows = document.querySelectorAll(".arrow")
let udtalelser = document.querySelector(".p-udtalelser");
let navn = document.querySelector(".navn")
let by = document.querySelector(".by")
let andreUdtalelser = ["lorem", "ipsum", "dolor", "sit", "amet"];
let andreNavne = ["Maria, 23", "Carsten, 59", "Sille, 19", "Berit, 43", "Emil, 25"]
let andreByer = ["Odense", "Aabenraa", "Esbjerg", "Fredericia", "Kolding"]
let counter = 0;
let arrayLength = andreUdtalelser.length - 1;

function handleClick() {
  if(counter === arrayLength){
    counter = 0;
    }
    else {
        counter++;  
    }
    udtalelser.innerHTML = andreUdtalelser[counter];
    navn.innerHTML = andreNavne[counter];
    by.innerHTML = andreByer[counter];
  }



arrows.forEach(arrow => arrow.addEventListener("click", handleClick))