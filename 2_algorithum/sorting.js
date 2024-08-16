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

function insertionSort(arr = []) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (arr[j] > key && j >= 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Given test inputs
const arr1 = [6, 1, 2, 3, 13, 18, 8, 4];
const arr2 = [64, 25, 12, 22, 11];
const tempFunction = insertionSort(arr2);

console.log(tempFunction);
