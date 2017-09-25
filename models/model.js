var mongoose = require("mongoose");
var Schema = mongoose.Schema; 


var schema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	money: { type: Number, required: true }

})



module.export = mongoose.model("Accounts", schema);