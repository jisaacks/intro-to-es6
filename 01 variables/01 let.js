var foo = 1;

if (foo) {
  let bar = 1;

  console.log("inside block: foo:", foo);
  console.log("inside block: bar:", bar);
}

console.log("outside block: foo:", foo);
console.log("outside block: bar:", bar);
