import fs from 'fs';
import path from 'path';
import run from './runner.js';
// import awaitEach from './await_each.js'
import awaitEach from 'await-each'

let dirs = [
  '01 variables',
  '02 templates',
  '03 arrow functions',
  '04 spread',
  '05 destructuring',
  '06 default params',
  '07 modules',
  '08 objects',
  '09 promises',
  '10 generators'];

function runAll() {
  let start = new Date().getTime();
  
  // Wait for each directory to complete
  // before starting the next
  awaitEach(dirs, (dir) => {
    let scripts = fs.readdirSync(path.resolve(dir));
    
    // Wait for each script to complete
    // (may be using promises) before
    // starting the next script.
    return awaitEach(scripts, (script) => {
      return run(path.join(dir, script));
    });
  
  }).then(function(){
    
    let time = String(new Date().getTime() - start);
    console.log('Finished all in'.blue, `${time}ms`.bold.yellow);
  });
}

if (process.argv[2]) {
  run(process.argv[2]);
} else {
  // No script specified, run all.
  runAll();
}
