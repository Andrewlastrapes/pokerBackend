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

	var index = []

	// Pushes current user into foldedUsers array 

	for (var i = 0; i < currentState.users.length; i++){

		if(currentState.users[i].isActive === true){
			currentState.foldedUsers.push(currentState.users[i])
			index = i
		}
	}
	currentState.users.splice(index, 1)
	
	// 
	if (currentState.users.length === 1){
		currentState.users[0].stack += currentState.pot


		currentState.phase = "Game Over"
		console.log("Hand Over")
			
	} else {
	
	nextTurn(currentState)
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

	   if (currentState.users[i].isActive == true){
         currentState.users[i].isActive = false 
         
        
         newActive = i + 1 
        }

         if (newActive == currentState.users.length){
          newActive = 0;
         }
    
    }

    	currentState.users[newActive].isActive = true


}





	




module.exports = {
	deal, 
	nextTurn,
	fold
}