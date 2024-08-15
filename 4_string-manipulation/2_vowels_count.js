// count char

const str = 'Hello World';
const vowels = 'aeiouAEIOU';

function vowelsCount() {
    let vowelCount = 0;
    let constantCount = 0;
    for (let char of str) {
        vowels.includes(char) ? vowelCount++ : constantCount++;
    }
    return { vowel: vowelCount, count: constantCount };
}

function vowelCountWithExpression (){
    const vowelMatch = str.match(/[aeiouAEIOU]/g)
    return vowelMatch ? vowelMatch.length : 0
} 

console.log(vowelCountWithExpression());
