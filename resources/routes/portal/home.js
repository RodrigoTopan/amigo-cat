
module.exports = function (app) {
    app.get('/', function (res, res) {
    	//var connection = app.config.dbConnection();
    	var dbConnection = require('../../../config/dbConnection')();
        res.render("./home/index");
    });
}