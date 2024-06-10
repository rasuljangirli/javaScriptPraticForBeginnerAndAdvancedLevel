
function prepareURL(url, id) { // bu function ide gore url-i formalasdirir
    if (id === null) {
        return url;
    } else {
        return `${url}?postId=${id}`;
    }
}

function getComments(url, id) { // b u function ise Ajax sorgusu gonderi
    let newURL = prepareURL(url, id);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    });
    xhr.open("GET", newURL);
    xhr.send();
}
// getComments("https://jsonplaceholder.typicode.com/comments", null); burada functionu cagirdiq linki verdik



function getData(url) { // Bu functionda Ajax sorgusu goonderir
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        };
    });
    xhr.open("GET", url);
    xhr.send();
};

//! getData("https://jsonplaceholder.typicode.com/users"); 
// burada functionu cagirdiq linki verdik
