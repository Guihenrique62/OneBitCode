//array bidimensional
//é um array cujo um elemento é outro array

const arr = [
  ['a', 'b', 'c', ['d', 'e']],
  ['1', '2', '3']
]

console.log(arr)
console.log(arr[0])
console.log(arr[0][3])

const matriz = [
  ['l1, c1', 'l1, c2', 'l1, c3', 'l1, c4', 'l1, c5'],
  ['l2, c1', 'l2, c2', 'l2, c3', 'l2, c4', 'l2, c5'],
  ['l3, c1', 'l3, c2', 'l3, c3', 'l3, c4', 'l3, c5'],
]

console.table(matriz)

matriz.push(["Nova Linha"])
matriz[0].push("Nova coluna")

console.table(matriz)

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j])
  }
  console.log(matriz[i])
}