Draft.js


function draw (ob,obj,objj){
	status = document.getElementById('status')
	if(i < 4){		
		winner(ob,obj,objj,playerScore)
	}else{
		status.innerHTML = obj + ' and ' + objj ' DRAW'	
	}
}

		winner(ob,obj,objj,computerScore)




function GrandWin(champ){
		if (computerScore.length == 5 || playerScore.length == 5){
			status.innerHTML = ('Game over '+champ+' wins')

		}
}