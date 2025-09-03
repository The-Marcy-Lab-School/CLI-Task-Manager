const { showMenu } = require('./menu.js');

// This is the main entry point for the application.
function startApp() {
  console.log("Welcome to CLI Task Manager!\n");
  showMenu();
  console.log("Goodbye!");
}

startApp();
