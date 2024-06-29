// Getter , Setter, Static, Display

class Product {
    #rating = 0; // declare the private member first before u use it
    #name;
    discount;    // This is undefine
    constructor(n, p){
        console.log("Calling the constructors");
        this.#name = n;
        this.price = p; // data Members
    }
    static Customers(){
        console.log('This is a Customers Static Method');
    }
    display(){
        console.log("This is Display:", this.#name, this.price, this.#rating);
    }

    getName(){
        console.log("This is GetName:", this.#name);
    }
    setName(NewName){
        this.#name = NewName;
    }

    get rate() {
        console.log("This is get rate:", this.#rating);
    }
    set rate(r) {
        if(r < 0) return;
        this.#rating = r;
    }
}
const P = new Product("Adarsh", 12507);
P.display();
// P.Customers();
// console.log(P);
P.getName();
P.setName("Samsung-S30")
P.getName();

P.rate;       // getter method
P.rate = 3;   // setter method
P.display();  // Display / Print
