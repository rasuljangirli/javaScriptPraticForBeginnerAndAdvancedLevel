//?
let langs = ["C#", "C++", "JavaScript", "Java"];
let lang1, lang2, lang3, lang4;

// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];

[lang1, lang2, lang3, lang4] = langs;

[lang1, lang2, lang3, lang4] = [...langs];


//  console.log(lang1,lang2,lang3,lang4);


//?
const hesap = (a, b) => {
    const topla = a + b;
    const cikar = a - b;
    const carp = a * b;
    const bol = a / b;

    const dizi = [topla, cikar, carp, bol];
    return dizi;
};

let [a, b, c, d] = hesap(4, 2);
// console.log(a,b,c,d);

let person = {
    firsName: "Rasul",
    lastName: "Jangirli",
    salary: 5000,
    age: 23
}
// let isim,soyisim,maas,yas;
// isim = person.firsName;
// soyisim = person.lastName;
// maas = person.salary;
// yas = person.age;


let { firsName: isim, lastName: soyisim, salary: maas, age: yas } = person;

// console.log(isim,soyisim,maas,yas);





