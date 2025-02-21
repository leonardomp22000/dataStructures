const matrix = [
  [-9, -9, -9, 1, 1, 1], // 1 non    3
  [0, -9, 0, 4, 3, 2], // 2
  [-9, -9, -9, 1, 2, 3], // 3 non    3
  [0, 0, 8, 6, 6, 0], // 4
  [0, 0, 0, -2, 0, 0], // 5 non
  [0, 0, 1, 2, 4, 0], // 6
];

// function hourglassSum(arr) {
//   let total = 0;
//   let result = 0;
//   for (let i = 0; i <= arr.length - 3; i++) {
//     for (let j = 0; j <= arr[i].length - 3; j++) {
//       total =
//         arr[i][j] +
//         arr[i][j + 1] +
//         arr[i][j + 2] +
//         arr[i + 1][j + 1] +
//         arr[i + 2][j] +
//         arr[i + 2][j + 1] +
//         arr[i + 2][j + 2];
//       if (total > result) {
//         result = total;
//       }
//     }
//   }
//   return result;
// }

function hourglassSum(arr) {
  let maxSum = -Infinity; // Se inicia con un valor muy bajo

  for (let i = 0; i <= arr.length - 3; i++) {
    for (let j = 0; j <= arr[i].length - 3; j++) {
      let sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}
console.log(hourglassSum(matrix));
