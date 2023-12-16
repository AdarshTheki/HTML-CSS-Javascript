let array = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E'];

function countOccurrences(array) {
    let counts = {};
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        counts[element] = (counts[element] || 0) + 1;
    }
    return counts;
}

/* 
Output:
{
    1: 2,
    2: 2,
    3: 2,
    4: 2,
    5: 1,
};
*/