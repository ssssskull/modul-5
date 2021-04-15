const splash = document.querySelector(".splash");

const udtalelserArray = [
  "Det så godt",
  "Hihi det flot!",
  "Det var hårdt!",
  "Tjooooo!",
  "Hhihiiihi",
];

const random = Math.floor(Math.random() * udtalelserArray.length);
console.log(random, udtalelserArray[random]);

// DOMcontentLoaded -- affyrer funktionen når DOMmen er færdig med at loade
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    console.log("DOM fully loaded and parsed");
    splash.classList.add("display-none");
  }, 1500);
});
