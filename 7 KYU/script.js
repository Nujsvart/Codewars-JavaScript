/* Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

const getCount = str => {
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

const accum = s =>
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

const highAndLow = numbers => {
  const arr = numbers
    .split(" ")
    .map(num => +num)
    .sort((a, b) => b - a);
  return `${arr[0]} ${arr[arr.length - 1]}`;
};

//******************************************** */

/* Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string. */

const getMiddle = s =>
  s.length % 2 === 0
    ? s.substr(s.length / 2 - 1, 2)
    : s.substr(s.length / 2, 1);

//******************************************** */

/* Shortest Word
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

const findShort = s =>
  s
    .split(" ")
    .reduce((acc, cur) => (acc < cur.length ? acc : cur.length), s.length);

//******************************************** */

/* Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */

const disemvowel = str => str.replace(/A|E|I|O|U|a|e|i|o|u/g, "");

//******************************************** */

/* List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */

const filter_list = l => l.filter(n => n === Number(n));

//******************************************** */

/* 

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!" */

const maskify = cc =>
  cc.length <= 1 || !cc
    ? cc
    : cc.substring(cc.length, cc.length - 4).padStart(cc.length, "#");

//******************************************** */

/* Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */

const sumTwoSmallestNumbers = numbers =>
  numbers.sort((a, b) => a - b).reduce((s, c, _, arr) => arr[0] + arr[1]);

//******************************************** */

/* Two to One

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

//******************************************** */

/* Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

const reverseWords = str =>
  str
    .split(" ")
    .map(s => [...s].reverse().join(""))
    .join(" ");

//******************************************** */

/* Odd or Even ?

Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even" */

const oddOrEven = array =>
  array.reduce((sum, n) => sum + n, 0) % 2 === 0 ? "even" : "odd";

//******************************************** */

/* Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) {
  const x = str
    .toLowerCase()
    .split("")
    .filter(s => s === "x");
  const o = str
    .toLowerCase()
    .split("")
    .filter(o => o === "o");
  return x.length === o.length;
}

//******************************************** */
