// find letter
let text = prompt("Enter text");
let letter = prompt("Enter Number");
let result = findLetter(letter);
alert("Number: " + result +
    "and Letter :" + letter);

function findLetter(letter) {
    let toplam = 0;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === letter) {   // burada eger boyuk kicik herif ferqine baxmadan herifleri tapmaqini isteyirikse onda toLowerCase metodu ile sag ve solu eynilesdire bilerik.
            toplam += 1;
        }
    }
    return total;
}