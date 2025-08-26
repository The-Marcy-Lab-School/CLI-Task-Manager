const { showMenu } = require('./menu.js');

function startApp() {
  console.log("Welcome to CLI Task Manager!\n");
  showMenu();
  console.log("Goodbye!");
}

startApp();
