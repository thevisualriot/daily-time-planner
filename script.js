/* CURRENT DATE */
var currentDay = dayjs().format('dddd, MMMM D, YYYY');
var currentDayEl = $('#currentDay');
var currentTime = parseInt(dayjs().format('HH'));
currentTime = 12;

currentDayEl.text(currentDay);

/* TIMEBLOCKS */
var taskCell = $('.task');
// console.log(taskCell);
var hourCell = $('.hour');
// console.log(hourCell);

console.log(taskCell[2])

for (i=0; i<hourCell.length; i++){
    var tableTime = parseInt(hourCell[i].firstChild.data);
    var currentTaskCell;

    if (tableTime === currentTime) {
        console.log(tableTime + " it's now")
        currentTaskCell = taskCell[i];
        currentTaskCell.setAttribute('class', 'col-8 cell task present');
        currentTaskCell.disabled = true;
    } else if (tableTime < currentTime) {
        console.log(tableTime + " it's in the past")
        currentTaskCell = taskCell[i];
        currentTaskCell.setAttribute('class', 'col-8 cell task past');
        currentTaskCell.disabled = true;
    } else {
        console.log(tableTime + " it's in the future")
        currentTaskCell = taskCell[i];
        currentTaskCell.setAttribute('class', 'col-8 cell task future');
    }
    
}


