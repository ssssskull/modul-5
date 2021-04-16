const textContainer = document.querySelector(".fade-in");
const splash = document.querySelector(".splash");

const udtalelserArray = [
  "Det så godt",
  "Hihi det flot!",
  "Det var hårdt!",
  "Tjooooo!",
  "Hhihiiihi",
];

const random = Math.floor(Math.random() * udtalelserArray.length);

textContainer.innerHTML = udtalelserArray[random];
// DOMcontentLoaded -- affyrer funktionen når DOMmen er færdig med at loade
window.addEventListener("DOMContentLoaded", function () {
  body.style.overflow = "hidden";
  setTimeout(function () {
    splash.classList.add("display-none");
    body.style.overflow = "auto";
  }, 1500);
});
