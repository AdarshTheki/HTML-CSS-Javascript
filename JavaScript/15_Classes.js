class Product { // Class is kind of like a template
  
    constructor(n, p) {
    // console.log("Calling the Constructors");
    // console.log(this);
    this.name = n;
    this.price = p;
    // console.log(this);
  }

  Display() { // class method are nothing but function they represent Behavior  
    
    console.log("The name of the Product is", this.name, "and The Price is", this.price);
  }
}

const i1 = new Product("Iphone", 10000);
// i1.Display();
// console.log(p);

const i2 = new Product("Samsung", 102005);
i1.Display();
i2.Display();

