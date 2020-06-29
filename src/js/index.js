/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  let who = [" Sergio", " Javi"];
  let action = [" dormía", " estaba"];
  let what = [" en casa", " en la playa", " poniéndose la mascarilla"];
  let when = [" a la hora de clase"];

  return console.log(createExcuse(who, action, what, when));
};

function createExcuse(a) {
  let excuse = +randomText(a);
  return excuse;
}

function randomText(a) {
  let arrLength = a.length;
  let randomNumber = Math.floor(Math.random() * arrLength);
  let palabra = a[randomNumber];
  return palabra;
}
