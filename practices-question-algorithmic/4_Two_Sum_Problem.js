// Given an array of integers,
// find two numbers such that they add up to a specific target number.

function twoSum(nums, target) {
    let numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const completed = target - nums[i];
        if (completed in numMap) {
            return [numMap[completed], i];
        }
        numMap[nums[i]] = i;
    }
    return null;
}

let array = [2, 7, 11, 15];
const target = 9;

const result = twoSum(array, target);
console.log(result);
// Output: [0, 1] (because nums[0] + nums[1] equals 9)
