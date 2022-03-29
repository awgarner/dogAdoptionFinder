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
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6IjVlYjNiZDBhZGYzY2YxYWZlNWFkYTFjZWIwN2Y1NjAxNDQzMTQzZmE0NGJhOTdlNGY2MTAxY2JkNjMyODI0MWE5NzBkNTQ3Y2UyNDRlYmIwIiwiaWF0IjoxNjQ4NTEwMzY5LCJuYmYiOjE2NDg1MTAzNjksImV4cCI6MTY0ODUxMzk2OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.TehkBdzakCfDaz6ZIzKa6qtL_itP-nJYvsmbb_Lmn08X3sYG0E7D0uftb8-Omg2qWkkTSC7ThyLzQAFhxNrcPPmR9uRfEvUU6DqxtEx7NFONSSAiMbYf9VCj-tnmSTxdU9Xh88wTTj155fAOXqQu8Jb8dcVfs8DsZ6L4an8NkVYk7DTMZoyZNIirWipZ6ZkiYkQq8jWdb8SN_ky_f3_OnRAkkU1o_LaryiASguA_iH7DgBIQSHIxLHDH6EXCKZ9hNbvXDkqVvJ8m0QHUU2qlzRLSJvbnvJQ69iSX1OYI4lePOmNR7nhRHjHtVZjLTUrI2Tg2-xndU2P38v_kXbxOeg", 
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
