let input = ''
let imoveis = []

do {
  input = prompt(`Quantidade de imoveis cadastrados: ${imoveis.length}\n1 - Salvar um novo imovel\n2 - Mostrar todos os imoveis salvos\n3 - Sair`);

  switch (input) {
    case '1':
      let imovel = {}

      imovel.name = prompt('Insira o nome do Proprietario:')
      imovel.rooms = prompt('Insira a quantidade de quartos:')
      imovel.bathrooms = prompt('Insira a quantidade de banheiros:')
      imovel.garage = window.confirm('Possui garagem?')
      if (imovel.garage === true) {
        imovel.garage = 'Sim'
      } else {
        imovel.garage = 'Não'
      }

      const confirms = window.confirm(
        `Salvar este imovel?
        Proprietário: ${imovel.name}
        Quartos: ${imovel.rooms}
        Banheiros: ${imovel.bathrooms}
        Possui Garagem? ${imovel.garage}`
      )

      if (confirms) {
        imoveis.push(imovel)
        alert('Imovel Salvo com Sucesso')
      } else {
        alert('Voltando ao Menu')
      }
      break
    case '2':
      if (imoveis.length) {
        for (let i = 0; i < imoveis.length; i++) {
          alert(`Imovel: ${i + 1}\nProprietario: ${imoveis[i].name}\nQuartos: ${imoveis[i].rooms}\nBanheiros: ${imoveis[i].bathrooms}\nPossui Garagem: ${imoveis[i].garage}\n\n`)
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