// Polyfill : forEach(),
Array.prototype.customForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
        // value, index, array
    }
};

// Polyfill : map(),
Array.prototype.customMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// Polyfill : filter(),
Array.prototype.customFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// Polyfill : reduce(),
Array.prototype.customReduce = function (callback, initialValue) {
    let acc = initialValue === undefined ? this[0] : initialValue;
    const startIndex = initialValue === undefined ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }

    return acc;
};

// Custom Promise Implementation:

function customPromise(executor) {
    let state = 'pending';
    let value;
    let handlers = [];
    function resolve(newValue) {
        if (state === 'pending') {
            state = 'fulfilled';
            value = newValue;
            handlers.forEach((h) => h.onFulfilled(value));
        }
    }
    function reject(reason) {
        if (state === 'pending') {
            state = 'rejected';
            value = reason;
            handlers.forEach((h) => h.onRejected(value));
        }
    }
    function then(onFulfilled, onRejected) {
        return customPromise((resolve, reject) => {
            if (state === 'fulfilled') {
                resolve(onFulfilled(value));
            } else if (state === 'rejected') {
                reject(onRejected(value));
            } else {
                handlers.push({ onFulfilled, onRejected });
            }
        });
    }
    executor(resolve, reject);
}
const myPromise = customPromise((res, rej) => {
    setTimeout(() => {
        res('Custom Promise Resolve');
        rej('Custom Promise Rejected !');
    }, 1000);
});

myPromise.then((result) => console.log(result));
