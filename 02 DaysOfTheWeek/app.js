//! Days of the week

const newLine = "\r\n";

let metin = "1" + newLine + "2" + newLine + "3" + newLine + "4" + newLine + "5" + newLine + "6" + newLine + "7";

let sayi = Number(prompt(metin));

switch (sayi) {
    case 1:
        console.log(" Monday ");
        break;

    case 2:
        console.log("  Tuesday ");
        break;

    case 3:
        console.log(" Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log(" Saturday ")
        break;

    case 7:
        console.log(" Sunday ");
        break;

    default:
        console.log(" Error :)) ");
        break;
}