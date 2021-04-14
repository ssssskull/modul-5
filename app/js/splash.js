const splash = document.querySelector(".splash");
// DOMcontentLoaded -- affyrer funktionen når DOMmen er færdig med at loade
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    console.log("DOM fully loaded and parsed");
    splash.classList.add("display-none");
  }, 2000);
});
