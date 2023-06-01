export default function addCrew(crew, spaceship) {
    if (spaceship.crewLimit > spaceship.crew.length) {
        spaceship.crew.push(crew);
    }
    else {
        alert('O tamanho maximo de Tripulantes foi atingido');
    }
}
