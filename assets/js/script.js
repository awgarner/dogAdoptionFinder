let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", captureInputs);

function captureInputs(event) {
  event.preventDefault();
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



let getApi = function() {
  fetch(requestUrl, { 
    method: "GET", 
    headers: new Headers({
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6ImM1ZDBhZmE1ZjEzOTg5OWViOGEzOTg0NDljZWYwZjhjZTllNGE0NTJkMjhlNjgyOWRmY2FjM2QxNGQ5ZDM5YzU4NTNiOTY5NTEzYmFkYjgyIiwiaWF0IjoxNjQ4ODU5NDg4LCJuYmYiOjE2NDg4NTk0ODgsImV4cCI6MTY0ODg2MzA4OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.if1XUIurlppcsdWdPhZCk7XYGdcSNQMUToinBwcrWMUzN7IG1KuSG6PmFE7QJIZaBQ2LlSEXP9nd8fDhfreKnZfjx-oaygzUEv_L7OVGnfYZY8Efj8NMwm0Q23fMpg_B2FRoxRnA7W1iDU2ZeFqmK50fR_ukhLEIL9jllFbz3dfcXkjI71KooalBfZJkZ8U_6YS1Ng5lObO9z9hD9PSYB5bQZcdhpbeVXfgmQ5RmP220LsO8q4vG-Ba_PJmmrHIBhZrLrWcaivYa0xZEclWnuQYeHY9KzfiqWUFhaoBquJaFY9bT8UvauNNxx2440dPT3eGO1qHZdctyW53rF2khJg" })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
  
    });
}

//getApi();





