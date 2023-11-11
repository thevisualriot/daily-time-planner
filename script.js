/* CURRENT DATE */
var currentDay = dayjs().format('dddd, MMMM D, YYYY');
var currentDayEl = $('#currentDay');
var currentTime = parseInt(dayjs().format('HH'));
currentTime = 13;
var currentTaskCell;
var inputTask;
var task = {
    id: '',
    content: '',
}
var  tasks = [];
var savedTasks;


if (localStorage !== null) {
    savedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (savedTasks !== null) {
        tasks = savedTasks;
    } else {
        tasks = [];
    }
}

currentDayEl.text(currentDay);


/* TIMEBLOCKS */
var taskCell = $('.task');
var hourCell = $('.hour');
var content;
var taskParentID;
var storedInput;
var cellID;


for (i=0; i<hourCell.length; i++){
    var tableTime = parseInt(hourCell[i].firstChild.data);

    taskParentID = taskCell[i].parentElement.id;
    currentTaskCell = taskCell[i];
    cellID = currentTaskCell.parentElement.id;

    if (localStorage){
        storedInput = tasks.find(function(task) {
            return task.id == cellID;
        });

        if(storedInput) {
            currentTaskCell.value = storedInput.content;
        }

    } else {
        currentTaskCell.value = '';
    }


    if (tableTime === currentTime) {
        currentTaskCell.setAttribute('class', 'col-8 cell task present');
        currentTaskCell.disabled = true;

    } else if (tableTime < currentTime) {
        currentTaskCell.setAttribute('class', 'col-8 cell task past');
        currentTaskCell.disabled = true;

    } else {
        currentTaskCell.setAttribute('class', 'col-8 cell task future');
        inputTask = taskCell.val()
    }
    
}





/* ------------------ BUTTON ----------------------- */
var buttonEl = $('.saveBtn');
var newTask;

buttonEl.on('click', function(e){
    
    if (localStorage) {
        savedTasks = JSON.parse(localStorage.getItem('tasks'));
        tasks = savedTasks || [];
    }


    // get input from the same row of the clicked button
    var buttonParent = e.target.parentElement;
    buttonParent = e.target.parentElement;
    inputTaskCell = buttonParent.querySelector('input');
    inputTask = inputTaskCell.value;

    // add input to tasks
    if (inputTask !== '') {
        newTask = Object.create(task);
        newTask.id = buttonParent.id;
        newTask.content = inputTask;
        saveToLocalStorage(newTask);
    } 
})


function saveToLocalStorage(object){
    tasks.push(object);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateValueFromLocalStorage(){
    if (localStorage != null){
        savedTasks = JSON.parse(localStorage.getItem('tasks'));
    } else {
        return;
    }
}

