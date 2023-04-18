class Address{
  constructor(cep,street,city,state,country){
    this.cep = cep
    this.street = street
    this.city = city
    this.state = state
    this.country = country
  }

  fullAddress(){
    return `CEP: ${this.cep}, rua ${this.street}, ${this.city}/${this.state} - ${this.country}`
  }
}

module.exports = Address