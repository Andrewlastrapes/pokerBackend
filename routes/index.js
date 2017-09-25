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
	res.redirect('login')
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


// router.post('/login', function(req, res, next){
// 	res.redirect('')
// })

module.exports = router;
