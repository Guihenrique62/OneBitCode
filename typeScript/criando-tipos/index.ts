type Habitation = 'habitado' | 'habitavel' | 'inabitavel' | 'inexplorado';

const planets: object[] = []

function addPlanet(name:string, location: [number,number,number,number], situation: Habitation, satelites: string[]){
   const planet = {
      name,
      location,
      situation,
      satelites
   }
   planets.push(planet)
};

function updateSituation(currentSituation:Habitation,planet: {situation:Habitation}){
   planet.situation = currentSituation;
};

function addSatelite(currentSatelite:string, planet:{satelites:string[]}){
   planet.satelites.push(currentSatelite);
};

function removeSatelite(currentSatelite:string, planet:{satelites:string[]}){
   const index = planet.satelites.indexOf(currentSatelite);
   index !== -1 ? planet.satelites.splice(index,1) : null;
};

function listPlanets(){
   planets.forEach((current)=>{
      console.table(current)
   })
}

addPlanet('guilherme',[123,123,123,321],'habitavel',['sat1','sat2'])