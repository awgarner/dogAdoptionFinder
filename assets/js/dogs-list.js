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
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6ImYzNTNlOTU5MzYwNGViMTA4MGY2YTY4MDg2NTA2NDAyYTc0NzY2ODUzMDk5NWNkMDIwNDc0YWU1YTgxZTU2NjJlNTI3ZDEwNmM4NThjYjQzIiwiaWF0IjoxNjQ3NzQyOTY5LCJuYmYiOjE2NDc3NDI5NjksImV4cCI6MTY0Nzc0NjU2OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.kYHoCRejVwZVpc3q4FNI_sgip61EI7BLcV5jfAdjafnRpd0SoEcTl3WxCEENbxevAQOQCMfEoBuOo07dcKvYRmzABQdctCUz-GHr-Eov1Msu0OO7Prssh9oIpIH8EWmslZGcpKhdMM_oOXKWReabrMX3KG4_wQR8tGyMi0UHZlHQauUo18ffY8f4VKwIWz8iE3OjShSKinr70QNMRSWGvuqNAOiJOni75UDXhQKo1JnA_r8lf-rxB_DqvE0OGqWTWqe2s6HIbJLmqxy4OM_a4-E1WxXAIGE6Yl_YvgWCG_nUBDbGpIU-l1_21jyvdct9cF5PmApg-LQX84nhMM8wMQ", 
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
    console.log(dogs.animals[i].name);
  }
}


getAdoptionList();