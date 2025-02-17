function getName(callback) {
  setTimeout(() => {
    let name = "Kaan";
    callback(name);
  }, 1000);
  console.log(callback);
}
// getName((callback) => {
//   console.log(callback);
// });
function getSurname(name, callback) {
  setTimeout(() => {
    let surname = "Gönül";
    callback(surname);
  }, 500);
}
getName((name) => {
  getSurname(name, (surname) => {
    console.log(name, surname);
  });
});
