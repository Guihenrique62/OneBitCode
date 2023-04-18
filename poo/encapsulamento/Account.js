class Account {
  #password
  #balance
  constructor(user){
    this.email = user.email
    this.#password = user.password
    this.name = user.name
    this.#balance = 0
  }


  addBalance(email,password,value){
    if(this.#authenticate(email,password)){
      this.#balance += value
      return this.#balance
    }else{
      return 'Failed to Login'
    }
  }
  removeBalance(email,password,value){
    if(this.#authenticate(email,password)){
      this.#balance -= value
      return this.#balance
    }else{
      return 'Failed to Login'
    }
  }
  
  #authenticate(email,password){
    return this.email === email && this.#password === password

  }
}






module.exports = Account