let belirtec = "";

document.addEventListener("click", function (e) {
  const target = e.target; // Tıklanan öğeyi alıyoruz

  const tagName = target.tagName.toLowerCase(); // Etiket adını alıyoruz
  const id = target.id ? `#${target.id}` : ""; // Varsa id'sini alıyoruz
  const className = target.className
    ? `.${target.className.split(" ").join(".")}`
    : ""; // Varsa class ismini alıyoruz

  belirtec = tagName + id + className; // Etiket adı, id ve class birleştiriliyor

  console.log("Tıklanan öğenin seçici bilgisi:", belirtec);
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
});
const telefonInput = document.getElementById("telefon").value.trim();
const erorMesagge = document.getElementById("eror-message");

if (telefonInput.length !== 10 || isNaN(telefonInput)) {
  erorMesagge.textContent = "Lütfen 10 haneli telefon numaranızı giriniz";
} else {
  erorMesagge.textContent = "";
  alert("Başarı ile bilgileriniz gönderildi");
}

// // Başlangıçta belirtec değişkenini konsola yazdırıyoruz
console.log("Başlangıç belirteci:", belirtec);

document.addEventListener("DOMContentLoaded", function () {
  const head = document.createElement("h2");
  head.textContent = "Günlük Planlarınız";
  head.classList.add("page-heading");
});
const addButton = document.createElement("button");
addButton.textContent = "Görev Ekle";
addButton.id = "add-task";
addButton.classList.add("task-button");

const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.id = "task-input";
taskInput.placeholder = "Yeni görev ekle...";

const taskList = document.createElement("ul");
taskList.id = "task-list";

const tasksSection = document.createElement("div");
tasksSection.classList.add("tasks-section");
tasksSection.appendChild(taskInput);
tasksSection.appendChild(addButton);
tasksSection.appendChild(taskList);

document.querySelector(".content").appendChild(tasksSection);

addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    taskList.appendChild(listItem);
    taskInput.value = "";
    // Girdi kutusunu temizle
  }
});
addButton.addEventListener("click", function () {
  const taskInputControl = taskInput.value.trim();

  if (taskInputControl === "") {
    alert("Lütfen bir değer giriniz");
  } else {
    alert("Başarılı bir şekilde eklendi");
  }
});
