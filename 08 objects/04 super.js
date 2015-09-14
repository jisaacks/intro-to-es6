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
  },

  end() {
    super.end();
    console.log('Good bye.');
  }
};

instance.start();
instance.end();
