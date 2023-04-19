class User {
  password
  constructor(email,password){
    this.email = email
    this.password = password
  }

  verification(email,password){
    if(this.email === email && this.password === password){
      return 'Usuario normal Logado'
    }else{return 'Senha ou Email invalido'}
  }
}

module.exports = User