"use strict";
let $ = require('jquery');
let herbivores = [];
let carnivores = [];

function loadHerbivores() {
  $.ajax({
    url: "../data/herbivores.json" 
  })
  .done( (herbivoreData) => {
    herbivores = herbivoreData.herbivores;
    console.log("herbivores plz", herbivores);
  }).fail( (error) => {
    console.log("fail boat", error.statusText);
  });
}

loadHerbivores();