function getVowels() {
  return 'A E I O U'.split(' ');
}

let [first, second, third, ...remaining] = getVowels();

console.log(remaining);
