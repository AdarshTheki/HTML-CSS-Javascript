// Find the contiguous subarray with the largest sum in a given array of integers.

function maxSubarraySum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let currentSum = arr[0];
    let maxSum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let result = maxSubarraySum(array);

console.log(result); // Output: 6 (the subarray [4, -1, 2, 1] has the largest sum)
