var express = require("express");
var task = require("../src/resource/task-operations");
var router = express.Router();

router.get('/',function(req,res,next){
    console.log('table index file running');    
    res.writeHead(302,{
            'Location' : '/table.html'
        });
        res.end();
});
router.post('/',function(req,res,next){
    // var data=[req.body];
    // console.log('data from html: ',data);
	task.createtaskdetails(req,res);
});
router.get('/get',function(req,res,next){
	task.getalltastdetails(req,res);
});
module.exports = router;