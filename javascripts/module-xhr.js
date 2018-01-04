"use strict";

const animal = require("./animal");

let output = document.getElementById("output");

function showCarnivores(carnivores) {
    // console.log("test");
    for (let i=0; i < carnivores; i++) {
        output.innerHTML += `${carnivores[i]}`;
    }
}

    
animal.loadCarnivores(showCarnivores);



// animal.loadHerbivores(showHerbivores);


