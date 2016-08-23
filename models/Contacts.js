var mongoose = require('mongoose');
var ContactSchema = new mongoose.Schema({
	name: String,
	description: String,
	phone: String
});

mongoose.model('Contact', ContactSchema);