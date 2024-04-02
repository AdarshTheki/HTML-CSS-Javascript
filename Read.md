1. **Difference between `undefined` and `null`**:

    - `undefined` represents a variable that has been declared but hasn't been assigned a value.
    - `null` is an intentional absence of any value. It is often used to indicate that a variable should have no value.
    - In summary, `undefined` means "not initialized," while `null` means "no value."

2. **`&&` Operator**:

    - The `&&` (logical AND) operator returns `true` if both operands are truthy, otherwise, it returns `false`.
    - Example: `a && b` evaluates to `true` if both `a` and `b` are truthy.

3. **`||` Operator**:

    - The `||` (logical OR) operator returns `true` if at least one of the operands is truthy, otherwise, it returns `false`.
    - Example: `a || b` evaluates to `true` if either `a` or `b` (or both) are truthy.

4. **Converting a String to a Number**:

    - Using the unary plus operator (`+`) is a common way to convert a string to a number.
    - Example: `const num = +"123"; // num is 123`

5. **DOM (Document Object Model)**:

    - The DOM represents the structure of an HTML document as a tree of objects.
    - It allows JavaScript to interact with and manipulate HTML elements dynamically.

6. **Event Propagation**:

    - Event propagation refers to how events propagate through the DOM tree.
    - It includes two phases: capturing (from the root to the target) and bubbling (from the target back up to the root).

7. **Event Bubbling**:

    - Event bubbling is the process where an event triggered on a child element propagates up to its parent elements.

8. **Event Capturing**:

    - Event capturing is the opposite of bubbling. It starts from the root and goes down to the target element.

9. **`event.preventDefault()` vs. `event.stopPropagation()`**:

    - `event.preventDefault()` prevents the default behavior of an event (e.g., form submission).
    - `event.stopPropagation()` stops the event from further propagation (bubbling or capturing).

10. **Checking if `event.preventDefault()` Was Used**:

    - You can check if `event.defaultPrevented` is `true` after calling `event.preventDefault()`.

11. **Why does this code `obj.someprop.x` throw an error?**

-   This code throws an error because `obj.someprop` is not defined or does not have a property named `x`. Accessing a property (`x`) on an undefined or null value results in a runtime error.

12. **What is `event.target`?**

-   `event.target` refers to the DOM element that triggered an event. It represents the actual element where the event occurred (e.g., a button clicked, a link hovered, etc.).

13. **What is `event.currentTarget`?**

-   `event.currentTarget` refers to the DOM element that currently handles the event during event propagation. It remains constant throughout the event propagation process, even if the event bubbles or captures.

14. **Difference between `==` and `===`**:

-   `==` (loose equality) compares values after type coercion (e.g., converting string to number).
-   `===` (strict equality) compares both values and types without type coercion. It returns true only if both values are of the same type and have the same value.

15. **Why does comparing two similar objects return false in JavaScript?**

-   When comparing objects (e.g., `{}`), JavaScript checks if they refer to the same memory location (reference equality), not their content. Two different object instances with the same properties are not considered equal.

16. **What does the `!!` operator do?**

-   The `!!` (double negation) operator converts a value to its boolean equivalent. It ensures that the result is either `true` or `false`.

17. **How to evaluate multiple expressions in one line?**

-   Use the comma operator (`,`). For example: `const result = (expr1, expr2, expr3);`

18. **What is Hoisting?**

-   Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation. Variables are hoisted but not their values.

19. **What is Scope?**

-   Scope defines the visibility and lifetime of variables. JavaScript has function scope (local scope) and block scope (introduced by `let` and `const`).

20. **What are Closures?**

-   Closures are functions that remember the lexical scope in which they were created. They allow access to outer function variables even after the outer function has finished executing.

21. **Falsy Values in JavaScript**:

    -   Falsy values are values that evaluate as "false" when used in a boolean context. Here are the six falsy values in JavaScript:
        1. `false`: The boolean value `false`.
        2. `0`: The number zero.
        3. `""` (empty string): An empty string.
        4. `null`: The null keyword, representing the absence of any object value.
        5. `undefined`: The undefined keyword, representing an uninitialized value.
        6. `NaN`: Stands for "Not a Number." It represents a special value returned from an operation that should return a numeric value but doesn't.

