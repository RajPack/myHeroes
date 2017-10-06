let express, app, http ;
express = require("express");
http = require("http");

app = express();

http.createServer(app).listen(40);