// class Stack {
//     #arr;
//     constructor(){
//         this.#arr = [];
//     }
//     push (x){
//         this.#arr.push(x);
//     }
//     pop (){
//         this.#arr.pop();
//     }
//     top (){
//         if(this.#arr.length == 0) return undefined;
//         return this.#arr[this.#arr.length-1];
//     }
// }
// const st = new Stack();
// st.push(10);
// st.push(20);
// console.log(st.top());
// st.push(50);
// console.log(st.top());
// st.push(50);
// st.pop();
// console.log(st.top());

class ComplexNumber {
    #real;
    #imag;
    constructor(r, i){
        this.#real = r;
        this.#imag = i;
    }
    get real(){
        return this.#real;
    }
    get imag(){
        return this.#imag;
    }
    addComplexNumber(c){
        this.#real += c.real;
        this.#imag += c.imag;
    }
    display(){
        console.log("r:", this.#real, "i:", this.#imag);
    }
}
const c1 = new ComplexNumber(5, 3);
const c2 = new ComplexNumber(3, 6);
c1.addComplexNumber(c2);
c1.display();