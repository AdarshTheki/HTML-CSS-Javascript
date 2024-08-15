// Find the Longest Word

let str = 'The quick brown fox jumped over the lazy dog';

function findLongestWords1() {
    const words = str.split(/\s+/);

    let longestWords = '';
    let maxLength = 0;

    for (let word of words) {
        const cleanedWord = word.replace(/[^a-zA-Z]/g, '');
        if (cleanedWord.length > maxLength) {
            longestWords = cleanedWord;
            maxLength = cleanedWord.length;
        }
    }

    return longestWords;
}

function findLongestWords2() {
    let words = str.split(' ');
    let longest = '';

    for (const i of words) {
        if (i.length > longest.length) {
            longest = i;
        }
    }

    return longest;
}

function findLongestWords3() {
    return str.split(' ').reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');
}

function findLongestWords4() {
    let words = str.split(' ');
    words.sort((a, b) => b.length - a.length);
    return words[0];
}
