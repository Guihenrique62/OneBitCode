  function register(element){
    const username1 = element.children.username.value
    const password1 = element.children.password.value
    const passwordConfirmation1 = element.children.passwordConfirmation.value

    if(password1 === passwordConfirmation1){
      alert('Usario Registrado!')
    }else{
      alert('As senhas não conferem')
    }
  }