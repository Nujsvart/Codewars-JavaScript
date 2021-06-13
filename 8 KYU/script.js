/* Counting sheep...

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined */

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let total = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      total += 1;
    }
  }
  return total;
}

//************************************************************ /

/* Convert boolean values to strings 'Yes' or 'No'.

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */

function boolToWord(bool) {
  //...
  return bool ? "Yes" : "No";
}

//************************************************************ /

/* Compare within margin

Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b. a is "close to" b if margin is higher than or equal to the difference between a and b.

When a is lower than b, return -1.

When a is higher than b, return 1.

When a is close to b, return 0.

If margin is not given, treat it as zero.

Example: if a = 3, b = 5 and the margin = 3, since a and b are no more than 3 apart, close_compare should return 0. Otherwise, if instead margin = 0, a is lower than b and close_compare should return -1.

Assume: margin >= 0

Tip: Some languages have a way to make arguments optional. */

function closeCompare(a, b, margin = 0) {
  if (a === b || Math.abs(a - b) <= margin) {
    return 0;
  } else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
}

//************************************************************ /

/* For UFC Fans(Total Beginners): Conor McGregor vs George Saint Pierre

This is a beginner friendly kata especially for UFC/MMA fans.

It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

If the winner is George Saint Pierre he will obviously say:

"I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:

"I'd like to take this chance to apologize.. To absolutely NOBODY!"
Good Luck! */

const quote = (fighter) => {
  let george = "George Saint Pierre";
  let conor = "Conor McGregor";
  if (
    fighter === george ||
    fighter === george.toLowerCase() ||
    fighter === george.toUpperCase()
  ) {
    return "I am not impressed by your performance.";
  } else if (
    fighter === conor ||
    fighter === conor.toLowerCase() ||
    fighter === conor.toUpperCase()
  ) {
    return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
  }
};

//************************************************************ /

/* The 'if' function

Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truth-ish, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console. */

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

//************************************************************ /

/* Count Odd Numbers below n

Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs! */

const oddCount = (n) => Math.floor(n / 2);

//************************************************************ /

/* Sum Arrays

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line. */

const sum = (numbers) =>
  numbers.length > 0 ? numbers.reduce((acc, cur) => acc + cur, 0) : 0;

//************************************************************ /

/* Filling an array(part 1)

We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value. */

const arr = (N) => Array.from({ length: N }, (_, i) => i);

//************************************************************ /

/* ES6 string addition

It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string. */

const joinStrings = (string1, string2) => `${string1} ${string2}`;

//************************************************************ /

/* Simple Comparison ?

Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number(). */

const add = (a, b) => (a == b ? true : false);
