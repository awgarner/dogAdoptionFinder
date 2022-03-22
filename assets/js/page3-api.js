var dogId = 55061211

function getDogId() {
  //var string = document.location;
  //var dogId = string.split("=")[1];
  getAdoptionInfo(dogId)
}

function getAdoptionInfo(dogId) {

  var requestUrl = "https://api.petfinder.com/v2/animals/" + dogId;

  fetch(requestUrl, { 
    method: "GET", 
    headers: new Headers({
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6IjkyOGE5M2M1OWRlNzhiNWY0MTY3YjhiMDYwMGQ3MzE2NzhmODM1ZDViMTBhYzNhNjZhMGE5NDdiNzU2MjBlYTg5NGYwODM2ZjIyOGU3NGZmIiwiaWF0IjoxNjQ3OTA4NjI3LCJuYmYiOjE2NDc5MDg2MjcsImV4cCI6MTY0NzkxMjIyNywic3ViIjoiIiwic2NvcGVzIjpbXX0.W7Otx6ZPOUVfoeygLuQIeUkg6tQZYxj0sgDPrUfIpL8Dg9dvd6ygOcm7Xliqp3sREO2qcDSe0te_bKICFDEd7BjmcKWK3VzP0IzV-PkJUmV-d-apTIPRErw1bSuLL4vzR3SI0eD__lHxw7hJdnrvssEHUUl2oV2ZCVsdkteCtCInYy8xCVy-94d9vtNwHuQqKY5TlXvMyJ8iWdvhjv-ARZIRVZf4HEJUSHVHTEQKKndwIaiisgnpYSjqm7gn8pcNdX2xj6WwMQ-EB4oUvB2x69KnrhQlIRMR8nUklK_xjtv7bv_EMgUJbi-BA1Km1qq1nD3bbmgmXCIu64spbP-dLQ", 
    })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
}

//getAdoptionInfo();


function getBreedInfo() {

    var requestUrl = "https://api.thedogapi.com/v1/breeds/?api_key=52d48759-2a14-4bf6-8ea1-66987356dbfa";
  
    fetch(requestUrl)


      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        let breedName = data[0].name
        var infoContainerEl = document.querySelector(".breed")
        infoContainerEl.textContent = breedName
      });
  }
  
  getBreedInfo();
  //getDogId();
