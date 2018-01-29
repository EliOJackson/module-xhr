'use strict';

let carnivores = [];
let herbivores = [];


module.exports.loadCarnivores = function (callbackToInvoke) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function () {
    carnivores = JSON.parse(this.responseText);
    callbackToInvoke(carnivores);
  });
  xhr.open("GET", "data/carnivores.json");
  xhr.send();

};
module.exports.loadHerbivores = function (callbackToInvoke) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function () {
    herbivores = JSON.parse(this.responseText);
    callbackToInvoke(herbivores);
  });
  xhr.open("GET", "data/herbivores.json");
  xhr.send();

};


