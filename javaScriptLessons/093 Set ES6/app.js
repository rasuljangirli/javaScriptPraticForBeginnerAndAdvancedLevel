//! Set in Map=dan ferqi odur ki deyerleri key ve velue seklinde saxlamir ikinci ferqi ise odur ki bir deyeri yalniz bir defe ozunde saxlayir bir deyeri bir nece defe ozunde saxlamir.

//? Set olusturmak ucun new Set() yazmaqimiz kifayet edir
const set1 = new Set();

set1.add("Resul");
set1.add(13);
set1.add(true);
set1.add([1,2,3,4,5,6]);
set1.add({firstName: "Rasul", lastname: "Jangirli", salary: 234 , age: 24});


//? add() metodu ile yaratdiqimiz set-e deyer elave ede bilirik  burada 


//? get() metodu ile set icerisinden her hansi bir deyeri cagura bilirik.
// console.log(set1.get(13));

// let value;

//? size ile setin uzunluqunu ala bilirik. Arreylerdeki lengt kimi deye bilerik
// value = set1.size;

//? delete() metodu ile set icerisinden deyer sile bilirik
// set1.delete(34);
// value = set1.size;

//?set bu deyere sahibmi set icerisinde bu deyer varmi bunun ucun has metodu istifade edilir. ve ize booelen deye donur
// value = set1.has(34);

// console.log(value);

//? set uzerinde for of ile done bilirik.
// for(let value of set1) {
//     console.log(value);
// }
                                         





//? set-den Arreye kecmek
//todo  Array.from(); istifade edilir
// const myArray = Array.from(set1);
// myArray.forEach( x => console.log(x));

//? Arreyden set-a  kecid etmek
//todo Arrayden set-e kecid etmek ucun sadece verilen arreyi new Set() yazib motericede yaZmaqdir asaqidaki kimi
// const array = [
//     [34,"istanbul"],
//     [6,"Ankara"], 
//     [35,"izmir"], 
//     [1,"Adana"],
// ]
 
// const mySet = new Set(array);
// console.log(mySet);


