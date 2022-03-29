let dogsContainerEl = document.querySelector("#dog-list-container");
let limitWarningEl = document.querySelector("#limit-warning");

// create dialog box for incorrect parameters error
$("#form-error").dialog({
  modal: true,
  autoOpen: false,
  buttons: {
    Ok: function() {
      $( this ).dialog( "close" );
    }
  }
});

// create dialog box for response error
$("#catch-error").dialog({
  modal: true,
  autoOpen: false,
  buttons: {
    Return: function() {
      $( this ).dialog( "close" );
      window.location = "./index.html";
    }
  }
});

// create dialog box for no matching dogs
$("#no-dogs-error").dialog({
  modal: true,
  autoOpen: false,
  buttons: {
    Return: function() {
      $( this ).dialog( "close" );
      window.location = "./index.html";
    }
  }
});

// // temp search parameters to ensure this code works
// let dogAge = "young,adult";
// let dogSize = "large";
// let dogBreed = "shepherd";
// let dogGender = "male,female";
// let dogLocation = "43202";
let getParams = function() {
  let dogAge = JSON.parse(localStorage.getItem("dogAge"));
  let dogSize = JSON.parse(localStorage.getItem("dogSize"));
  let dogBreed = JSON.parse(localStorage.getItem("dogBreed"));
  let dogGender = JSON.parse(localStorage.getItem("dogGender"));
  let dogLocation = JSON.parse(localStorage.getItem("dogLocation"));

  if (dogAge === "Please Select Dog's Age") {
    dogAge = "baby,young,adult,senior";
  }

  if (dogSize === "Please Select Dog's Size") {
    dogSize = "small,medium,large,xlarge";
  }

  if (dogGender === "Please Select Dog's Gender") {
    dogGender = "male,female";
  }

  getAdoptionList(dogAge, dogSize, dogBreed, dogGender, dogLocation);
}

// get list of adoptable dogs that meet user criteria submitted in form on landing page
function getAdoptionList(dogAge, dogSize, dogBreed, dogGender, dogLocation) {
  console.log(dogAge, dogSize, dogBreed, dogGender, dogLocation);
  let requestUrl = "https://api.petfinder.com/v2/animals?type=dog&status=adoptable&limit=30&age=" + dogAge + "&size=" + dogSize + "&breed=" + dogBreed + "&gender=" + dogGender + "&location=" + dogLocation;

  // make request to url
  fetch(requestUrl, { 
    method: "GET", 
    headers: new Headers({

      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6IjVlYjNiZDBhZGYzY2YxYWZlNWFkYTFjZWIwN2Y1NjAxNDQzMTQzZmE0NGJhOTdlNGY2MTAxY2JkNjMyODI0MWE5NzBkNTQ3Y2UyNDRlYmIwIiwiaWF0IjoxNjQ4NTEwMzY5LCJuYmYiOjE2NDg1MTAzNjksImV4cCI6MTY0ODUxMzk2OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.TehkBdzakCfDaz6ZIzKa6qtL_itP-nJYvsmbb_Lmn08X3sYG0E7D0uftb8-Omg2qWkkTSC7ThyLzQAFhxNrcPPmR9uRfEvUU6DqxtEx7NFONSSAiMbYf9VCj-tnmSTxdU9Xh88wTTj155fAOXqQu8Jb8dcVfs8DsZ6L4an8NkVYk7DTMZoyZNIirWipZ6ZkiYkQq8jWdb8SN_ky_f3_OnRAkkU1o_LaryiASguA_iH7DgBIQSHIxLHDH6EXCKZ9hNbvXDkqVvJ8m0QHUU2qlzRLSJvbnvJQ69iSX1OYI4lePOmNR7nhRHjHtVZjLTUrI2Tg2-xndU2P38v_kXbxOeg", 

    })
  })
    .then(function(response) {
      // request was successful
      if (response.ok) {
        response.json().then(function(data) {
          // send response data to function to display list of dogs
          // console.log(data);
          displayDogs(data);

          // check if api has paginated issues
          if (data.pagination.total_count > 30) {
          displayWarning();
          }
        })
      }
      else {
        // if not successful, display error message
        $("#form-error").dialog("open");
      }
    })
    .catch(function(error) {
      $("#catch-error").dialog("open");
    });
}

let displayDogs = function(dogs) {
  if (dogs.animals.length === 0) {
    $("#no-dogs-error").dialog("open");
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
    dogEl.classList = "flex max-w-4xl rounded overflow-hidden shadow-lg text-center flex-col sm:flex-row w-1/2";
    dogEl.setAttribute("href", "./page3.html?dog=" + dogId);

    // create div for image of dog to display
    let dogImageEl = document.createElement("div");
    dogImageEl.id = "image-container";
    dogImageEl.classList = "self-center px-6 py-4";

    // define image url
    if (dogs.animals[i].primary_photo_cropped === null) {
      dogImageEl.innerHTML = "<img id='image' src='./assets/images/img_placeholder.png' alt='adoptable dog' />";
    }
    else {
      dogImageEl.innerHTML = "<img id='image' src='" + dogs.animals[i].primary_photo_cropped.full + "' alt='adoptable dog' />";
    }

    // append to link element container
    dogEl.appendChild(dogImageEl);

    // create a container for the dog information
    let dogInfoContainer = document.createElement("div");
    dogInfoContainer.classList = "px-6 py-4";

    // create a title element that displays dog's name
    let dogName = dogs.animals[i].name;
    let dogTitleEl = document.createElement("h2");
    dogTitleEl.classList = "font-bold text-base mb-2";
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

    dogsContainerEl.classList = "flex flex-wrap max-w-full px-1 justify-center";
    dogsContainerEl.appendChild(dogEl);
  }
}

let displayWarning = function() {
  // add text to warning container
  limitWarningEl.textContent = "To see more than 30 dogs, visit ";

  // create a link to petfinder.com 
  let linkEl = document.createElement("a");
  linkEl.textContent = "Petfinder.com";
  linkEl.classList = "underline text-blue-600 hover:text-blue-800";
  linkEl.setAttribute("href", "https://www.petfinder.com/search/dogs-for-adoption/us");
  linkEl.setAttribute("target", "_blank");

  // append link to warning container
  limitWarningEl.appendChild(linkEl);
}

getParams();