// Function expression
const person = {
    name: 'Adarsh',
    age: 24,
    address: {
        state: 'MH',
        city: 'nagpur',
    },
};

// const shallowCopy = Object.assign({}, Person);
const shallowCopy = { ...person };

// const deepCopy = structuredClone(Person);
const deepCopy = JSON.parse(JSON.stringify(person));

deepCopy.address.state = 'UP';
deepCopy.address.city = 'Kanpur';
deepCopy.age = 100;
deepCopy.name = 'Ankita';

console.log(person);
