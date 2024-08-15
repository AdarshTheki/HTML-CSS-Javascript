// Capitalize First Letter of Each Word

function capitalizeWord(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());

    // let string = str.split(' ');
    // for (let i = 0; i < string.length; i++) {
    //     let latter = string[i].slice(0, 1).toUpperCase();
    //     string[i] = latter.concat(string[i].slice(1));
    // }
    // return string.join(' ', ',');
}

let inputs = 'capitalize the first letter of each word';
console.log(capitalizeWord(inputs));

// output: Capitalize The First Letter Of Each Word
