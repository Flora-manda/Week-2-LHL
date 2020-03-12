const request = require('request');
const fs = require('fs');
const argv = process.argv.slice(2);
const url = argv[0];
const fileToWrite = argv[1];

// HTTP request to server
request(`${url}`, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  //using file system to write file to server
  fs.writeFile(fileToWrite, body, () => {
    fs.stat(fileToWrite, (err, stat) => {
      console.log(`Downloaded and saved ${stat.size} to ${fileToWrite}`);
    })
  });
});



