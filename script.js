/* CURRENT DATE */
var currentDay = dayjs().format('dddd, MMMM D, YYYY');
var currentDayEl = $('#currentDay');

currentDayEl.text(currentDay);

/* TIMEBLOCKS */
var timeblocksEl = $('#timeblocks');

var tableRow = $('<tr>');
var tableColumn1 = $('<td>');
var tableColumn2 = $('<td colspan="5">');
var tableColumn3 = $('<td>');

tableColumn1.text('lol');
tableColumn2.text('what the');
tableColumn3.text('fuck');

var timeblock = tableRow.append(tableColumn1, tableColumn2, tableColumn3);

timeblocksEl.append(timeblock);