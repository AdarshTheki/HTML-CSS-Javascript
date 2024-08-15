const languages = ['Python', 'React', 'Node.js', 'Node.js', 'JavaScript'];

// using for loop
function reverseForLoop(array) {
    let emptyArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        emptyArray.push(array[i]);
    }
    return emptyArray;
}

// using reduce()
function reverseReduce(array) {
    return array.reduce((acc, curr) => {
        acc.unshift(curr);
        return acc;
    }, []);
}

// using swap method
function reverseArray(array) {
    for (let i = 0, j = array.length - 1; i < j; i++, j--) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// using reduce()
function reverseReduce(array) {
    return array.reduce((acc, curr) => [curr, ...acc], []);
}

// using map()
function reverseMap(array) {
    return array.map((_, index, arr) => arr[arr.length - 1 - index]);
}