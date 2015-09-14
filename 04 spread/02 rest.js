function sum (...vals) {
  return vals.reduce( (a, b) => a + b );
}

console.log( sum(1, 2, 3) );
