let firstName = prompt('Digite seu Primeiro Nome:');
let secondName = prompt('Digite seu Sobrenome:');
let study = prompt('Digite seu Campo de estudo:');
let birthday = prompt('Digite seu ano de nascimento:');

parseFloat(birthday);
birthday = 2023 - birthday;

console.log(`Seu nome é ${firstName + ' ' + secondName}`)
console.log(`Seu campo de estudo é ${study}`)
console.log(`Sua idade é ${birthday}`)