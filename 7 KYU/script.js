/* Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

const getCount = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .reduce((acc, cur, i, arr) => (vowels.includes(cur) ? (acc += 1) : acc), 0);
};

//******************************************** */

/* Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

const accum = (s) =>
  s
    .toLowerCase()
    .split("")
    .map((a, b) => a[0].toUpperCase() + a.repeat(b))
    .join("-");

//******************************************** */

/* Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

const highAndLow = (numbers) => {
  const arr = numbers
    .split(" ")
    .map((num) => +num)
    .sort((a, b) => b - a);
  return `${arr[0]} ${arr[arr.length - 1]}`;
};
