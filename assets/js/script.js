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
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6IjVlYjNiZDBhZGYzY2YxYWZlNWFkYTFjZWIwN2Y1NjAxNDQzMTQzZmE0NGJhOTdlNGY2MTAxY2JkNjMyODI0MWE5NzBkNTQ3Y2UyNDRlYmIwIiwiaWF0IjoxNjQ4NTEwMzY5LCJuYmYiOjE2NDg1MTAzNjksImV4cCI6MTY0ODUxMzk2OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.TehkBdzakCfDaz6ZIzKa6qtL_itP-nJYvsmbb_Lmn08X3sYG0E7D0uftb8-Omg2qWkkTSC7ThyLzQAFhxNrcPPmR9uRfEvUU6DqxtEx7NFONSSAiMbYf9VCj-tnmSTxdU9Xh88wTTj155fAOXqQu8Jb8dcVfs8DsZ6L4an8NkVYk7DTMZoyZNIirWipZ6ZkiYkQq8jWdb8SN_ky_f3_OnRAkkU1o_LaryiASguA_iH7DgBIQSHIxLHDH6EXCKZ9hNbvXDkqVvJ8m0QHUU2qlzRLSJvbnvJQ69iSX1OYI4lePOmNR7nhRHjHtVZjLTUrI2Tg2-xndU2P38v_kXbxOeg" })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
  
    });
}

//getApi();





