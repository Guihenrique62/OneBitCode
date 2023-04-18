class User{
    constructor(fullname,email,password,){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email,password){
        if(email == this.email && password == this.password){
            alert("Logado com Sucesso")
        }else{
            alert("Usuário ou senha Incorreto")
        }
    }
    
}

const inputName = prompt('Escreva seu nome Completo:')
const inputEmail = prompt('Escreva seu e-mail:')
const inputPassword = prompt('Escreva sua senha:')
const user = new User(inputName,inputEmail,inputPassword)
alert('Usuário Cadastrado')


const inputLoginEmail = prompt('Para realizar o login Digite seu e-mail:')
const inputLoginPassword = prompt('Agora a senha:')

User.login(inputLoginEmail,inputLoginPassword)

