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

/* Toggle checkedbox-class */

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

const udtalelser = document.querySelectorAll(".udtalelsernav");
const boks = Array.from(document.querySelectorAll(".tbr"));
boks.forEach(add)

udtalelser.forEach(udtalelsernav => udtalelsernav.addEventListener("click", add));
for(let i = 0; i < udtalelser.length; i++) {
  boks.classList.add("tba")
}

