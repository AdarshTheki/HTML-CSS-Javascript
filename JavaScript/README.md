## JavaScript Roadmap
This roadmap provides an overview of the basics of coding in JavaScript.

## Getting Started
- Learn the basics of JavaScript syntax and data types.
- Familiarize yourself with the JavaScript console and debugging tools.
- Understand the concept of variables and how to use them.

## Intermediate Concepts
- Learn how to work with objects and arrays.
- Understand the different types of functions and how to use them.
- Learn how to use loops and conditionals to control the flow of your code.

## Advanced Concepts
- Learn how to use the DOM to manipulate webpages.
- Understand how to use AJAX to make requests to APIs.
- Learn how to use frameworks and libraries like React and jQuery.


## Variables and data types: 
You can use variables to store data in JavaScript. There are different types of data you can store, such as strings (text), numbers, and booleans (true/false). To create a variable, use the let or const keyword, followed by the variable name and the value you want to assign to it. For example:
```
let name = "John";
const age = 30;
let isMarried = false;
```
## Functions: 
`Functions` are reusable blocks of code that perform a specific task. You can define a function using the function keyword, followed by the function name and any parameters it needs, and then the code you want to run when the function is called. For example:
```
function greet(name) {
    console.log("Hello, " + name + "!");
}
```
You can then call the function by using its name and passing in any necessary arguments:
```
greet("John");
// Output: Hello, John!
```

## Conditional statements: 
You can use conditional statements to make decisions in your code based on certain conditions. The most common type of conditional statement is an if statement, which checks if a certain condition is true and runs a block of code if it is. For example:
```
const age = 30;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not yet an adult.");
}
```
This code will check if the age variable is greater than or equal to 18, and will output either "You are an adult." or "You are not yet an adult." depending on the result.

## Loops: 
You can use loops to repeat a block of code a certain number of times, or until a certain condition is met. The most common types of loops in JavaScript are for loops and while loops. For example:
```
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
```
This code will loop through the numbers 0 to 4 (inclusive) and output each number to the console.

## Callbacks:
Callbacks: A callback is a function that is passed as an argument to another function and is executed after some operation completes. Callbacks are often used to handle asynchronous operations in JavaScript.
```js
function getData(callback) {
  // Perform some asynchronous operation
  setTimeout(() => {
    const data = { id: 1, name: 'John Doe' };
    callback(data);
  }, 1000);
}

getData(data => {
  console.log(data);
});
```
In this example, the getData function takes a callback function as an argument and performs an asynchronous operation (in this case, a 1-second timeout). When the operation completes, the getData function calls the callback function with some data.

Callbacks can be difficult to work with when dealing with complex chains of asynchronous operations, as they can result in "callback hell" where code becomes difficult to read and maintain.

## Promises:
`Promises:` A Promise is an object that represents a value that may not be available yet but will be in the future. Promises are used to handle asynchronous operations in a more elegant and readable way than callbacks.
```js
function getData() {
  return new Promise(resolve => {
    // Perform some asynchronous operation
    setTimeout(() => {
      const data = { id: 1, name: 'John Doe' };
      resolve(data);
    }, 1000);
  });
}

getData().then(data => {
  console.log(data);
});
```
In this example, the getData function returns a Promise object that resolves with some data after an asynchronous operation (a 1-second timeout) completes. The then method is called on the Promise object to handle the resolved value.

Promises can be chained together to handle complex chains of asynchronous operations and can also handle errors in a more elegant way than callbacks.

## Async/await:
`Async/await:` Async/await is a newer feature in JavaScript that provides a cleaner and more concise way to handle asynchronous operations than Promises.
```js
async function getData() {
  // Perform some asynchronous operation
  await new Promise(resolve => setTimeout(resolve, 1000));
  const data = { id: 1, name: 'John Doe' };
  return data;
}

getData().then(data => {
  console.log(data);
});
```
In this example, the getData function is marked as async and uses the await keyword to wait for an asynchronous operation (a 1-second timeout) to complete. The function then returns some data, which is handled using a Promise as before.

Async/await provides a more readable and elegant way to handle asynchronous operations than Promises, especially when dealing with complex chains of asynchronous operations.

In summary, callbacks, Promises, and Async/await are all mechanisms used in JavaScript for handling asynchronous operations, with each one providing different benefits and drawbacks. Promises and Async/await are generally preferred over callbacks for their readability and maintainability, with Async/await being the most recent and most elegant solution.


## Prototypes
"Prototypes are the mechanism by which JavaScript objects inherit features from one another."
```js
let a = {
    name: "Adarsh",
    language: "english"
}
let b = {
    id: 41,
    age: 24    
}
a.__proto__ = b;
console.log(a.id);  // 41
console.log(b.id);  // 41
```

## Closer
"A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function."
```js
function numberGenerate() {
    // local "free" variable that ends up with in the closer
    let num = 1;
    function checkNumber() {
        console.log(num);
    }
    num++;
    return checkNumber
}
let number = numberGenerate();
number();
```

## Callback
"A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action."
```js
function hof(fn){
  fn();
  fn();
}
hof(function f() {
  console.log("Execution...");
})
setTimeout(function f() {
  console.log("Done");
},2000)
```