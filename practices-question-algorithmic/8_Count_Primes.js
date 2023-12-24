// Count Primes:
// Write a function to count the number of prime numbers less than a given number.

function countPrime(num) {
    if (num <= 1) {
        return 0;
    }
    const isPrime = new Array(num).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 or 1 is not prime

    for (let i = 2; i * 1 < num; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < num; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return isPrime.filter((value) => value).length;
}

console.log(countPrime(10)); // 4
