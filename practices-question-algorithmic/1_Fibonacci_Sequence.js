// Fibonacci Sequence

function fibonacciSequence(num) {
    let sequence = [0, 1];
    for (let i = 2; i < num; i++) {
        let nextSequence = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextSequence);
    }
    return sequence;
}
console.log(fibonacciSequence(6));
// output: [0, 1, 1, 2, 3, 5];
