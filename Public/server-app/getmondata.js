var mongoClient = require("mongodb").MongoClient;

var connectionString = "mongodb://127.0.0.1:27017";

mongoClient.connect(connectionString, function(err, clientObject){
    if(!err){
        
        var dbo = clientObject.db("ishopdb");
        dbo.collection("tblcategories").find({}).toArray(function(err, documents){
            if(!err){
                console.log(documents);
            }else{
                console.log(err.message);
            }
        })

    }else{
        console.log(err.message);
    }
})