let fila2 = ["Ana", "Luis", "Carlos", "Maria"];

let nuevaFilaConJorge = [
  ...fila2.slice(0, 1),
  "Jorge",
  ...fila2.slice(1)
];

console.log(fila2);             // ["Ana", "Luis", "Carlos", "Maria"]
console.log(nuevaFilaConJorge); // ["Ana", "Jorge", "Luis", "Carlos", "Maria"]
