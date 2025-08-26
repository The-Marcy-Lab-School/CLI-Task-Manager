const prompt = require('prompt-sync')();
const { viewTasks, addTask, completeTask, clearTasks } = require('./tasks.js');

function showMenu() {
  let isRunning = true;

  while (isRunning) {
    console.log('Menu:');
    console.log('1. Add Task');
    console.log('2. Complete Task');
    console.log('3. Clear Tasks');
    console.log('4. Exit\n');

    viewTasks();

    const menuChoice = prompt("Choose an option (1-4): ").trim();

    if (menuChoice === '1') addTask();
    else if (menuChoice === '2') completeTask();
    else if (menuChoice === '3') clearTasks();
    else if (menuChoice === '4') isRunning = false;
    else console.log("Invalid option, try again.");

    console.clear();
  }
}

module.exports = { showMenu };
