// what is Regression and different character in Regex important written regex with example
// Regression is a typo, I believe you meant to ask about Regular Expressions (Regex). Regular expressions are a sequence of characters that define a search pattern used to match and manipulate text.

const regex = /^hello/;
console.log(regex.test("hello world")); // true
console.log(regex.test("world hello")); // false

const regex1 = /world$/;
console.log(regex1.test("hello world")); // true
console.log(regex1.test("world hello")); // false
// Date: 06-03-2023   127-chapter.

