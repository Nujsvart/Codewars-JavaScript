/* Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

const pigIt = (str) =>
  str
    .split(" ")
    .map((str) =>
      str.match(/[A-z]/i) ? `${str.substr(1)}${str.substr(0, 1)}ay` : str
    )
    .join(" ");

//******************************************************* */

/* Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

const moveZeros = (arr) =>
  arr.filter((num) => num !== 0).concat(arr.filter((num) => num === 0));
