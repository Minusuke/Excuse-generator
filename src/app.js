/* eslint-disable */
import "bootstrap";
import "./style.css";


window.onload = function() {
  //write your code here

  window.onload = () => {
    document.querySelector("#butn").addEventListener("click", () => {
      document.queryselector("#excuse").innerHTML = randomNumber;
    })
  };

let generateExcuse = () =>  { 
  let pronoun= ["un", "el", "tu", "mi"]
  let subject = ["depresivo", "Mapache", "borracho", "duende", "marciano"]
  let action = ["Se llevo mi", "tomo mi", "robo mi" ,"mordio mi","puso su"]
  let possetion = [ "tarea", "blackcard", "dinero", "salud mental", "peluche de chilemorron"]
  let where = ["En su casa", "en el peral", "En mi propia casa juan lorenzo", "en internet", "en la plaza"]

  let proIndx = Math.floor(Math.random() * pronounlenght);
  let subIndx = Math.floor(Math.random() * subjectlenght);
  let actIndx = Math.floor(Math.random() * actionlenght);
  let possIndx = Math.floor(Math.random() * possetionlenght);
  let wheIndx = Math.floor(Math.random() * wherelenght);
  
  return pronoun[proIndx] + "" + subject[subIndx]+ "" +action[actIndx]+ "" + possetion[possIndx]+ "" +where[wheIndx];
return " un depresivo se llevo mi salud mental en el peral";
 
};
