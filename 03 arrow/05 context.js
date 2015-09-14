let numbers = [1, 2, 3]
let obj = {};

obj.unbound = function() {
  let that = this;
  numbers.forEach(function(n) {
    console.log('unbound:', this === that);
  });
};

obj.bound = function() {
  let that = this;
  numbers.forEach(n => {
    console.log('bound:', this === that);
  });
};

obj.unbound();
obj.bound();
