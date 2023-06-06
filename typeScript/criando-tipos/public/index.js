const planets = [];
function addPlanet(name, location, situation, satelites) {
    const planet = {
        name,
        location,
        situation,
        satelites
    };
    planets.push(planet);
}
;
function updateSituation(currentSituation, planet) {
    planet.situation = currentSituation;
}
;
function addSatelite(currentSatelite, planet) {
    planet.satelites.push(currentSatelite);
}
;
function removeSatelite(currentSatelite, planet) {
    const index = planet.satelites.indexOf(currentSatelite);
    index !== -1 ? planet.satelites.splice(index, 1) : null;
}
;
function listPlanets() {
    planets.forEach((current) => {
        console.table(current);
    });
}
addPlanet('guilherme', [123, 123, 123, 321], 'habitavel', ['sat1', 'sat2']);
