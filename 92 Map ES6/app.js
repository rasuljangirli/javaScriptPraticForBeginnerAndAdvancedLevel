
const map1 = new Map();


map1.set(34,"Istanbul");
map1.set(6,"Ankara");
map1.set(35,"Izmir");
map1.set(1,"Adana");

//? get() 
// console.log(map1.get(6));

// let value;


// value = map1.size;

//? delete() 
// map1.delete(34);
// value = map1.size;

//? map b
// value = map1.has(34);

// console.log(value);

//? map
// for([key,value] of map1) {
//     console.log(key,value);
// }

//? burada keys() ile biz map1-in keylerini aldiq sadece onlarin uzerinde done bilmezdik cunki arrey formatinda deyillerdi ve biz Array.from() metodu ile keysleri Arreye cevirdik daha sonra ise uzerinde forEach ile donduk.  yazilan console.log(key, map1.get(key))) burada hem keyi hemde metoddan getleyerek keye sahib deyerleri aldiq ve consola yazdirdiq
// const keys = Array.from(map1.keys());                    //! uzun yol
// keys.forEach( key => console.log(key, map1.get(key)));

// for(let key of map1.keys()) {              //! qisa yol
// consol.log(key);
// };                                           


//? valueleri yazdirmaq
// for( let value of map1.values()) {
//     console.log(value)
// }


//? Map-den Arreye kecmek
//todo  Array.from(); istifade edilir
// const myArray = Array.from(map1);
// myArray.forEach( x => console.log(x[0], x[1]));

//? Arreyden map-a  kecid etmek
//todo Arrayden mapa kecid etmek ucun sadece verilen arreyi new Map() yazib motericede yaZmaqdir asaqidaki kimi
// const array = [
//     [34,"istanbul"],
//     [6,"Ankara"], 
//     [35,"izmir"], 
//     [1,"Adana"],
// ]
 
// const myMap = new Map(array);
// console.log(myMap);


