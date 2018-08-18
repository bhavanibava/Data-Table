var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Task = new Schema({
    title : {
        type : String,
        index : true
    },
    description : {
        type : String
    },
    content:{
        type : String
    },
    idOperation: {
        type : Number,
        index : true
    },
    status : {
        type : String
    },
    createdDate:{
        type: Date,
        default : Date.now
    }
});
module.exports = mongoose.model('Task',Task);