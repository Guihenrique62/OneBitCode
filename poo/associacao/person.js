const Address = require("./address")

class Person{
  constructor(name,yearOld,CPF,cep,street,city,state,country){
    this.name = name
    this.yearOld = yearOld
    this.cpf = CPF
    this.address = new Address(cep,street,city,state,country)
  }
}

module.exports = Person