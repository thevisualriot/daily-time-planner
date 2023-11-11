/* ------------------- VARIABLES ---------------- */
var currentDayEl = $('#currentDay'); // access Current Day block
var taskCell = $('.task'); // access task cells
var hourCell = $('.hour'); // access hour cells
var buttonEl = $('.saveBtn'); // access button

var currentDay = dayjs().format('dddd, MMMM D, YYYY'); // today date
var currentTime = parseInt(dayjs().format('HH')); // what hour it is now
currentTime = 13;

// task object:
var task = {
    id: '',
    content: '',
}
var  tasks = []; // array of tasks

currentDayEl.text(currentDay); // display today's date

updateTasks();  // check if LocalStorage is not empty and update list of Tasks


/* ----------------------------- TIMEBLOCKS -------------------------------- */
/* If anything saved to local storage, display the content in the task cells */

for (i = 0; i < hourCell.length; i++){ 
    var storedInput; 
    var tableTime = parseInt(hourCell[i].firstChild.data); // store the hour as a number
    var currentTaskCell = taskCell[i]; // select one cell
    var cellID = currentTaskCell.parentElement.id; // store cell's parent ID (to store an info about hour)

    if (localStorage){                              // if localStorage is not empty
        storedInput = tasks.find(function(task) {   // in the array of tasks, find the one that has the same ID as the current cell
            return task.id == cellID;               // return true if so
        });

        if(storedInput) {
            currentTaskCell.value = storedInput.content; // display the content of the storedInput.content in the current cell
        }

    } else {
        currentTaskCell.value = ''; // if empty, show nothing in the cell
    }


    if (tableTime === currentTime) { // if it's now
        currentTaskCell.setAttribute('class', 'col-8 cell task present'); // change class to present
        currentTaskCell.disabled = true; // disable input so it's impossible to type
    } else if (tableTime < currentTime) {
        currentTaskCell.setAttribute('class', 'col-8 cell task past'); // change class to past
        currentTaskCell.disabled = true; // disable input so it's impossible to type
    } else {
        currentTaskCell.setAttribute('class', 'col-8 cell task future'); // change class to future
    }
    
}


/* ------------------------- SAVE BUTTON ---------------------------- */
/* When pressed, save the input to local storage */


buttonEl.on('click', function(e){
    
    var inputTask; // new input
    var newTask; // new task object
    
    updateTasks(); // check if LocalStorage is not empty and update list of Tasks

    // get input from the same row of the clicked button
    var buttonParent = e.target.parentElement; 
    buttonParent = e.target.parentElement;
    inputTaskCell = buttonParent.querySelector('input'); // find the input from the same row as pressed button
    inputTask = inputTaskCell.value; //update inputTask with the value

    // add input to tasks
        newTask = Object.create(task);  // create new task object
        newTask.id = buttonParent.id;
        newTask.content = inputTask;
        saveToLocalStorage(newTask);
})


function saveToLocalStorage(object){
    var duplicate = tasks.findIndex(task => task.id === object.id);

    if(duplicate !== -1) {
        tasks[duplicate].content = object.content;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        tasks.push(object);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}


function updateTasks() {
    var savedTasks;
    if (localStorage) {
        savedTasks = JSON.parse(localStorage.getItem('tasks'));
    
        if (savedTasks) {
            tasks = savedTasks;
        } else {
            tasks = [];
        }
    }
}