var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Express' });
});

router.get("/register", function(req, res, next){
	res.render("register");
})

router.post('/register', function(req, res, next) {
		
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

router.post('/login', function(req, res, next) {
	res.redirect("navbar2")
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


module.exports = router;
