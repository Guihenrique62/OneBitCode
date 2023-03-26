// variaveis no escopo externo podem ser usadas pelo interno

let pokemon = 'charmander'
function evoluir() {
  pokemon = 'Charmeleeon'
}
console.log(pokemon)
evoluir()
console.log(pokemon)



//Variaveis no escopo interno não podem ser utilizada no externo


function criarAnimal() {
  let animal = 'gato'
}
criarAnimal()
console.log(animal)




//Variaveis criadas com o var podem ser utilizada no escopo externo

function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true
    let situacao = 'aprovado'
  } else {
    var aprovado = false
    let situacao = 'reprovado'
  }
  console.log(nota)
  console.log(aprovado)
  console.log(situacao)
}
avaliarNota(61)
avaliarNota(59)



//O var dentro de uma function não é usado no escopo externo, apenas em if, switch etc

function ola() {
  var texto = 'Ola,  mundo!'
}
console.log(texto)





//A variavel var é criada como se estivesse em cima no arquivo,porem sem valor
//A variavel let é criada apenas na linha em que foi criada

console.log(nome)
console.log(sobrenome)

var nome = 'isaac'
let sobrenome = 'Fontes'

console.log(nome)
console.log(sobrenome)