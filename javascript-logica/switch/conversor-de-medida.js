const inputmeters = prompt("Insira a quantidade de metros a ser convertido:")

const choice = prompt("Insira a unidade de medida para ser convertido: \n-milimetro = mm \n-centimetro = cm \n-decimetro = dm \n-decametro = dam \n -hectometro = hm \n-quilometro = km")

const meters = parseFloat(inputmeters)
let result = 0

switch (choice) {
  case 'mm':
    result = meters * 1000;
    alert(`${meters} corresponde ha ${result} milimetros`)
    break
  case 'cm':
    result = meters * 100;
    alert(`${meters} corresponde ha ${result} Centimetros`)
    break
  case 'dm':
    result = meters * 10;
    alert(`${meters} corresponde ha ${result} Decimetros`)
    break
  case 'dam':
    result = meters / 10;
    alert(`${meters} corresponde ha ${result} Decametros`)
    break
  case 'hm':
    result = meters / 100;
    alert(`${meters} corresponde ha ${result} Hectometros`)
    break
  case 'km':
    result = meters / 1000;
    alert(`${meters} corresponde ha ${result} Quilometros`)
    break

  default:
    alert('Digite uma unidade valida')
}
