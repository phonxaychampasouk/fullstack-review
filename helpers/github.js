const request = require('request');
const config = require('../config.js');
const axios = require('axios');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    } }

    function callback( error, response, body) {
      if(!error && response.statusCode == 200){
        console.log('body: ', JSON.parse(body))

      }
    }
    request(options, callback)
  }

module.exports.getReposByUsername = getReposByUsername;


// then((response)=>{
//       response.map((repo)=>(
//         {
//           username: repo.owner.login,
//           description: repo.description,
//           size: repo.size,
//           forks: repo.fork,
//           language: repo.language
//         })
//           .catch((err)=> console.error(err))
//       })
//       axios(options);
//   };