var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');

module.exports = {
	get: function(req, res) {
		var contact = new Contact({'name': 'Mickey Mouse 2', 
								   'description': 'Mickey Mouse clone',
								   'phone': '123-456-7890'});
		contact.save(function(err) {
			if (err) {
				console.log('There was an error');
			} else {
				Contact.find({}, function(err, results) {
					res.render('index', {title: 'Minnie is a Mouse', results: results});
				})
			}
		});
	}
}