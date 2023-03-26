const idade = prompt("Digite sua idade");

if (idade >= 18) {
  alert("Voce é maior de idade")
} else if (idade >= 12) {
  alert("voce é um adolescente")
} else if (idade > 0) {
  alert("voce é uma criança")
} else {
  console.error("idade nao essperada")
}