let ventas = [150, 300, 100, 50];

let totalVentas = ventas.reduce((acc, v) => acc + v, 0);
console.log(totalVentas); // 600
