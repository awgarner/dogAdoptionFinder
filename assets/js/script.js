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

  console.log(dogAge,dogSize,dogBreed,dogGender,dogLocation)
}



let getApi = function() {
  fetch(requestUrl, { 
    method: "GET", 
    headers: new Headers({
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6IjA4ZjFjOTJjYWMwMWVmNzZkZDViNDNkODNhOTYzODVhM2E5OWU0NDdlOWI1OWZlMTM4NTIyZmQxZDc5OTgwMGU4ZmFiZGQ3ZWMzNWNjMjI1IiwiaWF0IjoxNjQ3OTkxNTcwLCJuYmYiOjE2NDc5OTE1NzAsImV4cCI6MTY0Nzk5NTE3MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.u_jfpFaklBrVKfkNy9bBDKZPGQUIhyW9xmJdY5gVLeqwgu6nNcIxyzjahEmn9VZ2Fl6K5bPZ_6TTSU93qCT__2efjLgynXqzZvmnme_QvPcPauUpOwu1yxdYadCC115iLHzE0X_X8EoNhO0NLVQVYZ2MD-7QMT-FHUxkVmHcA0TEGfAnY5llLLAJrI1C4Y_wupH0cBFMleD9g_Gig1Wxn3d5jqsVtNFWbhMmxh_TrEIu1Qbso5YswnHyewRJw2TzgDSZ_7OEcIrLErC59XvPVfRGjgE3afKvBNDrMGGRObVXpikbMmggB0ZK1MvAANzbRV8ksUqkm7JYYOPhKHNUiA" })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
  
    });
}

//getApi();





