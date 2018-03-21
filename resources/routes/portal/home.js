module.exports = function (app) {
    app.get('/', function (res, res) {
        res.render("./home/index");
    });
}