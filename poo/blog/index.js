const Author = require("./Author");
const Comment = require("./Comment");
const Post = require("./Post");

const comment = new Comment('Comentario Teste')
const post = new Post('Guilherme',comment )
post.addComment('segundo Comentario')

const author = new Author('Guilherme','Testando')
author.addPost('Segundo Post')


console.log(author+'\n')
console.log(post+'\n')
console.log(comment)
