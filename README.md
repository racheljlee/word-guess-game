# word-guess-game

`Pseudo-code:`
-Pick a random word from the wordbank
-While the word has not been guessed
    -Show the user their current progress by showing the letters they guessed
    -Get a guess from the user

    -If the player 


-Created a variable that contains an array of Pokémon words (word bank) for the game to pull a single word from.
`var wordBank = ["Bulbasaur", "Charmander", "Pikachu", "Squirtle"];`
-Created a function that randomly generates a word from the word bank.
`var activeWord = wordBank[Math.floor(Math.random()*wordBank.length)];`
(`Math.random()` generates a random decimal number between 0-1 and then multiplies it by the `wordBank.length` and then rounds it down an integer with `Math.floor()` to generate a random index # that can pull an index # from the wordBank array)


Things that need to be coded:

-user inputting a letter key
-storing inputted key onto screen
-matching inputted key to correct keys in correct word
-increasing wins counter by increment of one for each correctly guessed word
-reducing number of guesses when inputted letter key is wrong
-if word is guessed correctly then restart the game to start a new game
-if word is guessed incorrectly then game over

*Extra Stuff to Add later:*
-opening scene
-you win scene
-game over scene
-music
-sounds
-pixel sprites
-choose a starting pokemon
-battle system

