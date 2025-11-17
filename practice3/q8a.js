const fs = require('node:fs');

const content = 'Hello, World!';

fs.writeFile('./myfile.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
