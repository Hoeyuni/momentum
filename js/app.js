const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todo = document.getElementById("todo");

let todos = [];

const TODO_LIST = localStorage.getItem("todos");

console.log("TODO_LIST: ", TODO_LIST);

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

console.log("todos: ", todos);

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(e) {
  //  X 버튼을 누르면 삭제되게끔 해야 함
  // 버튼의 부모는 div 버튼을 누르면 div가 삭제 div의 아이디 찾기

  // 1. id를 찾아야 함
  // 2. X 버튼을 누른 id에 맞는 아이템을 배열에서 삭제함
  // 3. 삭제되자마자 화면에서 사라져야함
  // 3-1. 그말은 배열에서 삭제되고 필터링해서 보여줘야함
  // 4. 삭제하고 나서 배열을 다시 저장함

  const todo = e.target.parentElement;
  console.log("deleteTodo todo: ", todo);
  todo.remove();
  // 화면에서 div 자체(dom)을 지워버리니 화면에서는 사라지는데, localStorage에는 남아있음
  // localStorage에서도 지워야 함
  // key:todos, value: [{id:..., text:...}, {...}, {...}]
  console.log("deleteTodo todos:", todos);
  console.log("deleteTodo todo.id:", todo.id);

  todos = todos.filter((item) => {
    // item.id !== todo.id
    console.log("item.id", item.id);
    console.log("item.id", typeof item.id);
    console.log("todo.id", todo.id);
    console.log("todo.id", typeof todo.id);

    return item.id !== +todo.id;
  });
  console.log("deleteTodo after filter todos: ", todos);

  saveTodo();
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("e: ", e.target.value);
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

console.log("after submit todos: ", todos);
