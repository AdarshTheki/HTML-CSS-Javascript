// Find the Missing Number

// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
// find the one that is missing.

function missingNumber(arr) {
    let n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, value) => sum + value, 0);
    const missingSum = expectedSum - actualSum;
    return missingSum;
}

let array = [1, 2, 3, 5, 6]; // 4
