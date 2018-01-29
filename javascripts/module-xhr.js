
"use strict";

let animal = require("./animal");

let carnivoreDiv = document.getElementById("carnivores");
let herbivoreDiv = document.getElementById("herbivores");

let printCarnivores = function (carnivore) {
    carnivoreDiv.innerHTML += "Carnivores: ";
    carnivore.carnivores.forEach(element => {
        carnivoreDiv.innerHTML += (element.species) + ', ';
    });
};
let printHerbivores = function (herbivore) {
    herbivoreDiv.innerHTML += "Herbivores: ";
    herbivore.herbivores.forEach(element => {
        herbivoreDiv.innerHTML += (element.species) + ', ';
    });
};


animal.loadCarnivores(printCarnivores);
animal.loadHerbivores(printHerbivores);