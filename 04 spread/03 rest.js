function getNames() {
  return 'A B C D E F'.split(' ');
}

let [first, second, third, ...remaining] = getNames();

console.log(remaining);
