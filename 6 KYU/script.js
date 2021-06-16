/* Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses! */

function createPhoneNumber(numbers) {
  const first = numbers.splice(0, 3).join("").padStart(4, "(").padEnd(5, ")");
  const sec = numbers.splice(3, 0, "-");
  return `${first} ${numbers.join("")}`;
}

//************************************************************* * /

/* Who likes it ?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases. */

function likes(names) {
  if (!names.length) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

//************************************************************* * /

/* Convert string to camel case

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str) {
  return str.includes("-") && /[A-Z]/.test(str[0])
    ? str
        .toLowerCase()
        .split("-")
        .map((str, i, arr) => arr[i][0].toUpperCase() + str.slice(1))
        .join("")
    : str.includes("_") && /[A-Z]/.test(str[0])
    ? str
        .toLowerCase()
        .split("_")
        .map((str, i, arr) => arr[i][0].toUpperCase() + str.slice(1))
        .join("")
    : str.includes("_")
    ? str
        .split("_")
        .map((str, i, arr) =>
          arr[i] !== arr[0]
            ? arr[i][0].toUpperCase() + str.slice(1)
            : str.toLowerCase()
        )
        .join("")
    : str
        .split("-")
        .map((str, i, arr) =>
          arr[i] !== arr[0]
            ? arr[i][0].toUpperCase() + str.slice(1)
            : str.toLowerCase()
        )
        .join("");
}

//************************************************************* * /

/* Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

Courtesy of projecteuler.net */

const solution = (number) => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};
