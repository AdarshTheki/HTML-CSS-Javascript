let span = document.getElementById("values");
span.innerText = '0';
span.style.border = "2px solid black";
span.style.padding = "4px 10px";
span.style.borderRadius = "5px";

let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("reset");
let displayValue = document.getElementById("values");

decrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  (value > 0) ? (displayValue.innerText = value - 1) : alert("Negative value not allowed.");
});

incrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  (value >= 10) ? alert("10+ value not allowed.") : (displayValue.innerText = value + 1) 
});

resetBtn.addEventListener("click", ()=>{
  displayValue.innerText = 0;
});
