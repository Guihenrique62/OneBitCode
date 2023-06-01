import addCrew from "./src/addCrew.js";
import listSpaceShips from "./src/listSpaceShips.js";
import saveSpaceship from "./src/saveSpaceship.js";
import sendSpaceship from "./src/sendSpaceship.js";

let input: string = ''

const Spaceships = []
do{
   input = prompt(
      `- Selecione a opção:
       1 - Cadastrar nova nave
       2 - Inserir tripulante
       3 - Enviar nave para missão
       4 - Listar todas as Naves
       5 - Sair
   `)
switch (input) {
   case '1':
      const name: string = prompt('Digite o nome da nave: ')
      const pilot: string = prompt('Digite o nome do piloto: ')
      const crewLimit: number = parseFloat(prompt('Digite a quantidade maxima de tripulantes suportada: '))
      const space = saveSpaceship(name,pilot,crewLimit)
      Spaceships.push(space)
      break;

   case '2':
      const nameOfSpaceship: string = prompt(`Escolha a nave que deseja inserir o tripulante: `)
      let spaceship
      Spaceships.forEach((obj)=>{spaceship = (obj.name === nameOfSpaceship) ? obj : spaceship;})
      const crew : string = prompt('Digite o nome do Tripulante: ');
      addCrew(crew,spaceship)
      break

   case '3':
      const nameOfSpaceshiptoSend: string = prompt(`Escolha a nave que deseja enviar para uma missão: `)
      let spaceshiptoSend
      Spaceships.forEach((obj)=>{spaceshiptoSend = (obj.name === nameOfSpaceshiptoSend)? obj : spaceshiptoSend})
      sendSpaceship(spaceshiptoSend)
      break

   case '4':
      listSpaceShips(Spaceships)
      break
   default:
      alert('Comando não reconhecido!')
      break;
}}while (input !== '5'){
   alert('Encerrando...')
}
   
