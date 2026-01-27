function recursiveFibonaaci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonaaci(n - 1) + recursiveFibonaaci(n - 2);
}
console.log(recursiveFibonaaci(6));
// Output : 8

// function fibonacci(n) {
//   let fib = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// console.log(fibonacci(7));
