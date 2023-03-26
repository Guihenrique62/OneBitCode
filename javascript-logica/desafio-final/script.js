let vacancies = []


function listVacancies() {
  const vacanciesText = vacancies.reduce(function (finalText, currentVacancie, i) {
    finalText += i + '. '
    finalText += currentVacancie.name
    finalText += ' (' + currentVacancie.candidate.length + ' candidatos)\n'
    return finalText
  }, '')

  if (vacancies.length > 0) { alert(vacanciesText) } else {
    alert('Não há vagas disponiveis')
  }
}


function newVacancy() {
  const name = prompt('Insira o nome da vaga:')
  const description = prompt('Insira uma descrição para a vaga:')
  const deadline = prompt('Insira uma data limite (dd/mm/aaaa) para a vaga:')

  const confirmation = confirm('Deseja criar uma nova vaga com essas informações?\n' +
    'Nome: ' + name +
    '\nDescrição: ' + description +
    '\nData Limite: ' + deadline)

  if (confirmation) {
    const newVacancy = { name, description, deadline, candidate: [] }
    vacancies.push(newVacancy)
    alert('Vaga Criada')
  } else {
    alert('Voltando para o menu...')
  }
}


function displayVacancy() {

  if (vacancies.length > 0) {
    const i = prompt('Informe o indice da vaga que deseja exibir : ')
    const vacancy = vacancies[i]

    const candidateText = vacancy.candidate.reduce(function (finalText, currentCandidate) {
      return finalText + '\n - ' + currentCandidate
    }, '')

    alert(
      'Vaga n° ' + i +
      '\nNome: ' + vacancy.name +
      '\nDescrição: ' + vacancy.description +
      '\nData Limite: ' + vacancy.deadline +
      '\nQuantidade de candidatos: ' + vacancy.candidate.length +
      '\nCandidatos inscritoss: ' + candidateText
    )
  } else {
    alert('Não há vagas Registradas')
  }
}

function registerCandidate() {

  if (vacancies.length > 0) {
    const candidate = prompt('Informe o nome do candidato(a)')
    const i = prompt('Informe o indice da vaga para o qual este candidato deseja se inscrever')
    const vacancy = vacancies[i]

    if (vacancy) {
      const confirmation = confirm(`Deseja inscrever o candidato ${candidate} na vaga ${i}?\nNome: ${vacancy.name}\nDescrição: ${vacancy.description}\nData Limite: ${vacancy.deadline}`)

      if (confirmation) {
        vacancy.candidate.push(candidate)
        alert('Inscrição Realizada')
      } else {
        alert('voltando ao menu')
      }
    } else {
      alert('Não há vagas com este indice')
    }

  } else {
    alert('Não há vagas para este candidato se inscrever')
  }

}

function deleteVacancy() {

  if (vacancies.length > 0) {
    const i = prompt('Informe o indice da vaga que deseja excluir: ')
    const vacancy = vacancies[i]

    if (vacancy) {
      const confirmation = confirm(`Tem certeza que deseja excluir a vaga ${i}?\nNome: ${vacancy.name}\nDescrição: ${vacancy.description}\nData Limite: ${vacancy.deadline}`)

      if (confirmation) {
        vacancies.splice(i, 1)
        alert('Vaga Exluida')
      } else {
        alert('Voltando ao menu')
      }
    } else {
      alert('Não existe uma vaga com este indice')
    }
  } else {
    alert('Não há vagas para serem excluidas')
  }
}






function executar() {
  let input = ''
  do {
    input = prompt("Escolha uma das opções abaixo: \n1- Listar Vagas Disponiveis\n2- Criar uma nova Vaga\n3- Visualizar uma vaga\n4- Inscrever um candidato\n5- Excluir uma vaga\n6 - Sair");

    switch (input) {
      case '1':
        listVacancies()
        break
      case '2':
        newVacancy()
        break
      case '3':
        displayVacancy()
        break
      case '4':
        registerCandidate()
        break
      case '5':
        deleteVacancy()
        break
      case '6':
        alert("Encerrando o Programa...")
        break
      default:
        alert("Opção invalida..")
    }
  } while (input !== '6')
}

executar()