var Task = require('../../model/index');
var _=require('underscore');
var idOperation;
var getalltastdetails = function(req,res){
    return Task.find(function(error,tasks){
        if(!error){
            res.send(tasks);
            return tasks
        }
        else{
            res.send({
                statusCode : 500,
                error : "internal server error"
            });
        }
    }) 
}
var getDataFromDB = function(req,res){
    return Task.find(function(error,tasks){
        idOperation=tasks._id;
        // datFormatasRequiredByTables     
        var formedDataFromAvailableTasks = tasks.map(function getFullName(tasks,index) {
            var taskData = [tasks.title,tasks.description];
            return taskData;
        });
        // formedDataFromAvailableTasks = formedDataFromAvailableTasks.
        console.log("task values..... :",formedDataFromAvailableTasks);
        // fuse the provided logic
        var dataFormatasRequiredByTables = {data:[formedDataFromAvailableTasks]}
        console.log("dataFormatasRequiredByTables..... :",dataFormatasRequiredByTables);
        if(!error){
            res.send(dataFormatasRequiredByTables);
            return dataFormatasRequiredByTables;
            // console.log('get task details successfully, task: '+tasks);
        }
        else{
            res.send({
                statusCode : 500,
                error : "internal server error"
            });
        }
    }) 
}
var createtaskdetails = function(req,res){
        var task = new Task({ 
        title : req.body.title,
        description : req.body.description,
        status : req.body.status,
        content : req.body.content
    })
    console.log("Given data : ",task);
    return task.save(function(error){
        if(!error){
            console.log('Task created successfully');
            res.json({
                statusCode : 200,
                Task : task
            });
        }
        else{
            res.send({
                statusCode : 500,
                error : 'internal error'
            });
        }
    })
}
exports.getalltastdetails = getalltastdetails;
exports.getDataFromDB = getDataFromDB;
exports.createtaskdetails = createtaskdetails;