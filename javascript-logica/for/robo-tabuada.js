const inputNumber = parseFloat(prompt("Insira um numero:"))
let result = 0
let tabue = ''

for (let i = 1; i <= 20; i++) {
  result = inputNumber * i;
  tabue += `${inputNumber} X ${i} = ${result}\n`
}

alert(`A tabuada de ${inputNumber} é:\n${tabue}`)