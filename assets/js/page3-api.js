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
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6ImRhMDEzNzg1ZDg2YWJkYmRlZWYyNTY3MGZmNzZiZDg1OGU5YTE1YmYzZGE0YzAxMjYzM2VhNWMwMWZjY2ZmYTcxZGU4YTI2ZWU4YWI0ZTQyIiwiaWF0IjoxNjQ4MDc3OTE2LCJuYmYiOjE2NDgwNzc5MTYsImV4cCI6MTY0ODA4MTUxNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.ZNZbfHDudLEmx3O8281xfrepnESKr1dMC41JkEO8g_V-DMaMor6_bJEJ_Uig5DUsvsJZ-P7EHB-24MzdRdFRPgcnEEjhP4nvibiUykZvgOcoGivH5XAr9d7qNVpgxXKRJRWWa6tNLG2f5bv9TP3P-pllcahkpuWKY6VbNfiBlQcvRyOsosQ1jK2QIf0KZItYAR0vT2e9HINePb_PPsBL-q5mJuHtAdNBr1k_5z-If0cuMQUfWmfN8I5dwinQukFcawO1NMAElLj9cHvNhjNCrV4PlcipCLlOhI4k2ONIwLJmzlKiyLgtpaHruDbFr-pHp5ErYHsTfQd80m_Fm3z9bQ", 
    })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
}

function displayDogInfo() {
  var primaryBreed = data.animal.breeds.primary;
  var secondaryBreed = data.animal.breeds.secondary;
  var letBreed = document.querySelector("")
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
