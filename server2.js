//Setting up required modules
var request = require('request');
var express = require('express');
var mysql = require('mysql');

//Setting up express module
var app = express();

//Setting up mysql module
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: 'pokebuilds'
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//Setting up body-parser module
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Set up directory
app.use(express.static("."));

//Set up port to listen to
app.listen(8080, function(req, res)
{
		console.log('Server Started');
		
		app.use(function(req, res, next) {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
		});	

		app.get('/page', function(req,res,next) {
			res.sendFile(__dirname + "/summary.html");
		});

		app.get('/build', function(req,res,next){
			res.sendFile(__dirname + "/viewBuilds.html");
		})

		app.get('/search', function(req,res,next) {
			var poke = reg.query.poke;
		});

		app.get('/view_builds', function(req,res,next) {
			var query = "SELECT * FROM builds WHERE pokemon='" + req.query.poke + "';";
			console.log(query);
			
			con.query(query, function(err, result, field)
			{
				if (err) throw err;
				console.log(result);
				res.send(result);
			})
		});
});