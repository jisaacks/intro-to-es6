let runner = function(gen) {
  return new Promise((resolve, reject) => {
    let run = (prev => {
      let {value, done} = gen.next(prev);
      
      if (done) {
        resolve(value);
      } else if (value instanceof Promise) {
        value.then(run, reject);
      } else {
        run(value);
      }
    });
    run();
  });
}

export default runner;
