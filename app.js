var express = require("express"),
	app 	= express(),
	server 	= require("http").Server(app),
	io 		= require("socket.io")(server);

server.listen(80);

app.get("/", function(req, res){
	res.sendfile(_dirname + "/index.html");
})

io.on("connection", function(socket){
	socket.emit("news", {hello: "world"});
	socket.on("my other event", function(data){
		console.log("data");
	})
})