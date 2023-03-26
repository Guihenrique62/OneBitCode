function dobro(x) {
  alert("O dobro de " + x + " é: " + (x * 2))
}

//dobro(2)

function dizerOla(name = 'mundo') {
  alert(`Ola ${name}!`)
}

// dizerOla('gabirel')

function soma(a, b) {
  alert(`O resultado da soma é ${a + b}`)
}

// soma(3, 3)

function criarUsuario(name, email, password, usuary = 'adm') {
  const usuario = {
    name, //mesmo que name: name
    email: email,
    password: password,
    usuary: usuary
  }
  console.log(usuario)
}
function novoUsuario(name, email, usuary = 'adm', password) {
  const usuario = {
    name, //mesmo que name: name
    email: email,
    password: password,
    usuary: usuary
  }
  console.log(usuario)
}

function muitosParametros(nome, telefone, endereço, aniversario, email, senha) {
  //...
}

function objetoParametros(usuario) {
  usuario.nome
  usuario.email
  usuario.telefone
  usuario.endereço
}

const dadosDoUsuario = {
  nome: '',
  telefone: '',
  email: '',
  senha: '',
  endereço: '',
  aniversario: ''
}

objetoParametros(dadosDoUsuario)