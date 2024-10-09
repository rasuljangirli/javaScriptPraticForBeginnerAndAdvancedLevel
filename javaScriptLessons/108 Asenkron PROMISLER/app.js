
// document.querySelector("body").style.background = "black";

//? Promise



/*
let check = true;
const promise1 = new Promise((resolve, reject) => {
    if (check) {
        resolve("Basarili");
    } {
        reject("Basarisiz");
    }
})

console.log(promise1)
*/


/*
let check = false;
function createPromise() {
    return new Promise((resolve, reject) => {
        if (check) {
            resolve(() => {

            });
        } else {
            reject("Uygulamada sorun var");
        };
    });
};

createPromise()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log("Her zaman calisir"));
*/


/*
function readStudent(url) {
    return new Promise((resoulve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    try {
                        const infos = JSON.parse(xhr.responseText)
                        resoulve(infos);
                    } catch (error) {
                        console.log("Dosya ile ilgili hata olusdu")
                    }
                }
            } catch (error) {
                reject(error);
            }
        })
        xhr.open("GET", url);
        xhr.send();
    })
}
readStudent("infolar.json")
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
    .finally(() => console.log("%c Finayl: Ben her zaman calisirim",
        "color:red;font-size:30px;"));
*/



/*
 function resoultPromise(url) {
     return new Promise((resolve, reject) => {
         const xhr = new XMLHttpRequest();
         xhr.addEventListener("readystatechange", () => {
             try {
                 if (xhr.readyState === 4 && xhr.status === 200) {
                     resolve(JSON.parse(xhr.responseText));
                 }
             } catch (error) {
                 reject(error);
             };
         });
         xhr.open("GET", url);
         xhr.send();
     });
 };

resoultPromise("infolar.json")
    .then((respons) => console.log(respons))
    .catch((err) => console.log(err))
    .finally(() => console.log("Hello her zaman varim"));

*/



// function getUser(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.addEventListener("readystatechange", () => {
//             try {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 };
//             } catch (error) {
//                 reject(error);
//             };
//         });
//         xhr.open("GET", url);
//         xhr.send();
//     });
// };


// getUser("https://jsonplaceholder.typicode.com/users/5")
//     .then((data) => {
//         return getUser(`https://jsonplaceholder.typicode.com/comments/${data.id}`);
//     }).then((users) => {
//         console.table(users);
//     })




//     .catch((err) => {
//         console.log(err, "lanet olsun")
//     })
//     .finally(() => console.log("%c Her Zaman Burdayim", "color:red; font-size:25px;"));



m
/*
function getUser(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(console.log(error));
            };
        });
        xhr.open("GET", url);
        xhr.send();
    });

};


getUser("infolar.json")
    .then((data) => {
        console.table(data);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("%cHer zaman Burdayim",
            "color:red; font-size:50px;");
    })
*/