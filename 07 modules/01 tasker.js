import EventEmitter from 'events';

var ee = new EventEmitter();

ee.on('task', function(task){
  console.log('task recieved:', task);
});

ee.add = function(data) {
  this.emit('task', data.task);
}

export default ee;
