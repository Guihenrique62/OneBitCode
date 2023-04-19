const User = require("./User");
const UserAdm = require("./UserAdm");

const normalUser = new User('email@gmail.com', '123')
console.log(normalUser.verification('email@gmail.com','123'))

const admUser = new UserAdm('email@gmail.com', '123')
console.log(admUser.verificationAdm('email@gmail.com','123', '9090'))
