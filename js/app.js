const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todo = document.getElementById("todo");
const clockDate = document.getElementById("clock-date");
const clockTime = document.getElementById("clock-time");
const bgImage = document.getElementById("bgImage");
const todoWrapper = document.getElementById("todoWrapper");

function getUserId() {
  let userId = localStorage.getItem("userId");
  if (!userId) {
    userId = String(Math.random());
    localStorage.setItem("userId", userId);
  }
  return userId;
}

function getDate() {
  const time = new Date();
  const year = time.getFullYear();
  const month = String(time.getMonth() + 1).padStart(2, "0");
  const day = String(time.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

const randomSeed = `${getUserId()}-${getDate()}`;

bgImage.src = `https://picsum.photos/seed/${randomSeed}/1920/1080`;

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
  todoDiv.className =
    "flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20";

  const todoP = document.createElement("p");
  todoP.innerText = newTodo.text;
  todoP.className = "text-white text-lg";

  const todoDeleteButton = document.createElement("button");
  todoDeleteButton.innerText = "✕";
  todoDeleteButton.className =
    "text-red-500 hover:text-red-300 text-sm ml-2 transition-colors";
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
  updateFade();
}

function updateFade() {
  const isScrollable = todo.scrollHeight > todo.clientHeight;
  const fadeStyle = "linear-gradient(to bottom, black 80%, transparent)";

  if (isScrollable) {
    todoWrapper.style.maskImage = fadeStyle;
    todoWrapper.style.webkitMaskImage = fadeStyle;
  } else {
    todoWrapper.style.maskImage = "none";
    todoWrapper.style.webkitMaskImage = "none";
  }
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
  updateFade();
});

function getTime() {
  const time = new Date();
  const dateFormat = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  }).format(time);

  console.log("dateFormat:", dateFormat);

  // padStart(목표 길이, 채울 문자)
  const hour = String(time.getHours()).padStart(2, "0");
  const minute = String(time.getMinutes()).padStart(2, "0");
  const second = String(time.getSeconds()).padStart(2, "0");

  clockDate.innerText = dateFormat;
  clockTime.innerText = `${hour}:${minute}:${second}`;
}

getTime();
setInterval(getTime, 1000);
