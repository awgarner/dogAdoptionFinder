let dogsContainerEl = document.querySelector("#dog-list-container");
let limitWarningEl = document.querySelector("#limit-warning");

// temp search parameters to ensure this code works
let dogAge = "young,adult";
let dogSize = "large";
let dogBreed = "shepherd";
let dogGender = "male,female";
let dogLocation = "43202";

// get list of adoptable dogs that meet user criteria submitted in form on landing page
function getAdoptionList() {

  var requestUrl = "https://api.petfinder.com/v2/animals?type=dog&status=adoptable&limit=30&age=" + dogAge + "&size=" + dogSize + "&breed=" + dogBreed + "&gender=" + dogGender + "&location=" + dogLocation;

  // make request to url
  fetch(requestUrl, { 
    method: "GET", 
    headers: new Headers({
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6ImEwYTY4NDkwYmNkMzZkMjA0NThkYmQ4NTg5NDMxZWU0N2NhZGI5NGNlYmNkZGVmMDJkMmIzN2U1NThmNTk3OGRjMTEyZjE0MWRlZjM5YjVhIiwiaWF0IjoxNjQ3ODczMTE0LCJuYmYiOjE2NDc4NzMxMTQsImV4cCI6MTY0Nzg3NjcxNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.CBn8RxyJxIY__j_XD2Ze-gkyzDsZnY92vMrj9oJ1FWezFqQVHYu5eczSgqRnupY49O_ZFrK_HvkfxPq8khvc2ZzE_45f1d0VUirJ05iKvNZ4tRqWAkqGHokEHnBjsd8o88G4C5S_PrOjVEvSBRUeRxoq3FDuyOvP3-CxXRevD1WH0pLWhamFKO_POCddvCuafR9wK-1ID44bqJtdRXuAtdEQqGbqACaU1KntroxvQvKAqI-jXckyqF0o5xWG7Dkakx-bCVdoIsELaodYwjRujvGhZNFnVc5ST4T-Ex7IJe4V17mo1G_6UEcoYYf4EEXdqRk4TWtcW2k7HIGE7rypwA", 
    })
  })
    .then(function(response) {
      // request was successful
      if (response.ok) {
        response.json().then(function(data) {
          // send response data to function to display list of dogs
          console.log(data);
          displayDogs(data);

          // check if api has paginated issues
          if (data.pagination.total_count > 30) {
          displayWarning();
          }
        })
      }
      else {
        // if not successful, redirect to landing page
        document.location.replace("./index.html");
      }
    }); 
}

let displayDogs = function(dogs) {
  if (dogs.animals.length === 0) {
    dogsContainerEl.textContent = "There are no available dogs near you that match your criteria. Please try again.";
    return;
  }
  // if more than 30 animals in returned array, display first 30
  if (dogs.animals.length > 30) {
    dogs.animals.length = 30;
  }
  // loop over adoptable dogs
  for (let i = 0; i < dogs.animals.length; i++) {
    // define dog id
    let dogId = dogs.animals[i].id;
    // create a link element container for each dog
    let dogEl = document.createElement("a");
    dogEl.classList = "flex max-w-full rounded overflow-hidden shadow-lg align-middle";
    dogEl.setAttribute("href", "./page3.html?dog=" + dogId);

    // create div for image of dog to display
    let dogImageEl = document.createElement("div");
    dogImageEl.classList = "flex items-center px-6 py-4";

    // define image url
    if (dogs.animals[i].primary_photo_cropped === null) {
      dogImageEl.innerHTML = "<img src='./assets/images/img_placeholder.png' alt='dogs.animals[i].name' />";
    }
    else {
      let dogImageUrl = dogs.animals[i].primary_photo_cropped.full;
      let urlEnding = dogImageUrl.split("=")[1];
      dogImageEl.innerHTML = "<img src='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/" + dogId + "/1/?bust=" + urlEnding + "&width=300' alt='dogs.animals[i].name' />";
    }

    // append to link element container
    dogEl.appendChild(dogImageEl);

    // create a container for the dog information
    let dogInfoContainer = document.createElement("div");
    dogInfoContainer.classList = "px-6 py-4";

    // create a title element that displays dog's name
    let dogName = dogs.animals[i].name;
    let dogTitleEl = document.createElement("h2");
    dogTitleEl.classList = "font-bold text-xl mb-2";
    dogTitleEl.textContent = "Meet " + dogName;

    // create a div element that displays dog's basic information
    let primaryDogBreed = dogs.animals[i].breeds.primary;
    let ageOfDog = dogs.animals[i].age;
    let sexOfDog = dogs.animals[i].gender;
    let dogInfoEl = document.createElement("div");
    //dogInfoEl.classList = "";
    dogInfoEl.innerHTML = "<p class='flex flex-wrap'>Breed: " + primaryDogBreed + "</p><p class='flex flex-wrap'>Age: " + ageOfDog + "</p><p class='flex flex-wrap'>Gender: " + sexOfDog + "</p>";

    // append title and paragraph to dog info container
    dogInfoContainer.appendChild(dogTitleEl);
    dogInfoContainer.appendChild(dogInfoEl);

    // append dog info container to link element container
    dogEl.appendChild(dogInfoContainer);

    dogsContainerEl.appendChild(dogEl);
  }
}

let displayWarning = function() {
  // add text to warning container
  limitWarningEl.textContent = "To see more than 30 dogs, visit ";

  // create a link to petfinder.com 
  let linkEl = document.createElement("a");
  linkEl.textContent = "Petfinder.com";
  linkEl.setAttribute("href", "https://www.petfinder.com/search/dogs-for-adoption/us");
  linkEl.setAttribute("target", "_blank");

  // append link to warning container
  limitWarningEl.appendChild(linkEl);
}


getAdoptionList();