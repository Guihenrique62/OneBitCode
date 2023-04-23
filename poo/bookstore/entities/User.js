module.exports = class User {
  constructor(name,email,password,balance = 100){
    this.name = name
    this.email = email
    this.password = password
    this.balance = balance
  }

  addBalanceUser(quantity){
    this.balance += quantity
  }

  removeBalanceUser(quantity){
    this.balance -= quantity
  }
}