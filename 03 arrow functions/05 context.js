let numbers = [1,2];
let obj = {};

obj.unbound = function() {
  let that = this;
  numbers.forEach(function(n) {
    console.log('unbound:', n, this === that);
  });
};

obj.bound = function() {
  let that = this;
  numbers.forEach(n => {
    console.log('bound:', n, this === that);
  });
};

obj.unbound();
obj.bound();
