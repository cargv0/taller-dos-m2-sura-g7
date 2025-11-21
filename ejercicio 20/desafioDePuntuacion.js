let puntuaciones = [50, 85, -10, 100, 0, 30];

// 1. Filtrar válidas
let validas = puntuaciones.filter(p => p >= 0);

// 2. Bonificar
let bonificadas = validas.map(p => p + 10);

// 3. Sumar
let totalPuntos = bonificadas.reduce((acc, v) => acc + v, 0);

console.log(validas);      // [50, 85, 100, 0, 30]
console.log(bonificadas);  // [60, 95, 110, 10, 40]
console.log(totalPuntos);  // 315
