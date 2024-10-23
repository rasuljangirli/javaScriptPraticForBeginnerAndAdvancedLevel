//! 3 => 1*2*3 = 6


//todo   Ornek olaraq 3 reqemini goturub onun uzerinden umumi kodu yaza bilerik
//?  Burada girilen reqem neçədirsə həmən rəqəmə qədər i gələcək və hər dəfə total dəyişgəninin dəyəri güncəllənəcək sonda isə total bizə lazım olan nəticəni vermis olacaq

let number = Number(prompt("Enter Number"));
let total = 1;

for (let i = 1; i <= number; i++) {
    total = total * i;
}

alert("Result: " + total);