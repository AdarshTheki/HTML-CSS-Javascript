// Find subString:
const str = 'Bhai batai ye kay hai';
const sub = 'ai';
let result;

// exists
result = str.includes(sub);
console.log(result); // true

// exits where
result = str.indexOf(sub); // first index show
console.log(result); // 2

// exits how many
result = str.split(sub).length - 1;
console.log(result); // 3
result
