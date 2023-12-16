// function isEvenOdd(x) {
//   try {
//     if (x % 2 == 0) {
//         return "Even";
//       } else {
//         return "Odd";
//       }
//   } catch (error) {
//     console.log("Handle");
//   } finally {
//     console.log("Finally");
//   }
// }

// console = {lo: function f(A) {}}
// console.log(isEvenOdd(12));
// isEvenOdd(11);
// console.log(`stop`);

function isPrime(x) {
  try {
    console.log('Starting');
    for (let i = 2; i < x; i++) {
      if (x % i == 0) {
        return 'Not Prime';
      }
    }
    return 'Prime';
  } catch (err) {
    console.log('handle', err);
  } finally {
    console.log('End');
  }
}
isPrime(11);
