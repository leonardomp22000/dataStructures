// const mathScore = [
//   [12, 20, 60, 56],
//   [89, 10, 52, 76],
//   [54, 5, 24, 34],
//   [23, 28, 43, 28],
//   [90, 16, 51, 45],
// ];

const matrix = [
  [-9, -9, -9, 1, 1, 1], // 1 non    3
  [0, -9, 0, 4, 3, 2], // 2
  [-9, -9, -9, 1, 2, 3], // 3 non    3
  [0, 0, 8, 6, 6, 0], // 4
  [0, 0, 0, -2, 0, 0], // 5 non
  [0, 0, 1, 2, 4, 0], // 6
];

const prueba = [
  [2, 3, 4, 5, 6],
  [2, 3, 4, 5, 6],
  [2, 3, 4, 5, 6],
];

function sumOrder(matrix) {
  let newMatrix = [];
  let total = 0;
  for (let fila = 0; fila <= matrix.length - 1; fila++) {
    let array = [];
    for (let columna = 0; columna <= matrix[fila].length - 3; columna++) {
      total =
        matrix[fila][columna] +
        matrix[fila][columna + 1] +
        matrix[fila][columna + 2];
      array.push(total);
    }
    newMatrix.push(array);
  }
  return newMatrix;
}

function matrizSumada(matrix) {
  let matrizCompleta = [];
  for (let i = 0; i < matrix.length - 2; i++) {
    let nuevoArray = [];
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      let array1 = matrix[i][j];
      let array2 = matrix[i + 2][j];
      nuevoArray.push(array1 + array2);
    }
    matrizCompleta.push(nuevoArray);
  }
  return matrizCompleta;
}

function selection(matrix) {
  let mat = [];
  for (let i = 1; i <= matrix.length - 2; i++) {
    let newArray = [];
    for (let j = 1; j <= matrix[i].length - 2; j++) {
      newArray.push(matrix[i][j]);
    }
    mat.push(newArray);
  }
  return mat;
}

function matrixSuma(matrix1, matrix2) {
  let matSuma = [];
  for (let i = 0; i <= matrix1.length - 1; i++) {
    let fila = [];
    for (let j = 0; j <= matrix1[i].length - 1; j++) {
      let array1 = matrix1[i][j];
      let array2 = matrix2[i][j];
      fila.push(array1 + array2);
    }
    matSuma.push(fila);
  }
  return matSuma;
}

matrixSuma(matrizSumada(sumOrder(matrix)), selection(matrix));

function majorClock(matrix) {
  let actual = 0;
  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      if (matrix[i][j] > actual) {
        actual = matrix[i][j];
      }
    }
  }
  console.log(actual);
}

majorClock(matrixSuma(matrizSumada(sumOrder(matrix)), selection(matrix)));
