
//incluindo módulo mysql
/*var mysql = require('mysql');
var connMysql = function () {
    //Método de conexão do modulo mysql
    //A estrutura de conexão tem que ser em formato json
    return mysql.createConnection({
        //endereço do servidor
        host: 'localhost',
        user: 'root',
        password: 'jakarosa',
        database: 'portal_noticias'
    });
}
module.exports = function () {
    console.log('O autoload carregou o módulo de conexão com o banco de dados');
    return connMysql;
}*/

const Database = require('./database');

const databaseSQL = new Database();

async function conectar() {
    await databaseSQL.conectar();}