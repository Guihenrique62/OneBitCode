export default function(spaceships){
   spaceships.forEach((spaceship)=>{
      let mission : string
      if(spaceship.inMission === true){
         mission = 'Está em missão'
      }else{
         mission = 'Não está em missão'
      }
      alert(
         `Nome : ${spaceship.name}
          Piloto : ${spaceship.pilot}
          Limite de Tripulantes : ${spaceship.crewLimit}
          Tripulantes : ${spaceship.crew}
          ${mission}`
      )
   })
}