 const App = require('./app')
const Product = require('./entities/Product')

 const app = new App()

 app.createAuthor('Guilherme', 'Brasileiro', '...')
 app.createAuthor('Joao','Russo', '...')

 const authors = app.getAuthor()

 app.createBook('Ladrão de raios','...','Ação',300,authors[0],'...',19.89,100)
 app.createBook('O mar de Monstro','...','Ação',400,authors[0],'...',24.89,100)
 app.createBook('O poder do Habito','...','Ação',300,authors[1],'...',24.89,100)
 app.createBook('O segredo','...','Ação',300,authors[1],'...',24.89,100)

 const books = app.getBooks()

 app.createUser('Guilherme', 'email.com', '123')
 const users = app.getUsers()


 const items = [
  {
    product: books[0],
    quantity: 2},
  {
    product: books[1],
    quantity: 1
  },
  {
    product: books[3],
    quantity: 1
  }
 ]

 app.createOrder(items, users[0])

 app.showDatabase()