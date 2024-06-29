// Introduction Array:-

let a = [1,2,3,4];
console.log(a);

let arr = ['Adarsh',1,2,3,false,2.3];
console.log("arr ", arr);

let b = new Array(10);
console.log("new array(10)", b);
console.log('a[0]', a[0]);
// element  -> [22,34,556,3];
// index    ->  0, 1, 2, 3

let array = [34,22,4,0,44,22,1,6];
console.log("Array", array);

// Array Method:-
array.pop();                    // Pop() - remove last place element 

array.push(786);                // push() - add last element
console.log("array", array);

const s = array.slice(2,7);     // slice() - to fetch data from start to end -1
console.log("slice", s);

const str = array.join('#');    // join() - to add the separate string with '#'.
console.log("join", str);

const rev = array.reverse()     // reverse() element
console.log("reverse", rev);

const A = [1,2,3,4,56,7];        // indexOf()
console.log("IndexOf(5)", A.indexOf(5));    // -1
console.log("IndexOf(5)", A.indexOf(56));   // 4

const remove = A.splice(2,3);   // split() 
console.log("splice", remove);  // 3, 4, 56

const concat = A.concat(array)  // concat : combine two array
console.log("concat", concat);

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());           // flat()
// output: Array [0, 1, 2, 3, 4]
