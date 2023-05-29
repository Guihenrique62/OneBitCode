const spaceship = {
    name: 'X-Wing',
    speed: 0
}

function aceclerate(spaceship: { name: string; speed: number },speed: number){
    spaceship.speed = speed
}

aceclerate(spaceship, 50)