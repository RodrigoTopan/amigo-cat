//Modularizando nossas configurações de servidor
var express = require('express');
//instancia do express
var app = express();
//incluindo consign para entender nosso diretório routes
var consign = require('consign');

consign()
    .include('./resources/routes/portal')
    .into(app);

//Para que o express consiga trabalhar em conjunto com o express
app.set('view engine', 'ejs');
//Setando diretório de views padrão. Onde o express vai pesquisar as views
//O caminho começa a contar a partir do nivel de app.js
app.set('views', './resources/views');

//Exportando app (possui a instância do express e a configuração do ejs)
module.exports = app;