var mongoclient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var testJson = require("./data.json");
var locationupdate = function(obj){if(obj._T === "LogPlayerPosition"){return true;}else{return false;}}
var filtered = testJson.filter(locationupdate);

mongoclient.connect(url, function(err, client){
    if(err){
        throw err;
    }
    var db = client.db('playerData');
    db.createCollection("LocationUpdates", function(err){
        if(err){
            throw err;
        }
        db.collection('LocationUpdates').insert(filtered, function(err, records){
            if (err) {
                throw err;
            }
            client.close();
        })
    })
    
    
})
