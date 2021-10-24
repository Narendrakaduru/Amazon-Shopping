var mongoClient = require("mongodb").MongoClient;

var connectionString = "mongodb://127.0.0.1:27017";

mongoClient.connect(connectionString, function(err, clientObject){
    if(!err){
        
        var dbo = clientObject.db("ishopdb");
        
        var data = {
            CategoryId:5,
            CategoryName:"Footwear"
        }

        dbo.collection("tblcategories").insertOne(data, function(err, result){
            if(!err){
                console.log("Record Inserted...");
            }else{
                console.log(err.message);
            }
        })

    }else{
        console.log(err.message);
    }
})