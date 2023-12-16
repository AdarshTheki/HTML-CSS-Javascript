// Rotate the elements of an array to the right by a specified number of positions

let array = [1, 2, 3, 4, 5];

function rotatedElement(arr, position) {
    if (arr.length === 0) return arr;
    position %= arr.length;
    return arr.slice(-position).concat(arr.slice(0, -position));
}

console.log(rotatedElement(array, 2));
// Output: [4, 5, 1, 2, 3]
