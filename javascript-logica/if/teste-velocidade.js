//recebe os valores pelo usuario

let entrada1 = prompt("Digite o nome do Primeiro Veiculo");
let entrada2 = prompt("Digite a velocidade deste veiculo");
let entrada3 = prompt("Digite o nome do Segundo Veiculo");
let entrada4 = prompt("Digite a Velocidade deste Veiculo");

//converte a velocidade para float
let v1 = parseFloat(entrada2);
let v2 = parseFloat(entrada4);

//verifica a maior velocidade
if (v1 === v2) {
  alert('A velocidade dos dois veiculos é a mesma')
} else if (v1 > v2) {
  alert(`O ${entrada1} é mais rápido do que o ${entrada3}`)
} else if (v1 < v2) {
  alert(`O ${entrada3} é mais rápido do que o ${entrada1}`)
}