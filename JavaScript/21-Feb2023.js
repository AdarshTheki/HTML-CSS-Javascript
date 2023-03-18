//* variables:-
var X = 2
let B ='adarsh'
console.log(X,B);
const c = {
   'name': 'Adarsh',
   'surname': 'verma',
   age: 25,
   city: function(){
      console.log("adarsh: 15");
   }
};
console.log(c);
console.log(c['city'])
const z = {
   adarsh:'verma', 'age': 45, city: "adarsh"
}
console.log(z)
console.log(this)
// hello world in Node.js
let S = true;  let E = false;
console.log(S,E)


//* Array:-
let a = [1,2,3,4];
console.log(a);
let ak = ['Adarsh',1,2,3,false,2.3];
console.log(ak);
let b = new Array(10);
console.log(b);
console.log(a[0]);
//* element    -> [22,34,556,3];
//* index/pos  ->  0, 1, 2, 3
let array = [34,22,4,0,44,22,1,6];
console.log(array);

//*Array Method:-
array.pop();                  //* Pop() - remove last place element 
array.push(786);              //* push() - add last element
console.log(array);
const s = array.slice(2,7);   //* slice() - to fetch data from start to end -1
console.log(s);
const str = array.join('#');  //* join() - to add the separate string with '#'.
console.log(str);
const rev = array.reverse()   //*   reverse() element
console.log(rev);
const A = [1,2,3,4,56,7];     //* indexOf()
console.log(A.indexOf(5));
const remove = A.splice(2,2,2);
console.log(remove);

//>  Function:-

//* Function with unlimited parameter:-
function sumOfAllParameter() {
   let sum = 0;
   for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
   }
   return sum;
};
console.log(sumOfAllParameter(1,2,3,4,5,7));

//* Function with given parameter:-
function sumOfParameter([a,b,c]) {
   return a+b+c;
};
let arr = [1,2,3,4,5];
console.log(sumOfParameter(arr));

//* Anonymous function:-
let x = function(){
   console.log("Hello, How you.!");
}
x();

//* Immediately Invoke function execute (IIFE):-
(function(name){
   console.log("greeting!",name);
})('Self Invoke Function');

//* function Expression:-
function add(x,y){
   return x+y;
}
console.log(add(10,4));

let addFunction = function(x,y){    //* Anonymous function
   return x+y;
}
console.log(addFunction(10,4));

let arrowFunction = (x,y) => {      //* Arrow function
   return x+y;
}
console.log(arrowFunction(10,4));

let nameFunction = function eval(x,y){  //* named function expression
   return x+y;
}
console.log(nameFunction(10,4));

//*  Create Object and manipulate value in Object
let obj= {id:011, name:'Adarsh', salary:10000};
console.log(obj);
console.log(obj.id, obj.name, obj.salary);
obj.phone = 'Apple'
console.log(obj);

let emp = new Object();
emp.id = 204
emp.name = 'Sun'
emp.salary = 12000
console.log(emp);


function Employee(i, n, s){
   this.id = i;
   this.name = n;
   this.salary = s;
}
const e = new Employee(101, 'Ayush', 20000)
console.log(e);


//* Manipulating Object;
const emp2 = {
   id: 102,
   sun: 'father',
   salary: 10000
};
console.log(emp2.id)
console.log(emp2['id'])
emp2.items = 10;
emp2['type'] = 'type-In'
console.log(emp2);
emp2['salary'] = 50000
console.log(emp2)

//* Delete key:-
delete emp2.id;
console.log(emp2);
delete emp2.salary;
console.log(emp2);



//* object Method:-
let emp3 = {
   id: 100,
   name: 'adarsh',
   age: 24,
   salary: 24000
};
//* Object.keys
const keys1 = Object.keys(emp3);
//* return an array of an object's own Keys
console.log(keys1);

//* Object.values
const keys2 = Object.values(emp3);
//* return an array of an object's own Values
console.log(keys2);

//* Object.entries
const keys3 = Object.entries(emp3);
//* return an array of an object's own Values
console.log(keys3);

//* Object.freeze
Object.freeze(emp3);    //* Not allow both update/delete
emp3.id = 40;
delete emp3.name;
console.log(emp3)

//* Object.seal
Object.seal(emp);    //* allow update / not allow delete
emp.id = 40;
delete emp.salary;
console.log(emp);

//* Object.assign
const p = Object.assign({}, emp);
console.log(p)

//! date: 20-Feb-2023