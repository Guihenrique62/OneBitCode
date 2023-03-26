const personagens = [
  { nivel: 42, nome: 'thrall', raca: 'Orc', classe: 'Xama' },
  { nivel: 28, nome: 'Garroch', raca: 'Orc', classe: 'Guerreiro' },
  { nivel: 39, nome: 'Varock', raca: 'Orc', classe: 'Guerreiro' },
  { nivel: 37, nome: 'uther', raca: 'Humano', classe: 'Paladino' },
  { nivel: 26, nome: 'jeina', raca: 'Humano', classe: 'Mago' },
  { nivel: 39, nome: 'Tyrande', raca: 'Elfo', classe: 'Sacerdote' },
  { nivel: 29, nome: 'Muradin', raca: 'anao', classe: 'Guerreiro' }
]

// Map, é uma maneira de copiar certos elementos para outro array 

const nomes = []
for (let i = 0; i < personagens.length; i++) {
  nomes.push(personagens[i].nome)
}
console.log(nomes)

//Função Map

const nome = personagens.map(function (personagem) {
  return personagem.nome
})

console.log(nome)





//Filter, Filtra elementos especificos de um array e cria um novo

const orcs = []
for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === "Orc") {
    orcs.push(personagens[i])
  }
}
console.log(orcs)

//função Filer

const orc = personagens.filter(function (personagem) {
  return personagem.raca === 'Orc'
})
console.log(orc)



//Reduce transforma o array em outro valor

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem)
  } else {
    valorAcumulado[personagem.raca] = [personagem]
  }

  return valorAcumulado
})

console.log(racas)


//Sort ordena arrays

const personagensPorNivel = personagens.slice().sort(function (a, b) {
  return b.nivel - a.nivel
})

console.log(personagens)
console.log(personagensPorNivel)