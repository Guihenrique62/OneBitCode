const express = require('express')

const app = express()

app.get('/', (req,res)=> {
    res.send('<h1>Minha lista de Tarefas :</h1>')
})

app.get('/json', (req,res)=> {
    
    res.json({title: "tarefaX", done: true})
})

app.listen(3030, ()=> {
    console.log('Servidor Iniciado')
})