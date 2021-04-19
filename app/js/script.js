"use strict";

// Daniel

// ------- Hamburger menu

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

/* Skift tekst i udtalelser */

const arrowRight = document.querySelector(".right");
const arrowLeft = document.querySelector(".left");
let udtalelser = document.querySelector(".p-udtalelser");
let navn = document.querySelector(".navn");
let by = document.querySelector(".by");
let andreUdtalelser = [
  "Jeg blev glad for at se, at man kunne selvhenvende sig til et forløb hos Region Syddanmark. Forløbet har hjulpet mig med at tale om emnet på en god måde.",
  "Jeg havde ikke store forventninger til forløbet, men det overraskede mig, at jeg blev taget seriøst.",
  "Jeg har aldrig været god til at snakke om tingene, men forløbet fik mig til at føle mig tryg, når jeg snakkede om mine selvmordstanker.",
  "Forløbet har hjulpet mig med at håndtere mine selvmordstanker, som kommer når jeg bliver presset.",
  "Dette forløb har givet mig lysten til at leve samtidig med, at mine ønsker blev accepteret.",
];
let andreNavne = [
  "Maria, 23",
  "Carsten, 59",
  "Sille, 23",
  "Berit, 43",
  "Emil, 25",
];
let andreByer = ["Odense", "Aabenraa", "Esbjerg", "Fredericia", "Kolding"];
let lastElementUdtalelser = andreUdtalelser[andreUdtalelser.length - 1];
let counter = 2;
let arrayLength = andreUdtalelser.length - 1;

arrowRight.addEventListener("click", handleClickRight);
arrowLeft.addEventListener("click", handleClickLeft);

function handleClickRight() {
  if (counter === arrayLength) {
    counter = 2;
  } else {
    counter++;
  }
  udtalelser.innerHTML = andreUdtalelser[counter];
  navn.innerHTML = andreNavne[counter];
  by.innerHTML = andreByer[counter];

  arrowLeft.classList.remove("hidden");

  if (counter === 4) {
    arrowRight.classList.add("hidden");
  }

  // udtalelser.classList.add("animation")
  // by.classList.add("animation")
  // navn.classList.add("animation")
}

function handleClickLeft() {
  if (lastElementUdtalelser === arrayLength) {
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

  if (counter === 0) {
    arrowLeft.classList.add("hidden");
  }
}

// Jakob

// Her bruger vi en queryselector der returnerer alle vores links som en nodelist.
// Den returnerer alle elementer med links klassen.
const links = document.querySelectorAll(".links");

// Derefter returnerer vi alle elementer med sektion tags of laver nodelisten om til en array
// Så vi kan benytte de metoder array har, som splice.
const sections = Array.from(document.querySelectorAll("section"));

// Fjerner den sidste element fra arrayet, da der ikke findes en
// footer element i nav, og dermed ville der være 1 for mange sektioner ift links.
sections.pop();

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
