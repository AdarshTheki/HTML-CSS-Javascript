// This is class expression

const Rectangle = class {
  // the class is anonymous but assigned to a variable
  constructor(h, w) {
    this.height = h;
    this.width = w;
  }
};
const AreasOfRectangle = class Area {
  // the class has its own name
  constructor(h, w) {
    this.height = h;
    this.width = w;
  }
};

// This is class declaration

class Product {
  constructor(n, p) {
    // console.log("Calling the Constructors");
    this.name = n;
    this.price = p;
    // console.log(this);
  }

  Display() {
    // class method are nothing but function they represent Behavior
    console.log(
      `The name of the Product is ${this.name} and The Price is ${this.price}`
    );
  }
}

const i1 = new Product("Iphone", 10000);
// i1.Display();
// console.log(p);

const i2 = new Product("Samsung", 102005);
i1.Display();
i2.Display();
