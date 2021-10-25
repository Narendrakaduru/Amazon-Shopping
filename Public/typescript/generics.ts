interface IOracle{
    Username:string;
    Password:string;
    Database:string;
}
interface IMongoDB{
    url:string;
}
interface IMySql{
    Host:string;
    User:string;
    Password:string;
    Database:string;
}

class Database{
    Connect<T>(object:T){
        for(var property in object){
            console.log(`${property} - ${object[property]}`)
        }
    }
}

let Oracle = new Database();
Oracle.Connect<IOracle>({Username:'Scott', Password: 'tiger', Database: 'empdb'});

let mysql = new Database();
mysql.Connect<IMySql>({Host: 'localhost', User: 'root', Password: '1234', Database: 'productsdb'});

let Mongo = new Database();
Mongo.Connect<IMongoDB>({url: 'mongodb://127.0.0.1:27017'});