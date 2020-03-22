let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');
let fstExpense = prompt("Введите обязательную статью расходов в этом месяце");
let fstCost = prompt("Во сколько обойдется?");
let secExpense = prompt("Введите обязательную статью расходов в этом месяце");
let secCost = prompt("Во сколько обойдется?");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpenses: {},
    income: [],
    savings: false
};
appData.expenses[fstExpense] = fstCost;
appData.expenses[secExpense] = secCost;

alert(appData.budget / 30);