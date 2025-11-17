const scores = [67, 80, 56, 95, 80, 75, 75, 92, 91, 77];

function bubbleSort(arr) {
  const n = arr.length;
    for (let i = 0; i < n - 1; i++) {   
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
const sortedScores = bubbleSort(scores);
console.log(sortedScores);