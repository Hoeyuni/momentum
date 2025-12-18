const TODO_LIST_ITEMS = ["점심 맛있게 먹기", "저녁 더 맛있게 먹기"];

document.addEventListener("DOMContentLoaded", () => {
  const todoListElement = document.querySelector(".todo");
  const listItems = TODO_LIST_ITEMS.map((item) => `<li>${item}</li>`).join("");
  const ulItems = `<ul>${listItems}</ul>`;

  todoListElement.innerHTML = ulItems;
});
