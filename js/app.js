const TODO_ITEMS = ["점심 맛있게 먹기", "저녁 맛있게 먹기"];

const todo = document.getElementById("todo");

console.log("todo: ", todo);

const todoHtml = TODO_ITEMS.map((item) => (
  <p class="text-white text-[50px] text-bold">{item}</p>
)).join("");

todo.innerHTML = todoHtml;
