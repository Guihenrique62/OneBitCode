const Account = require("./Account")

const guilherme = {
  name: 'Guilherme Henrique',
  email: 'email@gmail.com',
  password: '1234'
}

const guilhermeAccount = new Account(guilherme)

console.log(guilhermeAccount.addBalance('email@gmail.com','1234',5))
