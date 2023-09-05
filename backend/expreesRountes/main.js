var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('<h1>Minha lista de Tarefas :</h1>');
});
app.get('/json', function (req, res) {
    res.json({ title: "tarefaX", done: true });
});
app.listen(3030, function () {
    console.log('Servidor Iniciado');
});
