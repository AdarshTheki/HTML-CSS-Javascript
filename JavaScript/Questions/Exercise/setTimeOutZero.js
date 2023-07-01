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

// 2, 5, 3, 1, 4

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

// SetTimeOut and Event Loop:
for (var i = 0; i < 3; i++) {
  console.log(i);
}
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
