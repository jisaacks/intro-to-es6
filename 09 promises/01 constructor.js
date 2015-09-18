import {wait} from '../helpers.js';
let done = wait();

new Promise(function(resolve, reject){
  setTimeout(function() {
    [resolve, reject][Math.round(Math.random())]();
  }, 100);

}).then(function(){
  console.log('Promise completed!');
  done();

}).catch(function(){
  console.log('Promise failed!');
  done();
});
