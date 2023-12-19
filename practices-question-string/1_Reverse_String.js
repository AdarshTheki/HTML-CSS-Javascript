// Reverse a String:

let originalString = 'Hello, World!';

function reverseString(str) {
    return str.split('').reverse().join('');
}

// reverse string with loops methods
function reverseStringWithLoop(str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
