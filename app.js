var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var http = require("http");

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	// Use connect method to connect to the server
	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  console.log("Connected successfully to server");

	  db.close();
});

	response.end('Minnie is a mouse');
}).listen(8080);

console.log('Server running at http//localhost:8080')