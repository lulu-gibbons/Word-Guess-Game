# Word-Guess-Game

This is a hangman style game where the player tries to guess a mystery word before their number of tries is up.

<a href="https://lulu-gibbons.github.io/Word-Guess-Game/">View the game here.</a>

## How To Play:

1. Start the game by pressing the key of your first guess.
2. Enter only letters to guess the word on screen.
3. Keep guessing till the 'Guesses Left' has run out. 
4. If you would like to play again, click 'OK'. 

The game will keep track of you wins and losses as you play until you choose to quit.

## Basic Componants

The basic componants of the game are: 

* Uses key events to listen for the letters that the players will type.
* The page displays the following:
  * "Press any key to get started!" title to let player know how to start the game.
  * Wins: (# of times user guessed the word correctly).
    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
  * Number of Guesses Remaining: (# of guesses remaining for the user).
  * Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
  * After the user wins/loses the game should automatically choose another word and make the user play it.
  
  ### Link to the project
  https://lulu-gibbons.github.io/Word-Guess-Game/
