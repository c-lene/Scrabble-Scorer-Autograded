// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let userInput = input.question("Let's play some scrabble! Enter a word: ");
   return userInput;
   //console.log("Let's play some scrabble! Enter a word:");
};

let newPointStructure;


// Task 2 - Function that takes each letter within the word is worth 1 point
let simpleScorer = function(word) {
   word = word.toUpperCase();
   let pointValue = 0;

   for (let i = 0; i < word.length; i++) {
      pointValue += 1
      //letterPoints += `Points of '${word[i]}': is 1\n`
      
    }
    return `Using Simple Scorer: Each letter is worth 1 point.
    Total points for "${word}" is ${pointValue}\n`;

};


// Task 2 - Function that takes each VOWEL to worth 3 points and each Consonant is worth 1 point 
let vowelBonusScorer = function(word) {
   word = word.toUpperCase();
   let pointValue = 0;
   let letterPoints = "";

   for (let i = 0; i < word.length; i++) {
      if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U") {
         pointValue += 3;
         letterPoints += `Points for '${word[i]}': 3\n`
      } else {
         pointValue += 1;
         letterPoints += `Points for '${word[i]}': 1\n`
      }
   }

   console.log(letterPoints);

   return `Using Vowel Bonus Scorer: Total points for "${word}" is ${pointValue}`
};



let scrabbleScorer;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

function runProgram() {
   //initialPrompt();
   let wordTest = initialPrompt();
   console.log(oldScrabbleScorer(wordTest));
   console.log(simpleScorer(wordTest));
   console.log(vowelBonusScorer(wordTest));
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
