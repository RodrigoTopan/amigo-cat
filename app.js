var app = require('./config/server.js');

/*
//Nós utilizamos a função get do express para trabalhar com rotas
//Utilizando render para trabalhar com ejs
//Parâmetros: arquivo ejs, dados a serem consumidos pelo arquivo ejs

//chamar rota
var routeListarNoticias = require('./resources/routes/noticia/listar');
//executar função que a rota retorna
routeListarNoticias(app);

var routeCadastroNoticia = require('./resources/routes/noticia/cadastro')
routeCadastroNoticia(app);

//Você pode executar um método proveniente de uma módulo só colocando ()
//no final
var routePortal = require('./resources/routes/portal/home')(app);
*/

//verificar se o servidor subiu e se ele está rodando na porta 300

var porta = process.env.PORT || 8080;
app.listen(porta);



//Utilizando o consign para fazer autoload de todas as rotas automáticamente
