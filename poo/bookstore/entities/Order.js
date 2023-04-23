module.exports = class Order{
  #total
  #items
  #user
  constructor(items, user) {
    items.forEach(({product,quantity}) => {
      if(quantity > product.inStock){
        throw new Error('Quantidade não suficiente em estoque!')
      }
    });

    this.#items = items
    this.#user = user
    this.#total = items.reduce((sum, {product,quantity}) => sum +(product.price * quantity),0)
  }

  subBalance(user){
    user.removeBalanceUser(this.#total)
  }
  get data(){
    return {
      items: this.#items,
      user: this.#user,
      total: this.#total

    }
  }
}