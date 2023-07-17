function fibonacci(n) {
  let sequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    let num = sequence[i - 1] + sequence[i - 2];
    sequence.push(num);
  }

  return sequence;
}

let seq = fibonacci(10);
console.log(seq);
