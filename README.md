# Project Overview

This project is a simple command-line task manager where users can add, view, and complete tasks. The application stores tasks in an array of objects, gives users options through prompts, and uses array iteration and array methods to handle interactions with tasks.

![A simple CLI task manager application.](img/task-manager-screenshot.png)

**Table of Contents**
- [Application Investigation](#application-investigation)
  - [Data Types \& Data Structures](#data-types--data-structures)
  - [Variables](#variables)
  - [Data Manipulation](#data-manipulation)
  - [Conditional Logic](#conditional-logic)
  - [Functions \& Modularity](#functions--modularity)
  - [Looping \& Iteration](#looping--iteration)
  - [User Interface](#user-interface)
  - [Error Handling and Debugging](#error-handling-and-debugging)
  - [Code Style](#code-style)
- [Extension Opportunities](#extension-opportunities)
  - [Tips](#tips)

## Application Investigation

### Data Types & Data Structures

Whether you are designing a new application or learning about an existing one, we always start by asking _how is the data structured_?

After all, most software is really just a tool for manipulating data. By first defining the type and structure of the data, we are better able to design how the application uses and manipulates it.

**Investigation Questions:** 

* What are the benefits of using the chosen data types and are there any tradeoffs or constraints that we have to consider?
* How does the choice of data structure (array of objects) affect how we can access and modify the data?

**My Notes:**

* ...
* ...
* ...

### Variables

Clearly written code makes it easier for other programmers to understand your logic. Clear naming of variables, functions, parameters, and object properties is essential to making sure that your logic is easy to comprehend.

We should also distinguish **persistent variables** from **temporary variables**.
* Persistent Variables — variables that last throughout the lifetime of the application. Most often, this is the data that the user is going to view and manipulate as they use the application.
* Temporary Variables — variables that are used for performing an in-the-moment calculation but that will be thrown away once the calculation has been completed. Often, users don't see this data.

**Investigation Questions:**

* Find the variables, functions, parameters, and object property names in the application. Do they clearly describe the content they hold / the functionality they perform? What patterns do you see in naming?
* What data persists as long as the application is running versus what data is only used temporarily? How does the persistence of data influence where we declare our variables?

**My Notes:**

* ...
* ...
* ...

### Data Manipulation

Data manipulation is what computers were designed for. They are able to perform computations and manipulations at a speed that is impossible for humans to match.

**Investigation Questions:**

* How is the data manipulated? Where do you see string and array methods used?
* Where do you see arrays and objects being accessed with bracket/dot notation?
* Where do you see data being transformed?
* Which operations modify the original data (mutate) vs. create new data? Why is this distinction important?

**My Notes:**

* ...
* ...
* ...

### Conditional Logic

Would you define "artificial intelligence" as the ability for a computer to make an informed decision? If so, then conditional logic is the simplest form of artificial intelligence: given the current conditions of the program, conditional statements enable a program to determine which step to take next.

**Investigation Questions:**

* What decisions is our application able to make through conditional statements?
* When does our application use guard clauses to simplify logic?
* What boolean expressions are being evaluated?
* How do we handle edge cases (like empty arrays or invalid user input)?

**My Notes:**

* ...
* ...
* ...

### Functions & Modularity

Functions are the building blocks of reusable code. They allow us to break down complex problems into smaller, manageable pieces and avoid repeating the same code multiple times. Good function design and modular organization make code easier to understand, test, and maintain.

**Investigation Questions:**

* What are the modules in this application and how would you describe the separate concerns of each module?
* What about the functions? How do functions communicate with each other?
* What are the inputs and outputs of each function?
* How does this separation of concerns make the code easier to understand and maintain?

**My Notes:**

* ...
* ...
* ...

### Looping & Iteration

Loops take repetitive tasks and boil them down to a process that can be repeated without having to type the same code multiple times. Choosing the right type of loop and ensuring it terminates properly are crucial skills for any programmer.

**Investigation Questions:**

* Where are loops used in the application?
* Are there places where we could use a `for` loop instead of a `while` loop, or vice-versa? Why or why not?
* How do we ensure our loops will eventually terminate? What would happen if we forgot to update the loop condition?

**My Notes:**

* ...
* ...
* ...

### User Interface

The user interface is how humans interact with our programs. Even in a simple command-line application, thoughtful design choices can make the difference between a frustrating or confusing experience and one that feels intuitive and pleasant to use.

**Investigation Questions:**

* How would you rate the user experience?
* What choices are made to enhance the user experience?
* How would you improve it given the limited capabilities of a Command-Line Interface (CLI)?

**My Notes:**

* ...
* ...
* ...

### Error Handling and Debugging

Real-world applications must handle unexpected situations gracefully. Understanding how to anticipate, catch, and respond to errors is essential for building robust software. Debugging skills help us identify and fix issues when things don't work as expected.

**Investigation Questions:**

* What happens when the user enters invalid input (like letters when numbers are expected)?
* How does the application handle edge cases like trying to complete a task that doesn't exist?
* What debugging techniques could you use to understand what's happening when the program doesn't work as expected?

**My Notes:**

* ...
* ...
* ...

### Code Style

Code style encompasses the conventions and formatting choices that make code readable and maintainable. While the computer doesn't care about indentation, spacing, or naming conventions, these elements are crucial for human developers who need to read, understand, and modify the code. Consistent code style makes collaboration easier and reduces the cognitive load when working with code.

**Investigation Questions:**

* How is the code formatted and indented? What patterns do you notice in spacing and organization?
* How are imports, exports, functions and code blocks organized? Is there a logical and consistent flow that makes the code easy to follow?
* Do comments improve the readability of the codebase without explaining things that are obvious?

**My Notes:**

* ...
* ...
* ...

## Extension Opportunities

Now that the core Task Manager app is complete, it’s time to add new features! Pick at least one feature to implement. If you finish quickly, try more than one!

* **Toggle Complete**: Right now, you can only mark a task as complete. Refactor the "Complete Task" menu option such that the user can toggle a task between complete and incomplete.

* **Delete Task**: Add a menu option to remove a single task from the list.

* **Show Completed Tasks**: Add a menu option to display only tasks that are completed.

* **Show Incomplete Tasks**: Add a menu option to display only tasks that are not completed.

* **Mark All as Completed**: Add a menu option that marks every task as completed.

* **Show Task Stats**: Add a message to the the `viewTasks` function that shows the user how many tasks are complete vs. incomplete.
  
* **Data Persistence**: Look into the `JSON.stringify` and `JSON.parse()` functions as well as the `fs.writeFileSync()` function to figure out how to store the tasks in a `.json` file whenever the user exits and then retrieve those tasks when they start up again.

### Tips

- Add a new menu option for each feature you implement.
- Don’t delete old functionality — just extend your app.
- Test your feature with at least 3–4 tasks to make sure it works.
