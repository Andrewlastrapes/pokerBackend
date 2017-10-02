var Hand = require("pokersolver").Hand;






function flop(currentState){

       
       currentState.flop = [currentState.deck.pop(), currentState.deck.pop(), currentState.deck.pop()]
      
  }

  function turn(currentState){
    
     
        currentState.turn = [currentState.deck.pop()]
      
    
  }

  function river(currentState){
   
     
        currentState.river = [currentState.deck.pop()]
  
  }


function handSolver(currentState){
	var flop = currentState.flop
	var turn = currentState.turn
	var river = currentState.river
	var board = []
	var cards = []


	board = flop.concat(turn).concat(river)

	var copyBoard = Object.assign({}, board);



	for(var i = 0; i < copyBoard.length; i++){
		if (copyBoard[i].number === 14){
			copyBoard[i].number ="A"
		}
		if (copyBoard[i].number === 13){
			copyBoard[i].number ="K"
		}
		if (copyBoard[i].number === 12){
			copyBoard[i].number ="Q"
		}
		if (copyBoard[i].number === 11){
			copyBoard[i].number ="J"
		}
	}
		
	console.log(copyBoard)

	for(var i = 0; i < copyBoard.length; i++){
		cards.push(copyBoard[i].number + copyBoard[i].suit[0])
	}



	
	
	
	

}



// Generates new deck

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

// Game over function that resets everything

function reset(currentState){
		
	for (var i = 0; i < currentState.users.length; i++){
		currentState.users[i].bet = 0;
		currentState.users[i].hand = [];
		currentState.users[i].isActive = false;
		currentState.users[i].marker = false;
		currentState.users[i].Rmarker = false;
		currentState.users[i].folded = false;
	}
		currentState.pot = 0;
		currentState.fold = 0;
		currentState.phase = "Game Over";
		currentState.flop = [];
		currentState.turn = [];
		currentState.river = [];

		console.log("hi")
	}





// Finds and activates non folded user left of dealer.

function activateLeftOfDealer(currentState){
	var dealerMarker = 0

	for (var i = 0; i < currentState.users.length; i++){
		if(currentState.users[i].position === "Dealer"){
		    dealerMarker = i 
		    }
		}

 	while(currentState.users[dealerMarker].folded === true){
    	dealerMarker--
	}

}

// Sets marker to user furthest to the left of active user. 

function setMarker(currentState){
	

	activeMarker = 0
	for (var i = 0; i < currentState.users.length; i++){
		if(currentState.users[i].isActive === true){
			activeMarker = i
		}
	}
		if(activeMarker - 1 === -1){
			currentState.users[currentState.users.length - 1].marker = true;
		}	else {
			currentState.users[activeMarker - 1].marker = true;
		}
}

// Calls activateLeftOfDealer and setMarker. Resets all user bets

function setPhase(currentState){

	for (var i = 0; i < currentState.users.length; i++){
		currentState.users[i].bet = 0;
		currentState.users[i].Rmarker = false;
		currentState.users[i].marker = false;
	}
	activateLeftOfDealer(currentState)
	setMarker(currentState)
}

// checks and changes current phase.

function nextPhase(currentState){
	if(currentState.phase === "turn"){
		currentState.phase = "river"
		river(currentState)
		console.log(handSolver(currentState))
		setPhase(currentState)
	}
	else if(currentState.phase === "flop"){
		currentState.phase = "turn"
		turn(currentState)
		setPhase(currentState)
	}
	else if (currentState.phase === "preflop"){
		currentState.phase = "flop"
		flop(currentState)
		setPhase(currentState)
	}
}

function setPositions(currentState){
	
	var indexOfBigBlind = -1
	var indexOfDealer = -1

  	for (var i = 0; i < currentState.users.length; i++){
  		if(currentState.users[i].position === "Big Blind"){
  			indexOfBigBlind = i
		}
		if(currentState.users[i].position === "Dealer"){
			indexOfDealer = i
		}
  	}

  	// Rotate

  	if (indexOfBigBlind > -1 && indexOfDealer > -1){
  		currentState.users[indexOfBigBlind].position = "";
  		currentState.users[indexOfDealer].position = "";
 		currentState.users[(indexOfBigBlind + 1) % currentState.users.length].position = "Big Blind";
  		currentState.users[(indexOfDealer + 1) % currentState.users.length].position = "Dealer";
  		
  	} else {
  		currentState.users[0].position = "Big Blind"
  			if(currentState.users.length > 2){
  				currentState.users[currentState.users.length - 2].position = "Dealer"
  			} else {
  				currentState.users[1].position = "Dealer"
  			}
  	}
}


function deal(currentState){

	// Pushes waiting room users into users array 
	
	for (var i = 0; i < currentState.waitingRoom.length; i++){
		if(currentState.users.length < 8){
			currentState.users.push(currentState.waitingRoom.shift())
		}
	}

	// unfold all users

	for (var i = 0; i < currentState.users.length; i++){
		currentState.users[i].folded === false
	}

	// Setting deck

	currentState.deck = generateNewDeck();

	// dealing each user two cards

	for (var i = 0; i < currentState.users.length; i++){
		currentState.users[i].hand = [currentState.deck.pop(), currentState.deck.pop()]
  	}

  	setPositions(currentState)

  	// set initial marker

  	for (var i = 0; i < currentState.users.length; i++){
  		if (currentState.users[i].position === "Big Blind"){
  			currentState.users[i].marker = true;
  		} else{
  			currentState.users[i].marker = false;
  		}
  	}

	
  	// sets initial active

  	for (var i = 0; i < currentState.users.length; i++){
  		currentState.users[i].isActive = false;
		if (currentState.users[i].position === "Big Blind") {
  			indexOfBigBlind = i 
  		}
  	}

  	currentState.users[(indexOfBigBlind + 1) % currentState.users.length].isActive = true; 



  	// change phase from "hand over" to "preflop"

  	currentState.phase = "preflop" 

  	// Subtracts big and small blinds and adds to the pot

  	for (var i = 0; i < currentState.users.length; i++){
		if (currentState.users[i].position === "Big Blind"){
			var smallBlind = i - 1
			if(smallBlind === -1){
				smallBlind = currentState.users.length - 1
			}
			currentState.users[i].stack -= 1
			currentState.users[i].bet += 1
			currentState.pot += 1
			currentState.users[smallBlind].stack -= .50
			currentState.users[smallBlind].bet += .50
			currentState.pot += .50
		} 

	}
	
}

