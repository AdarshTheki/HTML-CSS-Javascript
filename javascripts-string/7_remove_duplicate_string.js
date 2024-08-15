const str = 'apple banana';

const uniqueChar = [...new Set(str)].join('');

console.log(uniqueChar);

const uniqueChar1 = str
    .split('')
    .filter((val, index, arr) => arr.indexOf(val) === index)
    .join('');

console.log(uniqueChar1);
