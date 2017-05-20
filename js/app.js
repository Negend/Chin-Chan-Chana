window.addEventListener('DOMContentLoaded', function() {
    console.log('working');


var move = document.getElementsByClassName('fa')
var hands = ['rock','paper','cut']
var playScore = [];
var compScore = [];
var game = 0
var hit = 0
var status = document.getElementsByClassName('status')
// The javascript needs to load onto the browser





    play();
    start = document.getElementsByClassName('reset')
    start[0].addEventListener('click',function(){
    	restart()
    })




// Add event listeners to player move buttons


function play () {	
	for(var i = 0; i < move.length; i++){			
		move[i].addEventListener('click',function(){
			if( game === 0){	
				clear()
				this.style.background = 'beige'
				y = this.getAttribute('value')
				playerHand = hands[y]
				compTurn()
				CheckWinner()
				
			}
			// console.log(ComputerHand)
		})

	}
	
}




function compTurn(){
	// move.forEach(addEventListener('click',function))
	randomizer()
}





function randomizer(){
	var x = Math.floor(Math.random()*3)
	computerHand  = hands[x] 

	setTimeout(function(){ move[x].style.background = 'linear-gradient(beige, red, beige)'},1500)
}





function CheckWinner(){
//winning combination
	 a = [playerHand,computerHand] 
	 b = [computerHand,playerHand]
	combs = [['rock','cut'], 
			['paper','rock'],
			['cut','paper'],
			['rock','rock'],
			['paper','paper'],
			['cut','cut']];

	for( i = 0; i < combs.length; i++){

		if(a.join() === combs[i].join()){
			drawWin('player',playerHand,computerHand,i)
			grandWin('player')
			 hit = 20			
		}					
	}
	if (hit != 20){
		winner('computer',computerHand,playerHand,compScore,)
		grandWin('computer')
	}

}





function drawWin (ob,obj,objj,i){
	status = document.getElementsByClassName('status')
	if(i < 3){		
		winner(ob,obj,objj,playScore)
		

	}else{
		status[0].innerHTML = obj + ' and ' + objj+ ' DRAW'	
		
	}
}




function winner(ob,obj,objj,objjj){
	status[0].innerHTML = ob+' Win! '+obj+' beats '+objj
	objjj.push('1')
	score(ob,objjj)	
}



function grandWin(champ){
	if (compScore.length === 5 || playScore.length === 5){
		status[0].innerHTML = ('Game over '+champ+' wins')
		game = 1
		
		document.getElementById('moves').style.backgroundColor = 'red'
	}
}
function restart(){
	clear()
	playScore = []
	compScore = []
	game = 0
	status[0].innerHTML = 'Rock paper or cut'
	document.getElementById('moves').style.backgroundColor = ''
	score('player',playScore)
	score('computer',compScore)
}


function clear(){
	for(var i = 0;i < 3; i++){
		move[i].style.background = ''
		hit = 0
	}

}


function score(scorer, score){
	document.getElementById(scorer).innerHTML= score.length
}









})
// The player move is stored in a variable

// The app generates a random computer move
  // - Math.random, Math.floor (0, 1 or 2)
  // - assign a number (0, 1 or 2) to each move ?

// The computer move is stored in a variable

// Compare moves and see who has won, or if it's a draw
  // If the moves are the same, it's a draw
  // Rock beats scissors
  // Scissors beat paper
  // Paper beats rock

// Tell the user the outcome of the game
  // Put the correctly generated message onto the DOM

// Update the scoreboard

// The first player to reach a score of 10 is the overall winner

// Be able to reset the game