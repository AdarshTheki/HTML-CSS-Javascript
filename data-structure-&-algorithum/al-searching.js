// linear search O(n)
function linearSearch(arr = [], k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) {
            return i;
        }
    }
    return -1;
}

// Binary Search O(log n)

function binarySearch(arr = [], k) {
    let start = 0,
        end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2); // Ensure mid is an integer
        if (arr[mid] === k) {
            return mid;
        } else if (arr[mid] > k) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

// Given test inputs
const arr1 = [1, 2, 3, 6, 8, 4, 13, 18];
const tempFunction = binarySearch(arr1, 18);

console.log(tempFunction);
