// This file will display the menu and handle the user's input.

const prompt = require('prompt-sync')({ sigint: true });
const { viewTasks, addTask, completeTask, clearTasks } = require('./tasks.js');

const showMenu = () => {
  let isRunning = true;

  while (isRunning) {
    console.log('Menu:');
    console.log('1. Add Task');
    console.log('2. Complete Task');
    console.log('3. Clear Tasks');
    console.log('4. Exit\n');

    viewTasks();

    const menuChoice = prompt('Choose an option (1-4): ').trim();
    if (menuChoice === '1') {
      const description = prompt('Enter task description: ');
      addTask(description);
    } else if (menuChoice === '2') {
      const taskChoice = prompt('Enter task number to complete: ')
      const taskIndex = Number(taskChoice) - 1;
      completeTask(taskIndex);
    } else if (menuChoice === '3') {
      clearTasks();
    } else if (menuChoice === '4') {
      isRunning = false;
    } else {
      console.log('Invalid option, try again.');
    }

    prompt('\nPress Enter to continue...');
    console.clear();
  }
};

module.exports = { showMenu };
