"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("ВВедите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        alert("Нельзя пропустить вопрос!");
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses:{},
    income:[],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "");
            let b = prompt("Во сколько обойдется?", "");
        
            if ((typeof(a)) == 'string' && (typeof(a)) !=null && (typeof(b)) == 'string' && (typeof(b)) !=null
            && a!='' && b!= '' && a.length < 30 ) {
                appData.expenses[a] = b;
            } else {
                alert('введите правильные данные!')
                i = i-1;
            }
        };
    },

    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let a = prompt("Статья необязательных расходов");
            optionalExpenses[i] = a;
        }
    },
    
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);

        console.log("Дневной бюджет равен " + appData.moneyPerDay);
    },

    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },

    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита" + appData.monthIncome.toFixed(2));
        }
    },

    chooseIncome: function() {
        let items = prompt("Что принесет дополгительный доход?(Перечислите через запятую)", "" );
           while (typeof items != 'string' || items == null || items == "") {
                alert("Введите правильное значение!");
                items = prompt("Что принесет дополгительный доход?(Перечислите через запятую)", "" );
           } 
        appData.income = items.split(", ");
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();     

        appData.income.forEach((item,i) => {
            console.log("Способы доп. заработка: " + (i+1)+" "+ item);
        })
    }
   
};



for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}



