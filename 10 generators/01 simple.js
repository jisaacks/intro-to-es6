function *count (initial) {
  let responseA = yield initial + 1;
  let responseB = yield responseA + 2;
  return responseB + 3;
}

let counter = count(100);
let value;

for(;;) {
  let answer = counter.next(value);
  
  value = answer.value;
  
  console.log('value', value);
  
  if (answer.done) {
    break;
  }
}
