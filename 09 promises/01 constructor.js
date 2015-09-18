import {wait} from '../runner.js';

let p = new Promise(function(resolve, reject){
  
  setTimeout(function() {

    resolve();

  }, 100);

});

wait(p);

p.then(function(){
  console.log('Promise completed!');
});

p.catch(function(){
  console.log('Promise failed!');
});
