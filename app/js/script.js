"use strict";

const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector("header");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Luk Hamburger Menu
    header.classList.remove("open");
  } else {
    // Åben Hamburger Menu
    header.classList.add("open");
  }
});
