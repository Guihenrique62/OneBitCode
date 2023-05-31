// o sinal ? siginifica que o argumento passado é opcional
function sendSpaceShip(spaceship: {pilot: string, copilot?: string}){

}

sendSpaceShip({pilot: 'naruito', copilot: 'sasukle'})

sendSpaceShip({pilot: 'Guilherbe'})

//unknown aceita qualquer tipo de dado
let input: unknown
input = 'alkjf'
input = 31

//aceita qualquer tipo de dado sem dar erro (funciona igual o javascript)
let text: any
