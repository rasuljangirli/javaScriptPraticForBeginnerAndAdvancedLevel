 //! Esasen yadda saxlamaliyiq ki biz her hansi bir bilgiyi Locak ve ya section storice elave edirikse orada string olaraq qebul edilir sonra onu get deyib cagirdiqimizda ise yene de string donur bunun ucun arreyleri gomduyumuz zaman json ile arrey olaraq kayd etmeliyiz ayni zamanda get etdiyimiz zamanda json olarak cagirmamiz gerek yoxsa array kimi yox sadece string kimi donmus olar.
 
 //? Bilgi Ekleme
localStorage.setItem("1" , "Resul");
localStorage.setItem("2" , "Ali");
localStorage.setItem("3" , "Mehdi");
localStorage.setItem("4" , "Nihan");
localStorage.setItem("5" , "Xedice");
localStorage.setItem("6" , "Medine");
localStorage.setItem("7" , "Ulduz");

//? Deyer Alma
/*
let value = localStorage.getItem("1");

if (value === null) {
    console.log("Sunucuda Deyer Bulunmadi");
} else {
    console.log("Deyer Bulundu : " + value);
}
*/

//? Bilgi Silme
// localStorage.removeItem("3");

//? Topluy Temizleme
// localStorage.clear();

//? Array Elave etmek ve geri cagirmaq
let bussines = ["RCgroup", "RCode", "RCmeat", "RCcargo", "RCtecnolojik",];

localStorage.setItem("bussines" , JSON.stringify(bussines));

let returnBussines = JSON.parse(localStorage.getItem("bussines"));
returnBussines.forEach(function(bussines){
    console.log(bussines);
})
// console.log(returnBussines);





