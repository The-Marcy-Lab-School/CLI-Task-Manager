// This file will handle the tasks-related functionality of the application.

const tasks = [];

const addTask = (description) => {
  const newTask = {
    description,
    isComplete: false
  };
  tasks.push(newTask);
  console.log(`Task "${newTask.description}" added!`);
}

const viewTasks = () => {
  if (tasks.length === 0) {
    console.log("No tasks yet! Add one to get started.");
    return;
  }

  console.log("Your Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.isComplete ? 'x' : ' '}] ${task.description}`);
  });
  console.log();
}

const completeTask = (taskIndex) => {
  const task = tasks[taskIndex];

  if (task === undefined) {
    console.log("Invalid task number.");
    return;
  }

  task.isComplete = true;
  console.log(`Task "${task.description}" marked as completed!`);
}

const clearTasks = () => {
  tasks.length = 0;
  console.log("All tasks cleared!");
}

module.exports = { addTask, viewTasks, completeTask, clearTasks };
