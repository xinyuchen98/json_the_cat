const request = require('request');

const url = "https://apit.thecatapi.com/v1/breeds/search?q=";
const keyword = process.argv[2];

request(url + keyword, (error, response, body) => {
  if (error) throw error;
  const data = JSON.parse(body);
  if (data[0] !== undefined) {
    console.log(data[0]);
  } else {
    console.log("The requested breed is not found");
  }
});