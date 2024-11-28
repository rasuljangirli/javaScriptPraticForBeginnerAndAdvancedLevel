const form = document.querySelector("#form");
const input = document.querySelector("#search");
const divUI = document.querySelector(".container_1");

// BaseUrl yazıb istifadə etməyiniz daha yaxşı olar.

form.addEventListener("submit", (e) => {
    e.preventDefault();
    check();
})

async function getInfo() {
    try {
        let user = input.value;
        const resp = await fetch(`https://api.github.com/users/${user}`);
        const respData = await resp.json();

        writeUİ(respData);
        getRepos(user)

    } catch (error) {
        alert(error);
    }
}

async function getRepos(user) {
    const resp = await fetch(`https://api.github.com/users/${user}/repos`);
    const respData = await resp.json();

    addReposToCard(respData);
}

async function writeUİ(data) {
    const cardHTML =
        `
    <div class="container_2">
        <div class="img_container">
            <img src="${data.avatar_url}" alt="${data.name}">
        </div>

        <div class="about_container">
            <h3 class="name">${data.login}</h3>
            <div class="social">
                <ul>
                    <li>Followers <span>${data.followers}</span></li>
                    <li>Following <span>${data.following}</span></li>
                    <li>Repos <span>${data.public_repos}</span></li>
                </ul>
            </div>
            <div class="main"></div>
        </div>
    </div>
    `
    divUI.innerHTML = cardHTML;
};

function addReposToCard(repos) {
    const reposE1 = document.querySelector(".main");

    repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5).forEach((element) => {

            const a = document.createElement("a");

            a.classList.add("repo");
            a.href = element.html_url;
            a.target = "_blank";
            a.innerText = element.name;
            reposE1.appendChild(a);
        });
}

function check() {
    if (input.value) {
        getInfo();
        input.value = "";
    } else {
        alert("Input Kutusu Bos Birakilamaz")
    }
}