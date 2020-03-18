var express = require("express");
var app = express();
var path = require('path');
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "apiRoutes"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "htmlRoutes"));
  });

app.listen(PORT, function() {
    console.log("FriendFinder listening on PORT " + PORT);
  });