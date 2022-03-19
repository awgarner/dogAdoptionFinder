function getApi() {

  var requestUrl = "https://api.petfinder.com/v2/types/dog/breeds";

  fetch(requestUrl, { 
    method: "GET", 
    headers: new Headers({
      "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJveE5rRDV6MWlmWklWazYwQTlUcEdEdnc5V2ZIVDlLN3lhb2p6YkFISXZkWlFtYW9rMiIsImp0aSI6IjNkNDhjYzczYWYzMjJjNTFiZDk1ZDU2NjQ3MmM3ZGJiODgzYmE3OTQwZDJmNzgzMDI4NDRmNzcxMDcyZmIzMDI2YTFmZTA1MGUyMTRkMWVlIiwiaWF0IjoxNjQ3NjI0NTA4LCJuYmYiOjE2NDc2MjQ1MDgsImV4cCI6MTY0NzYyODEwOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.ZXDKtlqA_2sCw_2u3t3QVNJ7_0kNNj7sa8ugQVbs0UC8TIQqAFSxm3UYcP7hY56aEexZBHJ20gmfsDbsWTsR2KlbY-bt2fzQuyii-vu4s-iN-htUcjs-RvlCfNNA1PHvIDYIVBWEZY09PvnxhjoQTLXuvMV1smQBfzdkx9y0_sYIzY_DT4K1rNw0F1NxiYIAdJW4DZCntyAuzYtPggqDgSNrVfgi_BPBFlLAvlfp2DZUFNxsPJzviKgqUMz0-yWfDEtFdh5-brr8zglwqef6sfWph9uX-iTNCsDLstTpKjkcsZY250988mQTi3MjEYBJgGzMjd_eS0Pqc5V_Hjxnkg", 
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
