class Bank {
  constructor() {
    this.account_list = [];
  }

  addAccount(account) {
    this.account_list.push(account);
  }

  transfer(fromName, toName, amount) {
    const account_owner_from = this.account_list.find(
      (account_owner_from) => account_owner_from.owner === fromName,
    );

    try {
      if (account_owner_from.balance - Number(amount) < 0) {
        throw Error("You have not enough money to transfer this amount");
      } else {
        account_owner_from.balance -= Number(amount);
        const account_owner_to = this.account_list.find(
          (account_owner_to) => account_owner_to.owner === toName,
        );

        account_owner_to.balance += Number(amount);
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  showBalance() {
    this.account_list.forEach((account) =>
      console.log(account.owner + ": " + account.balance),
    );
  }

  getAccountList() {
    return this.account_list;
  }
}

class BankAccount {
  constructor(owner_, balance_) {
    this.owner = owner_;
    this.balance = balance_;
  }

  depodit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    try {
      if (this.balance - amount < 0) {
        throw Error("You have not enough money");
      } else {
        this.balance -= amount;
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

const bank = new Bank();
const readlineSync = require("readline-sync");

// Wait for user's response.

let userChoice;

let user_name = undefined;
let user_balance = undefined;
// let account_owner = undefined;

while (userChoice != 4) {
  userChoice = Number(
    readlineSync.question(
      "What would you want to do today?\n1 Create an account\n2 Transfer money\n3 Show you balance\n4 Exit\n",
    ),
  );

  if (userChoice === 1) {
    user_name = readlineSync.question("What is youe name?");
    user_balance = Number(readlineSync.question("Write your balance amount"));
    bank.addAccount(new BankAccount(user_name, user_balance));
    console.log("The acoount added successfully");
  } else if (userChoice === 2) {
    const from_name = readlineSync.question(
      "What is the name of the account owner you want to transfer money from?",
    );
    const to_name = readlineSync.question(
      "What is the name of the account's owner you want to transfer to money?",
    );
    const amount_transfer = Number(
      readlineSync.question("What is the amount you want to transfer?"),
    );
    console.log(amount_transfer);
    bank.transfer(from_name, to_name, amount_transfer);
  } else if (userChoice === 3) {
    bank.showBalance();
  }
}
