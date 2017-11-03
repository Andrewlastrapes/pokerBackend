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

  function convertCardNumberToLetter(cardsArray){

  	var copyBoard = []
  	var cards = []

  	for (var i = 0; i < cardsArray.length; i++){
		var card = Object.assign({}, cardsArray[i])
		copyBoard.push(card)
	}



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
		
	

	for(var i = 0; i < copyBoard.length; i++){
		cards.push(copyBoard[i].number + copyBoard[i].suit[0])
	}
		return cards
  }


function handSolver(currentState, users){
	var flop = currentState.flop
	var turn = currentState.turn
	var river = currentState.river
	var board = []
	var solvedHands = []
	var finalWinners = []

	board = flop.concat(turn).concat(river)
	board = convertCardNumberToLetter(board);

	


	for(var i = 0; i < users.length; i++){
		var compiledHand = convertCardNumberToLetter(users[i].hand).concat(board)
		var hand = Hand.solve(compiledHand)
		hand.index = i
		solvedHands.push(hand)

	}

	var winners = Hand.winners(solvedHands)

	for (var i = 0; i < winners.length; i++){
		finalWinners.push(users[winners[i].index])
	}
	

	return finalWinners
	

}

function payOutWinners(users, payout){
	var usernames = []
	var amount = payout/users.length
	for (var i = 0; i < users.length; i++){
		users[i].stack += amount
		usernames.push(users[i].username)
	}

	return usernames
	
}

function resolveWinner(currentState){

	var activeUsers = []
	var totalBets = []
	var numContributersToEachBet = []
	var totalBetsCopy = []


	for (var i = 0; i < currentState.users.length; i++){
		if(currentState.users[i].folded === false){
			activeUsers.push(currentState.users[i])
		}
	}

	for (var i = 0; i < currentState.users.length; i++) {
		
		if(!totalBets.includes(currentState.users[i].totalBetThisHand)){
			totalBets.push(currentState.users[i].totalBetThisHand)
			totalBetsCopy.push(currentState.users[i].totalBetThisHand)
		} 
	}
	totalBets.sort()
	totalBetsCopy.sort()
	for (var i = 0; i < totalBets.length; i++){
		var hasContributed = currentState.users.filter(function(user){
			return user.totalBetThisHand >= totalBets[i]
		})
		numContributersToEachBet.push(hasContributed.length)
	}

	while(totalBets.length > 0){
		var smallestPot = totalBets.shift()
		var smallestPotCopy = totalBetsCopy.shift()
		for(var i = 0; i < totalBets.length; i++){
			totalBets[i] -= smallestPot
		}
		var numContributed = numContributersToEachBet.shift();
		var eligibleUsers = activeUsers.filter(function(user){
			return user.totalBetThisHand >= smallestPotCopy
		})
		var winners	= handSolver(currentState, eligibleUsers)
		var payout = numContributed * smallestPot
		payOutWinners(winners, payout)
		currentState.winners.push(winners)
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
		currentState.users[i].totalBetThisHand = 0;

	}
		
		currentState.fold = 0;
		currentState.phase = "Game Over";
		currentState.flop = [];
		currentState.turn = [];
		currentState.river = [];
		

	
}





// Finds and activates non folded user left of dealer.

function activateLeftOfDealer(currentState){
	var leftOfDealerMarker = 0


	for (var i = 0; i < currentState.users.length; i++){
		if(currentState.users[i].isActive === true){
			currentState.users[i].isActive = false;
		}
	}
	  

	for (var i = 0; i < currentState.users.length; i++){
		if(currentState.users[i].position === "Dealer"){
		    leftOfDealerMarker = (i + 1) % currentState.users.length
		    }
		   }

 
 	while(currentState.users[leftOfDealerMarker].folded === true){
    	leftOfDealerMarker = (leftOfDealerMarker + 1) % currentState.users.length
    	
	}
	currentState.users[leftOfDealerMarker].isActive = true

}

// Sets marker to user furthest to the left of active user. 

