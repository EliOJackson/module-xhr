"use strict";
let $ = require('jquery');
let herbivores = [];
let carnivores = [];

 module.exports.loadHerbivores = () => {
  $.ajax({
    url: "../data/herbivores.json" 
  })
  .done( (herbivoreData) => {
    herbivores = herbivoreData.herbivores;
    console.log("herbivores plz", herbivores);
  }).fail( (error) => {
    console.log("fail boat", error.statusText);
  });
};

module.exports.loadCarnivores = () => {
  $.ajax({
    url: "../data/carnivores.json" 
  })
  .done( (carnivoreData) => {
    carnivores = carnivoreData.carnivores;
    console.log("carnivores plz", carnivores);
  }).fail( (error) => {
    console.log("fail boat", error.statusText);
  });
};

module.exports.loadHerbivores();
module.exports.loadCarnivores();