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

}



module.exports = {
	deal
}