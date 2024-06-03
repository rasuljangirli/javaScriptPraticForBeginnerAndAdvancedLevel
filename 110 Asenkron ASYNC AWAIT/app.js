
const button = document.querySelector("#button");

// button.addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => {
//             return response.json()
//         })
//         .then((post) => {
//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//                 .then((response) => {
//                     return response.json()
//                 })
//                 .then((comments) => {
//                     console.table(comments);
//                 })
//         })
// })



button.addEventListener("click", async () => {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/5")).json();
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();

    console.table(comments);
})
