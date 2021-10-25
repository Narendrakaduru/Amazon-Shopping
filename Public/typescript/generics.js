var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.Connect = function (object) {
        for (var property in object) {
            console.log(property + " - " + object[property]);
        }
    };
    return Database;
}());
var Oracle = new Database();
Oracle.Connect({ Username: 'Scott', Password: 'tiger', Database: 'empdb' });
var mysql = new Database();
mysql.Connect({ Host: 'localhost', User: 'root', Password: '1234', Database: 'productsdb' });
var Mongo = new Database();
Mongo.Connect({ url: 'mongodb://127.0.0.1:27017' });
