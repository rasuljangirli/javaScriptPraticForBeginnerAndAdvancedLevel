
const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

let todos = [];

runEvenst();
function runEvenst() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCardBody.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click", allTodosEverywhere);
    filterInput.addEventListener("keyup", filter);
}
// Storageden melumati alib on terefe gostermek
function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    })
}

//filtir edilme
function filter(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const todoLists = document.querySelectorAll(".list-group-item");

    if (todoLists.length > 0) {
        todoLists.forEach(function (todo) {
            if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
                todo.setAttribute("style", "display : block");
            } else {
                todo.setAttribute("style", "display : none !important");
            }
        })
    } else {
        showAlert("success", "Filterleme üçün listdə ən az bir todo olmalıdır");
    }

}

// bütün todoları silmə
function allTodosEverywhere() {
    const todoLists = document.querySelectorAll(".list-group-item");
    if (todoLists.length > 0) {
        // silmə prossesi
        todoLists.forEach(function (todo) {
            todo.remove();
        })
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Bütün Todolar silindi");
    } else {
        //
        showAlert("warning", "Silmə prossesi üçün ən az 1 todo olmalıdır");
    }

}

// UI-dan element silmə
function removeTodoToUI(e) {
    if (e.target.className === "fa fa-remove") {
        // UI-dan silmə
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        // Storage silmə
        removeTodoToStorage(todo.textContent);
        showAlert("secondary", "Todo Silindi")
    }
}

// LocalStorageden silmə
function removeTodoToStorage(removeTodo) {
    checkTodosFromStorage();
    todos.forEach(function (todo, index) {
        if (todo === removeTodo) {
            todos.splice(index, 1);
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos));
}

// elementin elave edilmesi
function addTodo(e) {
    let inputText = addInput.value.trim();

    if (inputText == null || inputText == "") {
        showAlert("danger", "Todo daxil edilməyib");
    } else {
        // UI əlavə edilmesi
        addTodoToUI(inputText);
        //LocalStorage əlavə edilmesi
        addTodoToStorage(inputText);
        showAlert("primary", "Todo Əlavə edildi");
    }

    e.preventDefault();
}

//elementin yaradilmasi
function addTodoToUI(newTodo) {

    let li = document.createElement("li");
    li.classList = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    let a = document.createElement("a");
    a.href = "#";
    a.classList = " delete-item ";

    let i = document.createElement("i");
    i.classList = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}

// LocalStorage element elave etmek
function addTodoToStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// localda olan arreyin bos ve ya dolu olmasini yoxlanması ve tenzimlənməsi
function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

// Məlumatlandırıcı alertin göstərilməsi
function showAlert(type, message) {
    /*
     <div class="alert alert-success" role="alert">
   This is a success alert—check it out!
 </div>
    */
    const div = document.createElement("div");
    div.className = `alert mt-3 alert-${type}`;
    div.role = "alert";
    div.innerHTML = message;
    firstCardBody.appendChild(div);
    setTimeout(function () {
        div.remove();
    }, 2000)
}