function raise(currentState){
  
   var raiser = []
   var pot = 0
   
    for (var i = 0; i < currentState.users.length; i++){
   
        if(currentState.users[i].Rmarker === true){
        	currentState.users[i].Rmarker = false;
        }

        if (currentState.users[i].marker === true){
          currentState.users[i].marker = false;

        }
        if (currentState.users[i].isActive == true){
        
         currentState.users[i].Rmarker = true;
         raiser = currentState.users[i]

          } 
       }

         currentState.pot = currentState.pot + parseInt(currentState.raiseValue)
         raiser.stack = raiser.stack - parseInt(currentState.raiseValue)
         raiser.bet = parseInt(currentState.raiseValue)

        
       

   		nextTurn(currentState)

}

function allIn(currentState){

	// Current Rmarker = false
	// Current marker = false
	 for (var i = 0; i < currentState.users.length; i++){
   
        if(currentState.users[i].Rmarker === true){
        	currentState.users[i].Rmarker = false;
        }
        if (currentState.users[i].marker === true){
          currentState.users[i].marker = false;
      }
     }

	// Takes all money out of users stack. Puts money into pot. 

	for(var i = 0; i < currentState.users.length; i++){
		if(currentState.users[i].isActive === true){
			currentState.users[i].stack = currentState.users[i].stack - currentState.users[i].stack
			currentState.pot = currentState.users[i].stack + currentState.pot
			currentState.users[i].Rmarker = true; 
 		}
	}
	nextTurn(currentState)
}



function check(currentState){
	var activeUserHasMarker = false;

      for (var i = 0; i < currentState.users.length; i++){
        if(currentState.users[i].isActive === true && currentState.users[i].marker === true){
          activeUserHasMarker = true;
        }
       }
       if (activeUserHasMarker === true){
       	nextPhase(currentState)
       } else {
       	nextTurn(currentState)
     }
}



function call(currentState){

       var indexRmarker = -1
       var markerIndex = -1
       var caller = 0
       var callerIndex = 0



      for (var i = 0; i < currentState.users.length; i++){
    
        if (currentState.users[i].marker === true){
          markerIndex = i
        }
        if(currentState.users[i].isActive === true){
          caller = currentState.users[i]
          callerIndex = i
        }
        if(currentState.users[i].Rmarker === true){
          indexRmarker = i;
        }

    } 
    	// Detect if we're in rMarker or marker mode
    	if (markerIndex === -1){
    		var marker = currentState.users[indexRmarker]
    	} else {
    		var marker = currentState.users[markerIndex]
    	}
        // Adds call into pot and matches raisers bet. 

        
        currentState.pot += marker.bet - caller.bet
        caller.stack -= marker.bet - caller.bet
        caller.bet = marker.bet
       
    

        if(indexRmarker === -1){
        	nextTurn(currentState)
        } else{
	          if (indexRmarker - callerIndex === 1 || indexRmarker - callerIndex === -(currentState.users.length - 1)){
	            nextPhase(currentState)
	           } else {
	            nextTurn(currentState)
	          }
	         }
}





function fold(currentState){

	var indexRmarker = 0;
	var folderIndex = 0;
	var markerIndex = -1;

	for (var i = 0; i < currentState.users.length; i++){

		if(currentState.users[i].isActive === true){
			currentState.users[i].folded = true;
			currentState.fold += 1
			folderIndex = i
	
		}
		if(currentState.users[i].Rmarker === true){
          indexRmarker = i;
        }
	}
	
	if(currentState.users.length - currentState.fold === 1){
		for (var i = 0; i < currentState.users.length; i++) {
			if (currentState.users[i].folded === false){
				currentState.users[i].stack += currentState.pot
			}
		}
		
		reset(currentState)
		console.log("Hand Over")
			
	} else {

		// Detect if we're in rMarker or marker mode
    	if (markerIndex === -1){
    		var marker = currentState.users[indexRmarker]
    	} else {
    		var marker = currentState.users[markerIndex]
    	}
		 
		
        if(indexRmarker === -1){
        	nextTurn(currentState)
        } else {

			 if (indexRmarker - folderIndex === 1 || indexRmarker - folderIndex === -(currentState.users.length - 1)){
            	nextPhase(currentState)
           } else {
            	nextTurn(currentState)
         	 }

		}	

		}
	}

// Next Turn:

// Needs to activate next user


function nextTurn(currentState){

		var newActive = 0
     

    // Deactivates current user, and activates next user. 

    for (var i = 0; i < currentState.users.length; i++){

	   if (currentState.users[i].isActive === true){
         currentState.users[i].isActive = false 
         
        
         newActive = i + 1 
        }

         if (newActive == currentState.users.length){
          newActive = 0;
         }
	}
		while(currentState.users[newActive].folded === true){
         newActive++
       }

    	currentState.users[newActive].isActive = true


}




	




module.exports = {
	deal,
	fold,
	call,
	check,
	raise,
	allIn
}