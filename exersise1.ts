type BankAccount = {
  money: number;
  deposite: (val: number) => void;
};

let bankAccount: BankAccount = {
  money: 2000,
  deposite(value: number) {
    this.money += value;
  }
};

type Customer = {
  name: string;
  bankAccount: BankAccount;
  hobbies: string[];
};

let mySelf: Customer = {
  name: "Vj",
  bankAccount: bankAccount,
  hobbies: ["Chess", "coding"]
};

mySelf.bankAccount.deposite(3000);
console.log(mySelf);
