// String Compression

function stringCompression(str) {
    let compression = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compression += str[i] + (count > 1 ? count : '');
            count = 1;
        }
    }
    return compression.length < str.length ? compression : str;
}

let originalString = 'aabcccccaaa';

console.log(stringCompression(originalString))
// output: a2bc5a3;
