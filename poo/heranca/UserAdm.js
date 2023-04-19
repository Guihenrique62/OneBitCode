const User = require("./User");

class UserAdm extends User{
  #admpassword
  constructor(email,password){
    super(email,password)
    this.#admpassword = '9090'
  }

  verificationAdm(email,password, admpassword){
    if(this.email === email && this.password === password && this.#admpassword == admpassword){
      return 'Usuario Admin Logado'
    }else{return 'Senha ou Email invalido'}
  }
}

module.exports = UserAdm