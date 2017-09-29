
function flop(currentState){

       
       currentState.flop = [this.state.deck.pop(), this.state.deck.pop(), this.state.deck.pop()]
      
  }

  function turn(currentState){
    
     
        currentState.turn = [this.state.deck.pop()]
      
    
  }

  function river(currentState){
   
     
        currentState.river = [this.state.deck.pop()]
  
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
		currentState.users.bet = 0;
		currentState.users.hand = [];
		currentState.users.isActive = false;
		currentState.users.marker = false;
		currentState.users.position = ""
	}
		currentState.pot = 0;
		currentState.fold = 0;
		currentState.phase = "Game Over";
		console.log("hi")
	}




// How the next phase happens:

// Game Over- Deal handles phase change

// 2 Markers: BBmarker and RMarker

// for all phases:

// On check- BBmarker = new phase

// on Raise = BBmarker = false until next phase. RMarker = true

// Phase change- User left of RMarker calls or folds. 

function activateLeftofDealer(currentState){
	// find first folded===false player left of dealer and isActive = true
}
function setMarker(currentState){
	activeMarker = 0
	for (var i = 0; i < currentState.users.length; i++){
		if(currentState.users[i].isActive === true){
			activeMarker = i
		}
	}
		currentState.users[activemarker + ].marker = true;
}


function setPhase(currentState){
	activateLeftofDealer(currentState)
	setMarker(currentState)
	for (var i = 0; i < currentState.users.length; i++){
		currentState.users.bet = 0;

	}
}


function nextPhase(currentState){
	if(currentState.phase === "turn"){
		currentState.phase = "river"
		setPhase(currentState)
	}
	if(currentState.phase === "flop"){
		currentState.phase = "turn"
		setPhase(currentState)
	}
	if (currentState.phase === "preflop"){
		currentState.phase = "flop"
		setPhase(currentState)
	}
}



// function checkForNewPhase(currentState){
	
// 	var marker = 0;
// 	var pass = false;

// 	for (var i = 0; i < currentState.users.length; i++) {
// 			if(currentState.users[i].isActive === true && currentState.users[i].marker === true){
// 				if (currentState.phase === "preflop"){
// 				flop(currentState)
// 				// first to act
// 				currentState.phase = "flop";
// 				pass = true;
// 				} 
// 			} 
		
// 	} 

// 	if (pass === false){

// 	for (var i = 0; i < currentState.users.length; i++) {
// 			if (currentState.users[i].marker === true){
// 				marker = i;
// 			}
// 		}
// 		for (var i = 0; i < currentState.users.length; i++) {
// 			if (currentState.users[marker - 1].isActive === true){
// 				if (currentState.phase === "turn"){
// 					river(currentState);
// 					// first to act
// 					currentState.phase = "river";
// 					pass = true;
// 				}
// 				if (currentState.phase === "flop"){
// 					turn(currentState);
// 					// first to act
// 					currentState.phase = "turn";
// 					pass = true;
// 					}	 
// 			}
// 		}
// 	}
	
// 	if (pass === false){
// 		nextTurn(currentState)
// 	}
	
// }

	
	
	

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


  	// Set big blind
  	
  	var indexOfBigBlind = -1

  	for (var i = 0; i < currentState.users.length; i++){
  		if(currentState.users[i].position === "Big Blind"){
  			indexOfBigBlind = i
  		}
  	}

  	if (indexOfBigBlind > -1){
  		currentState.users[(indexOfBigBlind + 1) % currentState.users.length].position = "Big Blind";
  		currentState.users[indexOfBigBlind].position = "";
  	} else {
  		currentState.users[0].position = "Big Blind"
  	}


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
			currentState.users[i].stack -= 1
			currentState.users[i].bet += 1
			currentState.pot += 1
		}
		if (currentState.users[i].position === "Big Blind" - 1){
			currentState.users[i].stack -= .50
			currentState.users[i].bet += .50
			currentState.pot += .50
		} 

	}
	for (var i = 0; i < currentState.users.length; i++){
		if (currentState.users[i].position === "Small Blind"){
			currentState.users[i].stack -= 1
			currentState.users[i].bet += 1
			currentState.pot += 1
		}
		if (currentState.users[i].position === "Small Blind" - 1){
			currentState.users[i].stack -= .50
			currentState.users[i].bet += .50
			currentState.pot += .50
		} 

	}

}

// fold

// folded array- pops folded users into new array

function fold(currentState){

	

	for (var i = 0; i < currentState.users.length; i++){

		if(currentState.users[i].isActive === true){
			currentState.users[i].folded = true;
			currentState.fold += 1
	
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
		 for (var i = 0; i < currentState.users[i]; i++){

          // if (currentState.users[i] is 1 left of rMarker)
            NextPhase(currentState)
          } else {
            nextTurn()
          }
	
	}

}

function firstToAct(currentState){
	
	var newActive = 0

	for (var i = 0; i < currentState.users.length; i++){
		if(currentState.users[i] === "Dealer"){
			newActive = i
		}
	}
		currentState.users[newActive + 1].isActive = true;
}



// Next Turn:

// Needs to activate next user

// Change phase - sets first to act on each new phase. Another function?


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
	nextTurn,
	fold,
	reset,
	firstToAct,
	checkForNewPhase
}