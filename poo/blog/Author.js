const Post = require("./Post")

class Author{
  constructor(name,post){
    this.name = name
    this.post = [new Post(name,post)]
  }

  addPost(newpost){
    this.post.push(new Post(this.name,newpost))
  }
}

module.exports = Author