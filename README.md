# Todo List React App

## Overview
This is a simple Todo List application built using React. It allows users to add tasks, mark them as done, and delete them. Additionally, all tasks can be marked as done with a single button click.

## Features
- Add a new task to the list.
- Mark a single task as done.
- Mark all tasks as done.
- Delete a task from the list.
- Tasks marked as done appear with a strikethrough.

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/todo-list.git
   cd todo-list
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the application:
   ```sh
   npm start
   ```

## Code Explanation
- The application uses the `useState` hook to manage tasks.
- Tasks are stored as an array of objects with properties:
  - `task`: The task description.
  - `id`: A unique identifier (generated using `uuidv4`).
  - `isDone`: Boolean flag indicating whether the task is completed.
- Functions available:
  - `addNewTask()`: Adds a new task to the list.
  - `updateTodoValue(event)`: Updates the input field value.
  - `deleteTodo(id)`: Removes a task from the list.
  - `markAsDone(id)`: Marks an individual task as completed.
  - `markAllDone()`: Marks all tasks as completed.
- Tasks are displayed in an unordered list (`<ul>`), with buttons to delete or mark them as done.



