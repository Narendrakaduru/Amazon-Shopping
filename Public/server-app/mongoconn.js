var mongoClient = require("mongodb").MongoClient;

var connectionString = "mongodb://127.0.0.1:27017";

mongoClient.connect(connectionString, function(err, clientObject){
    if(!err){
        console.log("connection successful..");
    }else{
        console.log(err.message);
    }
})