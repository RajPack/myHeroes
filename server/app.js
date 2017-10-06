let express, app, http ;
express = require("express");
http = require("http");

app = express();
app.get("/", function(req,res){
    res.send("hello world");
});

http.createServer(app).listen(400);