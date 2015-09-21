function foo({foo:bar = "baz"} = {foo: "bar"}, {bar: {baz}} = {bar:{baz: "none"}}) {
  return bar + baz;
}

console.log(foo());
