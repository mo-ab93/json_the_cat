const request = require('request');
const name = process.argv[2];



request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, (error, response, body) => {
  // console.log(typeof body)
  if (error) {
    console.log('error:', error);
    return;
  }

  const data = JSON.parse(body);
 
  if (data.length === 0) {
    console.log(`Breed not found`);
    return;
  }
 
  
  console.log(data[0].description);
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
});