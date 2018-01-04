"use strict";

let carnivores = [];
let herbivores = [];

let loadCarnivores = function(callback) {
  const loader = new XMLHttpRequest();
  
  loader.open("GET", "data/carnivores.json");
  loader.send();
  
  loader.addEventListener("load", function() {
    carnivores = JSON.parse(this.responseText);
    carnivores = carnivores.species; 
    callback(carnivores);
  });
  
};

let loadHerbivores = function(callback) {
    const loader = new XMLHttpRequest();
    
    loader.open("GET", "data/herbivores.json");
    loader.send();
      
    loader.addEventListener("load", function() {
      herbivores = JSON.parse(this.responseText);
      herbivores = herbivores.species; 
      callback(herbivores);
    });
  };
module.exports = { loadCarnivores, loadHerbivores };