var Task = require('../../model/index');
var _=require('underscore');
var idOperation;
var getalltastdetails = function(req,res){
    return Task.find(function(error,tasks){
        // datFormatasRequiredByTables 
        var formedDataFromAvailableTasks = [];
        // fuse the provided logic
        var datFormatasRequiredByTables = {data:[formedDataFromAvailableTasks]}
        if(!error){
            res.send(datFormatasRequiredByTables);
            return tasks
            // console.log("idOperation : "+idOperation);
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
var getData = function(req,res){
    return Task.find(function(error,tasks){
        // datFormatasRequiredByTables 
        var formedDataFromAvailableTasks = [];
        // fuse the provided logic
        var datFormatasRequiredByTables = {data:[formedDataFromAvailableTasks]}
        if(!error){
            res.send(datFormatasRequiredByTables);
            return tasks
            // console.log("idOperation : "+idOperation);
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
    idOperation=task._id;
    var taskDatas = [task,idOperation];
    console.log("Given data : ",taskDatas);
    // console.log("idOperation : "+idOperation);
    taskDatas.map(taskData, function(task){ 
        var taskAsArray=[];
        taskAsArray=[task.title, task.description]; 
        return taskAsArray; 
        console.log("task as array[]..... :",taskAsArray);
    })
    return task.save(function(error){
        if(!error){
            console.log('Task created successfully');
            res.json({
                statusCode : 200,
                Task : taskData
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
exports.createtaskdetails = createtaskdetails;