let {deal, fold, call, check, raise, nextPhase, reset} = require('./actions.js');

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
      winners: [],
      handNumber : 0
    }
  

	io.on('connection', (socket) => { 
		console.log("Someone connected")
    console.log(socket.handshake.query)
    socket.emit("socket id", socket.id)
			var newUser = {
         username : socket.handshake.query.username,
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
	    	
        var time = 1
        var AllIn = call(this.state)
        
        if (AllIn === false){
          console.log("False")
          io.emit("newState", this.state)
        } else {
            console.log("True")
            var numOfTimesToLoop = 0

            if(this.state.phase === "preflop"){
              numOfTimesToLoop = 4
            } 
            else if (this.state.phase === "flop"){
              numOfTimesToLoop = 3
            }

            else if(this.state.phase === "turn"){
              numOfTimesToLoop = 2
            }

            else if(this.state.phase === "river"){
              numOfTimesToLoop = 1
            }

            
            var zoom = function(loopCounter){
              if (loopCounter > 0){
                setTimeout( () => {
                   nextPhase(this.state)
                  io.emit("newState", this.state)
                  zoom(loopCounter - 1)
                }, 2000)
              }
            }.bind(this);
              zoom(numOfTimesToLoop)
          }
          
	    	
        

		});

	       socket.on("Check", () => {
	    	check(this.state)
	    	io.emit("newState", this.state)
		});
         

	       socket.on("Fold", () => {

          var time = 1
          var AllIn = fold(this.state)
	       	if (AllIn === false){
            io.emit("newState", this.state)
          } else {
            console.log("True")
            var numOfTimesToLoop = 0

            if(this.state.phase === "preflop"){
              numOfTimesToLoop = 4
            } 
            else if (this.state.phase === "flop"){
              numOfTimesToLoop = 3
            }

            else if(this.state.phase === "turn"){
              numOfTimesToLoop = 2
            }

            else if(this.state.phase === "river"){
              numOfTimesToLoop = 1
            }

             var zoom = function(loopCounter){
              if (loopCounter > 0){
                setTimeout( () => {
                   nextPhase(this.state)
                  io.emit("newState", this.state)
                  zoom(loopCounter - 1)
                }, 2000)
              }
            }.bind(this);
              zoom(numOfTimesToLoop)
          }
        

        });

      
        


		socket.on("disconnect", () => {
			
      
      var disconnectingUser = []

      for(var i = 0; i < this.state.users.length; i++){

        if (this.state.users[i].socketID === socket.id){
         
         disconnectingUser = i

         
        }
      }

       this.state.users.splice(disconnectingUser, 1)
       
       if (this.state.users.length < 2){
          reset()
          this.state.hand = 0
       }
      
      io.emit("newState", this.state)
		});
	});

}








