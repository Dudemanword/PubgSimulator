var mongoclient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var testJson = require("./data.json");

mongoclient.connect(url, function(err, client){
    if(err){
        throw err;
    }
    var db = client.db('playerData');
    db.createCollection("playerMovement", function(err){
        if(err){
            throw err;
        }
        db.collection('playerMovement').insert(testJson, function(err, records){
            if (err) {
                throw err;
            }
            client.close();
        })
    })
    
    
})