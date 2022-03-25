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
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6ImYwZGMwZWRlY2JjMTVkOTljNzkyNmVlZTRlMjNmYjI1YTkzNzU4ZjkwNzIxYmQ5NWVmYmZmNjlkMmExNzQ1YWZjNWVkNGJiNTAxYTJiZThlIiwiaWF0IjoxNjQ4MTY1NTkyLCJuYmYiOjE2NDgxNjU1OTIsImV4cCI6MTY0ODE2OTE5Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.EpdOra8qzASP4CFT-amec46RYhVVJsGevifx23-_vE1ko4TAq34yfF1mmblD83RB4nDyZsdpgR-ELgV6t5f8RcJywgwyuyDs29c-COizPehN2LeUXXV1leSrGhKFbA62Z1aQeHfSwpI24GokaYUgqpL4bCNIuKBdm0y8bb6z9MXgDP5mRzW0BrRViDUMe94gTQJWldImi3-2xjEkdwJdGWAr0eO-03zdLVp-ntJLo3GUZ_by6hFpbvC32b1IZiWxCVfb2qLOzfTWMGC0lY_bFr236KzXV1ph3fTNKAXQYNx-_k5Nx3d7pYmRODQEqR9iJGPpufS2xTFKOyiNPxvBhQ", 
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
  var email = data.animal.contact.email;
  document.querySelector("#email").textContent = email;
  var phone = data.animal.contact.phone;
  document.querySelector("#phone").textContent = phone;
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

  //local storage
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
