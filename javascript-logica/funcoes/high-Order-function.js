//high-order functions são functions q podem receber outras funções como parametros

function calcular(a, b, operacao) {
  console.log('Realizando uma operação')
  const resultado = operacao(a, b)
  return resultado
}

function somar(x, y) {
  console.log('realizando uma soma')
  return x + y
}

console.log(calcular(3, 5, somar))

console.log(calcular(8, 4, function (x, y) {
  console.log('Realizando uma subtração')
  return x - y
}))

//Exemplo de high-order Function
function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ['maça', 'Banana', 'Pera', 'tomate']

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}

//podemos abreviar isto na função forEach que é uma high-order function

lista.forEach(exibirElemento)