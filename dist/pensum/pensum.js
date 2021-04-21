/*----------------------
------- Pensum --------
------------------------*/

// ------ Frederikke
// For

let i = 0;

for (i = 0; i < 1; i++) {
  console.log("Hej smukke");
}

// ------ Tharshika

// Array
const pensumArrayTharshika = ["Thomas", "sej", "er han ikke?"];
pensumArrayTharshika.unshift("Hest!");

// Debugging
console.log(pensumArrayTharshika);

// Objekt
const pensumObjektTharshika = {
  by: "Odense",
  cykel: "nej!",
  applewatch: "JAAA",
};
console.log(pensumObjektTharshika);

pensumObjektTharshika.tired = "yes";

console.log(pensumObjektTharshika);

// If else
const x = 2;

if (x === 2) {
  console.log("x er lige med 2");
} else {
  console.log("x ikke er lige med 2");
}

// For loop
for (let i = 0; i < pensumArrayTharshika.length; i++) {
  console.log("Tharshikas forloop!");
}

// ------ Daniel

// Array
const pensumArrayDaniel = ["🚗", "🚓", "🚕"];
pensumArrayDaniel.splice(1, 1);
console.log(pensumArrayDaniel);
// Array er også et objekt, men jeg vælger at lave et alligevel

// Objekt
const pensumObjektDaniel = {
  speed: "fast",
  food: "none",
};

// Debugging
console.log(pensumObjektDaniel);
pensumObjektDaniel.tired = "very :(";
console.log(pensumObjektDaniel);

console.log(pensumArrayDaniel.length);
// For loop

for (let y = 0; y < pensumArrayDaniel.length; y++) {
  console.log("Daniels forloop!");
}

// ------ Jakob

// Objekt
const pensumObjektJakob = {
  PS5: "Scalpers",
  Projekt: "Godt",
  Toast: "God smag",
};
console.log(pensumObjektJakob);

pensumObjektJakob.ownerOfPS5 = "ja";

console.log(pensumObjektJakob);

// If else
const xMan = 7;

if (xMan === 7) {
  console.log("x er lige med 7");
} else {
  console.log("x ikke er lige med 7");
}