22. **Checking if a Value is Falsy**:

    -   You can use the logical NOT (`!`) operator to check if a value is falsy.
    -   Example:
        ```javascript
        const myVar = 0;
        if (!myVar) {
            console.log('myVar is falsy');
        } else {
            console.log('myVar is truthy');
        }
        ```

23. **"use strict"**:

    -   `"use strict"` is a directive that enables strict mode in JavaScript.
    -   In strict mode, certain actions that were previously silently ignored or treated as errors are now flagged as errors.
    -   It helps catch common coding mistakes and improves code quality.

24. **Value of 'this' in JavaScript**:

    -   The value of `this` depends on how a function is called:
        -   In a regular function, `this` refers to the global object (e.g., `window` in browsers).
        -   In a method (function inside an object), `this` refers to the object itself.
        -   In arrow functions, `this` retains the value from the surrounding lexical context.

25. **Prototype of an Object**:

    -   Every object in JavaScript has a prototype.
    -   The prototype is an object from which the current object inherits properties and methods.
    -   You can access an object's prototype using `Object.getPrototypeOf(obj)`.

26. **IIFE (Immediately Invoked Function Expression)**:

    -   An IIFE is a function expression that is executed immediately after it is defined.
    -   It is often used to create a private scope and avoid polluting the global namespace.

27. **`Function.prototype.apply` Method**:

    -   The `apply` method calls a function with a specified `this` value and an array (or array-like object) of arguments.
    -   Example:
        ```javascript
        function greet(name) {
            console.log(`Hello, ${name}!`);
        }
        greet.apply(null, ['Alice']); // Calls greet('Alice')
        ```

28. **`Function.prototype.call` Method**:

    -   Similar to `apply`, but accepts individual arguments instead of an array.
    -   Example:
        ```javascript
        greet.call(null, 'Bob'); // Calls greet('Bob')
        ```

29. **Difference between `apply` and `call`**:

    -   Both methods invoke a function with a specific `this` value.
    -   `apply` takes an array of arguments, while `call` takes individual arguments.

30. **Usage of `Function.prototype.bind`**:

    -   The `bind` method creates a new function with a fixed `this` value and partially applied arguments.
    -   It is commonly used for event handlers or callbacks.

31. **Functional Programming**:

    -   Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions.
    -   Features of functional programming include:
        -   **Pure Functions**: Functions that always produce the same output for the same input and have no side effects.
        -   **Immutability**: Avoiding changing data after creation.
        -   **Higher-Order Functions**: Functions that take other functions as arguments or return functions.
        -   **First-Class Functions**: Treating functions as first-class citizens (assigning them to variables, passing them as arguments, etc.).

32. **Higher Order Functions (HOF)**:

    -   HOFs are functions that take other functions as arguments or return functions.
    -   Examples: `map`, `filter`, `reduce`.

33. **First-Class Functions**:

    -   Functions are first-class citizens in JavaScript, meaning they can be:
        -   Assigned to variables.
        -   Passed as arguments.
        -   Returned from other functions.

34. **Implementing `Array.prototype.map`**:

    -   The `map` method creates a new array by applying a function to each element of an existing array.
    -   Here's a basic implementation:
        ```javascript
        function myMap(arr, callback) {
            const result = [];
            for (let i = 0; i < arr.length; i++) {
                result.push(callback(arr[i], i, arr));
            }
            return result;
        }
        ```

35. **Implementing `Array.prototype.filter`**:

    -   The `filter` method creates a new array with all elements that pass a test (provided by a function).
    -   Basic implementation:
        ```javascript
        function myFilter(arr, callback) {
            const result = [];
            for (let i = 0; i < arr.length; i++) {
                if (callback(arr[i], i, arr)) {
                    result.push(arr[i]);
                }
            }
            return result;
        }
        ```

36. **Implementing `Array.prototype.reduce`**:

    -   The `reduce` method applies a function against an accumulator and each element in the array.
    -   Basic implementation:
        ```javascript
        function myReduce(arr, callback, initialValue) {
            let accumulator = initialValue;
            for (let i = 0; i < arr.length; i++) {
                accumulator = callback(accumulator, arr[i], i, arr);
            }
            return accumulator;
        }
        ```

