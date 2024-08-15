// Reverse a String:

const str = 'Hello World';

function reverseString() {
    return str.split('').reverse().join('');
}

// reverse string with loops methods
function reverseStringWithLoop() {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

// reverse string in recursive method
function reverseStringWithRecursive(data = str) {
    if (data === '') {
        return '';
    } else {
        return reverseStringWithRecursive(data.substr(1)) + data[0];
    }
}

// reverse string with spread operator method
function reverseStringWithSpread() {
    return [...str].reverse().join('');
}
