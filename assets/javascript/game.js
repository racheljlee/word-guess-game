// VARIABLES
var introPage = document.getElementById("intropage");
var startGame = document.getElementById("messageguess");
var newWord = document.getElementById("newword");
var errorMessage = document.getElementById("error");
var usedLetters = document.getElementById("used");
var livesLeft = document.getElementById("lives");
var userWins = document.getElementById("wins");

var wins = 0;


// Wordbank array
var wordBank = [
    "Abra", "Alakazam", "Arbok", "Arcanine", "Articuno", 
    "Beedrill", "Bellsprout", "Blastoise", "Bulbasaur", "Butterfree", 
    "Caterpie", "Chansey", "Charizard", "Charmander", "Charmeleon", "Clefable", "Clefairy", "Cubone", 
    "Diglett", "Dragonite", "Dugtrio", 
    "Ekans", "Electabuzz", "Electrode", 
    "Farfetchd", "Fearow", 
    "Geodude", "Gloom", "Golbat", "Goldeen", "Golduck", "Golem", "Graveler", "Growlithe", 
    "Ivysaur", 
    "Jigglypuff", 
    "Kadabra", "Kakuna", "Koffing", 
    "Machamp", "Machoke", "Machop", "Magmar", "Mankey", "Meowth", "Metapod", "Mew", "Mewtwo", "Moltres", 
    "Nidoran", "Nidoking", "Nidoqueen", "Nidorina", "Nidorino", "Ninetales", 
    "Oddish", "Onix", 
    "Paras", "Parasect", "Persian", "Pidgeot", "Pidgeotto", "Pidgey", "Pikachu", "Poliwag", "Poliwhirl", "Poliwrath", "Ponyta", "Primeape", "Psyduck", 
    "Raichu", "Rapidash", "Raticate", "Rattata", 
    "Sandshrew", "Sandslash", "Seaking", "Snorlax", "Spearow", "Squirtle", 
    "Tentacool", "Tentacruel", 
    "Venomoth", "Venonat", "Venusaur", "Victreebel", "Vileplume", "Voltorb", "Vulpix", 
    "Wartortle", "Weedle", "Weepinbell", "Wigglytuff", 
    "Zapdos", "Zubat"];

// Possible letters to guess
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// GAME START
document.onkeyup = function(space) {
    var userStart = space.keyCode;
    if (space.keyCode === 32) {
        startGame.innerText = "Guess the WORD:";

    }
}
// end GAME START

// Hides pikachu opening image when spacebar is pressed
document.onkeyup = function(hide) {
   if (hide.keyCode === 32) {
        introPage.innerHTML = "";
   }
}

// Picks a random word
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

// Answer array setup
var emptySpaces = [];
for (var i = 0; i < randomWord.length; i++) {
        emptySpaces[i] = "_";
}
// Displays blanked new random word in correct div
// Adds spaces in between the _'s: _ _ _ _ not ____
var newWord = document.getElementById("newword");
newWord.innerText = emptySpaces;
newWord.innerText = emptySpaces.join(" ");




// User inputs keys
document.ondown = function(input) {
    var userGuess = input.key;

    // Replaces empty spaces with correct user input
     for (var i = 0; i < emptySpaces.length; i++) {
        if (randomWord[i] === userGuess) {
            emptySpaces[i] = userGuess;
        }
    }

    if (letterBank.indexOf(userGuess !== -1)) {
        usedLetters.innerText += userGuess + ", ";
        livesLeft.innerText -= 1;
    }
    
}

// Doesn't randomize word every time key is pressed
document.onkeydown = function(event) {
    var userInput = event.keyCode == 32;
    console.log(event.key);
    console.log(randomWord);
}


// Remaining letters
var remainingLetters = randomWord.length;


// Lives left
var livesLeft = document.getElementById("lives");
    livesLeft.innerText = 7;
