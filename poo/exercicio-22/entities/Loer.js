const Installment = require('./Installment')

module.exports = class Loer{
  static #fee = 1.05

  constructor(value,installments){
    this.value = value
    this.installments = []
    for(let i = 1; i<=installments;i++){
      this.installments.push(new Installment((value * Loer.#fee) / installments,i))
    }
    this.createdAt = new Date()
  }
  static set fee(newFeePercentege){
    Loer.#fee = 1 + (newFeePercentege / 100)
  }
  static get fee(){
    return Loer.#fee
  }
}