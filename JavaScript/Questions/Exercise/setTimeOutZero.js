//
setTimeout(function () {
  console.log(1);
}, 0);

console.log(2);

Promise.resolve().then(() => {
  console.log(3);
});

setTimeout(() => {
  console.log(4);
}, 0);

console.log(5);

// Output: 2, 5, 3, 1, 4
/*
* Micro Task Queue: 
- process.nextTick(),
- Promise callback,
- async function,
- Queue Microtask,

* Macro Task Queue:
- setTimeout()
- setinterval()
- setImmediate()
*/

// Q. SetTimeOut and Event Loop:
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("event loop:", i);
  }());
}
