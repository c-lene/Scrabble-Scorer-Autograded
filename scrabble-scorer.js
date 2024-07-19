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
   let totalPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         numPointValue = Number(pointValue);
         totalPoints += numPointValue;
		 }
	  }
	}
	console.log(letterPoints);
   return totalPoints;
 }




// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let userInput = input.question("Let's play some scrabble! Enter a word: ");
   return userInput;
   //console.log("Let's play some scrabble! Enter a word:");
};




// Task 4 - Assigning transform(oldPointStructure) to newPointStructure variable.
let newPointStructure = transform(oldPointStructure);





// Task 2 - Function that takes each letter within the word is worth 1 point
let simpleScorer = function(word) {
   word = word.toUpperCase();
   let pointValue = 0;

   for (let i = 0; i < word.length; i++) {
      pointValue += 1;
    }
    //console.log("Using Simple Scorer: Each letter is worth 1 point.");
    return pointValue;
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

   console.log("");
   console.log(letterPoints);
   //console.log(`Using Vowel Bonus Scorer: Total points for "${word}" is ${pointValue}`);

   return pointValue;
};




let scrabbleScorer = function(word) {
   word = word.toLowerCase();
	let letterPointsMsg = "";
   let totalPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const keyValue in newPointStructure) {
 
		 if (keyValue === word[i]) {
			letterPointsMsg += `Points for '${word[i]}': ${newPointStructure[keyValue]}\n`
         numPointValue = Number(newPointStructure[keyValue]);
         totalPoints += numPointValue;
		 }
	  }
	}
	console.log(letterPointsMsg);
   return totalPoints;
};




// Task 2 - Add & Organize Scoring Algorithm
const scoringAlgorithms = [
    {name: "Simple Score", description: "Each letter is worth 1 point.", scorerFunction: simpleScorer}, 
    {name: "Bonus Vowels", description: "Vowels are worth 3 points. Consonants are 1 point.", scorerFunction: vowelBonusScorer}, 
    {name: "Scrabble", description: "The traditional scoring algorithm.", scorerFunction: scrabbleScorer},
];

// const scoringAlgorithms = [
//    {
//       name: "Simple",
//       description: "One point per character",
//       scorerFunction: simpleScorer
//    },
//    {
//       name: "Vowel Bonus",
//       description: "Vowels are worth 3 points",
//       scorerFunction: vowelBonusScorer
//    },
//    {
//       name: "Scrabble",
//       description: "Uses scrabble point system",
//       scorerFunction: scrabbleScorer
//    }
// ];



function scorerPrompt(word) {
   word = word.toUpperCase();
   userSelect = input.question(`Which scoring algorithin would you like to use?
   
   0 - Simple: One point per character
   1 - Vowel Bonus: Vowels are worth 3 points
   2 - Scrabble: Uses scrabble point system

   Enter 0, 1, or 2: `); 
   
   let scoreOption = Number(userSelect);
   
   while (scoreOption < 0 || scoreOption > 2 || isNaN(scoreOption)) {
      userSelect = input.question("INVALID choice! Please select 0, 1, or 2: ");
      scoreOption = Number(userSelect);
   }
   //return scoreOption;

   console.log(`You have selected ${scoringAlgorithms[scoreOption].name}. ${scoringAlgorithms[scoreOption].description}
      
   Score for "${word}": ${scoringAlgorithms[scoreOption].scorerFunction(word)}`);
};




// Task 4 - Transform oldPointStructure to a new object switches keys & values pairs and making key Lowercase
function transform(oldPointStructure) {
   let lowercaseObj = {};
   let letterKeyStr = [];
   
   
   // Iterates through EACH key value in Object
   for (let numKey in oldPointStructure) {
      
      letterKeyStr = oldPointStructure[numKey];
      let numKeyValue = Number(numKey);
      //numKeyValueArray.push(numKeyValue);

            
      // GOAL is to iterate each element in the array to convert to string to assign as a Key
      for (let i = 0; i < letterKeyStr.length; i++) {
         
         let lowercaseLetterKey = letterKeyStr[i].toString().toLowerCase();
         lowercaseObj[lowercaseLetterKey] = numKeyValue
      }
   }
   return lowercaseObj;
};




function runProgram() {
   //initialPrompt();
   let wordTest = initialPrompt();
   //console.log(oldScrabbleScorer(wordTest));
   //console.log(simpleScorer(wordTest));
   //console.log(vowelBonusScorer(wordTest));
   scorerPrompt(wordTest);
   console.log("");
   //console.log(transform(oldPointStructure));
   //console.log(newPointStructure);

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
