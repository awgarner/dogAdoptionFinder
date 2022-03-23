//var dogId = 55061211

function getDogId() {
  //var string = document.location;
  //var dogId = string.split("=")[1];
  getAdoptionInfo(dogId)
}

function getAdoptionInfo(dogId) {

  var requestUrl = "https://api.petfinder.com/v2/animals/" + dogId;

  fetch(requestUrl, { 
    method: "GET", 
    headers: new Headers({
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6IjI1NmZlZGVmMzEyMjAwZjFkMGYwMTllNjg3Mzg1MDJhN2FjMmI4NzNjNWVlMjNmYzQ3OWQ3YWQ1YzcwOGQ4Y2EyMWM5ZGQ5MzllY2MxYmM0IiwiaWF0IjoxNjQ3OTkyNTIxLCJuYmYiOjE2NDc5OTI1MjEsImV4cCI6MTY0Nzk5NjEyMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.yLMrUDmKQOwaqoYR--sXWgPzLvKYKeg5swCO93EbgG7tKzgzVJ4lGy8W2FaLcN3CI55wgGXxOP10xVFnTAZQUxXAi_QnKKWKEEtBzzHubUfF5egFkApvkjcPCgsCMeH-NNGxDByYFf6RPkExB8LyoGg0r9KDhp8_i_Xf-woEFoZ7juQv_GmS5JKUqbSpN6D0_5qqo8MlNox3OMbTcMGWXhJSb65BhBERSHi1N-8RtT9PIQxk1WadVUuu0jA-dpkMEH97IQc5P0oWMUvzAdzHDw9g5okOMC69H-VU6A57T5iwl6Fe3dTrK2ZP0HcNusF9BbPUjtyfeV5kyGySpx9v4Q", 
    })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
}

getAdoptionInfo();


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
  //getDogId();
