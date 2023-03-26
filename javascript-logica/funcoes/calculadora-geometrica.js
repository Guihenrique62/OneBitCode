let input = ''
do {
  input = prompt(
    `Escolha uma das opções abaixo:
    1 - Área do triângulo
    2 - Área do retângulo
    3 - Área do quadrado
    4 - Área do trapezio
    5 - Área do circulo
    6 - Sair`);

  switch (input) {
    case '1':
      let triagleBase = parseFloat(prompt('Insira a base do triângulo:'))
      let triagleHeight = parseFloat(prompt('Insira a altura do triangulo:'))
      let triagleResult = triagle(triagleBase, triagleHeight)
      alert(`Um triângulo de base ${triagleBase} e de altura ${triagleHeight}\nTem uma área de ${triagleResult}`)

      break
    case '2':
      let rectagleBase = parseFloat(prompt('Insira a base do retângulo:'))
      let rectagleHeight = parseFloat(prompt('Insira a altura do retângulo:'))
      let rectagleResult = rectangle(rectagleBase, rectagleHeight)
      alert(`Um retângulo de base ${rectagleBase} e de altura ${rectagleHeight}\nTem uma área de ${rectagleResult}`)

      break
    case '3':
      let squareSide = parseFloat(prompt('Insira o tamanho de um dos lados do quadrado:'))
      let squareResult = square(squareSide)
      alert(`Um quadrado com lados de ${squareSide}\nTem uma área de ${squareResult}`)

      break
    case '4':
      let trapezeMinorBase = parseFloat(prompt('Insira o tamanho da base menor do Trapézio:'))
      let trapezeBiggerBase = parseFloat(prompt('Insira o tamanho da base maior do Trapézio:'))
      let trapezeHeight = parseFloat(prompt('Insira a altura do Trapézio:'))
      let trapezeResult = trapeze(trapezeMinorBase, trapezeBiggerBase, trapezeHeight)
      alert(`Um Trapézio com a menor base de ${trapezeMinorBase}, maior base de ${trapezeBiggerBase} e altura de ${trapezeHeight}\nTem uma área de ${trapezeResult}`)

      break
    case '5':
      let circleRay = parseFloat(prompt('Insira o raio do circulo:'))
      let circleResult = circle(circleRay)
      alert(`Um circulo com o raio de ${circleRay}\nTem uma área de ${circleResult}`)

      break
    case '6':
      alert("Encerrando o Programa...")
      break
    default:
      alert("Opção invalida..")
  }
} while (input !== '6')

function triagle(base, height) {
  return base * height / 2
}

function rectangle(base, height) {
  return base * height
}

function square(side) {
  return side * side
}

function trapeze(baseM, baseB, height) {
  return (baseB + baseM) * height / 2
}

function circle(ray) {
  return 3.14 * (ray * ray)
}