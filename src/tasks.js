// This file will handle the tasks-related functionality of the application.

// Tasks are stored in an array of objects. We've provided some sample tasks for you to get started.
const tasks = [
  {
    description: 'Complete the CLI Task Manager project',
    isComplete: true,
  },
  {
    description: 'Answer investigation questions',
    isComplete: false,
  },
];

const addTask = (description) => {
  if (!description) {
    console.log('\nNo description provided.');
    return;
  }

  // We could also have just written this code that avoids creating a new variable:
  const newTask = {
    description,
    isComplete: false,
  };
  tasks.push(newTask);
  console.log(`\nTask "${newTask.description}" added!`);
};

const completeTask = (taskIndex) => {
  const task = tasks[taskIndex];

  if (!task) {
    console.log('\nInvalid task number.');
    return;
  }

  task.isComplete = true;
  console.log(`\nTask "${task.description}" marked as completed!`);
};

const viewTasks = () => {
  if (tasks.length === 0) {
    console.log('\nNo tasks yet! Add one to get started.');
    return;
  }

  console.log('\nYour Tasks:');
  tasks.forEach((task, index) => {
    // Prints out the task list like this: 
    // 1. [x] Complete the CLI Task Manager project
    // 2. [ ] Answer investigation questions
    console.log(`${index + 1}. [${task.isComplete ? 'x' : ' '}] ${task.description}`);
  });
  console.log();
};

const clearTasks = () => {
  tasks.length = 0;
  console.log('\nAll tasks cleared!');
};

module.exports = { addTask, viewTasks, completeTask, clearTasks };
