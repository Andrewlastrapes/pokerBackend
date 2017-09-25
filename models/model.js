var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/Accounts')


var Schema = mongoose.Schema; 



var schema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	money: { type: Number, required: true }

})



var User = module.export = mongoose.model("Accounts", schema);


module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}
