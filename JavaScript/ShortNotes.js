/*
Q. Javascript: 
define: Javascript is a High-level, Interpreter, single thread language.
character : scripting & interpreter language, dynamic typing, prototype base object oriented programming. 
usage : primary used client side, enhanced web page, server side web dev with node.js or mobile app

Q. differ to Java ?
main used standalone application, mobile app(android), multi-thread, statically typing language. 

Q. what is Event Propagation ? also event delegation ?
In DOM which events traverse through the hierarchy of elements in the document. 

- Bubbling phase = event traverse the inner element to upper element trigger ( child to parent).
- target phase = event reaches the target element.
- Capturing phase = event traverse the outer element to down element trigger ( parent to child).

Event Delegation: It concept of event propagation, used to handle events for multiple child elements.

stopPropagation()      - stop continue to propagate up or down events but ancestor trigger event. 
immediatePropagation() - only trigger the current event element 
preventDefault()       - stop the browser's default action

Q. let, const and var differ
    - "var" is a functional(global) scope, it re-declare variable & reassign value,
    - "let" is a block scope, Allows re-assign value but not re-declare within the same scope.
    - "const" is a block scope, it cannot be reassigned/declaration.

Q. Hosting: variable declarations are hoisted, not initialize/assign variable or functions.

Q. Data Types 
Primitive       = string, number, boolean, null, undefine, bigint, symbol 
Non-Primitive   = function, array these is all about object.

Q. Type of Object:
    literal object, constructor object & builtin object 


Q. Prototype & Prototypical inheritance ? 
- Every object has a prototype.
- Objects inherit properties and methods from their prototypes.
- Prototypes create a chain, allowing for shared behavior among objects.
- Object.create() can be used for explicit prototypical inheritance.


Q. Shallow and Deep copy difference ? 
define : Shallow copy of an object to create new object, but copies to top level properties to original object.
usage : object.assign({}, p), spread operator {...p} & Object.prototype.slice()

define : Deep copy of an object to create new object, copies all nested properties of the original object.
usage :  JASON.pase(JASON.stringify()), structuredClone() and lodash libraries used 
*/

// search DOM
document.getElementById();
document.getElementsByClassName();
document.getElementsByName();
document.getElementsByTagName();
document.querySelector();
document.querySelectorAll();

const element = document.getElementById('demo');

// Traversing nodes and elements
element.parentElement();
element.parentNode();
element.children();
element.firstChild();
element.lastChild();
element.firstElementChild();
element.lastElementChild();
element.nextSibling();
element.previousSibling();
element.nextElementSibling();
element.previousElementSibling();
element.parentNode();
element.childNodes();

// Create modify & Delete Elements:
document.createElement('tagName');
document.createTextNode('text');
element.appendChild();
element.removeChild();
element.replaceChild();
element.append();
element.prepend();
element.before();
element.after();
element.replaceWith();
element.remove();
element.insertAdjacentHTML('afterbegin', 'text / element');
element.insertAdjacentElement('beforeend', 'div');
element.insertAdjacentText('afterbegin', 'text');

// HTML content (Direct method)
element.innerHTML; // elements
element.innerText; // comment text
element.textContent; // comment text
element.outerHTML; // itself elements
element.outerText; // itself text

// attributes
element.hasAttribute();
element.setAttribute();
element.getAttribute();
element.removeAttribute();

// class
element.classList.add();
element.classList.remove();
element.classList.replace();
element.classList.toggle();
element.classList.contains();

// Miscellaneous
element.matches('selector'); // check true / false
element.closest('selector'); // nearest ancestor check
element.contains(); // check element
element.dataset();
element.focus();
element.blur();
element.hidden();
element.addEventListener('event', 'function');
element.removeEventListener('event', 'function');
element.dispatchEvent('event');
document.elementFromPoint('x', 'y');

const limitedTime = setTimeout(() => {}, 1000);
clearTimeout(limitedTime);

const infiniteTime = setInterval(() => {}, 1000);
clearInterval(infiniteTime);

// custom data attribute: element.dataset
<div id='myElement' data-user-id='123' data-user-name='JohnDoe' data-user-role='admin'></div>;
const myElement = document.getElementById('myElement');
console.log(myElement.dataset.userId); // 123
console.log(myElement.dataset.userName); // JohnDoe
console.log(myElement.dataset.userRole); // admin

// LocalStorage: The localStorage object allows you to save key/value pairs in the browser (limit 5MB).
// Session Storage: same work but limited time to used.
localStorage.setItem();
localStorage.getItem();
localStorage.removeItem();
localStorage.clear();
localStorage.key();
localStorage.length();

// Cookies: The cookie property sets or single line string
document.cookie = 'name=adarsh';

// --------------------------------------------------------- //

// set
const mySet = new Set();
mySet.add();
mySet.delete();
mySet.has();
mySet.size();
mySet.clear(); // remove all element

// --------------------------------------------------------- //

