// Metodos são funçoes dentro de obejetos ex: console.log

let pessoa = {
  name: 'Isaac',
  idade: 26,
  dizerOla() {
    console.log('Ola, mundo Meu nome é ' + this.name)
  }
}
pessoa.dizerOla()