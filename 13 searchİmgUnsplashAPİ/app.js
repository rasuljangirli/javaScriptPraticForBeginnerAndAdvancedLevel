const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrpper = document.querySelector(".imageList-Wrapper");
const infoDiv = document.querySelector("#infoDiv");

const BASE_URL = `https://api.unsplash.com/`;

runEnventListner(); // Butun functionlari toplanmış formada burada çağırırığ.
function runEnventListner() {
    form.addEventListener("submit", search);
    clearButton.addEventListener("click", clear)
    searchButton.addEventListener("click", addList);
}

//Əgər axtarış zamanı input boş olarsa showAlert functionuna bu mənt gondriləcək.
function addList() {
    if (searchInput.value == "") {
        showAlert("danger", "Enter text to search")
    }
}

// infoMessage
function showAlert(type, message) {
    const div = document.createElement("div");
    div.className = `alert mt-3 alert-${type}`;
    div.role = "alert";
    div.innerHTML = message;
    div.style.fontWeight = "bold";
    div.style.color = "Black"
    infoDiv.appendChild(div);
    setTimeout(function () {
        div.remove();
    }, 2000)
}

// Search Img
function search(e) {
    //? Axtaris zamani ilk öncə olan dataları təmizləyirik. Dataların hamısını təmizləmək üçün başqa function yazaraq həmən functionu bu function içərisində çağırarağ sonra aşağıdakı hissəni yaza bilərik və ya aşağı istək hissəsinidə eyni qaydada. BU biizm öz seçimimzdən aslı olarağ dəyişə bilər təbii başqa dəyişiyliylərdə olacaq bu zaman.
    if (Array.from(imageListWrpper.children).length > 0) {
        Array.from(imageListWrpper.children).forEach((child) => {
            child.remove();
        })
    }
    // Burada isə gələn datani aliriq və istək atırığ
    const value = searchInput.value.trim();
    fetch(`${BASE_URL}search/photos?query=${value}`, {
        headers: {
            Authorization: "Client-ID HaxPojQEQXyxgM5CX7Rng7IXOfvxhxEPGlQAm7FohpA"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            Array.from(data.results).forEach((dataChild) => {
                // console.log(dataChild.urls.small)
                addImgToUI(dataChild.urls.small);
            })
        })
        .catch((err) => console.log(err))

    e.preventDefault();
}

// Clear
function clear() {
    searchInput.value = "";
    //? Arrey.from ilə gələn HTMLCollection-u tam olarağ arreyə çeviririk və üzərində forEach ilə donərək hər bir elementi təmizləyirik.
    Array.from(imageListWrpper.children).forEach((child) => {
        child.remove();
    })
    // imageListWrpper.innerHTML = "";

}

//Add img UI
function addImgToUI(url) {
    const div = document.createElement("div");
    div.classList = "card";

    const img = document.createElement("img");
    img.classList = "img";
    img.setAttribute("src", url);
    img.height = "400";
    img.width = "400"

    div.appendChild(img);
    imageListWrpper.appendChild(div);

}