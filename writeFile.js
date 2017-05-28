var express = require('express');
var fs = require('fs')
var readFile = fs.readFileSync('node.txt','utf-8');


fs.writeFileSync('Nodejs_Written.txt',readFile);


console.log('Write file to Nodejs_Written.txt Successful!!');


