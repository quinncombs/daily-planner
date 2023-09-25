// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var eventText;
var eventTime;


  //Add code to display the current date in the header of the page.
  var time = dayjs().format('hh:mm:ss');
  $("#currentDay").text(time);

$(document).ready(function() {
  colorChange();
  // changeText();


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO:  HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  
  });

// colors will change according to the time
  function colorChange () {
    
    var currentDay = time;
    console.log("Current Time" + currentDay);
  

  //Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour.
    $(".input").each(function () {
      var scheduleTime = parseInt($(this).attr("id"));
      console.log(scheduleTime);

      if (currentDay > scheduleTime) {

          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass(".past");

      } else if (currentDay < scheduleTime) {

          $(this).removeClass("present");
          $(this).removeClass(".past");
          $(this).addClass("future");

      } else {
          $(this).removeClass("future");
          $(this).removeClass(".past");
          $(this).addClass("present");

      }
    })
};
  
  // save button functionality, locally save
$(".saveBtn").click(function() {
  eventText = $(this).siblings(".input").val();
  console.log(eventText);
  eventTime = $(this).siblings(".hour").text();
  console.log(eventTime);
  localStorage.setItem(eventTime, JSON.stringify(eventText));

  colorChange ();
  renderText ();
  
});