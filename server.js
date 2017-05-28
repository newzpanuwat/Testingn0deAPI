var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.get('/',function(req,res){
    res.send('Hello World!!');
});


function statusServer(){
    console.log('Server is Running...')
}

app.listen(8081);
console.log('Server Running on https://localhost:8081');


