let value;

const map1 = new Map();
map1.set(34, "istanbul");
map1.set(35, "İzmir");
map1.set(36, "Kars");
map1.set(41, "Kocaeli");
map1.set(26, "Eskişehir");
let key = { username: "Enes" };
map1.set(6, "Ankara");
console.log(map1.get(41));

// console.log(map1.get(5))
// Has
// console.log(map1.has(34));
// *********************
// value = map1.delete(26);

// console.log(value);
// For OF map üzerinde dönebiliriz.
// for (let [key, value] of map1) {
//   console.log(key, value);
// }

// let array = [34, "istanbul"];
// let [a, b] = array;
// console.log(a, b);
// ************************
//arraye çevirme methodu ARRAY FROM
// const keys = Array.from(map1.keys());
// keys.forEach((key) => {
//   console.log(key, map1.get(key));
// });

// **********************************
