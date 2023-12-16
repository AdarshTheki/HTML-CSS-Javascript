const array = [0, 2, 1, -4, 5, -20, 15];

// Using Math.mx with spread method
let maxNumber = Math.max(...array);

function maxValueWithLoop(array) {
    let tempNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > tempNumber) {
            tempNumber = array[i];
        }
    }
    return tempNumber;
}
