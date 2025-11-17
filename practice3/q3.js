function swap([a, b]) {
  if (a > b) {
    return [b, a];
  } else {
    return [a, b];
  }
}

const arr = swap([-5, 2]);
console.log(arr); 