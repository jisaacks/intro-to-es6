let numbers = [1, 2, 3];

let odds = numbers.map( n => {
  let even = n + n;
  let odd  = even - 1;
  return odd;
} );

console.log(odds);
