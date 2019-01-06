//Word list
var words = ["gypsy", "servo", "crow", "joel", "bobo", "pearl", "forester", "mike", "cambot", "brainguy", "tvsfrank"]

var randomWord = ""; //word being guessed
var letterInWord = []; //breaks random word into individual letters
var blankLetters = 0; //this shows the number of blank space for the word being guessed
var correctGuess = []; //holds correct guesses
var wrongGuess = []; //holds wrong guesses
var guessedLetter = ""; //holds the guessed letter
var totalWins = 0; //tracks wins
var totalLosses = 0; //tracks losses
var numGuesses = 9;//max guesses allowed


/*----FUNCTION TO SETUP THE GAME-----*/

function startGame() {

  //computer generates random word from words array
  randomWord = words[Math.floor(Math.random() * words.length)];

  // split each word into separate letters
  letterInWord = randomWord.split("");

  //counts number of letters in word
  blankLetters = letterInWord.length;

  //console.log(randomWord); // =======> WORKS AT THIS POINT

  //resets guesses
    wrongGuess = [];
    correctGuess = [];
    numGuesses = 9;

  //creating a loop to generate "_" for each letter in blankLetters arrays
  for (var i = 0; i < blankLetters; i++) {
    correctGuess.push("_");
  }

  //console.log(correctGuess);  //=======> WORKS AT THIS POINT


  //prints out the number of guesses left
  document.getElementById("remaining-guesses").innerHTML = numGuesses;
  //prints the blank letters to be guessed with each round
  document.getElementById("current-word").innerHTML = "  " + correctGuess.join("  ");
  //clears out wrong guess after each roung
  document.getElementById("wrong-guess").innerHTML = wrongGuess.join(" ");
}



/*----Checking the letters guessed------*/

//Function that checks the guess to see if that letter is in the random word
function checkGuess(letter) {
  var letterInWord = false; //variable starts out false since there are no guesses yet
  //checking to see if the guessed letter is in the word
  for (var i = 0; i < blankLetters; i++) {
    if (randomWord[i] === letter) {
      letterInWord = true; //makes boolean true of letter exists in word
    }
  }
  //if the guessed letter is in the word (is true)....
  if (letterInWord) {
    //loop through every letter in the word to find matches

    for (var q = 0; q < blankLetters; q++) {
      if (randomWord[q] === letter) { //if guessed letter is in word...
        correctGuess[q] = letter; //add letter to array and show in the correct blank space
      }
    }
    //console.log(correctGuess);

  //if incorrect guess, show incorrect guesses and reduce remaining guesses
  } else {
    wrongGuess.push(letter);
    numGuesses--;
  }
}

/*-----FINISHING THE GAME------*/

function endGame() {

  //console.log("WinCount: " + totalWins + " | LossCount: " + totalLosses + " | NumGuesses: " + numGuesses);


  /*--------Updating scores------*/
  //prints out the number of guesses left
  document.getElementById("remaining-guesses").innerHTML = numGuesses;
  //prints the blank letters to be guessed with each round
  document.getElementById("current-word").innerHTML = "  " + correctGuess.join("  ");
  //clears out wrong guess after each roung
  document.getElementById("wrong-guess").innerHTML = wrongGuess.join(" ");
  /*--------End---------*/


  //If user wins then alert and reset new round if they choose to play again
  if (letterInWord.toString() === correctGuess.toString()) {
    totalWins++; //increment number of wins

    //display wins on screen
    document.getElementById("total-wins").innerHTML = " " + totalWins;

    //ask if user wants to play again
    var playWon = confirm("You guessed correctly! The word was " + randomWord.toUpperCase() + ". Play Again?");
    if (playWon === true) {
      startGame();
    } else {
      alert("Thanks for playing!");
      return; //ends function
    }

    //if user loses then alert and reset new round if they choose to play again
  } else if (numGuesses === 0) {
    totalLosses++; //increments losses by one

    //displays total losses
    document.getElementById("total-losses").innerHTML = " " + totalLosses;

    var playLost = confirm("Sorry. You lost. Play Again?");
    if (playLost === true) {
      startGame();
    } else {
      alert("Thanks for playing!");
      return; //ends function
    }
  }
}

/*--------SCRIPTS TO RUN GAME---------*/

startGame(); //runs game starting function

//checks for pressing of key to start the game
document.onkeyup = function(event) {
  guessedLetter = String.fromCharCode(event.keyCode).toLowerCase(); //convert to lowercase

  // check to see if guess entered matches value of random word
  checkGuess(guessedLetter);
  //process wins/loss
  endGame();
  //display/store incorrect letters on screen
  //document.getElementById("wrong-guess").innerHTML = "  " + wrongGuess.join(" ");
}
