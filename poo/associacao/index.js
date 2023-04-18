const Address = require("./address");
const Person = require("./person");

//const addr = new Address(74610176, 'Araguari','Goiania','GO', 'Brasil')
const person = new Person('Guilherme',23,71111111111,74610176, 'Araguari','Goiania','GO', 'Brasil')
console.log(person)
console.log(person.address.fullAddress())