const containerOneSection = document.getElementsByClassName("container_one_section");
const input = document.getElementById("input");
const addButton = document.querySelector(".add_button");
const containerTwoSection = document.querySelector(".container_two_section");
const form = document.getElementById("form_one");
let todos = [];

runEvents();
function runEvents() {
    form.addEventListener("submit", addTodo);
    containerTwoSection.addEventListener("click", deleteUITodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
}

//? Set local Storage UI
function pageLoaded() {
    checkFromStorage();
    todos.forEach(todo => {
        newTodoUI(todo);
    });
}

//? add Todo function
function addTodo(e) {
    let inputValue = input.value.trim();

    if (inputValue == "" || input.value === null) {
        alert("No Text Todo. Plase write input")
    } else {
        newTodoUI(inputValue);
        addTodoLocalStorage(inputValue);
    }
    e.preventDefault();
}

//? New Todo Create function
function newTodoUI(newTodo) {
    let div = document.createElement("div")
    div.className = "container_two_section_dinamik"

    let p = document.createElement("p")
    p.innerHTML = newTodo;

    let button = document.createElement("button")
    button.innerHTML = "Delet"
    button.className = "btn"

    div.appendChild(p);
    div.appendChild(button);
    containerTwoSection.appendChild(div);

    input.value = "";
}

//? from UI delete todo
function deleteUITodo(e) {
    if (e.target.className == "btn") {
        const todo = e.target.parentElement;
        todo.remove();
        removeTodoToStorage(todo.firstElementChild.textContent);
    }
}

function removeTodoToStorage(removeTodo) {
    checkFromStorage();
    todos.forEach((todo, index) => {
        if (todo === removeTodo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

//? add todo local Storage
function
    addTodoLocalStorage(newTodo) {
    checkFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

//? check if it is empty or full
function checkFromStorage() {

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}
