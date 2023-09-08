const todoForm = document.querySelector("#todo-form");
const todoInput= document.querySelector("#todo-input");
const todoList = document.querySelector("#tasks");

todoForm.addEventListener("submit" ,function(e){
    e.preventDefault();
    if(todoInput.value ===""){
        alert("Plese enter a task");
        return;
    }
    const task = document.createElement("li");
    task.innerText = todoInput.value;
    todoList.appendChild(task);
    todoInput.value = "";

});