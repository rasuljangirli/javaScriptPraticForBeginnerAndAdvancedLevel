
//? Fetch Api iki yollada gonderile biler asaqida birinci metod daxilinde her seyi teyin etdik ve sadece metoda url verdik. ikinci ornekde ise biz metodda sadece fetch-den donen deyeri promisi return etdik ve asaqida onu tutduq.
//! Diiqet olunmali yer odur ki burada biz 2 then yazmisiq ard arda bu o demekdir ki bir4inci thende biz ftch-den donen json verisini aliriq ve bu veri ozude bir promisdir uzerinde dayandiqda gormey olur. daha sonra ise buz onu return etdik bir ustdeki thene ve orada artiq 2ci then ile tutduq ve gelen datalari yazdirdiq ve isledik

function getUsers(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.table(data))
        .catch((err) => console.log(err))
        .finally(() => {
            console.log("%cHer zaman Burdayim",
                "color:red; font-size:50px;")
        })
}
getUsers("info.json")





function getComments(url) {
    return fetch(url);
}
getComments("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err))
    .finally(() => {
        console.log("%c Yine Burdayim",
            "color:red; font-size: 50px;");
    });