37. **`arguments` Object**:

    -   The `arguments` object is an array-like object available inside functions.
    -   It contains all arguments passed to the function.

38. **Creating an Object without a Prototype**:

    -   You can create an object without a prototype using `Object.create(null)`.

39. **Global Variable Issue**:

    -   If `b` becomes a global variable, it's likely due to not declaring it with `var`, `let`, or `const` inside the function scope.

40. **ECMAScript (ES)**:

    -   ES is the standard specification for JavaScript.
    -   Each version (ES5, ES6/ES2015, etc.) introduces new features and improvements.

41. **New Features in ES6 (ECMAScript 2015)**:

    -   ES6 introduced several key features to JavaScript. Some of the most important ones include:
        -   **`let` and `const` Keywords**: Block-scoped variables that allow better variable management.
        -   **Arrow Functions**: A concise syntax for writing function expressions.
        -   **Spread (`...`) Operator**: Expands iterables (arrays, strings) into more elements.
        -   **`for/of` Loop**: Iterates over values of iterable objects.
        -   **Map Objects**: Key-value pairs with arbitrary keys.
        -   **Set Objects**: Collections of unique values.
        -   **Classes**: Syntactical sugar for constructor functions.
        -   **Promises**: Improved handling of asynchronous operations.
        -   **Template Literals**: Enhanced string interpolation.
        -   **Default Parameters**: Specify default values for function parameters.
        -   **Rest Parameter**: Collects remaining function arguments into an array.
        -   **Symbol**: A new primitive data type for unique identifiers.

42. **Difference between `var`, `let`, and `const`**:

    -   `var`: Function-scoped, hoisted, and can be redeclared.
    -   `let`: Block-scoped, not hoisted, and can be reassigned.
    -   `const`: Block-scoped, not hoisted, and cannot be reassigned (but its properties can).

43. **Arrow Functions**:

    -   Short syntax for writing function expressions.
    -   No need for the `function` keyword or curly braces.
    -   Lexical scoping of `this`.

44. **Classes**:

    -   Syntactical sugar for constructor functions.
    -   Encapsulates data and behavior into reusable objects.

45. **Template Literals**:

    -   Allow embedding expressions inside strings using backticks.
    -   Supports multi-line strings.

46. **Object Destructuring**:

    -   Extracts properties from objects and binds them to variables.

47. **ES6 Modules**:

    -   Allows modular code organization using `import` and `export`.

48. **The Set Object**:

    -   Represents a collection of unique values.
    -   Useful for removing duplicates from arrays.

49. **Promises**:

    -   Handles asynchronous operations and provides better error handling.

50. **Async/Await**:

    -   Syntactic sugar for handling promises in a more synchronous style.

51. **`async/await`**:

    -   `async` functions return promises and allow you to write asynchronous code in a more synchronous style.
    -   The `await` keyword is used inside an `async` function to pause execution until a promise is resolved.

52. **Spread Operator vs. Rest Operator**:

    -   Spread (`...`) expands iterables into individual elements.
    -   Rest collects function arguments into an array.

53. **Default Parameters**:

    -   Specify default values for function parameters.
    -   Example: `function greet(name = 'Guest') { ... }`

54. **Wrapper Objects**:

    -   JavaScript automatically converts primitives (like strings and numbers) to wrapper objects when needed.
    -   Example: `"Hello".toUpperCase()` creates a temporary `String` object.

55. **Implicit vs. Explicit Coercion**:

    -   Implicit coercion occurs when JavaScript automatically converts one type to another (e.g., string to number).
    -   Explicit coercion is done intentionally using functions like `Number()`, `String()`, etc.

56. **NaN (Not-a-Number)**:

    -   Represents an invalid number result (e.g., dividing zero by zero).
    -   To check if a value is NaN, use `isNaN(value)`.

57. **Checking if a Value is an Array**:

    -   Use `Array.isArray(value)` to determine if a value is an array.

58. **Checking if a Number is Even without `%` Operator**:

    -   Use bitwise AND (`&`) with 1: `(number & 1) === 0`.

59. **Checking if a Property Exists in an Object**:

    -   Use the `in` operator or `hasOwnProperty()` method.

60. **AJAX (Asynchronous JavaScript and XML)**:
    -   Allows making asynchronous requests to a server without reloading the entire page.
