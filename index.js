// RPS GAME
function rpsGame(yourChoice){
    
    var humanChoice,botChoice;

    humanChoice=yourChoice.id;
    botChoice = numberToChoice(randToRpsInt())
    // console.log(humanChoice,botChoice);
    results= decideWinner(humanChoice,botChoice); //[0,1] human lost and bot wins
    console.log(results)
    message=  finalMessage(results); //You won
    console.log(message)
    rpsFrontEnd(yourChoice.id,botChoice,message);
    
}

function randToRpsInt(){
    return Math.floor(Math.random() *3);
}
function numberToChoice(number){
    return ['rock','paper','scissors'][number]
}
function decideWinner(yourChoice,computerChoice){
    var rpsDataBase ={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
    }
    var yourScore=rpsDataBase[yourChoice][computerChoice]
    var computerScore = rpsDataBase[computerChoice][yourChoice]

    return [yourScore,computerScore];
}
function finalMessage([yourScore]){
    if(yourScore===0){
        return{'message':'You Lost!','color':'red'}
    }else if(yourScore===0.5){
        return{'message':'You tied!','color':'yellow'}
    }else{
        return{'message':'You Won!','color':'green'}
    }
}
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDateBase ={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    //as soon as you click on any image , all of the imaages should removed
    //let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //creating the divs again 
    var humanDiv= document.createElement('div');
    var messageDiv= document.createElement('div');
    var botDiv= document.createElement('div');

    //creating the innerHtml of the divs
    humanDiv.innerHTML = "<img src='" + imagesDateBase[humanImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1)'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDateBase[botImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1)'>"

    //appending the divs into the child of gamecontainer
    document.getElementById('gameContainer').appendChild(humanDiv);
    document.getElementById('gameContainer').appendChild(messageDiv);
    document.getElementById('gameContainer').appendChild(botDiv);


}