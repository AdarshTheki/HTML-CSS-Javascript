### Javascript:

-   **Define:** Javascript is a High-level, Interpreter, single thread language.
-   **Character:** scripting & interpreter language, dynamic typing, prototype base object oriented programming.
-   **Usage:** primary used client side, enhanced web page, server side web dev with node.js or mobile app.
-   **Differ with JAVA:** Main used standalone application, Mobile app(android), multi-thread, statically typing language.

### let, const and var:

-   `var` is a functional(global) scope, it re-declare variable & reassign value,
-   `let` is a block scope, Allows re-assign value but not re-declare within the same scope.
-   `const` is a block scope, it cannot be reassigned/declaration.

### Hosting:

variable declarations are hoisted, not initialize/assign variable or functions.

### Data Types:

-   **Primitive:** string, number, boolean, null, undefine, bigint, symbol
-   **Non-Primitive:** function, array these is all about object.

### Object:

Object is a collection of data & properties with key/ value formate.

-   Object Literal,
-   Constructor Object
-   Built-in Object

### Prototypical Inheritance:

-   Every object has a prototype properties.
-   It objects inherit properties and methods from their prototypes.
-   Prototypes create a chain, allowing for shared behavior among objects.
-   `Object.create()` can be used for explicit prototypical inheritance.

### Class:

a class is a blueprint or template for creating objects

```js
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
```

### `this` keyword ? call, apply and bind method ?

All are used to invoke a function with a specified 'this' value

-   `this` means current execution context
-   `call` takes individual argument
-   `apply` takes arguments as an array
-   `bind` create new function with fixed "this" value

```js
const person = { name: 'Adarsh' };

function greet(greeting) {
    console.log(`${greeting}, ${this.name}!`);
}
greet.call(person, 'Hi'); // Hi, Adarsh!
greet.apply(person, ['Hola']); // Hola, Adarsh!
const greedPerson = greet.bind(person);
greedPerson('Hello'); // Hello, Adarsh!
```

### Shallow & Deep copy:

-   **Shallow copy:** Object to create new object, but copies to top level properties to original object.

    -   object.assign({}, object)
    -   spread operator {...object}
    -   Object.prototype.slice()

-   **Deep copy:** Object to create new object, copies all nested properties of the original object.
    -   JASON.pase(JASON.stringify(object))
    -   structuredClone().
    -   lodash libraries used.

### Event Propagation & Event Delegation:

**Event Propagation:** In DOM which events traverse through the hierarchy of elements in the document. There are three phases.

-   **Bubbling Phase:** Event traverse the inner element to upper element trigger ( child to parent).
-   **Target Phase:** Event reaches the target element.
-   **Capturing phase:** Event traverse the outer element to down element trigger ( parent to child).

    -   **stopPropagation():** Stop continue to propagate up or down events but ancestor trigger event.

    -   **immediatePropagation():** Only trigger the current event element

    -   **preventDefault():** Stop the browser's default action

**Event Delegation:** It concept of event propagation, used to handle events for multiple child elements.

### Storage:

-   **Local Storage:** Object allows you to save key/value pairs in the browser. Larger storage capacity, persists across browser sessions, not sent to the server automatically (5-10 MB per domain).
-   **Session Storage:** Similar to localStorage but with a shorter lifespan, cleared when the session ends

-   **Cookies:** Small storage capacity, can have an expiration date, sent to the server with every request. (up to 4KB).
    `document.cookie = 'name=adarsh';`

### Set:

```
new Set(), add(), delete(), has(), size(), clear()
```

### Function(types):

1. Function declaration / normal function
2. Function expression (function assign with variable)
3. Arrow function in ES6
4. Function Parameters and Default Values
5. Rest Parameters and Spread Operator

6. Callback Functions:
   commonly used to asynchronous operation such as data fetching, file reading, event handling

```js
function doSomething(callback) {
    console.log('Doing something...');
    callback();
}
function callbackFunction() {
    console.log('Callback executed!');
}
```

7. Higher-Order Functions:
   That take one or more functions as arguments / return new functions.\
   Abstract common patterns or functional programming enable operation map, filter...etc.

```js
function multiplyBy(factor) {
return function (number) {
return number \* factor;
};
}
const double = multiplyBy(2);
console.log(double(5)); // Output: 10
```

8. Closures function:
   closure is inner function access to the outer function scope, and also return.

```js
function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        console.log(outerValue + innerValue); // to access variables from the parent scope[lexical scope]
    };
}
const closure = outerFunction(10);
closure(5); // Output: 15
```

9. Immediately Invoked Function Expressions (IIFE):
   Avoiding Global Scope Pollution or create Private Scopes

10. Currying Functions : A function each taking a single parameter.
```js
    const curriedAdd = (x) => (y) => x + y;
    console.log(curriedAdd(2)(3)); // Output: 5
```

## Arrow Function Vs Regular Function:

-   Maintain LEXICAL SCOPE on 'this' available in arrow function.
-   Create construction function using regular function.
-   Used 'arguments' object in regular function or
-   Used 'new' keyword to create instances in regular function

### Event Loop:

-   The event loop constantly checks two things: the call stack and the event queue.
-   If the call stack is empty, the event loop takes the first event from the queue and pushes it onto the call stack, making it the current operation.
-   The event loop continues this process, ensuring that the call stack is always empty before processing the next event from the queue.

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

### Critical Rendering Path (CRP):

-   CRP involves HTML parsing, CSS parsing, layout calculations, and painting.
-   Optimizing the Render Tree, CSS, and JavaScript is essential for faster rendering.
-   Minification, compression, and image optimization contribute to improved performance.

### Debounce:

Use when you want to delay a function until a quiet period, such as with input fields or search functionality.

### Throttle:

Use when you want to limit the rate at which a function is called, such as with scroll or resize events.

### Promise:

The eventual completion (or failure) of an asynchronous operation and its resulting value.

-   Parallel Requests : const [result1, result2] = await Promise.all([promise1, promise2])
-   Sequential Requests: chaining promise using .then()

```js
const element = document.getElementById('demo');
// search DOM:
getElementById():
getElementsByClassName():
getElementsByName():
getElementsByTagName():
querySelector():
querySelectorAll();

// Traversing nodes and elements
parentElement();
parentNode();
children();
firstChild();
lastChild();
firstElementChild();
lastElementChild();
nextSibling();
previousSibling();
nextElementSibling();
previousElementSibling();
parentNode();
childNodes();

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
```
