const Database = require("./database")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const Order = require("./entities/Order")
const Poster = require("./entities/Poster")
const User = require("./entities/User")

module.exports = class App {
  static #database = new Database()
  createUser(name,email,password){
    const user = new User(name,email,password)
    App.#database.saveUser(user)
  }

  getUsers(){
    return App.#database.find('users')
  }

  createAuthor(name,nationality,bio){
    const author = new Author(name,nationality,bio)
    App.#database.saveAuthors(author)
  }
  getAuthor(){
    return App.#database.find('authors')
  }

  createBook(title,synopsis,genre,pages, author, description, price, inStock){
    const book = new Book(title,synopsis,genre,pages, author, description, price, inStock)
    App.#database.saveBooks(book)
  }

  addBook(bookName,quantity){
    App.#database.addBooksToStock(bookName,quantity)
  }

  getBooks(){
    return App.#database.find('books')
  }

  createPoster(name, height, width, description, price, inStock){
    const poster = new Poster(name,description,height,width,price,inStock)
    App.#database.savePosters(poster)
  }

  addPoster(postername,quantity){
    App.#database.addPostersToStock(postername,quantity)
  }

  getPosters(){
    return App.#database.find('posters')
  }

  createOrder(items,user){
    const order = new Order(items,user)
    App.#database.saveOrder(order)
    order.data.items.forEach(({product, quantity}) => {
      if(product instanceof Book){
        App.#database.removeBooksFromStock(product.name, quantity)
      }else if(product instanceof Poster){
        App.#database.removePostersFromStock(product.name,quantity)
      }
    });
  }

  getOrders(){
    return App.#database.find('orders')
  }

  showDatabase(){
    App.#database.showStorage()
  }
}