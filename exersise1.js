"use strict";
var bankAccount = {
    money: 2000,
    deposite: function (value) {
        this.money += value;
    }
};
var mySelf = {
    name: "Vj",
    bankAccount: bankAccount,
    hobbies: ["Chess", "coding"]
};
mySelf.bankAccount.deposite(3000);
console.log(mySelf);
