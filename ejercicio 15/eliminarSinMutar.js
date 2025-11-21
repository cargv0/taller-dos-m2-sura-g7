let fila = ["Ana", "Luis", "Carlos", "Maria"];

let nuevaFila = fila.filter(nombre => nombre !== "Luis");

console.log(fila);      // ["Ana", "Luis", "Carlos", "Maria"]
console.log(nuevaFila); // ["Ana", "Carlos", "Maria"]
