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
    let stats = fs.statSync(arg[1])["size"]
    console.log(`Downloaded and saved ${stats} bytes to ${arg[1]}!`)
  });


});