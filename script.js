let money = 180000,
    income = "40000",
    addExpenses = "2200, 1000, 9000",
    deposit = false,
    mission = 94000,
    period = 2,
    budgetDay = money / 30;

console.log("money= " + money +" "+ "руб");
console.log("income= " + income +" "+ "руб");
console.log("addExpenses= " + addExpenses);
console.log(deposit);
console.log(mission + "$");
console.log(period);
console.log(typeof(money));
console.log(typeof(income));
console.log(deposit);
console.log(addExpenses.length);
console.log("Period = " + period + " " + "месяца" + " " + "Цель заработать " + mission + " " + "долларов");
console.log(addExpenses.toLowerCase().split(", "));
console.log('budgetDay: ', budgetDay);
