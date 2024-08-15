// Merge two sorted arrays into a single sorted array.

function mergeSortedArrays(arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result.sort();
}

let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];

console.log(mergeSortedArrays(array1, array2));
