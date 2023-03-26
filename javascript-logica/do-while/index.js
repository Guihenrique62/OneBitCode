let input = ''
let imoveis = []
let imovel = {}
let i = 0

do {
  input = prompt(`Quantidade de imoveis cadastrados: ${imoveis.length}\n1 - Salvar um novo imovel\n2 - Mostrar todos os imoveis salvos\n3 - Sair`);

  switch (input) {
    case '1':
      do {
        imovel.name = prompt('Insira o nome do Proprietario:')
        imovel.rooms = prompt('Insira a quantidade de quartos:')
        imovel.bathrooms = prompt('Insira a quantidade de banheiros:')
        imovel.garage = prompt('Possui garagem?(Sim/Não)')
        imoveis[i] = [imovel.name, imovel.rooms, imovel.bathrooms, imovel.garage]

        i++
      } while (i < imoveis.length)

      break
    case '2':
      if (imoveis.length) {
        for (let i = 0; i < imoveis.length; i++) {
          alert(`Imovel: ${i + 1}\nProprietario: ${imoveis[i][0]}\nQuartos: ${imoveis[i][1]}\nBanheiros: ${imoveis[i][2]}\nPossui Garagem: ${imoveis[i][3]}\n\n`)
        }
      } else {
        alert("Não há imoveis cadastrados")
      }
      break
    case '3':
      alert("Encerrando o Programa...")
      break
    default:
      alert("Opção invalida..")
  }
} while (input != '3') {
}