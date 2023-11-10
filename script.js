/* CURRENT DATE */
var currentDay = dayjs().format('dddd, MMMM D, YYYY');
var currentDayEl = $('#currentDay');
var currentTime = parseInt(dayjs().format('HH'));
currentTime = 12;
var currentTaskCell;
var inputTask;
var  tasks = [];

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
        localStorage.setItem("tasks", inputTask);
    }
    
}

/* BUTTON */
var buttonEl = $('.saveBtn');

buttonEl.on('click', function(e){
    var clickedButton = e.target;
    console.log(clickedButton.parentElement.id);
})