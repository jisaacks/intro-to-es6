import path from 'path';
import colors from 'colors';

let waiting;

export function wait(promise) {
  waiting = promise;
}

async function runAsync(file) {
  try {
    waiting = null;
    require(file);
    if (waiting) {
      await waiting;
    }
  } catch(err) {
    console.log(err.message.red);
  }
}

export default function run (script) {
  let file = path.resolve(script);

  console.log("#".repeat(80).grey);
  console.log(">".repeat(3).grey, 'Executing:'.yellow, script.green);
  console.log('\n');

  let logEnd = function() {
    console.log('\n');
    console.log(">".repeat(3).grey, 'Done.');
    console.log("#".repeat(80).grey);
  }

  let running = runAsync(file);

  running.then(logEnd).catch(logEnd);

  return running;
}