function setMarker(currentState){
	

	activeMarker = 0

	
	for (var i = 0; i < currentState.users.length; i++){
		if(currentState.users[i].isActive === true){
			activeMarker = i - 1
			if(activeMarker < 0){
				activeMarker = currentState.users.length - 1
			}
		}
	}

		

		while(currentState.users[activeMarker].folded === true){
			
			activeMarker--
			if(activeMarker < 0){
				activeMarker = currentState.users.length - 1
			}
		}

		currentState.users[activeMarker].marker = true
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
	else if(currentState.phase === "river"){
		resolveWinner(currentState)
		reset(currentState)
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

	currentState.handNumber++
	console.log("handNumber = " + currentState.handNumber);
	currentState.winners = [];


	// Remove busted players 


	// var busted = []

	// for (var i = 0; i < currentState.users.length; i++){
	// 	if(currentState.users[i].stack === 0){
	// 		busted.push(i)
	// 	}

			
	// }

	// console.log(busted)

	// for (var i = 0; busted.length; i++){
	// 		currentState.users.splice(busted[i], 1)
	// 	}

	currentState.pot = 0;

	
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
			currentState.users[i].totalBetThisHand = 1
			currentState.pot += 1
			currentState.users[smallBlind].stack -= .50
			currentState.users[smallBlind].bet += .50
			currentState.users[smallBlind].totalBetThisHand = .50
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

         currentState.pot = currentState.pot + parseFloat(currentState.raiseValue)
         raiser.stack = raiser.stack - parseFloat(currentState.raiseValue)
         raiser.bet = parseFloat(currentState.raiseValue)
         raiser.totalBetThisHand += parseFloat(currentState.raiseValue)

        
       

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
       
      



      for (var i = 0; i < currentState.users.length; i++){
    
        if (currentState.users[i].marker === true){
          markerIndex = i
        }
        if(currentState.users[i].isActive === true){
          caller = currentState.users[i]
     
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

         var AllInAndFoldCounter = 0
   		  
    	for (var i = 0; i < currentState.users.length; i++){
    		if(currentState.users[i].folded === true || currentState.users[i].stack === 0){
    				AllInAndFoldCounter++
    				console.log(AllInAndFoldCounter + "for call")
    		}
    	}


        if(caller.stack < marker.bet){
        	currentState.pot += caller.stack
	        caller.totalBetThisHand += caller.stack
	        caller.bet = caller.stack
	        caller.stack = 0
	        
        } else {
	        currentState.pot += marker.bet - caller.bet
	        caller.stack -= marker.bet - caller.bet
	        caller.totalBetThisHand += marker.bet - caller.bet 
	        caller.bet = marker.bet

    	  }

    	 
    		console.log(AllInAndFoldCounter)
    		if (currentState.users.length - 1 <= AllInAndFoldCounter){
    			return true;
    		} 
         		


   

        nextTurn(currentState)
		for (var i = 0; i < currentState.users.length; i++){
			if (currentState.users[i].isActive === true && currentState.users[i].Rmarker === true){
				nextPhase(currentState)
			}
		}  
		return false; 

}





function fold(currentState){

	var indexRmarker = -1;
	var folderIndex = -1;
	var markerIndex = -1;
	var active = []



	for (var i = 0; i < currentState.users.length; i++){

		if(currentState.users[i].isActive === true){
			currentState.users[i].folded = true;
			currentState.fold += 1
			folderIndex = i
			currentState.users[i].hand = []
	
		}
	}
       
	
	if(currentState.users.length - currentState.fold === 1){
		for (var i = 0; i < currentState.users.length; i++) {
			if (currentState.users[i].folded === false){
				currentState.users[i].stack += currentState.pot
				currentState.winners.push([currentState.users[i].username])
				

			}
		}
		
			reset(currentState)
			
			return false;

	} else {
		 
		var AllInAndFoldCounter = 0
   		  
    	for (var i = 0; i < currentState.users.length; i++){
    		if(currentState.users[i].folded === true || currentState.users[i].stack === 0){
    				AllInAndFoldCounter++
    				console.log(AllInAndFoldCounter + "for fold")
    		}
    	}

    	if (currentState.users.length <= AllInAndFoldCounter){
    			return true;
    		} else {
				nextTurn(currentState)
				for (var i = 0; i < currentState.users.length; i++){
					if (currentState.users[i].isActive === true && currentState.users[i].Rmarker === true){
						nextPhase(currentState)
					}
			}
		return false; 
		}	


	}
}



// Activates next user


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

		

		while(currentState.users[newActive].folded === true || currentState.users[newActive].stack === currentState.users[newActive].bet){
       
         	newActive++ 
         	
   
        	
        	if(newActive === currentState.users.length){
         		newActive = 0;
         }

       }

    	currentState.users[newActive].isActive = true


}




	




module.exports = {
	deal,
	fold,
	call,
	check,
	raise,
	nextPhase,
	reset
	
	
}