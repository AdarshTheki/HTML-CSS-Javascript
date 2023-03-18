// Introduction Function:

// Function with unlimited parameter:-
function sumOfAllParameter() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
console.log(sumOfAllParameter(1,2,3,4,5,7));

// Function with given parameter:-
function sumOfParameter([a,b,c]) {
  return a+b+c;
};
let arr = [1,2,3,4,5];
console.log(sumOfParameter(arr));

// Anonymous function:-
let x = function(){
  console.log("Hello, How you.!");
}
x();

// Immediately Invoke function execute (IIFE):-
(function(name){
  console.log("greeting!",name);
})('Self Invoke Function');

// function Expression:-
function add(x,y){
  return x+y;
}
console.log(add(10,4));

let addFunction = function(x,y){    // Anonymous function
  return x+y;
}
console.log(addFunction(10,4));

let arrowFunction = (x,y) => {      // Arrow function
  return x+y;
}
console.log(arrowFunction(10,4));

let nameFunction = function eval(x,y){  // named function expression
  return x+y;
}
console.log(nameFunction(10,4));
