var express = require('express');
var router = express.Router();
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;


var User = require('../models/model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Express' });
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
  passport.authenticate('local', {successRedirect:'navbar2', failureRedirect:'/views/login',failureFlash: true}),
  function(req, res) {
    res.redirect('navbar2');
  });

router.get('/logout', function(req, res){
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('navbar2');
});






module.exports = router;
