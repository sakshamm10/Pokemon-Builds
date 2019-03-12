var express = require('express'); //express implemented
var mysql = require('mysql');	  //mysql implemented
var app = express();
var con = mysql.createConnection({
  host: "localhost",		//sql database information
  user: "root",
  password: "Bobby1996!",
  database: "student_info",
  dateStrings: true	        //prevents date from being interpreted as a javascript object
});

app.listen(8080, function(){
	console.log("server running...");	
});

//prevents error from data transfer
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//loads the webpage when url is typed in with the /hw5 endpoint

app.get('/page', function(req,res,next) {
res.sendFile(__dirname + "/summary.html");
});

app.get('/search', function(req,res,next) {
var poke = reg.query.poke;
});

app.get('/view_build', function(req,res,next) {
var build = reg.query.build;
});

