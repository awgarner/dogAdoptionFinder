let dogsContainerEl = document.querySelector("#dog-list-container");

// temp search parameters to ensure this code works
let dogAge = "young,adult";
let dogSize = "large";
let dogBreed = "poodle";
let dogGender = "male,female";
let dogLocation = "columbus, oh";

// get list of adoptable dogs that meet user criteria submitted in form on landing page
function getAdoptionList() {

  var requestUrl = "https://api.petfinder.com/v2/animals?type=dog&status=adoptable&limit=50&age=" + dogAge + "&size=" + dogSize + "&breed=" + dogBreed + "&gender=" + dogGender + "&location=" + dogLocation;

  // make request to url
  fetch(requestUrl, { 
    method: "GET", 
    headers: new Headers({
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6IjBiZTJlNzBkOGY0MmIwM2EyZWRmZTNkYThkZGNlZDgzNTQ3NWRiNjgwNWU2NWZjYmU3NzE2YjM1M2VmNDdjZGY3YWUzNmVlMWU1NGUwMTY4IiwiaWF0IjoxNjQ3NzUwNjI5LCJuYmYiOjE2NDc3NTA2MjksImV4cCI6MTY0Nzc1NDIyOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.se0gSpYXQAF-zdN4ME1-m3CnYRWnvATfidlcYxk7eDo6QPtXJ6761JKqJF-MnQ3dt2gLIeKycbDEUS_Uyv0Q5JSapzzI00zzbT4pBhYA4W7OfcOqZ4KRpE4vSyvjexF7LgUgbw1b7E8hy-phBH58ryMLDdKi8KWBVsJIW_K2htWhx8-J6QgGkAThtD_hAh3wL0W824NVIvsdUkfAX8de9n1rwkSxh_GRLClavADX48jPucq4t5Yu-qLytf4UParB-V0teqk8bUmMHWF2MNwrjART6M95qsGnc2LiCeKUeXQnaTgCPUpPkGjzw8rRwxIGBE7wGxTqmT1mivGwS54GdA", 
    })
  })
    .then(function(response) {
      // request was successful
      if (response.ok) {
        response.json().then(function(data) {
          // send response data to function to display list of dogs
          console.log(data);
          displayDogs(data);
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
  // loop over adoptable dogs
  for (let i = 0; i < dogs.animals.length; i++) {
    // define dog id
    let dogId = dogs.animals[i].id;
    // create a link element container for each dog
    let dogEl = document.createElement("a");
    dogEl.classList = "flex max-w-full rounded overflow-hidden shadow-lg align-middle";
    dogEl.setAttribute("href", "./page3.html?dog=" + dogId);

    // define image url
    let dogImageUrl = dogs.animals[i].primary_photo_cropped.full;
    let urlEnding = dogImageUrl.split("=")[1];
    console.log(dogImageUrl, urlEnding);
    // create div for image of dog to display
    let dogImageEl = document.createElement("div");
    dogImageEl.classList = "flex items-center px-6 py-4";
    dogImageEl.innerHTML = "<img src='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/" + dogId + "/1/?bust=" + urlEnding + "' alt='dogs.animals[i].name' />";

    dogEl.appendChild(dogImageEl);

    dogsContainerEl.appendChild(dogEl);
  }

}


getAdoptionList();