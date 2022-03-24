//var dogId = 55061211

function getDogId() {
  var string = document.location.search;
  var dogId = string.split("=")[1];
  console.log(dogId)
  getAdoptionInfo(dogId)
}

function getAdoptionInfo(dogId) {

  var requestUrl = "https://api.petfinder.com/v2/animals/" + dogId;

  fetch(requestUrl, { 
    method: "GET", 
    headers: new Headers({
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6IjdiM2I3YjRjMjhmNTZkMTU0MWFhOTRhMjRlN2IwMzkwODVmNTU0MzZkMDQyNDRkNTdmNzgwNDdlYTc3NTM0NTRhODcxYTUyNzY5NDFjMjY2IiwiaWF0IjoxNjQ4MDgxNjg4LCJuYmYiOjE2NDgwODE2ODgsImV4cCI6MTY0ODA4NTI4OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.gpBdewdLhaUyaA-iGhOcXWa0LtxdPikVskenl_j_sWShjmYY-bQ7aAMAMIqAz8U5DJXQ89RfUbJVzhK4GLQqlrZdUuA4rwpMRpRoHq3rkf026Kjaie3VoZE8CWpZUzSDYlJhSgaZvu0ZULmjvXDKObL-534nM8xgEG4VNU90iFOBpyi6RWAo0kySkDuwXZcrJuuCrM9DUqRIHRPGCuFv7oc5Uq8c4mRM9-5p4FDuQRatbfls26v7EyHt1RVe8sWwRRk-bQ7O8cBXzI5PiDiYuXdEn6tjOA6ACqZTy1w4SZLhbXweF9zU_1uMEqMpkUZeO9Sirpp15mWmAEhhez-qAQ", 
    })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      displayDogInfo(data);
    });
}

function displayDogInfo(data) {
  var primaryBreed = data.animal.breeds.primary;
  var secondaryBreed = data.animal.breeds.secondary;
  var Breed = document.querySelector("#Breed-info")
  Breed.textContent = primaryBreed + ", " + secondaryBreed;
  var dogAge = data.animal.age;
  document.querySelector("#Age-info").textContent = dogAge;
  var Address = data.animal.contact.address.address1;
  document.querySelector("#address1").textContent = Address;
  var city = data.animal.contact.address.city;
  var state = data.animal.contact.address.state;
  var zip = data.animal.contact.address.postcode;
  document.querySelector("#address2").textContent = city + ", " + state + " " + zip;
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
  
  //getBreedInfo();
  getDogId();
