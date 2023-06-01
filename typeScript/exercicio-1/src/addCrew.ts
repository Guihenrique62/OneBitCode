export default function addCrew(crew:string ,spaceship ?: {crewLimit: number, crew: string[]}){
   if(spaceship.crewLimit > spaceship.crew.length){
      spaceship.crew.push(crew)
   }else{
      alert('O tamanho maximo de Tripulantes foi atingido')
   }
}