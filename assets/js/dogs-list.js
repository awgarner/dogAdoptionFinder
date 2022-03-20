let dogsContainerEl = document.querySelector("#dog-list-container");

// temp search parameters to ensure this code works
let dogAge = "young,adult";
let dogSize = "large";
let dogBreed = "poodle";
let dogGender = "male,female";
let dogLocation = "columbus, oh";

// get list of adoptable dogs that meet user criteria submitted in form on landing page
function getAdoptionList() {

  var requestUrl = "https://api.petfinder.com/v2/animals?type=dog&status=adoptable&limit=25&age=" + dogAge + "&size=" + dogSize + "&breed=" + dogBreed + "&gender=" + dogGender + "&location=" + dogLocation;

  // make request to url
  fetch(requestUrl, { 
    method: "GET", 
    headers: new Headers({
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6IjMxZjdiZjQzN2I3NmRhNzk0OTc3NGFmMmFkMTQ3YmRkOTFhYzQzZGVlYTU5YWZiODcxOTEwZDQ4MTgzZTkyNjAwNjNhOGJlZTAwNGQ4Njc3IiwiaWF0IjoxNjQ3Nzk2OTk1LCJuYmYiOjE2NDc3OTY5OTUsImV4cCI6MTY0NzgwMDU5NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.urLCBLSgro8_urQf1BD16cxJP-_Yj3Hqrq3bnJZKWOGX4CouAeKhrz6CYUd7S5DbVcrekyLaFNWMkl5atnOMPUKxSl8_8oFw1R0lWWGoFynyOhrojCYF7OTU7zmHc4j7tNy6xwZpDRpDXfNB7IA1sIlXgsEz3MIXNmjmBmYlVQR5Fc_YwSEqweFkmRbbr5jccaQPegtjhK4HoKuyBGZXAMkC_wHYCQUWNbAe4svTMhUoJisJivWpL1z8wYzjP4HZE3dU1IhvZ1PywwijhDpIsdZHPSlpjbzN2G9Hydnymfh1m_ZQ8Z3N6aqEsCPqUwGqakLtMHlKlul_K9yvn5OdPQ", 
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
   
    // create div for image of dog to display
    let dogImageEl = document.createElement("div");
    dogImageEl.classList = "flex items-center px-6 py-4";
    dogImageEl.innerHTML = "<img src='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/" + dogId + "/1/?bust=" + urlEnding + "&width=300' alt='dogs.animals[i].name' />";

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
    dogInfoEl.classList = "flex flex-wrap";
    dogInfoEl.innerHTML = "<p class='mr-2'>Breed: " + primaryDogBreed + "</p><br /><p class='mr-2'>Age: " + ageOfDog + "</p><br /><p class='mr-2'>Gender: " + sexOfDog + "</p>";

    // append title and paragraph to dog info container
    dogInfoContainer.appendChild(dogTitleEl);
    dogInfoContainer.appendChild(dogInfoEl);

    // append dog info container to link element container
    dogEl.appendChild(dogInfoContainer);

    dogsContainerEl.appendChild(dogEl);
  }

}


getAdoptionList();