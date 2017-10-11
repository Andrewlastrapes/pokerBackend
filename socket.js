let {deal, fold, call, check, raise} = require('./actions.js');

module.exports = function setUpSockets(io){



this.state = {
      users: [],
      waitingRoom: [],
      deck : [],
      flop: [],
      turn: [],
      river: [],
      phase: "Game Over",
      pot: 0,
      fold: 0,
      raiseValue: 0,
      hand: 0,
      winners: []
    }
  

	io.on('connection', (socket) => { 
		console.log("Someone connected")
    socket.emit("socket id", socket.id)
			var newUser = {
         username : "User",
          clock : Date(),
          stack : 50,
          hand : [],
          position : "",
          isActive: true,
          folded: false,
          marker: false,
          Rmarker: false,
          bet: 0,
          totalBetThisHand: 0,
          socketID: socket.id
      }
      if (this.state.phase === "Game Over" && this.state.users.length < 8){
          this.state.users.push(newUser)
      } else {
		      this.state.waitingRoom.push(newUser)
			}
		     

	    io.emit("newState", this.state)

	    socket.on("Dealing", () => {
	    	deal(this.state)
	    	io.emit("newState", this.state)
		});

	     socket.on("Raise", (raiseValue) => {
	    	this.state.raiseValue = raiseValue
	    	raise(this.state)
	    	io.emit("newState", this.state)
		});

	      socket.on("Call", () => {
	    	call(this.state)
	    	io.emit("newState", this.state)
		});

	       socket.on("Check", () => {
	    	check(this.state)
	    	io.emit("newState", this.state)
		});

	       socket.on("Fold", () => {
	       	fold(this.state)
	       	io.emit("newState", this.state)
	       });

      
        


		socket.on("disconnect", () => {
			console.log(this.state.users)
      console.log(socket.id)
      var disconnectingUser = []

      for(var i = 0; i < this.state.users.length; i++){

        if (this.state.users[i].socketID === socket.id){
         
         disconnectingUser = i

          console.log(this.state.users[i].socketID + "disconnected")
        }
      }

       this.state.users.splice(disconnectingUser, 1)
      
      io.emit("newState", this.state)
		});
	});

}








