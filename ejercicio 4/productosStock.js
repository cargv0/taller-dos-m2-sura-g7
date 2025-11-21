let productos = [
  {nombre: "Camisa", stock: 10},
  {nombre: "Zapatos", stock: 0},
  {nombre: "Pantalón", stock: 5}
];

let enStock = productos.filter(p => p.stock > 0);
console.log(enStock);
// [{nombre: "Camisa", stock: 10}, {nombre: "Pantalón", stock: 5}]
