let deck = []
let choice = ''

do {

  choice = prompt(`Cartas no baralho: ${deck.length}\n\nEscolha uma das opções abaixo:\n1-Adicionar uma carta\n2-Puxar um carta\n3-Sair`)

  switch (choice) {
    case '1':
      deck.unshift(prompt('Insira o nome da carta'))
      break
    case '2':
      let cardRemove = deck.shift()
      if (cardRemove) {
        alert(`${cardRemove} foi Removida`)
      } else {
        alert('Não há cartas no baralho')
      }
      break
    case '3':
      alert('Encerrando o programa...')
      break
    default:
      alert('Opção invalida!')
  }
} while (choice != '3')
