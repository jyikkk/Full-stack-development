var text = 'Peter Piper picked a peck of pickled peppers.  A peck of pickled peppers Peter Piper picked.  If Peter Piper picked a peck of pickled peppers, where’s the peck of pickled peppers Peter Piper picked?';

var count = 0;
var pos = 0;

while ((pos = text.indexOf('pickled', pos)) !== -1, pos += 1) {
    count += 1;
    console.log(count);
}