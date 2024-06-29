let array = [1, 2, 3, 4, 6, 7, 8];

function findMissingNumber(arr) {
    const n = arr.length + 1; // include the missing number
    const expectedValue = (n * (n + 1)) / 2;

    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedValue - actualSum;
}

// Output: 5