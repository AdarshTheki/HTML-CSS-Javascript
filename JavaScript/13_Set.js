const mySet = new Set();
mySet.add(1);
mySet.add(3);
mySet.add(2);
mySet.add(5);
mySet.add("Some Text Here");
console.log(mySet);

mySet.add ({ a:1, b:"text"})
console.log(mySet);

console.log(mySet.has(1));
console.log(mySet.has(4));mySet.has(1)
let a = 245;

// // concat: combine two array
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];

// console.log(array1.concat(array2));
// // expected output: Array ["a", "b", "c", "d", "e", "f"]


const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]