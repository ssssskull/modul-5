"use strict";
// Tharshika
// ------- Splash screen
const textContainer = document.querySelector(".fade-in");
const splash = document.querySelector(".splash");
const body = document.querySelector("body");

// DOMcontentLoaded -- affyrer funktionen når DOMmen er færdig med at loade
window.addEventListener("DOMContentLoaded", function () {
  body.style.overflow = "hidden";
  setTimeout(function () {
    splash.classList.add("display-none");
    body.style.overflow = "auto";
  }, 1500);
});

// Daniel
// ------- Hamburger menu

const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");

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

// Daniel
// ------- Hide on scroll

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

// Frederikke
// ------- Udtalelser

const arrowRight = document.querySelector(".right");
const arrowLeft = document.querySelector(".left");
let udtalelser = document.querySelector(".p-udtalelser");
let navn = document.querySelector(".navn");
let by = document.querySelector(".by");
let andreUdtalelser = [
  "Jeg blev glad for at se, at man kunne selvhenvende sig til et forløb hos region syddanmark. Forløbet har hjulpet mig med at tale om emnet på en god måde.",
  "Jeg havde ikke store forventninger til forløbet, men det overraskede mig, at jeg blev taget seriøst.",
  "Jeg har aldrig været god til at snakke om tingene, men forløbet fik mig til at føle mig tryg, når jeg snakkede om mine selvmordstanker.",
  "Forløbet har hjulpet mig med at håndtere mine selvmordstanker, som kommer når jeg bliver presset.",
  "Dette forløb har givet mig lysten til at leve samtidig med, at mine ønsker blev accepteret.",
];
let andreNavne = [
  "Maria, 23",
  "Carsten, 59",
  "Sille, 19",
  "Berit, 43",
  "Emil, 25",
];
let andreByer = ["Odense", "Aabenraa", "Esbjerg", "Fredericia", "Kolding"];
let counter = 2;

arrowRight.addEventListener("click", handleClickRight);
arrowLeft.addEventListener("click", handleClickLeft);

function handleClickRight() {
  if (counter == andreUdtalelser.length - 1) {
    counter = 2;
  } else {
    counter++;
  }
  udtalelser.innerHTML = andreUdtalelser[counter];
  navn.innerHTML = andreNavne[counter];
  by.innerHTML = andreByer[counter];

  arrowLeft.classList.remove("hidden");

  if (counter == 4) {
    arrowRight.classList.add("hidden");
  }
}

function handleClickLeft() {
  if ("test" == "hest") {
    counter = 0;
  } else if (counter >= 0) {
    counter--;
  }

  udtalelser.innerHTML = andreUdtalelser[counter];
  navn.innerHTML = andreNavne[counter];
  by.innerHTML = andreByer[counter];

  if (counter < 4) {
    arrowRight.classList.remove("hidden");
  }

  if (counter == 0) {
    arrowLeft.classList.add("hidden");
  }
}

let i = 0;

for (i = 0; i < 1; i++) {
  console.log("Hej smukke");
}

// Jakob
// ------- Aktiv link navigation

const links = document.querySelectorAll(".links");
const sections = Array.from(document.querySelectorAll("section"));
sections.pop();
sections.splice(2, 1);

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 90 < sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);
