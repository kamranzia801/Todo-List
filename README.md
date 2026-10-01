# Todo List

A lightweight browser-based todo application built with plain HTML, CSS, and JavaScript.

## Overview

This project is a simple task manager that lets users:

- add new todo items
- view saved items on the page
- remove completed or unwanted tasks
- keep tasks saved in the browser using `localStorage`

It is designed as a minimal frontend project for learning JavaScript DOM manipulation and browser storage.

## Features

- Add task input with validation
- Prevent empty task submission
- Prevent duplicate entries
- Display tasks dynamically in the UI
- Delete tasks from both the list and local storage
- Persist task data across page reloads

## Project Structure

- `index.html` — app layout and markup
- `style.css` — visual styles for the todo app
- `script.js` — logic for adding, removing, and storing tasks
- `README.md` — project documentation

## How It Works

1. The page loads and reads the saved todo list from `localStorage`.
2. The app renders each saved item on the page.
3. When the user types a task and clicks the add button, the value is validated.
4. Valid tasks are added to the array and stored in `localStorage`.
5. Clicking the delete button removes the task from the list and updates storage.

## Local Setup

Because this is a static front-end project, you can run it by opening the `index.html` file in a browser.

### Option 1: Open directly in browser

- open `index.html` in your browser

### Option 2: Run a local server

From the project folder, you can use a simple local server such as:

```bash
python -m http.server 8000
```

Then visit:

```bash
http://localhost:8000
```

## Notes

- The project uses browser storage, so tasks remain available after refreshes on the same browser.
- This is intentionally a simple app and does not include advanced features such as editing tasks, due dates, or categories.

## Future Improvements

Possible enhancements include:

- task completion toggling
- edit task functionality
- task filtering
- dark mode
- drag-and-drop ordering

## License

This project is provided for educational purposes and can be freely modified for learning or personal use.