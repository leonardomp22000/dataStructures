const matrix = [
  [-9, -9, -9, 1, 1, 1], // 1 non    3
  [0, -9, 0, 4, 3, 2], // 2
  [-9, -9, -9, 1, 2, 3], // 3 non    3
  [0, 0, 8, 6, 6, 0], // 4
  [0, 0, 0, -2, 0, 0], // 5 non
  [0, 0, 1, 2, 4, 0], // 6
];

function hourglassSum(arr) {
  let sum3Matrix = [];
  let sum3MatrixFilas = [];
  let matrixReduced = [];
  let matrixResult = [];
  let actual = 0;
  let total = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    let fila = [];
    for (let j = 0; j <= arr[i].length - 3; j++) {
      total = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      fila.push(total);
    }
    sum3Matrix.push(fila);
  }

  for (let i = 0; i <= sum3Matrix.length - 3; i++) {
    let fila4 = [];
    for (let j = 0; j <= sum3Matrix[i].length - 1; j++) {
      fila4.push(sum3Matrix[i][j] + sum3Matrix[i + 2][j]);
    }
    sum3MatrixFilas.push(fila4);
  }

  for (let i = 1; i <= arr.length - 2; i++) {
    let fila2 = [];
    for (let j = 1; j <= arr.length - 2; j++) {
      fila2.push(arr[i][j]);
    }
    matrixReduced.push(fila2);
  }

  for (let i = 0; i <= matrixReduced.length - 1; i++) {
    let fila3 = [];
    for (let j = 0; j <= matrixReduced[i].length - 1; j++) {
      fila3.push(matrixReduced[i][j] + sum3MatrixFilas[i][j]);
    }
    matrixResult.push(fila3);
  }

  for (let i = 0; i <= matrixResult.length - 1; i++) {
    for (let j = 0; j <= matrixResult[i].length - 1; j++) {
      if (actual <= matrixResult[i][j]) {
        actual = matrixResult[i][j];
      }
    }
  }
  return actual;
}
console.log(hourglassSum(matrix));
