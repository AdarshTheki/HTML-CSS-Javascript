// function Product(n, p) {
// const Product = function(n, p) {

const Product = function(n, p) {
    this.name = n;
    this.price = p;
    // return {x: 10, y:20}     // default Value
}
const P = new Product("Adarsh", 102450);
console.log(P);


let obj = {
    x: 10, b:20,
    // display : function() {   // 10
    // display : () => {        // undefined  
    display() {
        console.log(this.x);
    }
}
obj.display();