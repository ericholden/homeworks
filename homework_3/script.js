let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце");
        let b = prompt("Во сколько обойдется?");

        if ((typeof (a)) === 'string' && isNaN(a) === true  &&  (typeof (a)) != null  
        && (typeof (b)) != null  &&  a != ''  &&  b != ''  &&  a.length < 50) {
            appData.expenses[a] = b;
        } else {
            alert("Please enter correct values");
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Низкий уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a1 = prompt("Статья необязательных расходов?");
        let b1 = i;

        if ((typeof (a1)) === 'string' && isNaN(a1) === true && 
        (typeof (a1)) != null && a1 != '' && a1.length < 50) {
            appData.optionalExpenses[b1] = a1;
        } else {
            alert("Please do not enter only numbers!", '');
            i--;
        }
    }
}
chooseOptExpenses();

function depositSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма ваших накоплений?", ''),
            percent = +prompt("Под какие проценты?");
        while (isNaN(save) === true) {
            save = +prompt("Какова сумма ваших накоплений?", '');
        }

        appData.MonthIncome = save / 100 / 12 * percent;
        alert("Ваш доход с депозита в месяц: " + appData.MonthIncome);
    }
}
depositSavings();