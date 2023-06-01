export default function saveSpaceship(name:string,pilot:string,crewLimit:number){
   const spaceship = {
      name,
      pilot,
      crewLimit,
      crew: [],
      inMission: false
   }
   return spaceship
}