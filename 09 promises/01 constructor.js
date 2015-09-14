
let p = new Promise(function(resolve, reject){
  
  setTimeout(function() {

    if (Math.random() > 0.5) {
      resolve();
    } else {
      reject();
    }

  }, 100);

});

p.then(function(){
  console.log('Promise completed!');
});

p.catch(function(){
  console.log('Promise failed!');
});
