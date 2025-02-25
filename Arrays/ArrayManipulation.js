let n = 10;
let queries = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1],
];

// Optimizacion de calculo computacional a O(n+m) implementando el metodo de diferencias.

// function arrayManipulation(n, queries) {
//   let arr = Array(n + 1).fill(0);
//   for (let i = 0; i < queries.length; i++) {
//     let a = queries[i][0] - 1;
//     let b = queries[i][1];
//     let k = queries[i][2];
//     arr[a] += k;
//     arr[b] -= k;
//   }

//   let resultado = arr.reduce((a, b, idx) => {
//     if (idx === 0) {
//       a.push(b);
//     } else {
//       a.push(a[idx - 1] + b);
//     }
//     return a;
//   }, []);
//   let maximo = Math.max(...resultado);
//   return maximo;
// }
// console.log(arrayManipulation(n, queries));

// Resuelto por metodo de diferencias con otro enfoque mas optimo aun, ya que
// en el array de la suma acumulativa se hace la verificacion del valor maximo.
function arrayManipulation(n, queries) {
  let arr = Array(n + 1).fill(0);

  for (let i = 0; i < queries.length; i++) {
    let a = queries[i][0] - 1;
    let b = queries[i][1];
    let k = queries[i][2];

    arr[a] += k;
    arr[b] -= k;
  }
  console.log(arr);

  let maximo = 0;
  let current = 0;
  for (let i = 0; i < n; i++) {
    current += arr[i];
    console.log(current);
    if (current > maximo) {
      maximo = current;
    }
  }

  return maximo;
}

console.log(arrayManipulation(n, queries));
{
  /** Complejidad computacional fijada en O(n^2) lo que hace el codigo ineficiente.
  Implementado el metodo de diferencias se logra una optimizacion hacia O(n+m)
  */
}
// function arrayManipulation(n, queries) {
//   let arr = Array(n).fill(0);
//   for (let i = 0; i <= queries.length - 1; i++) {
//     for (let j = queries[i][0] - 1; j <= queries[i][1] - 1; j++) {
//       arr[j] += queries[i][2];
//     }
//   }
//   console.log(arr);
//   return arr.reduce((a, b) => {
//     if (b > a) {
//       a = b;
//     }
//     return a;
//   });
// }
