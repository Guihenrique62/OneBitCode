function sendSpaceship(name:string,captain:string){
   const spaceship = {
      name,
      captain,
      speed: 20,
      inMission: true,
      crow: []
   }

   alert(`A nave ${spaceship.name} comandado pelo capitão ${spaceship.captain} foi enviado em uma missão`)
   return spaceship
}

function accelerate(speed: number, spaceship: { name: string, speed: number }){
   if(spaceship.speed > speed){
      alert(`Desacelerando a nave para ${speed}`)
   }else if(spaceship.speed < speed){
      alert(`Acelerando a nave para ${speed}`)
   }else{
      alert(`Mantendo velocidade...`)
   }
}

const spaceshipName = prompt('Insira o nome da nave a ser enviada')
const spaceshipCaptain = prompt('insira o nome do capitão que ira pilotar a ' + spaceshipName)

const currentShip = sendSpaceship(spaceshipName,spaceshipCaptain)

const speed = parseFloat(prompt(`Insira a velocidade que a ${spaceshipName} vai atingir:`))

accelerate(speed,currentShip)