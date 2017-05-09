var http = require("http");

var PORTone = 7000;
var PORTtwo = 7500;

function handleRequestOne (request, response) {
	response.end("You are just the best! Has anyone told you that lately?");
};

function handleRequestTwo (request, response) {
	response.end("Something bad about yourself. Maybe use the other server next time?");
};

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTone, function() {
	console.log("Happy server listening on port:", PORTone);
});

serverTwo.listen(PORTtwo, function () {
	console.log("Grumpy cat server listening on port:", PORTtwo);
});