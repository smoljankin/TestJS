//"use strict"

let money,
    time;

    money = prompt("Ваш бюджет на месяц?", "");
    time= prompt("Введите дату в формате YYYY-MM-DD", "");

let appData =  {
    money: money,
    time: time,
    expenses: {
    },
    optionalExpenses: {
    },
    income: [],
    savings: false

}

let x1 = prompt("Введите обязательную статью расходов в этом месяце", 0);
let y1 = prompt("Во сколько обойдется?", 0);

appData.expenses[x1] = y1;

let x2 = prompt("Введите обязательную статью расходов в этом месяце", 0);
let y2 = prompt("Во сколько обойдется?", 0);

appData.expenses[x2] = y2;

alert(money / 30);
