let queries = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
];

function dynamicArray(n, queries) {
  let array = [];
  let lastAnswer = 0;
  let answer = [];

  for (let i = 0; i <= n; i++) {
    array.push([]);
  }

  for (let i = 0; i <= queries.length - 1; i++) {
    let typeOfQuery = queries[i][0];
    let x = queries[i][1];
    let y = queries[i][2];
    let idx = (x ^ lastAnswer) % n;
    if (typeOfQuery === 1) {
      array[idx].push(y);
    } else if (typeOfQuery === 2) {
      lastAnswer = array[idx][y % array[idx].length];
      answer.push(lastAnswer);
    }
  }
  return answer;
}

// function dynamicArray(n, queries) {
//   let lastAnswer = 0;
//   let array = [];
//   let results = [];
//   for (let i = 0; i < n; i++) {
//     array.push([]);
//   }

//   for (let i = 0; i <= queries.length - 1; i++) {
//     let idx = (queries[i][1] ^ lastAnswer) % n;
//     if (queries[i][0] === 1) {
//       array[idx].push(queries[i][2]);
//     } else if (queries[i][0] === 2) {
//       lastAnswer = array[idx][queries[i][2] % array[idx].length];
//       results.push(lastAnswer);
//     }
//   }
//   return results;
// }
console.log(dynamicArray(2, queries));
