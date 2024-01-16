### Javascript:

-   **Define:** Javascript is a High-level, Interpreter, single thread language.
-   **Character:** scripting & interpreter language, dynamic typing, prototype base object oriented programming.
-   **Usage:** primary used client side, enhanced web page, server side web dev with node.js or mobile app.
-   **Differ with JAVA:** Main used standalone application, Mobile app(android), multi-thread, statically typing language.

### Feature of Javascript:

-   [Variables & Scope](#variables--scope)
-   [Data Types](#data-types)
-   [Hosting](#hosting)
-   [Object](#object)
-   [Prototypal Inheritance](#prototypal-inheritance)
-   [Class](#class)
-   [`this` Keyword ? call, apply & bind](#this-keyword--call-apply-and-bind-method)
-   [Shallow & Deep copy](#shallow--deep-copy)
-   [Event Propagation](#event-propagation--event-delegation)
-   [Storage](#storage)
-   [Functions](#functiontypes)
    -   [Callback Function]()
    -   [Higher Order Function]()
    -   [Generator Functions]()
    -   [IIFI Function]()
    -   [Clourse Function]()
    -   [curreying Function]()
-   null and undefine
-   Loops
-   String
-   Array
-   Map, Filter and Reduce
-   Console

### Variables & Scope:

-   `var` is a functional(global) scope, it re-declare variable & reassign value,
-   `let` is a block scope, Allows re-assign value but not re-declare within the same scope.
-   `const` is a block scope, it cannot be reassigned/declaration.

### Data Types:

-   **Primitive:** string, number, boolean, null, undefine, bigint, symbol
-   **Non-Primitive:** function, array these is all about object.

### Hosting:

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed

Note : variable declarations are hoisted, not initialize/assign variable or functions.

### Object:

Object is a collection of data & properties with key/ value formate.

-   Object Literal,
-   Constructor Object
-   Built-in Object

### Prototypal Inheritance:

-   Every object has a prototype properties.
-   It objects inherit properties and methods from their prototypes.
-   Prototypes create a chain, allowing for shared behavior among objects.
-   `Object.create()` can be used for explicit prototypal inheritance.

### Class:

A class is a blueprint or template for creating objects

```js
class Person {
    constructor(names, ages) {
        this.name = names;
        this.age = ages;
    }
    // method
    sayHello() {
        console.log(`Hello, ${this.name} and I am ${this.age}`);
    }
}
const client = new Person('Adarsh', 20); // create instance of class person
client.sayHello(); // call method
```

### `this` keyword ? call, apply and bind method ?

`this` means current execution context within a function. You can explicitly set the value of `this` using method like `call()`, `apply()` and `bind()`.

-   `call` takes individual argument
-   `apply` takes arguments as an array
-   `bind` create a new function that, when called, has a specified `this` value and initial arguments.

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
2. Function expression (function assign in variable)
3. Function Parameters and Default Values
4. Rest Parameters and Spread Operator

5. **Arrow function (ES6+):**

    - Do not have their own `this` context,
    - Especially useful for short, one-line expressions.

6. **Callback Functions:**
   Function is passed as an argument to another function and executed later. Commonly used to asynchronous operation such as data fetching, file reading, event handling

```js
function doSomething(callback) {
    console.log('Doing something...');
    callback();
}
function callbackFunction() {
    console.log('Callback executed!');
}
```

7. **Higher-Order Functions:**
   That take one or more functions as arguments / return new functions.
   Abstract common patterns or functional programming enable operation `map, filter`...etc.

```js
function multiplyBy(factor) {
    return function (number) {
        return number \* factor;
    };
}
const double = multiplyBy(2);
console.log(double(5)); // Output: 10
```

8. **Closures function:**
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

9. **Immediately Invoked Function Expressions (IIFE)**:
   Avoiding Global Scope Pollution or create Private Scopes

10. **Currying Functions:** Function is transformed into a sequence of functions, each taking a single argument.

```js
const curriedAdd = (x) => (y) => x + y;
console.log(curriedAdd(2)(3)); // Output: 5

function curriedOuter(x) {
    function curriedInner(y) {
        return x + y;
    }
}
console.log(curriedOuter(2)(3)); // Output: 5
```

11. **Generator Functions (ES6+):** Generator functions allow you to define an iterative algorithm by writing a function that can be paused and resumed. They use the `yield` keyword to produce a sequence of values.

```js
function* countUp() {
    let count = 0;
    while (true) {
        yield count++;
    }
}

const counter = countUp();
console.log(counter.next().value); // Output: 0
console.log(counter.next().value); // Output: 1
```

## Arrow Function Vs Regular Function:

-   Maintain `lexical scope` on `this` available in arrow function.
-   Create `construction` function using regular function.
-   Used `arguments` object in regular function or
-   Used `new` keyword to create instances in regular function

### Promise:

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

It is commonly used for handling asynchronous operations, such as fetching data from a server, reading a file, or making an HTTP request. A Promise has three states: `pending`, `fulfilled`, or `rejected`.

-   Parallel Requests : `const [result1, result2] = await Promise.all([promise1, promise2])`
-   Sequential Requests: chaining promise using `.then().then().catch()`

```js
    // creating a promise:
    const myPromise = new Promise((resolve, reject)){
        if(true){
            resolve('operation complete success')
        }else{
            reject('operation failed')
        }
    }
    // handle a promise with then() or catch()
    myPromise
        .then(result => console.log(result))
        .catch(err => console.log(err))

    // handle multiple promise
    const promise1 = fetchData();
    const promise2 = fetchData();
    Promise.all([promise1, promise2])
        .then([result1,result2] => console.log(result1, result2))

    // Handle using with Async / Await:
    const fetchDataAsync = async() => {
        try {
            const result = await fetchData()
        } catch (error) {
            console.log(error)
        }
    }
```

### Event Loop:

-   The event loop constantly checks two things: the `call stack` and the `event queue`.
-   If the call stack is empty, the event loop takes the first event from the queue and pushes it onto the call stack, making it the current operation.
-   The event loop continues this process, ensuring that the call stack is always empty before processing the next event from the queue.

Web API: (Separate Data Execute)

1. Job Queue:(Micro tasks - first run)
    - process.nextTick(),
    - Promise callback,
    - async function,
    - Queue MicroTask,
2. Task Queue:(Macro tasks - second run)
    - setTimeout()
    - setInterval()
    - setImmediate()

### Critical Rendering Path (CRP):

-   CRP involves HTML parsing and DOM construct, CSS parsing, layout calculations, and painting.
-   Optimizing the Render Tree, CSS, and JavaScript is essential for faster rendering.
-   Minification, compression, and image optimization contribute to improved performance.

### Optimizing the performance:

1. **Minification and Compression:** Remove unnecessary whitespace, comments, and rename variables
2. **Bundle and Code Splitting:** Bundle multiple JavaScript files into a single file.
3. **lazy loading:** Use lazy loading for images, scripts, and other assets. Delay the loading of non-essential resources until they are needed.
4. **Async and Defer Attributes:** `async` allows scripts to be downloaded asynchronously without blocking HTML parsing. `defer` ensures scripts are executed in order after HTML parsing.
5. **Critical Path Rendering:** Minimize the number of render-blocking resources, such as CSS and JavaScript files.
6. **Optimized Images:** Compress and optimize images to reduce their file size. Employ lazy loading for images to defer loading until they are about to be displayed
7. **Service Workers:** Implement service workers to enable background tasks, caching, and offline capabilities.
8. **Reduce DOM Manipulation:** Minimize direct DOM manipulation, as it can be a performance bottleneck. Use efficient DOM manipulation techniques, such as document fragment or virtual DOM, to optimize updates.
9. **Throttle and Debounce:** `Throttling` ensures a function is not executed more than once in a specified time period, while `debouncing` delays the execution until a specified time has passed since the last invocation.
10. **Optimize Network Requests:** Use a content delivery network (CDN) to serve static assets from servers located closer to the user.
11. **Memory Management:** Be mindful of memory leaks by cleaning up event listeners, removing references to unused objects, and avoiding unnecessary global variables.
12. **Preconnect and Prefetch:** Use the <link> tag with `rel="preconnect"` to initiate early connections to third-party domains. Utilize <link> with `rel="prefetch"` to fetch and cache resources that will be needed in the future.
13. **Performance Monitoring:** Use performance monitoring tools and browser developer tools to identify bottlenecks and areas for improvement.
14. **Caching:** Explore service workers for client-side caching and offline capabilities.

### Fetch API:

**CORS (Cross-Origin Resource Sharing):**
Web browsers to restrict web pages from making requests to a different domain than the one that served the web page.

1. **Access-Control-Allow-Origin:** https://allowed-origin.com
2. **Access-Control-Allow-Methods:** GET, POST, PUT, DELETE
3. **Access-Control-Allow-Headers:** Content-Type, Authorization
4. **Access-Control-Allow-Credentials:** true
5. **Access-Control-Expose-Headers:** Content-Length, X-Content-Range

```js
fetch('https://api.example.com/data', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token',
    },
    body: JSON.stringify({ name: 'Jon', age: 30 }),
})
    .then((res) => res.json())
    .catch((err) => console.error(err));
```

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
