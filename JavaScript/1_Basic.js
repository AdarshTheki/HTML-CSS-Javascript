/*  JavaScript :- Basic */

console.log("This is my first programming Language");

let x = 22;   // initialize
x = 24;       // let x = 24 not redefined but value change
var y = 67;
var y = 60;   // redefine & value changed
const z = "Adarsh"; // not change any
console.log(x, y, z);

let a = null;
let b = 3.45;
let C = true;
let d = BigInt("549") + BigInt("4");
let e = "Harry";
let f = Symbol("I am a Adarsh Verma");
let g = undefined;
console.log(a, b, C, d, e, f, g);
console.log(
  typeof a,
  typeof b,
  typeof C,
  typeof d,
  typeof e,
  typeof f,
  typeof g
);

// variables:-
var X = 2;
let B = "adarsh";
console.log(X, B);

const c = {
  name: "Adarsh",
  surname: "verma",
  age: 25,
  city: function () {
    console.log("adarsh: 15");
  },
};
console.log(c);
console.log(c["city"]);
const Z = {
  adarsh: "verma",
  age: 45,
  city: "adarsh",
};
console.log(Z);
console.log(this);
// hello world in Node.js
let S = true;
let E = false;
console.log(S, E);
