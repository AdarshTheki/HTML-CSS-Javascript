// Find the Longest Word

let inputString = 'The quick brown fox jumped over the lazy dog';

function findLongestWord(str) {
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

