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

//******************************************************* */

/* The Hashtag Generator

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false */

function generateHashtag(str) {
  const word = str.trim().toLowerCase();
  const wordF = (word) =>
    word
      .split(" ")
      .map((s, i, arr) =>
        s === arr[0]
          ? `#${s.charAt(0).toUpperCase() + s.slice(1)}`
          : `${s.charAt(0).toUpperCase() + s.slice(1)}`
      )
      .join("");
  return word.length === 0
    ? false
    : wordF(word).length > 140
    ? false
    : wordF(word);
}
