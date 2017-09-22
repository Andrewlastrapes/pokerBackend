module.exports = function setUpSockets(io){
	io.on('connection', (socket) => {
		console.log("Someone connected")
		socket.on("disconnect", (payload) => {
			console.log("Someone disconnected")
		});
	});

}