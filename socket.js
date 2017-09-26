module.exports = function setUpSockets(io){



this.state = {
      users: [],
      deck : generateNewDeck(),
      flop: [],
      turn: [],
      river: [],
      phase: "preflop",
      pot: 0,
      fold: [],
      raiseValue: 0,
      hand: 0
    }
  

	io.on('connection', (socket) => {
		console.log("Someone connected")
			
		this.state.users.push({
			
		      username : "user1",
		      clock : Date(),
		      stack : 50,
		      hand : [],
		      position : "",
		      isActive: true,
		      folded: false,
		      marker: false,
		      bet: 0,
		      socketID: socket.id
	    });

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
	       })


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




function generateNewDeck(){
  var hearts = []
  var spades = []
  var diamonds = []
  var clubs = []

  
  for (var i = 2; i < 15; i++ ){
    hearts.push({
      number : i,
      suit: "hearts"
    })
    spades.push({
      number : i,
      suit: "spades"
    })
    diamonds.push({
      number : i,
      suit: "diamonds"
    })
    clubs.push({
      number : i,
      suit: "clubs"
    })  
  }

  var deck = hearts.concat(spades).concat(diamonds).concat(clubs);
  var currentIndex = deck.length, temporaryValue, randomIndex
  while(0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }

  return deck;

}






  function deal(currentState){
   
    var players = []

    currentState.deck = generateNewDeck()
    
    currentState.hand = currentState.hand + 1

if (currentState.hand === 1){

    for (var i = 0; i < currentState.users.length; i++){
      players.push(currentState.users[i])
    }


    if (players.length >= 4){
      currentState.users.splice(-1).position = "Big Blind"
      currentState.users.splice(-2, -1).position = "Small Blind"
      currentState.users.splice(-3, -2).position = "Dealer"
      currentState.users.splice(-4, -3).position = "firstToAct" 
    }
    if (players.length === 3){
      currentState.users.splice(-1).position = "Big Blind"
      currentState.users.splice(-2, -1).position = "Small Blind"
      currentState.users.splice(-3, -2).position = "Dealer"
    }

    if (players.length === 2){
      currentState.users.splice(-1).position = "Big Blind"
      currentState.users.splice(-2, -1).position = "Small Blind"
      }




       for (var i = 0; i < currentState.users.length; i++){

      currentState.users[i].hand = [currentState.deck.pop(), currentState.deck.pop()]
      if (currentState.users[i].position === "Big Blind"){
       currentState.users[i].stack = currentState.users[i].stack - 1
       currentState.users[i].bet = currentState.users[i].bet + 1
        currentState.pot = currentState.pot + 1
      }
      if (currentState.users[i].position === "Small Blind"){
       currentState.users[i].stack = currentState.users[i].stack - .50
       currentState.users[i].bet = currentState.users[i].bet + .50
        currentState.pot = currentState.pot + .50
      }
    }
    } else {

      for (var i = 0; i < currentState.users.length; i++){

       if (currentState.users[i].position === "Big Blind"){
          currentState.users[i + 1].position ==="Big Blind"
        }
        if (currentState.users[i].position === "Small Blind"){
          currentState.users[i + 1].position ==="Small Blind"
        }
        if (currentState.users[i].position === "Dealer"){
          currentState.users[i + 1].position ==="Dealer"
        }
        if (currentState.users[i].position === "firstAfterPhase"){
          currentState.users[i + 1].position ==="firstAfterPhase"
        }
      }

      for (var i = 0; i < currentState.users.length; i++){

      currentState.users[i].hand = [currentState.deck.pop(), currentState.deck.pop()]
      if (currentState.users[i].position === "Big Blind"){
       currentState.users[i].stack = currentState.users[i].stack - 1
       currentState.users[i].bet = currentState.users[i].bet + 1
        currentState.pot = currentState.pot + 1
      }
      if (currentState.users[i].position === "Small Blind"){
       currentState.users[i].stack = currentState.users[i].stack - .50
       currentState.users[i].bet = currentState.users[i].bet + .50
        currentState.pot = currentState.pot + .50
      }
    }
  }

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
        

        caller.bet = marker.bet
        currentState.pot = currentState.pot + caller.bet
        caller.stack = caller.stack - caller.bet




          
         nextTurn(currentState, false)
}


function check(currentState){

     
   
       nextTurn(currentState, false)
}


function raise(currentState){
  
   var raiser = []
   var pot = 0
   
    for (var i = 0; i < currentState.users.length; i++){
   
        if (currentState.users[i].marker == true){
          currentState.users[i].marker = false;
        }
        if (currentState.users[i].isActive == true){
        
         currentState.users[i].marker = true;
         raiser = currentState.users[i]

          } 
       }

         pot = currentState.pot + parseInt(currentState.raiseValue)
         raiser.stack = raiser.stack - parseInt(currentState.raiseValue)
         raiser.bet = parseInt(currentState.raiseValue)

        
       

   		nextTurn(currentState, true)

}


function fold(currentState){

  


   var fold = []
   
   
    for (var i = 0; i < currentState.users.length; i++){
  
        if (currentState.users[i].isActive === true){
         currentState.users[i].folded = true;
      }
        if (currentState.users[i].folded === true){
        fold.push(currentState.users[i])
       
        
       }  
     }
        
        for (var i = 0; i < currentState.users.length; i++){
          if (currentState.users.length - fold.length === 1){
            if (currentState.users[i].folded == false){
              var winner = currentState.users[i]
              winner.stack = currentState.pot + winner.stack 
               
                  break;
                  }

                 
        }
      
     }
     

    	nextTurn(currentState, false)
      

      
    }


  function nextTurn(currentState, preventsPhaseChange){
       
       var newUsers = currentState.users
       var newPhase = currentState.phase
       var newActive = 0
       var oldActive = 0
       var skip = false
       
   
    for (var i = 0; i < newUsers.length; i++){
      
        if (newUsers[i].isActive == true){
         newUsers[i].isActive = false 
         oldActive = i
        
         newActive = i + 1 
        }

         if (newActive == currentState.users.length){
          newActive = 0;
         }
         
      }
      while(newUsers[newActive].folded == true){
        newActive++
      }
     
      newUsers[newActive].isActive = true
      
      if(newUsers[oldActive].marker == true && preventsPhaseChange == false) {
        
      
        
        if(currentState.phase == "preflop"){
          flop(currentState)
         
          newPhase = "flop"
         
          var folds = 0
          var firstToAct = 0
          var pass = false
         
         for (var i = 0; i < newUsers.length; i++){
            if (newUsers[i].position === "firstAfterPhase"){
              firstToAct = i
            }
            if(newUsers[i].isActive === true){
              newUsers[i].isActive = false;
              
            }
          }
        
          for (var i = firstToAct;  i >= 0; i-- ){
            if(newUsers[i].folded === false){
              newUsers[i].isActive = true;
              pass = true;
              break;
              } else {
                folds = folds + 1
              }
            }
      
            if (pass === false){
              if (newUsers.length - 3 === folds){
                for (var i = 0; i < newUsers.length; i++){
                  if (newUsers[i].position === "firstAfterPhase"){
                    if (newUsers[i + 1].folded === false){
                      newUsers[i + 1].isActive = true
                      } else {
                          newUsers[i + 2].isActive = true;
                              }
                         }  
                        }
                     }  
                    }    

                skip = true

          } 


        if (skip === false){

          if (currentState.phase == "flop"){
           turn(currentState)
            
            newPhase = "turn"


            var folds = 0
            var firstToAct = 0
            var pass = false

             for (var i = 0; i < newUsers.length; i++){
              if (newUsers[i].position === "firstAfterPhase"){
                firstToAct = i
              }
              if(newUsers[i].isActive === true){
                newUsers[i].isActive = false;
              }
            }
          
           
            

            for (var i = firstToAct;  i >= 0; i--){
              if(newUsers[i].folded === false){
                newUsers[i].isActive = true;
                var pass = true;
                break;
                } else {
                  folds = folds + 1
                }
              }
               if (pass === false){
                if (newUsers.length === folds - 3){
                  for (var i = 0; i < newUsers.length; i++){
                    if (newUsers[i].position === "firstAfterPhase"){
                      if (newUsers[i + 1].folded === false){
                        newUsers[i + 1].isActive = true
                        } else {
                            newUsers[i + 2].isActive = true;
                                }
                           }  
                          }
                       }  
                      }    
          } 

            skip = true;
      }


      if (skip === false){
          if(currentState.phase == "turn"){
            river(currentState)
            newPhase = "river"
            } 
             for (var i = 0; i < newUsers.length; i++){
              if (newUsers[i].position === "firstAfterPhase"){
                firstToAct = i
              }
              if(newUsers[i].isActive === true){
                newUsers[i].isActive = false;
              }
            }
          
            for (var i = firstToAct;  i >= 0; i-- ){
              if(newUsers[i].folded === false){
                newUsers[i].isActive = true;
                break;
                } else {
                  folds = folds + 1
                }
              }
               
              // refactor 
               if (pass === false){
                if (newUsers.length === folds - 3){
                  for (var i = 0; i < newUsers.length; i++){
                    if (newUsers[i].position === "firstAfterPhase"){
                      if (newUsers[i + 1].folded === false){
                        newUsers[i + 1].isActive = true
                        } else {
                            newUsers[i + 2].isActive = true;
                                }
                           }  
                          }
                       }  
                      }    
          }



            skip = true;
              }
          

          if(currentState.phase == "river"){
            // pokerhand solver function




            newPhase = "end hand"

          }

        
      currentState.phase = newPhase;
  }



  function flop(currentState){

       
       currentState.flop = [this.state.deck.pop(), this.state.deck.pop(), this.state.deck.pop()]
      
  }

  function turn(currentState){
    
     
        currentState.turn = [this.state.deck.pop()]
      
    
  }

  function river(currentState){
   
     
        currentState.river = [this.state.deck.pop()]
  
  }

