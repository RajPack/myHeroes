let express, app, http ;
express = require("express");
http = require("http");

app = express();
app.get("/", function(req,res){
    res.send("hello world");
});
process.nextTick(function () {
    console.log('next tick');
    });
console.log(process.argv);
http.createServer(app).listen(400);