// Custom forEach loop

// lower Answers
Array.prototype.customForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

const arr = ['A', 'B', 'C', 'D'];

arr.customForEach((index, value, arr) => {
    console.log(index, value, arr);
});

// Output:
// A 0 [ 'A', 'B', 'C', 'D' ]
// B 1 [ 'A', 'B', 'C', 'D' ]
// C 2 [ 'A', 'B', 'C', 'D' ]
// D 3 [ 'A', 'B', 'C', 'D' ]

// Higher Answers
Array.prototype.forEachTwo = function (callback, thisContext) {
    if (typeof callback !== 'function') {
        throw `Not a function`;
    }
    const length = this.length;
    let i = 0;
    while (i < length) {
        if (this.hasOwnProperty) {
            callback.call(thisContext, this[i], i, this);
        }
        i++;
    }
};
