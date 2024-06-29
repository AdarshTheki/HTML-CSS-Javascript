// Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure ‘remembers’ the environment in which it was created.

let score = 0;
function one() {
    let score = 1;
    console.log(score);
}
one();
console.log(score);

function two() {
    let score = 200;
    console.log(score);
}

function three() {
    let score = 300;
    console.log(score);
}
// one();
// two();
// three();

// Ex:1
function outerFun() {
    let OuterValue = 'i am Outer Value';
    function innerFunction() {
        let innerValue = 'Inner Value';
        console.log(innerValue, OuterValue);

        function innerOfInnerFun() {
            let innerInnerValue = 'Inner Inner value';
            console.log(innerInnerValue, OuterValue);
        }
        innerOfInnerFun();
    }
    innerFunction();
}
// outerFun();

// Ex:2
// const errorMassage = "file not find"

// setTimeout(function callback(){
//     console.log(errorMassage);
// }, 1000);

// let viewCount  = 0
// const items = [2,4,6,7]

// items.forEach(function iterator(num){
//     viewCount ++;
//     console.log(num);
// })

// console.log("view Count", viewCount);

// Ex:3
function numberGenerate() {
    // local "free" variable that ends up with in the closer
    let num = 1;
    function checkNumber() {
        console.log(num);
    }
    num++;
    return checkNumber;
}
let number = numberGenerate();
number();
