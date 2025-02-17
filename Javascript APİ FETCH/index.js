const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.onload = function () {
  const response = xhr.responseText;
  if (xhr.status === 200) {
    console.log(response);
  } else {
    console.log("Hata oluştu" + xhr.status);
  }

  //   console.log(response);
};
xhr.send();
