const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todo = document.getElementById("todo");

let todos = [];

const TODO_LIST = localStorage.getItem("todos");

console.log("TODO_LIST: ", TODO_LIST);

if (TODO_LIST) {
  const parsedTodoList = JSON.parse(TODO_LIST);
  console.log("parsedTodoList: ", parsedTodoList);
}

function paintTodoList(newTodo) {
  const todoP = document.createElement("p");
  todoP.className = "text-white font-bold text-[48px]";
  todoP.innerText = newTodo;
  todo.appendChild(todoP);
  console.log("todo: ", todo);
}

console.log("todos: ", todos);

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("e: ", e.target.value);
  const newTodo = todoInput.value;
  if (newTodo === "") {
    return;
  }
  todoInput.value = "";
  todos.push(newTodo);
  paintTodoList(newTodo);
  saveTodo();
});
