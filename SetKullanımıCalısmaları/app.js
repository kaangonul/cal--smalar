const set = new Set();
set.add(true);
set.add(Boolean);
set.add(231);
set.add("Enes");
set.add({ username: "enes", password: "1" });
set.add([1, 2, 3, 4]);

// set.delete("enes"); burada size 6
// set.delete("Enes"); burada size 5
// set.delete([1, 2, 3, 4]); //*referans tipi oldugundan silinmez
console.log(set.size);
// SET BİR DEGERİ BİR KERE TUTAR
// console.log(set.has("Ali")); //**false */
