// Array construction
let result;

// from() method:
result = Array.from('hello');
console.log(result); // [ 'h', 'e', 'l', 'l', 'o' ]

result = new Set([1, 2]);
console.log(result); // Set(2) { 1, 2 }

const arr = [1, 2, 3];
result = Array.from(arr, (it) => it * 2);
console.log(result); // [ 2, 4, 6 ]

result = Array.from({ length: 5 }, (it, i) => i * 2); // even number
console.log(result); // [ 0, 2, 4, 6, 8 ]

result = Array.from({ length: 5 }, (it, i) => i * 2 + 1); // odd number
console.log(result); // [ 1, 3, 5, 7, 9 ]

result 