// Example usage
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

// Using filter()
function findIntersection(arr1, arr2) {
    return arr2.filter((value) => arr1.includes(value));
}

// Using Set()
function findIntersectionWithSet(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    return Array.from(new Set([...set1].filter((value) => set2.has(value))));
}
