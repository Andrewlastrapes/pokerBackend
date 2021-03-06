var express = require('express');
var router = express.Router();
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var http = require("http");
var axios = require("axios");
const fs = require("fs")




var User = require('../models/model');

/* GET home page. */
router.get('/', function(req, res, next) {
  
	res.render("home")

});

router.get("/register", function(req, res){
	res.render("register");
})





router.get("/about", function(req, res, next) {
	res.render("about")
})

router.get('/contact', function(req, res, next) {
	res.render("contact")
})


router.get('/login', function(req, res, next) {
	res.render('login');
})

router.get('/home', function(req, res, next) {
	res.render('home');
})

router.get('/navbar2', function(req, res, next) {
	res.render('navbar2');
})

router.get('/sportslines', function(req, res, next) {
	res.render("sportslines")
})

router.get("/NFLlines", function(req, res, next){
	res.render("NFLlines")
})

router.get("/CollegeFootballLines", function(req, res, next){
	res.render("CollegeFootballLines")
})

router.get("/NBAlines", function(req, res, next){
	res.render("NBAlines")
})

router.get("/nfl", function(req, res, next){
	
	var options = {
		url: "https://jsonodds.com/api/odds/nfl",
		method: "GET", 
		headers: {
			"JsonOdds-API-Key": "b8d96367-e88a-4f9d-aa5d-f270fab35c2c"
		}
	}
	
	axios(options).then(function(response){
		res.send(response.data)
	});
	

});

router.get("/CollegeFootball", function(req, res, next){
	
	var options = {
		url: "https://jsonodds.com/api/odds/NCAAF",
		method: "GET", 
		headers: {
			"JsonOdds-API-Key": "b8d96367-e88a-4f9d-aa5d-f270fab35c2c"
		}
	}
	
	axios(options).then(function(response){
		res.send(response.data)
	});
	

});

router.get("/nba", function(req, res, next){
	
	var options = {
		url: "https://jsonodds.com/api/odds/nba",
		method: "GET", 
		headers: {
			"JsonOdds-API-Key": "b8d96367-e88a-4f9d-aa5d-f270fab35c2c"
		}
	}
	
	axios(options).then(function(response){
		res.send(response.data)
	});
	

});

router.get('/poker', function(req, res) {
	
	var file = ""
	var cssfile = ""

	fs.readdir("./public/static/js/", (err, files) => {
		console.log(err)
		files.forEach(js => {
			if (!js.includes("map")){
			file = js
			}
		}) 
		fs.readdir("./public/static/css/", (err, files) => {
			files.forEach(css => {
				if (!css.includes("map")){
					cssfile = css
				}
			})
			res.render("poker", 
				{user : JSON.stringify(req.user),
				 file : "/static/js/" + file,
				 cssfile : "/static/css/" + cssfile
			});
		})
	}); 
});


router.post('/register', function(req, res) {
		
	var username = req.body.username
	var password = req.body.password
	var password2 = req.body.password2

	req.checkBody("username", "Name is required").notEmpty();
	req.checkBody("password", "Password is required").notEmpty();
	req.checkBody("password2", "Passwords do no match").equals(req.body.password);

	var errors = req.validationErrors()

	if(errors){
		res.render("register",{ 
			errors: errors 
		});
	} else {


	var newUser = new User({
		username : username,
		password : password,
		money : 0
	});

	User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(user);
		});


	req.flash("success_msg", "You are registered and can now login");
	res.redirect('login')
	}
});

passport.use(new LocalStrategy(
  function(username, password, done) {
   User.getUserByUsername(username, function(err, user){
   	if(err) throw err;
   	if(!user){
   		return done(null, false, {message: 'Unknown User'});
   	}

   	User.comparePassword(password, user.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
   			console.log("asljdhkajshdfkjahsdfkjhasdkfjhaksjdhf")
   			return done(null, user);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });
  }));

passport.serializeUser(function(user, done) { 
 
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login',
  passport.authenticate('local', {successRedirect:'navbar2', failureRedirect:'/views/login',failureFlash: true}))


router.get('/logout', function(req, res){
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('navbar2');
});






module.exports = router;
