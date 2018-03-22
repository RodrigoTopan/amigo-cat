var dbConnection = require('../../../config/dbConnection');
module.exports = function (app) {
    app.get('/', function (res, res) {
    	var connection = app.config.dbConnection();
        res.render("./home/index");
    });
}