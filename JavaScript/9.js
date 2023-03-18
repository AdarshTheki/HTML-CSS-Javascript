// forEach(), map(), Filter(), Reduce(), Every(), Find(), and Sort() an Array.

let arr = [2, 3, 4];
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr);
});

arr.forEach((element, index, arr) => {
  console.log("Arrow:", index, element, arr);
});

//-===========================================================//
/*  forEach, Map, Filter and Reduce Method:   */

const hero = ["nativage", "leader", "village", "cone"];

// forEach
hero.forEach((el) => console.log(el.toUpperCase()));
console.log("forEach:", hero);

// Map: (forEach and map are same work)
hero.map((el) => console.log(el.toUpperCase()));
console.log("map:", hero);

// Filter
const heroWithRaj = hero.filter((h) => {
  return h.endsWith("age"); // match the end of hero as `age`.
});
console.log("filter", heroWithRaj);

// Reduce
const cartBill = [20, 30, 40];
const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0);
console.log("reduce", sumOfCartBill);

// check if all values are values:
const gameScore = [200, 20, 300, 400, 310];
console.log("TypeOf:", typeof gameScore[0]);
const gameScoreCheck = gameScore.every((v) => typeof v === "number");
console.log("every check:", gameScoreCheck);

// check if any score in above 200.
const above200 = gameScore.find((score) => score > 200);
console.log("find", above200);

//==================================

// check the find Index, some, sort
const age = [20, 30, 45, 100];
const checker = age.indexOf(45);
console.log("indexOf:", checker);   // which index of vale 

const ageCheck = age.findIndex((el) => el === 100);   // findindex()
console.log("findIndex:", ageCheck);

const someCheck = age.some((el) => el % 2 === 0);   // some Check true or not
console.log("some:", someCheck);

const arrSort = age.sort();       // sort Array
console.log("sort", arrSort);


// Date: 06-03-2023 : 126-capture