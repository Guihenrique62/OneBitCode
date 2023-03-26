const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', ()=>{
    if(input.value === ''){
        input.value = 'Teste'
    }else{
        input.value = ''
    }
})

document.getElementById('type').addEventListener('click', ()=>{
    input.type = input.type !== 'text' ? 'text' : 'radio'
})

document.getElementById('placeholder').addEventListener('click', ()=>{
    input.placeholder = input.placeholder !== '' ? '' : 'Digite algo...'

})

document.getElementById('disable').addEventListener('click', ()=>{
    input.disabled = input.disabled == true ? false : true
})

document.getElementById('data').addEventListener('click', ()=>{
    const data = input.dataset.something
    console.log(data)
    input.dataset.something = "outro valor"
    console.log(input.dataset.something)

})







/*console.log("Seja Bem Vindo")
let yearLight = parseFloat(prompt('Informe qual é a distanncia ano luz que está : '))
let choose = prompt('Escolha qual medida que deseja converter: \n1:Parsec,\n2:AU \nn3:KM\n')
let calculo = ""
switch(choose){
    case '1': 
        calculo = yearLight / 3,262
        alert(`Ano Luz ${yearLight} para parsec ${calculo}`)
        break
    case '2': 
        calculo = yearLight * 63240
        alert(`Ano Luz ${yearLight} para AU ${calculo}`)
        break
    case '3':
        calculo = yearLight * (Math.pow(10,12))
        alert(`Ano Luz ${yearLight} para KM ${calculo}`)
        break
}*/