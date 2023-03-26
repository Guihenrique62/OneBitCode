function createLabel(text, htmlFor){
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

function createInput(id, value, name, type = 'text', placeHolder = ''){
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeHolder
  return input
}

const addTecBtn = document.getElementById('addTecBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTecBtn.addEventListener('click',function(ev){
  const stackInputs = document.getElementById('stackInputs')
  
  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newRow.id = 'inputRow-' + rowIndex
  newRow.className = 'inputRow'

  const techNameLabel = createLabel('Nome: ', 'techname-' + rowIndex)
  const techNameInput = createInput('techName-'+rowIndex,null,'techName')
  const expLabel = createLabel('Experiencie: ')
  const expRadio1 = createInput('expRadio-'+rowIndex + '.1','0-2 anos', 'techExp-'+rowIndex,'radio')
  const expLabel1 = createLabel('0-2 anos','expRadio-'+rowIndex + '.1')
  const expRadio2 = createInput('expRadio-'+rowIndex + '.2','3-4 anos', 'techExp-'+rowIndex,'radio')
  const expLabel2 = createLabel('3-4 anos','expRadio-'+rowIndex + '.2')
  const expRadio3 = createInput('expRadio-'+rowIndex + '.3','5 ou mais anos', 'techExp-'+rowIndex,'radio')
  const expLabel3 = createLabel('5 ou mais anos','expRadio-'+rowIndex + '.3')

  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remover'
  removeRowBtn.addEventListener('click', ()=>{
    stackInputs.removeChild(newRow)
  })
  newRow.append(techNameLabel,techNameInput,expLabel,expRadio1,expLabel1,expRadio2,expLabel2,expRadio3,expLabel3,removeRowBtn)
  stackInputs.appendChild(newRow)
})

form.addEventListener('submit', (ev)=>{
  ev.preventDefault()

  const fullNameInput = document.getElementById('fullname')
  const inputRows = document.querySelectorAll('.inputRow')

  let technologies = []

  inputRows.forEach((row)=>{
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({name: techName, exp: techExp})
  })

  const newDev = {fullname: fullNameInput.value, technologies: technologies}
  developers.push(newDev)
  alert('Dev Cadastrado com sucesso!')

  fullNameInput.value = ''
  inputRows.forEach((row)=>{
    row.remove
  })

  console.log(developers)
})