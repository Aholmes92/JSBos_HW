// Object Constructor (able to build objects, where this will change and represent newly created variable)

var Account = function(name, balance) {
  this.name = name;
  this.balance = balance;

  this.deposit = function(amount) {
    this.balance = this.balance + amount;
    return this.balance;
  };
  this.withdraw = function(amount) {
    if (this.balance - amount > 0) {
    this.balance = this.balance - amount;
    return this.balance;
  } else {
    return "You have insufficient funds";
    }
  };
};


// Object Literal (one object. this represents the one 'bank')
var Bank = {
    accounts: [],
    enroll_new_account: function(name, balance) {
      var new_account = new Account(name, balance);
      this.accounts.push(new_account);
      return new_account;
    },

    total_balance: function() {
      var balances = this.accounts.map( function(account) { return account.balance });
      return balances.reduce(function(a, b) { return a + b });
  },
  account_search: function(name) {
    var i=0; 
    while (i < this.accounts.length) {
      if (this.accounts[i].name === name) {
        return i;
      } else {
        i = i + 1;
      }  
    }
  },

  transfer: function(sender, receiver, value) {
    var sender = this.account_search(sender);
    var receiver = this.account_search(receiver);
    this.accounts[sender].withdraw(value);
    this.accounts[receiver].deposit(value);
    var summary = {}
      summary[this.accounts[sender].name] = this.accounts[sender].balance;
      summary[this.accounts[receiver].name] = this.accounts[receiver].balance;
    return summary;
  }
};
