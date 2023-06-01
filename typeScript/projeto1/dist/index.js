function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crow: []
    };
    alert("A nave ".concat(spaceship.name, " comandado pelo capit\u00E3o ").concat(spaceship.captain, " foi enviado em uma miss\u00E3o"));
    return spaceship;
}
function accelerate(speed, spaceship) {
    if (spaceship.speed > speed) {
        alert("Desacelerando a nave para ".concat(speed));
    }
    else if (spaceship.speed < speed) {
        alert("Acelerando a nave para ".concat(speed));
    }
    else {
        alert("Mantendo velocidade...");
    }
}
var spaceshipName = prompt('Insira o nome da nave a ser enviada');
var spaceshipCaptain = prompt('insira o nome do capitão que ira pilotar a ' + spaceshipName);
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = parseFloat(prompt("Insira a velocidade que a ".concat(spaceshipName, " vai atingir:")));
accelerate(speed, currentShip);