// array
const myArray = new Array();
myArray.push();
myArray.pop();
myArray.shift(); // remove element
myArray.unshift(); // add element
myArray.concat();
myArray.slice();
myArray.splice(); // changing existing array / or adding new array
myArray.indexOf(); // check element index
myArray.findIndex();
myArray.lastIndexOf();
myArray.includes();
myArray.forEach();
myArray.map();
myArray.reduce();
myArray.filter();
myArray.reverse();
myArray.join();
myArray.toString();
myArray.find(); // return first element with given condition
myArray.some(); // tests at least one element
myArray.every(); // tests all element
myArray.flat(); // create new array with all sub-array / nested array
myArray.flatMap(); // Map each element of all sub-array

// ----------------------------------------------------------- //

// Object:
const myObject = new Object();
Object.keys(myObject); // return key in array
Object.values(myObject); // return value in array
Object.entries(myObject); // return array
Object.assign({}, myObject); // clone, assign
myObject.hasOwnProperty('key'); // check special property
Object.create(myObject);
Object.freeze(myObject); // making immutable
Object.seal(myObject); // not allowed add or remove method

// ----------------------------------------------------------- //

// class:
class Person {
    constructor(names, ages) {
        this.name = names;
        this.age = ages;
    }
    // method
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}
const client = new Person('Adarsh', 20); // create instance of class person
client.sayHello(); // call method

// -------------------------------------------------------------- //

// Q. Function(types):

// 1. Function declaration / normal function
// 2. Function expression (assign with parameter)
// 3. Arrow function in ES6
// 4. Function Parameters and Default Values
// 5. Rest Parameters and Spread Operator

// 6. Callback Functions:
// commonly used to asynchronous operation such as data fetching, file reading, event handling
function doSomething(callback) {
    console.log('Doing something...');
    callback();
}
function callbackFunction() {
    console.log('Callback executed!');
}

// 7. Higher-Order Functions: that take one or more functions as arguments / return new functions.
// Abstract common patterns or functional programming enable operation map, filter...
function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}
const double = multiplyBy(2);
console.log(double(5)); // Output: 10

// 8. Closures and scope:
// closure is inner function access the outer function variable and parameter, and his return. 
// scope is to limit access to certain variable to specific area. 
function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        console.log(outerValue + innerValue); // to access variables from the parent scope[lexical scope]
    };
}
const closure = outerFunction(10);
closure(5); // Output: 15

// 9. Immediately Invoked Function Expressions (IIFE):
// Avoiding Global Scope Pollution or create Private Scopes
(function () {
    console.log('IIFE executed!');
})();

// 11. Currying : each taking a single parameter.
const curriedAdd = (x) => (y) => x + y;
console.log(curriedAdd(2)(3)); // Output: 5

/*
Q. Arrow Function Vs Regular Function:
    - Maintain LEXICAL SCOPE on 'this' available in arrow function.
    - Create construction function using regular function. 
    - Used 'arguments' object in regular function or 
    - Used 'new' keyword to create instances in regular function
*/

/* 
Q. Event Loop:
- The event loop constantly checks two things: the call stack and the event queue.
- If the call stack is empty, the event loop takes the first event from the queue and pushes it onto the call stack, making it the current operation.
- The event loop continues this process, ensuring that the call stack is always empty before processing the next event from the queue.

Web API: (Separate Data Execute)
1. Job Queue:(Micro tasks - first run) 
    - process.nextTick(),
    - Promise callback,
    - async function,
    - Queue Microtask,
2. Task Queue:(Macro tasks - second run)
    - setTimeout()
    - setinterval()
    - setImmediate()


Q. Explain 'this' keywords ? also explain call, apply and bind method ?



    All are used to invoke a function with a specified 'this' value
    - 'this' means  current execution context
    - 'call' takes individual argument
    - 'apply' takes arguments as an array
    - 'bind' create new function with fixed "this" value

const person = { name: 'Adarsh' };
function greet(greeting) {
    console.log(`${greeting}, ${this.name}!`);
}
greet.call(person, 'Hi'); // Hi, Adarsh!
greet.apply(person, ['Hola']); // Hola, Adarsh!
const greedPerson = greet.bind(person);
greedPerson('Hello'); // Hello, Adarsh!



Q. Critical Rendering Path (CRP):
    - CRP involves HTML parsing, CSS parsing, layout calculations, and painting.
    - Optimizing the Render Tree, CSS, and JavaScript is essential for faster rendering.
    - Minification, compression, and image optimization contribute to improved performance.

Q. Diff let const & var, In block scoping understand ? what is TDZ(Temporal Dead Zone) ?
    - Hosting are declare variable 
    - var is functional(global) scope or let and const is block scope

Debounce: Use when you want to delay a function until a quiet period, such as with input fields or search functionality.
Throttle: Use when you want to limit the rate at which a function is called, such as with scroll or resize events.

Q. Promise:
The eventual completion (or failure) of an asynchronous operation and its resulting value. 

Parallel Requests : const [result1, result2] = await Promise.all([promise1, promise2])
Sequential Requests: chaining promise using .then()

*/
