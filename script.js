/* CURRENT DATE */
var currentDay = dayjs().format('dddd, MMMM D, YYYY');
var currentDayEl = $('#currentDay');
var currentTime = parseInt(dayjs().format('HH'));
currentTime = 12;
var currentTaskCell;
var inputTask;
var  tasks = [
    {time: 0, content: ''},
];
var savedTasks;

savedTasks = localStorage.setItem('tasks', JSON.stringify(tasks));
if (savedTasks != null) {
    JSON.parse(localStorage.getItem('tasks'));
}

currentDayEl.text(currentDay);

localStorage.setItem('9Task', '')

/* TIMEBLOCKS */
var taskCell = $('.task');
var hourCell = $('.hour');

for (i=0; i<hourCell.length; i++){
    var tableTime = parseInt(hourCell[i].firstChild.data);
    if (tableTime === currentTime) {
        currentTaskCell = taskCell[i];
        currentTaskCell.setAttribute('class', 'col-8 cell task present');
        currentTaskCell.disabled = true;

    } else if (tableTime < currentTime) {
        currentTaskCell = taskCell[i];
        currentTaskCell.setAttribute('class', 'col-8 cell task past');
        currentTaskCell.disabled = true;
    } else {
        currentTaskCell = taskCell[i];
        currentTaskCell.setAttribute('class', 'col-8 cell task future');
        inputTask = taskCell.val()
    }
    
}

/* BUTTON */
var buttonEl = $('.saveBtn');

buttonEl.on('click', function(e){
    var buttonParent = e.target.parentElement;

    buttonParent = e.target.parentElement;
    console.log(buttonParent);

    inputTaskCell = buttonParent.querySelector('input');
    inputTask = inputTaskCell.value;
console.log('input: ' + inputTask)
})



function saveToLocalStorage(){
savedTasks = localStorage.setItem('tasks', JSON.stringify(tasks));
}