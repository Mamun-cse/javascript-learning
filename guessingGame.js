var numOfWon = 0;
var numOfLost = 0;

for(var i = 1; i <= 5; i++){
    var guessNum = parseInt(prompt("Enter Your Guessing Number 1 to 5:"));
    var rendomeNum = Math.floor(Math.random()*5)+1;
    if(guessNum == rendomeNum){
        numOfWon++;
    }
    else{
        numOfLost++;
    }
}
document.write("You have won the game " +numOfWon+" times"+"</br>");
document.write("You have lost the game " +numOfLost+" times");