const houre = document.querySelector("#hour_p");
const minute = document.querySelector("#minute_p");
const second = document.querySelector("#second_p");

function hourUI() {
    let data = new Date();

    houre.innerHTML = dabbleNumber(data.getHours());
    minute.innerHTML = dabbleNumber(data.getMinutes());
    second.innerHTML = dabbleNumber(data.getSeconds());
}

// Burada x üçün şərt yazırığ ki tək rəqəmli olanda əvvəlinə 0 yazılsın
function dabbleNumber(x) {
    return x < 10 ? `0${x}` : x;
}
hourUI();
setInterval(hourUI, 1000)