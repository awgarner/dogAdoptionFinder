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
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6ImUwNzUyN2QyZWFjNWE3OWY0YWE0YWVlMTYzYTVhNWVlNWYwYzAxNmMwYTVmNjIzOWM0MmI1NDRlYWRiMjNjZDk1MzU4ZDY1ZTg5ZWU1ZWU2IiwiaWF0IjoxNjQ5MTA1OTg0LCJuYmYiOjE2NDkxMDU5ODQsImV4cCI6MTY0OTEwOTU4NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.j-SHozK-so8_3Jqwk5q3nETHeLPNtPJa8Oy43geY_-kl-Ui3vZj-UtSbaMALAVy-uMcXFVRBoyGr4TIEXZUQDfwUUj-_1ksxbD4PqgCzmEORVLHNJoLgkeybcgNK4R4Rxp0yrvHXAZ3oTVQgchIvoTsKymPGHkQGjV8dtBQ10BX0-b85A3sklM6lVQ2vA2w6V0LOBSayUmEb0xUoOI-2lsOdTwamhg6_wpcw5zKDbzPTq3vO2Pil5Ymewf3Eb8116jsD7NQ84lW8fJ5zKAJAzf94tBlAkoCLcCrDQcnAz2fWiJM1ipGIpSDoqfIoSbpgQbYv-mWPR2krP6ja051Clg" })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
  
    });
}

//getApi();





