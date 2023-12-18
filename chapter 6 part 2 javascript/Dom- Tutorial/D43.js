const todoForm = document.querySelector(".form-todo");
const textTodoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = textTodoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
    <span class="text">${newTodoText}</span>    
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
  newLi.innerHTML = newLiInnerHtml;

  todoList.append(newLi);
  textTodoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const LiSpan = e.target.parentNode.previousElementSibling;
    LiSpan.style.textDecoration = "Underline";
    LiSpan.style.color = "green";
  }
  if (e.target.classList.contains("remove")) {
    const targetLi = e.target.parentNode.parentNode;
    targetLi.remove();
  }
});
