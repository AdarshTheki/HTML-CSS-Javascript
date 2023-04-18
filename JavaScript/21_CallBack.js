// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function hof(fn){
  fn();
  fn();
}
hof(function f() {
  console.log("Execution...");
})

setTimeout(function f() {
  console.log("Done");
},2000)
