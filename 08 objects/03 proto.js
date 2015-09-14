let base = {
  start() {
    console.log(this.toString() + ' has started.')
  },
  end() {
    console.log(this.toString() + ' has ended.')
  }
};

let instance = {
  __proto__: base,

  toString() {
    return 'instance';
  }
};

instance.start();
instance.end();
