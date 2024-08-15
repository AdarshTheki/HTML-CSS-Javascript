// Palindrome Number:

function palindrome(num) {
    const numberString = num.toString();
    const reverseString = numberString.split('').reverse().join('');

    return numberString === reverseString;
}

let palindromeNum = 12321;
let nonPalindromeNum = 12345;

console.log(palindrome(palindromeNum)); // Output: true
console.log(palindrome(nonPalindromeNum)); // Output: false