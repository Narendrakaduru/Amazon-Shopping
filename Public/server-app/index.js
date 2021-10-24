// * Importing Express

var express = require("express");

// * Importing MongodbClient
var mongoClient = require("mongodb").MongoClient;

// * Importing Cors (Cross Origin)
var cors = require("cors");

// * ConnectionString For Mongodb
var connectionString = "mongodb://127.0.0.1:27017";

var app = express();


// * data passed form any external url that will be allowed to translate
// * urlencoded is used by bodyParser to translate the data coming from any another source.
// * Converts body into format that which u want(JSON)
app.use(express.urlencoded({
    extended: true
}))

// * For telling which format you need
app.use(express.json());

// * Allowing to transport across requests 
app.use(cors());

// * get request products
app.get("/products", function(req, res){
    mongoClient.connect(connectionString, function(err, clientObject){
        if(!err){
            var dbo = clientObject.db("ishopdb");
            dbo.collection("tblproducts").find({}).toArray(function(err, documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})

app.get("/products/:id", function(req, res){
    mongoClient.connect(connectionString, function(err, clientObject){
        if(!err){
            var dbo = clientObject.db("ishopdb");
            dbo.collection("tblproducts").find({id:parseInt(req.params.id)}).toArray(function(err, documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})

app.get("/categories", function(req, res){
    mongoClient.connect(connectionString, function(err, clientObject){
        if(!err){
            var dbo = clientObject.db("ishopdb");
            dbo.collection("tblcategories").find({}).toArray(function(err, documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})

app.get("/categories/:category", function(req, res){
    mongoClient.connect(connectionString, function(err, clientObject){
        if(!err){
            var dbo = clientObject.db("ishopdb");
            dbo.collection("tblproducts").find({category:req.params.category}).toArray(function(err, documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})

app.get("/getcustomers", function(req, res){
    mongoClient.connect(connectionString, function(err, clientObject){
        if(!err){
            var dbo = clientObject.db("ishopdb");
            dbo.collection("tblcustomers").find({}).toArray(function(err, documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})

app.get("/getadmin", function(req, res){
    mongoClient.connect(connectionString, function(err, clientObject){
        if(!err){
            var dbo = clientObject.db("ishopdb");
            dbo.collection("tbladmin").find({}).toArray(function(err, documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})

app.post("/adminregister", function(req, res){
    mongoClient.connect(connectionString, function(err, clientObject){
        if(!err){
            var dbo = clientObject.db("ishopdb");

            var data = {
                UserId: req.body.UserId,
                Password: req.body.Password,
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                Email: req.body.Email
            }

            dbo.collection("tbladmin").insertOne(data, function(err, result){
                if(!err){
                    console.log("Record Inserted...");
                }
            })
        }
    })
})

app.post("/customerregister", function(req, res){
    mongoClient.connect(connectionString, function(err, clientObject){
        if(!err){
            var dbo = clientObject.db("ishopdb");

            var data = {
                CustomerId: req.body.CustomerId,
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                Password: req.body.Password,
                Gender: req.body.Gender,
                Email: req.body.Email,
                Mobile: req.body.Mobile,
                Address: req.body.Address,
                DateofBirth: new Date(req.body.DateofBirth)
            }

            dbo.collection("tblcustomers").insertOne(data, function(err, result){
                if(!err){
                    console.log("Record Inserted...");
                }
            })
        }
    })
})


app.listen(8080);
console.log("Server Started at : http://127.0.0.1:8080");