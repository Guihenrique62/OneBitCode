const form = document.getElementById('mainForm')
const addButton = document.getElementById('addButton')
const containeir = document.getElementById('containeir')
let i = 0
function createTec(){
    const element = document.createElement('div')
    //Criação input Nome Tecnologia
    const inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.name = 'fullname' + (i += 1)
    inputName.id = i
    const labelName = document.createElement('label')
    labelName.id = i
    labelName.innerText = 'Nome da Tecnologia: '

    //Criação inputs radios
    const radiosText = document.createElement('label').innerText = 'Experiência: '
    const inputRadio1 = document.createElement('input')
    inputRadio1.type = 'radio'
    inputRadio1.checked
    inputRadio1.id = i
    inputRadio1.name = 't'
    const labelRadio1 = document.createElement('label')
    labelRadio1.innerText = '0-2 anos'

    const inputRadio2 = document.createElement('input')
    inputRadio2.type = 'radio'
    inputRadio2.id = i
    inputRadio2.name = 't'
    const labelRadio2 = document.createElement('label')
    labelRadio2.innerText = '2-3 anos'

    const inputRadio3 = document.createElement('input')
    inputRadio3.type = 'radio'
    inputRadio3.id = i
    inputRadio3.name = 't'
    const labelRadio3 = document.createElement('label')
    labelRadio3.innerText = '+3 anos'

    const inputRemove = document.createElement('button')
    inputRemove.innerText = 'Remover'
    inputRemove = document.addEventListener('click', removeTec)

    
    


    element.append(labelName,inputName,radiosText,inputRadio1,labelRadio1,inputRadio2,labelRadio2,inputRadio3,labelRadio3,inputRemove)
    containeir.appendChild(element)
    console.log(containeir)
}


addButton.addEventListener('click', createTec)


form.addEventListener('submit', (ev) => {
    ev.preventDefault()
})