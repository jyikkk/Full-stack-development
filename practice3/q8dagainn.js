const fs = require('fs');

const data = fs.readFileSync('./practice3/data.csv', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
});

console.log(data);

const lines = data.split('\n');

console.log(lines);

const info = lines.splice(1,3);
console.log(info);

movies = [];

for (let i = 0; i < info.length; i++) {
    const columns = info[i].split(",");
    const movie = {
        Rank: columns[0],
        movie: columns[1],
        ReleaseDate: columns[2],
        Gross: columns[3]
    };
    movies.push(movie);
}

console.log(movies);