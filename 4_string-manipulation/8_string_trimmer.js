const str =
    'Hello world, How are you I am Fine!, What abbout you What cand of the value of country';

function stringSlice(sentence = '', maxLength = 10) {
    if (maxLength < sentence.length) {
        return sentence.substring(0, maxLength) + '...';
    }
    return sentence;
}

console.log(stringSlice(str, 30));
