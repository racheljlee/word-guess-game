
var userInput = document.getElementById("newword");
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

document.onkeyup = function(input) {
   var userGuess = event.key;
}