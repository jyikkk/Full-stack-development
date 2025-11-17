const fs = require('node:fs');

const data = fs.readFileSync('./practice3/data.csv', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
});

const lines = data.split('\n');

console.log(lines);

for (const rows of lines){
    const columns = rows.split(",");
    for (const column of columns) {
      console.log(column);
    }
}

let movies = [];

const info = lines.splice(1,3);

console.log(info);

for (let i = 0; i < info.length; i++) {
    const columns = info[i].split(",");
    console.log(columns);
    const movie = {
        Rank: columns[0],
        movie: columns[1],
        ReleaseDate: columns[2],
        Gross: columns[3]
    };
    movies.push(movie);
}

console.log(movies);
