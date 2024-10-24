
//! Sual olaraq dusunək ki 153 ədədi armstrong ədəddirmi?

//todo Armstrong ədəd, ədədin hər bir rəqəminin 3-cü dərəcədən qüvvətə yüksəldilməsi və bu alınan nəticələrin toplanması ilə ədədin özü bərabər olan ədədlərə deyilir. 

//? Məsələn 1*1*1 + 5*5*5 + 3*3*3 = 153 bu Armstrong ədəddir çünki özünə bərabər oldu. Bunu kodda umumiləşmiş formada yazağ.

let number = prompt("Enter Number");
let total = 0;

for (let i = 0; i < number.length; i++) {
    let digit = number.charAt(i); //? charAt metodu yalniz string olanlar ucundur ve indeks nomresine gore deyisgende indekse uygun elementi secib tapir ve getirir
    total += digit * digit * digit;  //? Məsələn düşünün burada hansı methoddan istifadə edə bilərik, digiti 3 dəfə yazmaq əvəzinə ))
}

if (Number(number) == total) {
    alert(" It is an Armstrong number ");

} else {
    alert(" İt is not an Armstrong number ");
}