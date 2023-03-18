// Introduction Array:-

let a = [1,2,3,4];
console.log(a);

let arr = ['Adarsh',1,2,3,false,2.3];
console.log(arr);

let b = new Array(10);
console.log(b);
console.log(a[0]);
// element  -> [22,34,556,3];
// index    ->  0, 1, 2, 3

let array = [34,22,4,0,44,22,1,6];
console.log(array);

//*Array Method:-
array.pop();                    // Pop() - remove last place element 

array.push(786);                // push() - add last element
console.log(array);

const s = array.slice(2,7);     // slice() - to fetch data from start to end -1
console.log(s);

const str = array.join('#');    // join() - to add the separate string with '#'.
console.log(str);

const rev = array.reverse()     // reverse() element
console.log(rev);

const A = [1,2,3,4,56,7];       // indexOf()
console.log(A.indexOf(5));

const remove = A.splice(2,2,2);  // split() 
console.log(remove);
