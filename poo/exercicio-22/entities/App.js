const User = require("./User")
const Deposit = require("./Deposit")
const Transfer = require("./Transfer")
const Loer = require("./Loer")


module.exports = class App{
  static #users = []

  static findUser(email){
    const user = this.#users.find(user => user.email === email)
    return user ?? null
  }

  static createUser(email,name){
    const userExists = App.findUser(email)
    if(!userExists){
      this.#users.push(new User(email,name))
    }
  }

  static deposit(email,value){
    const user = App.findUser(email)
    if(user){
      const newDeposit = new Deposit(value)
      user.account.addDeposit(newDeposit)
    }
  }

  static transfer(fromUserEmail,toUserEmail, value){
    const fromUser = App.findUser(fromUserEmail)
    const toUser = App.findUser(toUserEmail)

    if(fromUser && toUser){
      const transfer = new Transfer(fromUser,toUser,value)
      fromUser.account.addTransfer(transfer)
      toUser.account.addTransfer(transfer)
    }
  }

  static takeLoan(email,value,numberOfInstallments){
    const user = App.findUser(email)
    if(user){
      const loan = new Loer(value, numberOfInstallments)
      user.account.addLoan(loan)
    }
  }

  static changeLoanFee(newFeePercentege){
    Loer.fee = newFeePercentege
  }
}