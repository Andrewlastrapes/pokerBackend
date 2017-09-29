let {deal, nextTurn, fold, reset, firstToAct, checkForNewPhase} = require('./actions.js');

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
      hand: 0
    }
  

	io.on('connection', (socket) => {
		console.log("Someone connected")
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
         socket.on("Reset", () => {
          reset(this.state)
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



function call(currentState){

    
       var marker = []
       var caller = []



      for (var i = 0; i < currentState.users.length; i++){
    
        if (currentState.users[i].marker == true){
          marker = currentState.users[i]
        }
        if(currentState.users[i].isActive == true){
          caller = currentState.users[i]
        }

    } 
        // Adds call into pot and matches raisers bet. 

        caller.bet = marker.bet
        currentState.pot = currentState.pot + caller.bet
        caller.stack = caller.stack - caller.bet

         
        for (var i = 0; i < currentState.users[i]; i++){

          // if (currentState.users[i] is 1 left of rMarker)
            NextPhase(currentState)
          } else {
            nextTurn()
          }
}


function check(currentState){

      for (var i = 0; i < currentState.users.length; i++){
        if(currentState.users[i].isActive === true & currentState.users[i].marker === true){
          nextPhase(currentState)
        }
      } else {
       
       nextTurn(currentState)
     }
}


function raise(currentState){
  
   var raiser = []
   var pot = 0
   
    for (var i = 0; i < currentState.users.length; i++){
   
        if (currentState.users[i].marker == true){
          currentState.users[i].marker = false;

        }
        if (currentState.users[i].isActive == true){
        
         currentState.users[i].Rmarker = true;
         raiser = currentState.users[i]

          } 
       }

         pot = currentState.pot + parseInt(currentState.raiseValue)
         raiser.stack = raiser.stack - parseInt(currentState.raiseValue)
         raiser.bet = parseInt(currentState.raiseValue)

        
       

   		nextTurn(currentState)

}


// function fold(currentState){

  


//    var fold = []
   
   
//     for (var i = 0; i < currentState.users.length; i++){
  
//         if (currentState.users[i].isActive === true){
//          currentState.users[i].folded = true;
//       }
//         if (currentState.users[i].folded === true){
//         fold.push(currentState.users[i])
       
        
//        }  
//      }
        
//         for (var i = 0; i < currentState.users.length; i++){
//           if (currentState.users.length - fold.length === 1){
//             if (currentState.users[i].folded == false){
//               var winner = currentState.users[i]
//               winner.stack = currentState.pot + winner.stack 
               
//                   break;
//                   }

                 
//         }
      
//      }
     

//     	nextTurn(currentState)
      

      
//     }


  // function nextTurn(currentState, preventsPhaseChange){
       
  //      var newUsers = currentState.users
  //      var newPhase = currentState.phase
  //      var newActive = 0
  //      var oldActive = 0
  //      var skip = false
       
   
  //   for (var i = 0; i < newUsers.length; i++){
      
  //       if (newUsers[i].isActive == true){
  //        newUsers[i].isActive = false 
  //        oldActive = i
        
  //        newActive = i + 1 
  //       }

  //        if (newActive == currentState.users.length){
  //         newActive = 0;
  //        }
         
  //     }
  //     while(newUsers[newActive].folded == true){
  //       newActive++
  //     }
     
  //     newUsers[newActive].isActive = true
      
  //     if(newUsers[oldActive].marker == true && preventsPhaseChange == false) {
        
      
        
  //       if(currentState.phase == "preflop"){
  //         flop(currentState)
         
  //         newPhase = "flop"
         
  //         var folds = 0
  //         var firstToAct = 0
  //         var pass = false
         
  //        for (var i = 0; i < newUsers.length; i++){
  //           if (newUsers[i].position === "firstAfterPhase"){
  //             firstToAct = i
  //           }
  //           if(newUsers[i].isActive === true){
  //             newUsers[i].isActive = false;
              
  //           }
  //         }
        
  //         for (var i = firstToAct;  i >= 0; i-- ){
  //           if(newUsers[i].folded === false){
  //             newUsers[i].isActive = true;
  //             pass = true;
  //             break;
  //             } else {
  //               folds = folds + 1
  //             }
  //           }
      
  //           if (pass === false){
  //             if (newUsers.length - 3 === folds){
  //               for (var i = 0; i < newUsers.length; i++){
  //                 if (newUsers[i].position === "firstAfterPhase"){
  //                   if (newUsers[i + 1].folded === false){
  //                     newUsers[i + 1].isActive = true
  //                     } else {
  //                         newUsers[i + 2].isActive = true;
  //                             }
  //                        }  
  //                       }
  //                    }  
  //                   }    

  //               skip = true

  //         } 


  //       if (skip === false){

  //         if (currentState.phase == "flop"){
  //          turn(currentState)
            
  //           newPhase = "turn"


  //           var folds = 0
  //           var firstToAct = 0
  //           var pass = false

  //            for (var i = 0; i < newUsers.length; i++){
  //             if (newUsers[i].position === "firstAfterPhase"){
  //               firstToAct = i
  //             }
  //             if(newUsers[i].isActive === true){
  //               newUsers[i].isActive = false;
  //             }
  //           }
          
           
            

  //           for (var i = firstToAct;  i >= 0; i--){
  //             if(newUsers[i].folded === false){
  //               newUsers[i].isActive = true;
  //               var pass = true;
  //               break;
  //               } else {
  //                 folds = folds + 1
  //               }
  //             }
  //              if (pass === false){
  //               if (newUsers.length === folds - 3){
  //                 for (var i = 0; i < newUsers.length; i++){
  //                   if (newUsers[i].position === "firstAfterPhase"){
  //                     if (newUsers[i + 1].folded === false){
  //                       newUsers[i + 1].isActive = true
  //                       } else {
  //                           newUsers[i + 2].isActive = true;
  //                               }
  //                          }  
  //                         }
  //                      }  
  //                     }    
  //         } 

  //           skip = true;
  //     }


  //     if (skip === false){
  //         if(currentState.phase == "turn"){
  //           river(currentState)
  //           newPhase = "river"
  //           } 
  //            for (var i = 0; i < newUsers.length; i++){
  //             if (newUsers[i].position === "firstAfterPhase"){
  //               firstToAct = i
  //             }
  //             if(newUsers[i].isActive === true){
  //               newUsers[i].isActive = false;
  //             }
  //           }
          
  //           for (var i = firstToAct;  i >= 0; i-- ){
  //             if(newUsers[i].folded === false){
  //               newUsers[i].isActive = true;
  //               break;
  //               } else {
  //                 folds = folds + 1
  //               }
  //             }
               
  //             // refactor 
  //              if (pass === false){
  //               if (newUsers.length === folds - 3){
  //                 for (var i = 0; i < newUsers.length; i++){
  //                   if (newUsers[i].position === "firstAfterPhase"){
  //                     if (newUsers[i + 1].folded === false){
  //                       newUsers[i + 1].isActive = true
  //                       } else {
  //                           newUsers[i + 2].isActive = true;
  //                               }
  //                          }  
  //                         }
  //                      }  
  //                     }    
  //         }



  //           skip = true;
  //             }
          

  //         if(currentState.phase == "river"){
  //           // pokerhand solver function




  //           newPhase = "end hand"

  //         }

        
  //     currentState.phase = newPhase;
  // }




  // function flop(currentState){

       
  //      currentState.flop = [this.state.deck.pop(), this.state.deck.pop(), this.state.deck.pop()]
      
  // }

  // function turn(currentState){
    
     
  //       currentState.turn = [this.state.deck.pop()]
      
    
  // }

  // function river(currentState){
   
     
  //       currentState.river = [this.state.deck.pop()]
  
  // }




