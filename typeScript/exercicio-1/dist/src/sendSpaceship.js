export default function sendSpaceship(spaceship) {
    if (spaceship.crew.length > spaceship.crewLimit / 3) {
        spaceship.inMission = true;
    }
    else {
        alert('Quantidade de tripulantes insuficientes para a missão');
    }
}
