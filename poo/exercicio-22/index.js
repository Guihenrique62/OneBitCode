const App = require("./entities/App");

App.createUser('guilherme.com', 'guilherme')
App.createUser('lucas.com', 'lucas')
App.createUser('isaac.com', 'isaac')

App.deposit('guilherme.com', 100)

App.transfer('guilherme.com','lucas.com',20)

App.changeLoanFee(10)
App.takeLoan('isaac.com',2000, 24)


console.log(App.findUser('guilherme.com'))
console.log(App.findUser('guilherme.com').account)
console.log(App.findUser('lucas.com'))
console.log(App.findUser('lucas.com').account)
console.log(App.findUser('isaac.com'))
console.log(App.findUser('isaac.com').account)
console.log(App.findUser('isaac.com').account.loans[0].installments)

