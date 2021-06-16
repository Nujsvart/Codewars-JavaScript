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
