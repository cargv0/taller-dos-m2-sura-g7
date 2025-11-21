let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];

let listaPlana = grupos.reduce((acc, grupo) => acc.concat(grupo), []);
console.log(listaPlana); 
// ["Ana", "Luis", "Maria", "Juan", "Pedro"]
