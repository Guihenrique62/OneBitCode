module.exports = class Database{
   #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: []
   }

   find(key){
    return this.#storage[key]
   }

   saveAuthors(author){
    this.#storage.authors.push(author)
   }

   findBookByName(bookName){
    return this.#storage.books.find(b => b.name === bookName)
   }

   saveBooks(book){
    const bokkExists = this.findBookByName(book.name)
    if(!bokkExists){
      this.#storage.books.push(book)
    }
   }

   addBooksToStock(bookName,quantity){
    const book = this.findBookByName(bookName)
    book?.addStock(quantity)
   }

   removeBooksFromStock(bookName,quantity){
    const book = this.findBookByName(bookName)
    book?.removeBooksFromStock(quantity)
   }


   findPosterByName(posterName){
    return this.#storage.posters.find(p => p.name === posterName)
   }

   savePosters(poster){
    const posterExists = this.findPosterByName(poster.name)
    if(!posterExists){
      this.#storage.posters.push(poster)
    }
   }

   addPostersToStock(postername,quantity){
    const poster = this.findPosterByName(postername)
    poster?.addStock(quantity)
   }

   removePostersFromStock(postername,quantity){
    const poster = this.findPosterByName(postername)
    poster?.removeFromStock(quantity)
   }


   saveUser(user){
    const userExists = this.#storage.users.find(u => u.email === user.email)
    if(!userExists){
      this.#storage.users.push(user)
    }
   }

   saveOrder(order){
    this.#storage.orders.push(order)
   }

   showStorage(){
    console.table(this.#storage.authors)
    console.table(this.#storage.books)
    console.table(this.#storage.orders.map(order => order.data))
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
   }


}