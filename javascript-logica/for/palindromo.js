const inputWord = prompt("Insira uma palavra:")
let backWord = ''

for (let i = inputWord.length - 1; i >= 0; i--) {
  backWord += inputWord[i]
}

if (inputWord === backWord) {
  alert(inputWord + " é um palindromo")
} else {
  alert(`${inputWord} não é um palidromo!\n${inputWord} !== ${backWord}`)
}