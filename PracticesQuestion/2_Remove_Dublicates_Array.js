const languages = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];

// find unique array with multiple methods likes Set, filter, reduce, forEach & for..of loop

// Using Set()
function uniqueSet(array) {
    return [...new Set(array)];
}

// Using filter()
function uniqueFilter(array) {
    return array.filter((ele, index) => array.indexOf(ele) === index);
}

// Using reduce()
function uniqueReduce(array) {
    return array.reduce((unique, arr) => (unique.includes(arr) ? unique : [...unique, arr]), []);
}

// Using forEach()
function uniqueForEach(array) {
    let uniqueValue = [];
    array.forEach((ele) => {
        if (!uniqueValue.includes(ele)) {
            uniqueValue.push(ele);
        }
    });
    return uniqueValue;
}

// Using for...of loop
function uniqueForOf(array) {
    let uniqueValue = [];
    for (const arr of array) {
        if (!uniqueValue.includes(arr)) {
            uniqueValue.push(arr);
        }
    }
    return uniqueValue;
}
