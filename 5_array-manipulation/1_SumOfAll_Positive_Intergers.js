const arr = [-4, -5, -3, 0, 1, 2, 3, 4, 5];

// Using for Loop
function forLoop(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}

// Using forEach()
function ForEachLoop(array) {
    let sum = 0;
    array.forEach((num) => {
        if (num > 0) {
            sum += num;
        }
    });
    return sum;
}

// reduce() method
function reduceMethod(array) {
    return array.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
}

// filter() & reduce()
function filterAndReduce(array) {
    return array.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
}
