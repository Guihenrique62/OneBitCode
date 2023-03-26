//input attacker
let attackerName = prompt("Insira o nome do personagem de ataque:");
let input1 = prompt(`Insira o poder de ataque de ${attackerName}:`);

let attackerPower = parseFloat(input1);

//input defender
let defenderName = prompt("Insira o nome do personagem de Defesa:");
let input2 = prompt(`Digite a quatidade de pontos de vida de ${defenderName}`);
let input3 = prompt(`Insire o poder de Defesa de ${defenderName}`);
let shield = confirm(`${defenderName} possui um escudo?`);

let defenderHealth = parseFloat(input2);
let defenderPower = parseFloat(input3);

//calculo de dano
if (attackerPower > defenderPower && shield == false) {
  var damage = attackerPower - defenderPower;
  defenderHealth = defenderHealth - damage;

  alert(`O ${defenderName} sofreu ${damage} de dano, ficando com um total de ${defenderHealth}HP`)

} else if (attackerPower > defenderPower && shield == true) {
  var damage = (attackerPower - defenderPower) / 2;
  defenderHealth = defenderHealth - damage;

  alert(`O ${defenderName} sofreu ${damage} de dano, ficando com um total de ${defenderHealth}HP`)

} else if (attackerPower <= defenderPower) {
  alert(`O ${defenderName} sofreu 0 de dano, ficando com um total de ${defenderHealth}HP`)
}