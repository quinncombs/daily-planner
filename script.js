//Defined variables
var eventText;
var eventTime;

  //Add code to display the current date in the header of the page.
var currentDate = dayjs().format("LLLL")
  $("#currentDate").text(currentDate);

$(document).ready(function() {
  colorChange();
  saveText();

  });

// colors will change according to the time
  function colorChange () {
    
    var currentDay = dayjs();
    console.log("Current Time" + currentDay);
  

  //Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour.
    $(".input").each(function() {
      var scheduleTime = parseInt($(this).attr("id"));
      console.log(scheduleTime);

      if (currentDay > scheduleTime) {
          //add or remove classes to apply styles
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");

      } else if (currentDay < scheduleTime) {

          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");

      } else {
          $(this).removeClass("future");
          $(this).removeClass("past");
          $(this).addClass("present");

      }
    })
};
  
  // W3Schools: .val or value property sets or returns the value attribute of a text field. 
  // Save button functionality, locally save
$(".saveBtn").click(function() {
  eventText = $(this).siblings(".input").val();
  console.log(eventText);
  eventTime = $(this).siblings(".hour").text();
  console.log(eventTime);
  localStorage.setItem(eventTime, JSON.stringify(eventText));

  colorChange ();
  saveText ();
  
});

function saveText() {   

  var saveEventText9 = JSON.parse(localStorage.getItem("9:00AM"));
  $("#9").val("");
  $("#9").val(saveEventText9);
  
  var saveEventText10 = JSON.parse(localStorage.getItem("10:00AM"));
  $("#10").val("");
  $("#10").val(saveEventText10);
  
  var saveEventText11 = JSON.parse(localStorage.getItem("11:00AM"));
  $("#11").val("");
  $("#11").val(saveEventText11);
  
  var saveEventText12 = JSON.parse(localStorage.getItem("12:00PM"));
  $("#12").val("");
  $("#12").val(saveEventText12);
  
  var saveEventText1 = JSON.parse(localStorage.getItem("1:00PM"));
  $("#13").val("");
  $("#13").val(saveEventText1);

  var saveEventText2 = JSON.parse(localStorage.getItem("2:00PM"));
  $("#14").val("");
  $("#14").val(saveEventText2);

  var saveEventText3 = JSON.parse(localStorage.getItem("3:00PM"));
  $("#15").val("");
  $("#15").val(saveEventText3);

  var saveEventText4 = JSON.parse(localStorage.getItem("4:00PM"));
  $("#16").val("");
  $("#16").val(saveEventText4);

  var saveEventText5 = JSON.parse(localStorage.getItem("5:00PM"));
  $("#17").val("");
  $("#17").val(saveEventText5);

};