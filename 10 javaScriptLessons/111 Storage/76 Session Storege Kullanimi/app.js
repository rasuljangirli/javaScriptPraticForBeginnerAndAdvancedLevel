 //! Esasen yadda saxlamaliyiq ki biz her hansi bir bilgiyi Locak ve ya section storice elave edirikse orada string olaraq qebul edilir sonra onu get deyib cagirdiqimizda ise yene de string donur bunun ucun arreyleri gomduyumuz zaman json ile arrey olaraq kayd etmeliyiz ayni zamanda get etdiyimiz zamanda json olarak cagirmamiz gerek yoxsa array kimi yox sadece string kimi donmus olar.
  

sessionStorage.setItem("1" , "Resul"); 
sessionStorage.setItem("2" , "Ali"); 
sessionStorage.setItem("3" , "Efe"); 



// sessionStorage.removeItem("2");

//? Deyer Almaq

// let value = sessionStorage.getItem("2");

// if (value !== null) {
//     console.log(" Deger Alindi. Alinan Deyer : " + value);
// } else {
//     console.log("Deyer Bulunmadi");
// }



// sessionStorage.clear();

let names = ["Resul", "Ali","Nihan","Mehdi","Xedice","Ulduz","Medine"];
sessionStorage.setItem("names",JSON.stringify(names));

let value = JSON.parse(sessionStorage.getItem("names"));

value.forEach(function(item){
    console.log(item);
})

