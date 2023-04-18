const Comment = require("./Comment")

class Post{
  constructor(author,comments){
    this.author = author
    this.comments = comments
  }

  addComment(comment){
    this.comments += new Comment(comment)
  }
}

module.exports = Post