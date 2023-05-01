const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  const todoText = todoInput.value;
  if (todoInput.value === "") {
    alert("Enter the items");
  } else {
    const listItems = document.createElement("li");
    listItems.innerHTML = todoText;
    listItems.style.overflow = "hidden";
    todoList.appendChild(listItems);
    todoInput.value = "";
  }
}
