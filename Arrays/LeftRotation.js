let array = [1, 2, 3, 4, 5];

let d = 2;

function rotateLeft(d, arr) {
  //   let rotation = arr.slice(0, d);
  //   let rest = arr.slice(d, arr.length);
  //   let response = arr.slice(d, arr.length).concat(arr.slice(0, d));

  return arr.slice(d, arr.length).concat(arr.slice(0, d));
}
console.log(rotateLeft(d, array));
