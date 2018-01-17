"use strict";

const animal = require('./animal');
const $ = require('jquery');
animal.loadCarnivores(showCarnivores);
animal.loadHerbivores(showHerbivores);

function showCarnivores(carnivores) {
    console.log("test", carnivores);
    $('#carnivore').append(`<b>Carnivores:</b>`);
    $.each(carnivores, (species, animal) => {
        $('#carnivore').append(`<p>${species,animal}</p>`);
    });
    
}
function showHerbivores(herbivores) {
    $('#herbivore').append(`<b>Herbivores:</b>`);
    $.each(herbivores, (species, animal) => {
        $('#herbivore').append(`<p>${species, animal}</p>`);
    });
    
}

