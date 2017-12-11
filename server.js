var express=require('express');
var app=express();
var http=require('http').Server(app);
var io = require('socket.io')(http);
var ip = require('ip');
app.use(express.static('./')); 

require("./controller/controller.js")(app,io);

http.listen(8080,function(){
    console.log("Chat Server is listening on http://"+ip.address()+":8080");
})