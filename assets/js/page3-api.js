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
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6ImUwNzUyN2QyZWFjNWE3OWY0YWE0YWVlMTYzYTVhNWVlNWYwYzAxNmMwYTVmNjIzOWM0MmI1NDRlYWRiMjNjZDk1MzU4ZDY1ZTg5ZWU1ZWU2IiwiaWF0IjoxNjQ5MTA1OTg0LCJuYmYiOjE2NDkxMDU5ODQsImV4cCI6MTY0OTEwOTU4NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.j-SHozK-so8_3Jqwk5q3nETHeLPNtPJa8Oy43geY_-kl-Ui3vZj-UtSbaMALAVy-uMcXFVRBoyGr4TIEXZUQDfwUUj-_1ksxbD4PqgCzmEORVLHNJoLgkeybcgNK4R4Rxp0yrvHXAZ3oTVQgchIvoTsKymPGHkQGjV8dtBQ10BX0-b85A3sklM6lVQ2vA2w6V0LOBSayUmEb0xUoOI-2lsOdTwamhg6_wpcw5zKDbzPTq3vO2Pil5Ymewf3Eb8116jsD7NQ84lW8fJ5zKAJAzf94tBlAkoCLcCrDQcnAz2fWiJM1ipGIpSDoqfIoSbpgQbYv-mWPR2krP6ja051Clg", 
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
  //var secondaryBreed = data.animal.breeds.secondary;
  var Breed = document.querySelector("#Breed-info")
  Breed.textContent = primaryBreed
  var dogAge = data.animal.age;
  document.querySelector("#Age-info").textContent = dogAge;
  var Address = data.animal.contact.address.address1;
  document.querySelector("#address1").textContent = Address;
  var city = data.animal.contact.address.city;
  var state = data.animal.contact.address.state;
  var zip = data.animal.contact.address.postcode;
  document.querySelector("#address2").textContent = city + ", " + state + " " + zip;
  var email = data.animal.contact.email;
  document.querySelector("#email").textContent = email;
  var phone = data.animal.contact.phone;
  document.querySelector("#phone").textContent = phone;
  var image = data.animal.photos[0].full;
  document.querySelector("#photo").innerHTML = "<img src='" + image + "' />"
  getBreedInfo(primaryBreed)  
}

//getAdoptionInfo();


function getBreedInfo(breed) {

    var requestUrl = "https://api.thedogapi.com/v1/breeds/search?q="+ breed + "&api_key=52d48759-2a14-4bf6-8ea1-66987356dbfa";
  
    fetch(requestUrl)


      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        let breedName = data[0].name
        var infoContainerEl = document.querySelector(".breed")
        infoContainerEl.textContent = breedName
        let temperament = data[0].temperament
        var temperamentContainer = document.querySelector(".temperament")
        console.log(temperament)
        temperamentContainer.textContent = temperament
        let lifeSpan = data[0].life_span
        var lifeSpanContainer = document.querySelector(".life_span")
        lifeSpanContainer.textContent = lifeSpan

      });
  }
  
  //getBreedInfo();
  getDogId();

  //LOCAL STORAGE IDEA / NOT FOR MVP
  
  //empty array for saved dogs
  let savedDogs =[]
  //container needed to hold dog cards
  let dogContainerEl = document.getElementById("dogCards")

  //itterate api response
  for(i=0; i<savedDogs.length; i++) {
    //button needed
    var saveBtn = document.createElement("button")
    //Need to set inner text of button

    //set button value to current dog
    //needs to be a string. can not set value to an object
    saveBtn.value = JSON.stringify(dogs[i])


    saveBtn.addEventListener("click", function(event){
      event.preventDefault()
      //pushing this dog to array
      //need to parse the buttons value because of using stringify earlier
      savedDogs.push(JSON.parse(event.target.value))
      //saving array to local needs stringify
      localStorage.setItem("savedDogs", JSON.stringify(savedDogs))
    })

    //create other elements and div for dog card
    //append the pieces to dog card

    //then append dog card to page
    dogContainerEl.append(dogCard)
  }
