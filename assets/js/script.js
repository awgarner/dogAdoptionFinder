function getApi() {

  var requestUrl = "https://api.petfinder.com/v2/animals";
  
  fetch(requestUrl, { 
    method: "GET", 
    headers: new Headers({
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6IjMyZmY3NDE1YTJhY2I1OWRlNTc3NTM0MTBhOWNhYTI5MjM5MzNhZDMzMDRlZDc4MjE0NTYyYWRjNmZjYTBhY2RmMzAxMTU2MGYyMjNiOTQxIiwiaWF0IjoxNjQ3NDcxMjM4LCJuYmYiOjE2NDc0NzEyMzgsImV4cCI6MTY0NzQ3NDgzOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.GCwp6AzGxHtMaH7mKC4uqDiv0gSWDGXcItXf-qxRn3df6zGhSjqS3Rs3zzTsw5oEaAU6hca1lTmOVqiweFFsEzKJOXH8y3bPFlCfaEZdeJ6kAAgIyleFSvanAghAQMJYhTty9ZEKWk1lMyPV6PavGSwZcBA5jC2h5L0ivhE3TS4Kaft3IBJLQaMILg8qxA1cRyuWfoW3aD_0hrujOUYnJMm9XMCGk978bEXMIt_Piqa90ojR1QB9OpgLfRiMvpTn8HK5Dsn7Yr2Z6uxxwsnBcFEWjrrvCGVlcXxQaBhvR4JJOCkzW5NXuSiWQJWf75AZE0imgqKNBNklzc-7lQjh6A", 
    })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
}

getApi();
