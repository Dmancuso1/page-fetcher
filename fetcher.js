
// Implement a small command line node app called fetcher.js which should take a URL as a command-line argument as well as a local file path and download the resource to the specified path.


const request = require('request');
const fs = require('fs');
const arg = process.argv.slice(2);


// arg[0] = URL
// arg[1] = destination path.


request(arg[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.


  fs.writeFile(arg[1], body, 'utf8', (err) => {
    if (err) throw err;
    let stats = fs.statSync(arg[1])["size"] // credit for >>>["size"]<<<< https://stackoverflow.com/questions/42363140/how-to-find-the-size-of-the-file-in-node-js
    console.log(`Downloaded and saved ${stats} bytes to ${arg[1]}!`)
  });


});