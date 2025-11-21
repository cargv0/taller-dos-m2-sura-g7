let roles = ["USER", "EDITOR"];

let tieneAdmin = roles.includes("ADMIN");
let tieneEditor = roles.includes("EDITOR");

console.log(tieneAdmin);  // false
console.log(tieneEditor); // true
