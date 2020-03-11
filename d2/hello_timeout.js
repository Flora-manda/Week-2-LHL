/* 
Challenge #1
First let's start with a simple exercise.
Have our file print out these three words 4311o th3r3 w0r1d three seconds after the file is run.
All of the words can appear at the same time.
*/

setTimeout(() => {
  console.log("4311o th3r3 w0r1d");
}, 3000);

/*
Challenge #2
Next, let's make things more interesting...
Instead of printing the entire sentence together, have our code print out each of the three words one at a time, 1 second apart.
It's okay if each of the words appears on a separate line, due to console.log.
*/

let sentence = "4311o th3r3 w0r1d";
sentence = sentence.split(" ");

// console.log(sentence);

// const printOneWordOneSecond = function(sentence) {
//   for (const word in sentence) {
//     setTimeout(() => console.log(word), 1);
//   }
// };

// printOneWordOneSecond(sentence);

const printWords = function(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => console.log(sentence[i]), 1000 * i);
  }
};

printWords(sentence);