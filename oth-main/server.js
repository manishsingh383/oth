var express = require("express"),
    app =express();
	app.use('/', express.static(__dirname + '/'));
var server = require("http").createServer(app);
    server.listen(5111);

    app.get("/",function(req , res){
    	res.sendfile('OTH_propertyDetails.html');
    	// res.sendfile('home.html');
    });
	console.log('fucking OTH server is running on 5111');