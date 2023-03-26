const pokemons = ['Pikachu', 'Charmander', 'Bulbassaur', 'Squirtle', 'lucario', 'dragonite', 'Chicorita', 'Totodile']
console.log(pokemons)

//adicionar elementos em um array
//Push - inssere um novo elemento no final e retorna o tamanho do array
let tamanho = pokemons.push('Mewtwo')
console.log(pokemons)
console.log(tamanho)

//unshift - inssere um novo elemento no começo e retorna o tamanho do array
tamanho = pokemons.unshift('Carvana')
console.log(pokemons)
console.log(tamanho)

//remover elementos
//pop - remove o ultimo elemento do array e retorna este valor
let ultimoElemento = pokemons.pop()
console.log(pokemons)
console.log(ultimoElemento)

// shift remove o primeiro elemento do array e retorna este valor

ultimoElemento = pokemons.shift()
console.log(pokemons)
console.log(ultimoElemento)


//Pesquisar elementos
// Includes - Verifica se o elemento existe no array e retorna booleano

const inclui = pokemons.includes('Pikachu')
console.log(inclui)

// indexOf - Verifica se o elemento existe e retorna a posição dele

const indice = pokemons.indexOf('Pikachu')
console.log(indice)


//Cortar e Concatenar
//Slice  Copia determinada parte do array

const iniciais = pokemons.slice(1, 4)
const outros = pokemons.slice(-4)
console.log(iniciais)
console.log(outros)

//concat concatena um array com outro, podendo adicionar um elemento tambem
const time = iniciais.concat(outros, 'pikachu')
console.log(time)

//Substituição dos Elementos
//splice subistitui um valor em seu indice e retorna o valor antigo
const elementosRemovidos = time.splice(indice, 1, 'Raichu')
console.log(time)
console.log(elementosRemovidos)

// iterar sobre os elementos
for (let i = 0; i < time.length; i++) {
  let elemento = time[i]
  console.log(elemento + " Se encontra na posição" + i)
}