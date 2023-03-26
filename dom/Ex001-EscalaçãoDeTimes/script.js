function createPlayer(){
  let name = document.getElementById('name')
  let position = document.getElementById('position')
  let number1 = document.getElementById('number')

  let listOfPlayers = document.getElementById('listOfPlayers')

  let li = document.createElement('li')
  li.innerText = `${position.value}: ${name.value}(${number1.value})`
  li.id = 'player' + number1.value
  

  const input = confirm(`Confirma que deseja escalar este Jogador?\nNome:${name.value}\nPosição:${position.value}\nNumero da Camisa:${number.value}`)
  if(input){
    listOfPlayers.appendChild(li)
  }else{
    alert('Jogador não escalado')
  }  
}



function removePlayer(){
  
  let number = document.getElementById('number-of-player').value
  let player = document.getElementById('player' + number)

  input = confirm('Deseja realmente remover este Jogador da lista de convocados?')
  if(input){
    document.getElementById('listOfPlayers').removeChild(player)
  }else{
    alert('O Jogador não foi removido!!')
  }
  
}