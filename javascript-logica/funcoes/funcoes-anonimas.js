//Funções podem ser interpretadas como valores em uma variavel
function somar(a, b) {
  return a + b
}
//a variavel operação recebeu o valor da função, passando a ser uma função tbm
const operacao = somar
console.log(operacao(4, 5))

const subtrair = function (a, b) {
  return a - b
}
console.log(subtrair(36, 13))


//uma função anônima se comporta da mesma forma de uma variavel, portanto só pode ser executada após ser declarada

olaMundo()
oiMundo()

function olaMundo() {
  console.log('Ola mundo')
}

const oiMundo = function () {
  console.log('Oi mundo')
}