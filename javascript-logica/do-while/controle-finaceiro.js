let input1 = prompt("Insira a quantidade inicial de dinheiro:");
let money = parseFloat(input1)
let choice = ''

do {
  choice = prompt(`A quantidade de dinheiro na conta é de ${money}\n  1 - Adicionar mais Dinheiro a conta\n  2 - Remover Dinheiro da conta\n  3 - Sair`)

  switch (choice) {
    case '1':
      let aditionalMoney = prompt("Insira a quantidade à ser adicionada:")
      let aditionalMoneys = parseFloat(aditionalMoney)
      money = money + aditionalMoneys;
      break

    case '2':
      let removeMoney = prompt("Insira a quantidade à ser Removida:")
      let removeMoneys = parseFloat(removeMoney)
      money = money - removeMoneys;
      break
    default:
      alert("Opção invalida")
  }
} while (choice != '3') {
  alert("Encerrando o programa..")
}