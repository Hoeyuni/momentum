const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todo = document.getElementById("todo");
const clock = document.getElementById("clock");

let todos = [];

const TODO_LIST = localStorage.getItem("todos");

if (TODO_LIST) {
  const parsedTodoList = JSON.parse(TODO_LIST);
  todos = parsedTodoList;
  todos.forEach((item) => paintTodoList(item));
}

function paintTodoList(newTodo) {
  const todoDiv = document.createElement("div");
  todoDiv.id = newTodo.id;
  todoDiv.className = "flex items-center space-x-5";

  const todoP = document.createElement("p");
  todoP.innerText = newTodo.text;
  todoP.className = "text-white font-bold text-[48px]";

  const todoDeleteButton = document.createElement("button");
  todoDeleteButton.innerText = "X";
  todoDeleteButton.className = "text-red-500 font-bold text-[48px]";
  todoDeleteButton.addEventListener("click", deleteTodo);

  todoDiv.appendChild(todoP);
  todoDiv.appendChild(todoDeleteButton);
  todo.appendChild(todoDiv);
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(e) {
  const todo = e.target.parentElement;
  todo.remove();

  todos = todos.filter((item) => {
    return item.id !== +todo.id;
  });

  saveTodo();
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = {
    id: Math.random(),
    text: todoInput.value,
  };
  if (newTodo.text === "") {
    return;
  }
  todoInput.value = "";

  todos.push(newTodo);
  paintTodoList(newTodo);
  saveTodo();
});

function getTime() {
  const time = new Date();
  const year = String(time.getFullYear());
  const month = String(time.getMonth() + 1);
  const date = String(time.getDate());

  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const day = days[time.getDay()];

  const hour = String(time.getHours());
  const minute = String(time.getMinutes());
  const second = String(time.getSeconds());

  console.log("year: ", year);
  console.log("month: ", month);
  console.log("date ", date);
  console.log("day: ", day);
  console.log("hour: ", hour);
  console.log("minute: ", minute);
  console.log("second: ", second);

  clock.innerText = `${year}년 ${month}월 ${date}일 (${day})\n${hour}:${minute}:${second}`;
}

setInterval(getTime, 1000);
