var mongoose = require("mongoose");
var bcrypt = require('bcrypt')

mongoose.connect('mongodb://localhost/Accounts')


var Schema = mongoose.Schema; 



var schema = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	money: { type: Number, required: true }

})



var User = module.exports = mongoose.model("User", schema);


module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}
