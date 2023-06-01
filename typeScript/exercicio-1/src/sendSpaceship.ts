export default function sendSpaceship(spaceship : {inMission : boolean, crew : string[], crewLimit : number}){
   if(spaceship.crew.length > spaceship.crewLimit / 3){
      spaceship.inMission = true
   }else{
      alert('Quantidade de tripulantes insuficientes para a missão')
   }
}