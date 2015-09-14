function *fib () {
  var a = 1, b = 1;
  for(;;) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var f = fib();

let nullArr = Array.apply(null, Array(8));

var values = nullArr.map(() => f.next().value);

console.log(values);
