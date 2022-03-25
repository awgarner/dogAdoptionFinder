let submitBtn = document.getElementById("submitBtn");

document.getElementById("submitBtn").addEventListener("click", generateForm);

function generateForm() {
  let dogAge = document.querySelector("#dogAge").value;
  let dogSize = document.querySelector("#dogSize").value;
  let dogBreed = document.querySelector("#dogBreed").value;
  let dogGender = document.querySelector("#dogGender").value;
  let dogLocation = document.querySelector("#dogLocation").value;
  
//stringify object and store
localStorage.setItem('dogAge', JSON.stringify(dogAge)); 
localStorage.setItem('dogSize', JSON.stringify(dogSize));
localStorage.setItem('dogBreed', JSON.stringify(dogBreed));
localStorage.setItem('dogGender', JSON.stringify(dogGender)); 
localStorage.setItem('dogLocation', JSON.stringify(dogLocation)); 


//retrieve the object
var retrieveddogAge = JSON.parse(localStorage.getItem('dogAge')); 
var retrieveddogSize = JSON.parse(localStorage.getItem('dogSize')); 
var retrieveddogBreed = JSON.parse(localStorage.getItem('dogBreed')); 
var retrieveddogGender = JSON.parse(localStorage.getItem('dogGender')); 
var retrieveddogLocation = JSON.parse(localStorage.getItem('dogLocation')); 


window.location="./adoptable-dogs.html"

}









