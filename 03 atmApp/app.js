/*
1- balance goruntuleme
2- Pul ccekmek
3- Pul yatirmaq
4- Sistemden cixis
*/
const newLine = " \r\n ";
let balance = 1000;
let infoText = " Please select " + newLine
    + " 1 = Balance amount" + newLine
    + " 2 - Withdrawal " + newLine
    + " 3 = Invest money " + newLine
    + " 4 - Log out of the system ";

let enteredValue = Number(prompt(infoText));

switch (enteredValue) {
    case 1:
        alert("Youre balance : " + balance + " USD");
        break;

    case 2:
        let moneyValue = Number(prompt(" Withdrawal amount "));
        if (moneyValue <= balance) {
            // if bloku ugurlu oldugu halda bu hisse calisacaq
            balance = balance - moneyValue;
            alert(" Transaction completed Your current balance: " + balance + " USD");
        } else {
            alert(" You do not have enough funds in your balance " + balance + " USD");
        }
        break;

    case 3:
        let investMoney = Number(prompt(" Investment amount "));
        balance = investMoney + balance;
        alert("Update balance: " + balance);
        break;

    case 4:
        alert(" Exit...");
        break;

    default:
        alert("Wrong: Selected 1,2,3,4");
        break;
}