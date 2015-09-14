import tasker from './01 tasker';

export function setTask(task) {
  tasker.add({task: task});
}
