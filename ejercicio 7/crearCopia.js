let original = ["A", "B", "C"];

let clon = original.slice();
clon.push("D");

console.log(original); // ["A", "B", "C"]
console.log(clon);     // ["A", "B", "C", "D"]
