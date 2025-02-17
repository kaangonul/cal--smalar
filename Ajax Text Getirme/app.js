// http status
// 200 ok
// 403 forbidden
//404 not found
// 505 ınternal server eror

document.getElementById("btn").addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    console.log(this.readyState);
  };

  xhr.open("GET", "example.txt", true);
  xhr.send();
});
