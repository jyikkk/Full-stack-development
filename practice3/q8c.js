const fs = require('node:fs');

fs.readFile('./practice3/data.csv', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const lines = data.split('\n');
    for(let i = 0; i < lines.length; i++){
        const columns = lines[i].split(",");
        for (const column of columns) {
            console.log(column);
        }
    }
});
