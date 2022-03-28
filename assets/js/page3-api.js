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
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6ImU4ODdmYmI1YzlmMjMxZTMwZjY4OTU2OTk4NzFkOGExMzY0ZWY3OWIwYjg2MDEwMWNlNDE4MTQyZTU4YjFjMTlhODBiODVkOTM1MTM1MjY2IiwiaWF0IjoxNjQ4MzI3MTYyLCJuYmYiOjE2NDgzMjcxNjIsImV4cCI6MTY0ODMzMDc2Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.HpGHNI2A_MrJ5KyeuhFbzcKUX6fRUZ1WEqoogYkFb5vIJIzBprtfObseQdLsGL76qk4_MMEM3NNaBDehH4u9BzOAR7KtfoV26k_9vORkZlqehjGIn0xZpZ6BohNCqKXROZubWoDx1oTaVzea-vsHHLmNevsZGil_fj-EERkEKBNmpWkxeP9FQVUujoq2gMnCXPDMfMfdUvN4Em07dmRFNfQJnGaaGUiaTN1oIHq8Q2MGGM4i2CUqLCU_stvJQ8UkUX4d-qYf-qPk4ZlFCX10R3ssKsr4KFV1Wjnfjxs-oPGmMQ4yHnddF2JtYAPOpX4Xx-pgLn4Vje4FzYMWCzVtbA", 
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
  var image = data.animal.photos[0].full;
  document.querySelector("#photo").innerHTML = "<img src='" + image + "' />"
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
