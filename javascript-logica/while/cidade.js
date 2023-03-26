const turistName = prompt("Digite o seu nome:");
let travels = confirm("Você ja visitou alguma cidade?");
let amountCity = 0
let cityName = ''

while (travels === true) {
  cityName = cityName + ' - ' + prompt("Qual o nome desta cidade?");
  travels = confirm("Você ja visitou alguma outra cidade?");
  amountCity++;
}
alert(`${turistName}\n Já visitou ${amountCity} cidades\n Sendo elas:\n ${cityName}`);