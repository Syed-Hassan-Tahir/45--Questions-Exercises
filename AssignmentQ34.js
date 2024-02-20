"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Array of animals with a common characteristic
let animals = ["Dog", "Cat", "Rabbit"];
// Print the names of each animal
console.log("Animal Names:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Print statements about each animal
console.log("\nStatements about Each Animal:");
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}
// Additional sentence expressing a common characteristic
console.log("\nAny of these animals would make a great pet!");
