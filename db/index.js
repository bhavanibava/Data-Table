var mongoose = require("mongoose");
var config = require('../configure/default');
var url = config.dbServer.protocol+config.dbServer.host+":"+config.dbServer.port+"/"+config.dbServer.dbName;
console.log("db: "+url);
mongoose.connect(url,function(error,res){
    if(error){
        console.log('ERROR: Database Connection error'+error);
    }
    else{
        console.log('Database Connected');
    }
});