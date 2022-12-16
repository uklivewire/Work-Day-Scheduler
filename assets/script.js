var today =  moment();

$("#currentDay").text(today.format("dddd, MMMM Do"));

// Textarea input
var input = $('#input')

$( ".saveBtn" ).on( "click", function() {
    console.log(input.val);
  });

 //load data from localStorage
 //create time slot rows
// create array of hours
//loop the array of hours to create the rows

// * Display the current day at the top of the calender when a user opens the planner.
 
// * Present timeblocks for standard business hours when the user scrolls down.
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page