let row = []
let choice = ''

do {
  let patients = ''
  for (let i = 0; i < row.length; i++) {
    patients += `${(i + 1)}° - ${row[i]}\n`
  }

  choice = prompt(`Pacientes:\n${patients}\nEscolha uma das opções abaixo:\n1-Novo Paciente\n2-Consultar Paciente\n3-Sair`)

  switch (choice) {
    case '1':
      row.push(prompt('Insira o nome do novo paciente'))
      break
    case '2':
      let firstPatient = row.shift()
      if (firstPatient) {
        alert(`${firstPatient} foi consultado`)
      } else {
        alert('Não há pacientes na fila')
      }
      break
    case '3':
      alert('Encerrando o programa...')
      break
    default:
      alert('Opção invalida!')
  }
} while (choice != '3')
