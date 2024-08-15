// selection sort O(n)
function selectionSort(arr = []) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function bubbleSort(arr = []) {
    let counter = 1;
    while (counter < arr.length - 1) {
        for (let i = 0; i < arr.length - counter; i++) {
            if (arr[i + 1] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        counter++;
    }
    return arr;
}

// Given test inputs
const arr1 = [6, 1, 2, 3, 13, 18, 8, 4];
const tempFunction = bubbleSort(arr1);

console.log(tempFunction);
