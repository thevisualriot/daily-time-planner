# Daily Time Planner

Welcome to my simple calendar app that allows users to input and save tasks for different hours of the day. The app utilizes HTML, CSS, and JavaScript, along with the [dayjs](https://day.js.org/) library for date and time manipulation.

## 🚀 Live Version

Experience the live version of the Daily Time Planner Application [HERE](https://thevisualriot.github.io/coding-quiz/)

![Interface of the Daily Time Planner](./assets/app%20interface.gif)


## 💻 Features

- **Current Date Display:** The app displays the current date at the top of the page.

- **Timeblocks:** Tasks are organized into timeblocks corresponding to different hours of the day. Each timeblock has an input field where users can enter their tasks.

- **Styling based on Time:** Timeblocks are styled differently based on whether the time is in the past, present, or future. Past timeblocks are grayed out, the present timeblock is highlighted, and future timeblocks have a different color.

- **Save Button:** Each timeblock has a "Save" button that allows users to save their task for that specific hour.

- **Local Storage:** Tasks are saved to local storage, allowing them to persist even when the page is refreshed.

## 📐 Code Elements

- **Variables:** Definitions for various DOM elements and variables used throughout the script.

- **Timeblocks Setup:** Iterates through timeblocks, retrieves tasks from local storage, and updates the UI accordingly.

- **Save Button Event:** Handles the click event on the "Save" button. Retrieves input values and saves tasks to local storage.

- **Functions:**
  - `saveToLocalStorage`: Checks for duplicates and updates existing tasks or adds new tasks to local storage.
  - `updateTasks`: Retrieves tasks from local storage and updates the `tasks` array.

## 📜 License
This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)
