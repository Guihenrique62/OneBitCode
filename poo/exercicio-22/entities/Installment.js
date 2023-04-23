module.exports = class Installment{
  constructor(value,num){
    this.value = value
    this.num = num
    this.status = 'pending'
  }
}