
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
// Storageden deyer alip on yuze eklemek
function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    })
}
//filtirleme
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
        showAlert("success", "Filterleme islemi yapmaniz icin en az 1 todo olmasi gerek");
    }

}
// tum todolari silme
function allTodosEverywhere() {
    const todoLists = document.querySelectorAll(".list-group-item");
    if (todoLists.length > 0) {
        // silme islemi
        todoLists.forEach(function (todo) {
            todo.remove();
        })
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Tum Todolar basarili sekilde silinmisdir");
    } else {
        //
        showAlert("warning", "Silmeniz icin en az bir todo olmasi gerek");
    }

}
// UI-dan element silme
function removeTodoToUI(e) {
    if (e.target.className === "fa fa-remove") {
        // UI-dan silme
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        // Storage silme
        removeTodoToStorage(todo.textContent);
        showAlert("secondary", "Todo Silindi")
    }
}

// LocalStorageden silme
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
        showAlert("danger", "Lutfen Bos Birakmayiniz");
    } else {
        // UI elave edilmesi
        addTodoToUI(inputText);
        //LocalStorage elave edilmesi
        addTodoToStorage(inputText);
        showAlert("primary", "Todo Eklendi");
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

// localda olan arreyin bos ve ya dolu olmasini yoxlayan ve tenzimleyen metod
function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

// Bilgilendirme mesaji alert eklemek
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
