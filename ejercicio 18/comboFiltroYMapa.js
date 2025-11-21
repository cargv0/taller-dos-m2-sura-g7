let productos3 = [
  {nombre: "Papas", precio: 2},
  {nombre: "Carne", precio: 15},
  {nombre: "Leche", precio: 3}
];

let productosCaros = productos3
  .filter(p => p.precio > 4)
  .map(p => p.nombre);

console.log(productosCaros); // ["Carne"]
