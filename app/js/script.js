"use strict";

// Daniel

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

// Jakob

// Her bruger vi en queryselector der returnerer alle vores links som en nodelist.
// Den returnerer alle elementer med links klassen.
const links = document.querySelectorAll(".links");

// Derefter returnerer vi alle elementer med sektion tags of laver nodelisten om til en array
// Så vi kan benytte de metoder array har, som splice.
const sections = Array.from(document.querySelectorAll("section"));

// Splice fjernen et specifikt element, og den har to parametre:
// Den første parameter er index af det element vi vil fjerne
// Den anden er antallet af elementer der skal fjernes

// Vi fjerner det element, fordi den sektion ikke er en del af navigationen
// og ved at inkludere det ville der have været 1 for mange sektioner ift. links.
sections.splice(2, 1);

// Vi opretter vores funktion ved "Function declaration".
// Den er en funktiontype der "loader" før enhver kode bliver executet
function changeLinkState() {
  // Vi definerer en ES6 variabel let, som har en block scope (dvs.
  // kun mellem {}'ene). Den gemmer vores section arrays længde
  // i en variabel ved length metoden.
  let index = sections.length;

  //her har vi vores while loop hvor
  // Vi decrementer vores index med hver iteration,
  // og og sammenligner window objektets y position + 90 med y positionen af den aktuelle sektion
  // vores loop stopper når window.scrollY + 90 < sections[index].offsetTop er falsk
  // hvor indexen forbliver den sidste tjekket værdi
  while (--index && window.scrollY + 90 < sections[index].offsetTop) {}

  // Herefter fjerner vi aktiv klass fra alle elementer med en foreach hvor vi passer ind vores links nodelist
  links.forEach((link) => link.classList.remove("active"));

  // og tilføjer aktiv klassen til den aktuelle array (link) element
  links[index].classList.add("active");
}

// Vores JS fil er defer, så den kører efter DOM'en er færdig med at bygge.
// Derefter kalder vi vores funktion her, så den sætter aktiv klass på
// "forside sektionen"
changeLinkState();

// Derefter tilføjer vi en eventlistener metode til window objektet.
// Her er der 2 parametre, typen af eventet && funktionen der skal affyres
// Normalt man ville skrive () efter funktionens navn, men her behøver vi ikke da
// det er vores EventListener der bestemmer hvornår funktionen skal køre.
// I dette tilfælde er vores event type scroll - dvs. funktionen
// kører hver gang brugeren scroller
window.addEventListener("scroll", changeLinkState);
