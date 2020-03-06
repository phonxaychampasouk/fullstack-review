const express = require('express');
const axios = require('axios');
let app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  const username = req.body.username;

  axios.get(`https://api.github.com/users/${username}/repos`)
  .then(response => {
    console.log('fork count: ',response.status);
    console.log('name: ',response.data[0].name);
    console.log('login: ',response.data[0].owner.login);
  })
  .catch(error => {
    console.error(error);
  });
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database;
})
app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

