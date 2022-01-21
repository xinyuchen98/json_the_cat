const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      if (data[0] !== undefined) {
        callback(null, data[0]["description"]);
      } else {
        callback("The requested breed is not found", null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };