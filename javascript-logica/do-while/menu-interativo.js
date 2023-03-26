let input = ''
do {
  input = prompt("Escolha uma das opções abaixo: \n1- Voltar para a Tela inicial\n2- Voltar para a Tela inicial\n3- Voltar para a Tela inicial\n4- Voltar para a Tela inicial\n5- Encerrar o Programa");

  switch (input) {
    case '1':
      alert("Você escolheu a opção" + input);
      break
    case '2':
      alert("Você escolheu a opção" + input);
      break
    case '3':
      alert("Você escolheu a opção" + input);
      break
    case '4':
      alert("Você escolheu a opção" + input);
      break
    default:
      alert("Opção invalida..")
  }
} while (input != '5') {
  alert("Encerrando o Programa...")
}


