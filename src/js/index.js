/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  let who = ["Sergio", "Javi", "Dani", "Sara"];
  let action = [
    "dormía",
    "estaba",
    "montaba en triciclo",
    "perreaba",
    "tomaba unas cañitas"
  ];
  let what = ["en casa", "en la playa", "en el bar"];
  let when = ["a la hora de clase", "en la ITV", "mientras paseaba al gato"];

  return console.log(createExcuse(who, action, what, when));
};

function createExcuse(...a) {
  let excuse = "";
  for (let i = 0; i < a.length; i++) {
    let arr = a[i];
    let palabra = randomText(arr);
    excuse = excuse + " " + palabra;
  }
  return excuse;
}

function randomText(a) {
  let randomNumber = Math.floor(Math.random() * a.length);
  let palabra = a[randomNumber];
  return palabra;
}
