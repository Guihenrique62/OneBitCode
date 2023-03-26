function calculateTrieagle() {
  let base = parseFloat(prompt('Insira a base do triângulo:'))
  let height = parseFloat(prompt('Insira a altura do triangulo:'))
  return base * height / 2
}
function calculateRetangle() {
  let base = parseFloat(prompt('Insira a base do retângulo:'))
  let height = parseFloat(prompt('Insira a altura do retângulo:'))
  return base * height
}
function calculateSquare() {
  let side = parseFloat(prompt('Insira o tamanho de um dos lados do quadrado:'))
  return side * side
}
function calculateTrapeze() {
  let minorBase = parseFloat(prompt('Insira o tamanho da base menor do Trapézio:'))
  let biggerBase = parseFloat(prompt('Insira o tamanho da base maior do Trapézio:'))
  let height = parseFloat(prompt('Insira a altura do Trapézio:'))
  return (minorBase + biggerBase) * height / 2
}
function calculateCircle() {
  let ray = parseFloat(prompt('Insira o raio do circulo:'))
  return 3.14 * (ray * ray)
}

function displayMenu() {
  return prompt(
    `Escolha uma das opções abaixo:
  1 - Área do triângulo
  2 - Área do retângulo
  3 - Área do quadrado
  4 - Área do trapezio
  5 - Área do circulo
  6 - Sair`);
}
function execute() {
  let input = ''

  do {
    input = displayMenu()
    let result

    switch (input) {
      case '1':
        result = calculateTrieagle()
        break
      case '2':
        result = calculateRetangle()
        break
      case '3':
        result = calculateSquare()
        break
      case '4':
        result = calculateTrapeze()
        break
      case '5':
        result = calculateCircle()
        break
      case '6':
        alert('Saindo...')
        break
      default:
        alert("Opção invalida..")
    }

    if (result) {
      alert('O resultado é: ' + result)
    }
  } while (input !== '6')

}

execute()