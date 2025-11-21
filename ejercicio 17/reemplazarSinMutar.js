let tablero = ["X", "O", "X"];

let nuevoTablero = tablero.map((v, i) =>
  i === 1 ? "X" : v
);

console.log(tablero);       // ["X", "O", "X"]
console.log(nuevoTablero);  // ["X", "X", "X"]
