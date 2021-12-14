// current day is displayed at top of the calendar
var today = moment().format('LLLL');
$("#currentDay").html(today);

// color coded time blocks
function background () {
    //curent number of hours
    var currentHour = moment().hours();
    //loop over timeblocks
    $(".time-block").each(function () {
        var divTimeId = parseInt($(this).attr("id"));
        //to check the time and add the classes for background colors
        if (divTimeId < currentHour) {
            $(this).addClass("past");
        } else if (divTimeId === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
 }
 
 background ();


// save button saves to local storage
$(document).ready(function () {
    //save button click listener
    $(".saveBtn").on("click", function () {
        //get values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //save text in local storage
        localStorage.setItem(time, text);
    })  
}); 

// Get items from local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

