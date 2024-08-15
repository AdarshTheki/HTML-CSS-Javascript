// given test inputs
const str1 = 'hello world!';
const str2 = 'AdarshVerma';

// reserve string
function reserveString(str = '') {
    let temp = '';
    for (let i = str.length - 1; i >= 0; i--) {
        temp += str[i];
    }
    return temp;
}

function reverseStringFast(str = '') {
    return str.split('').reverse().join('');
}

// Swap char in string
function swapCharacters(str = '', index1, index2) {
    let arr = str.split('');
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr.join('');
}


// given test inputs
const arr1 = [6, 7, 8, 9, 10, 11, 13, 12, 15];
const arr2 = [10, 20, 30, 40, 50, 60, 70];

//  find the maximum product of any two integers in the array.
function findTwoMaxProduct(arr = []) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] > temp) {
                temp = arr[i] * arr[j];
            }
        }
    }
    return temp;
}

// finding the missing integer in an array of n-1
function findMissingNumber(arr = []) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const expectSum = ((max - min + 1) * (min + max)) / 2;
    const actualSum = arr.reduce((prev, curr) => prev + curr, 0);
    return expectSum - actualSum;
}

// Rotate the elements of an array to the right by k steps
function rotateElement(arr = [], k) {
    const temp = [];
    let n = arr.length;
    k = k % arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (i < k) {
            temp.push(arr[n + i - k]);
        } else {
            temp.push(arr[i - k]);
        }
    }
    return temp;
}

// longest common prefix
function longestCommonPrefix(arr = []) {
    if (arr.length === 0) return '';

    let prefix = arr[0];

    for (let i = 1; i < prefix.length; i++) {
        while (arr[i].indexOf(prefix) !== 0) {
            console.log('i', i);
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') return '';
        }
    }
    return prefix;
}

const tempFunction = longestCommonPrefix(arr1);
console.log(tempFunction);
