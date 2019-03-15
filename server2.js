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
		
		app.use(function(req, res, next)
		{
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
		});	

		app.get('/search', function(req,res,next)
		{
			var poke = reg.query.poke;
		});

		app.get('/view_builds', function(req,res,next)
		{
			var query = "SELECT * FROM builds WHERE pokemon='" + req.query.poke + "';";
			console.log(query);
			
			con.query(query, function(err, result, field)
			{
				if (err) throw err;
				console.log(result);
				res.send(result);
			})
		});
		
		app.get('/create_build', function(req,res,next)
		{
			var title = req.query.title;
			var pokemon = req.query.pokemon;
			var ability = req.query.ability;
			var item = req.query.item;
			var gender = req.query.gender;
			var move1 = req.query.move1;
			var move2 = req.query.move2;
			var move3 = req.query.move3;
			var	move4 = req.query.move4;
			var nature = req.query.nature;
			var ivs = req.query.ivs;
			var evs = req.query.evs;
			var description = req.query.description;
			
			var query = "INSERT INTO builds (title, pokemon, item, ability, gender, move1, move2, move3, move4, nature, ivs, evs, description) values ('" + title + "', '" + pokemon + "', '" + item + "', '" + ability + "', '" + gender + "', '" + move1 + "', '" + move2 + "', '" + move3 + "', '" + move4 + "', '" + nature + "', '" + ivs + "', '" + evs + "', '" + description + "');";
			
			console.log(query);
			
			con.query(query, function(err, result, field)
			{
				if (err) throw err;
				console.log(result);
				res.send(result);
			});
		});
});