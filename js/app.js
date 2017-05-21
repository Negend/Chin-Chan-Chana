window.addEventListener('DOMContentLoaded', function() {
    console.log('working');
var opp = 'computer';
var x;
var move = document.getElementsByClassName('fa')
var hands = ['rock','paper','cut']
var playScore = [];
var compScore = [];
var game = 0
var hit = 0
var status = document.getElementsByClassName('status')
var names = ['Jasmine','Gordon','Amara','Magdaline','Fatherbanj','Gingar','Caremine','Swift Knight','Rose','Pluto','Chis Beybé','Florence','Nneji','Saturn','Negend']
var you = prompt('Your name or game tag','TheRockcutter')
    	
// The javascript needs to load onto the browser



	register()
	play();
    start = document.getElementsByClassName('reset')
    start[0].addEventListener('click',function(){
    	restart()
    })
    changeOpponent()




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
	randomizer(hands.length)
	computerHand  = hands[x] 

	setTimeout(function(){ move[x].style.background = 'linear-gradient(beige, red, beige)'},1500)
}





function randomizer(r){
	x = Math.floor(Math.random()*r)
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
			grandWin(you)
			 hit = 20			
		}					
	}
	if (hit != 20){
		winner('computer',computerHand,playerHand,compScore,opp)
		grandWin(opp)
	}

}





function drawWin (ob,obj,objj,i){
	status = document.getElementsByClassName('status')
	if(i < 3){		
		winner(ob,obj,objj,playScore,you)
		

	}else{
		status[0].innerHTML = obj + ' and ' + objj+ ' DRAW'	
		
	}
}




function winner(ob,obj,objj,objjj,obk){
	status[0].innerHTML = obk+' Won! '+obj+' beats '+objj
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






function opponent(){

	var names = ['Jasmine','Gordon','Amara','Magdaline','Fatherbanj','Gingar','Caremine','Swift Knight','Rose','Pluto','Chis Beybé','Florence','Nneji','Saturn','Negend']
	randomizer(names.length)
	 opp = names[x]
	 console.log(opp)
}			

function changeOpponent(){
	document.getElementById('match').addEventListener('click',function(){
		opponent()
		var oppName = document.getElementById('computerScore')
		oppName.innerHTML = opp + ': <span id="computer"></span>'
		restart()
	})
	
}


function register(){
	if (you){
	}else{
		you = 'You'
	}
	var youName = document.getElementById('playerScore')
		youName.innerHTML = you + ': <span id="player"></span>'

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