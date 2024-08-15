// Reverse a Number:

function reverseNum(num) {
    const stringNumber = num.toString().split('').reverse().join('');
    const reverseString = parseInt(stringNumber, 10);
    return reverseString;
}

let originalNumber = 12345;
let reversedNumber = reverseNum(originalNumber);

console.log(reversedNumber); // Output: 54321