const express = require('express');
let app = express();
const axios = require('axios');
const github = require('../helpers/github.js')
//const db = require("./database/index.js") //save data
//const github = require('')

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));
//axios sent a post request with a username
app.post('/repos', function (req, res) {
  const username = req.body.username;
  github.getReposByUsername(username)
  });

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database;


app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

