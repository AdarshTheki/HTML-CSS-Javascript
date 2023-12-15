//  Create an Object and manipulate values:

let obj = { id: 11, name: 'Adarsh', salary: 10000 };
obj.phone = 'Apple';
console.log(obj);

let emp = new Object();
emp.id = 204;
emp.name = 'Sun';
emp.salary = 12000;
console.log(emp);

class Employee {
   constructor(i, n, s) {
      this.id = i;
      this.name = n;
      this.salary = s;
   }
}
const e = new Employee(101, 'Ayush', 20000);
console.log(e);

// Manipulating Object;
const emp2 = {
  id: 102,
  sun: 'father',
  salary: 10000,
};
console.log(emp2.id);
console.log(emp2['id']);
emp2.items = 10;
emp2['type'] = 'type-In';
console.log(emp2);
emp2['salary'] = 50000;
console.log(emp2);

// Delete key:-
delete emp2.id;
console.log(emp2);
delete emp2.salary;
console.log(emp2);

// object Method:-
let emp3 = {
  id: 100,
  name: 'adarsh',
  age: 24,
  salary: 24000,
};
// Object.keys
const keys1 = Object.keys(emp3); // return an array of an object's own Keys
console.log(keys1);

// Object.values
const keys2 = Object.values(emp3); // return an array of an object's own Values
console.log(keys2);

// Object.entries
const keys3 = Object.entries(emp3); // return an array of an object's own Values
console.log(keys3);

// Object.freeze
Object.freeze(emp3); // Not allow both update or delete
emp3.id = 40;
delete emp3.name;
console.log(emp3);

// Object.seal
Object.seal(emp); // allow update but not allow delete
emp.id = 40;
delete emp.salary;
console.log(emp);

// Object.assign
const p = Object.assign({}, emp);
console.log(p);

// Date: 20-Feb-2023
