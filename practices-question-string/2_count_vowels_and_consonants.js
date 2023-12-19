// count char

let inputString = 'Hello, World!';

function vowelsCount(str) {
    let vowelCount = 0;
    let consonantCount = 0;
    for (let char of str) {
        'aeiou'.includes(char) ? vowelCount++ : consonantCount++;
    }
    return { vowel: vowelCount, consonant: consonantCount };
}

