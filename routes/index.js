var express = require('express');
var router = express.Router();
var ContactController = require('./../controllers/contacts.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  ContactController.get(req, res, function() {
  	//res.render('index', { title: 'Minnie is a Mouse' });
  });
});

module.exports = router;
