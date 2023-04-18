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