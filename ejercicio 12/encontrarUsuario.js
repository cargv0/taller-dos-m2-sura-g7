let usuarios2 = [
  {id: 101, nombre: "Ana"},
  {id: 102, nombre: "Luis"},
  {id: 103, nombre: "Carlos"}
];

let usuarioLuis = usuarios2.find(u => u.id === 102);
console.log(usuarioLuis);
// {id: 102, nombre: "Luis"}
