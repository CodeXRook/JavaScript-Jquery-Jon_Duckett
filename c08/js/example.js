$(function(){             // When the DOM is ready
    
  var times;              // Declare global variable
  $.ajax({
    beforeSend: function(xhr) {         // Before requesting data
        if (xhr.overrideMimeType) {                 // If supported
            xhr.overrideMimeType("application/json"); // set MIME to prevent errors
        }
      }
    });

  // FUNCTION THAT COLLECTS DATA FROM THE JSON FILE
  function loadTimetable(){          // Declare function
    $.getJSON('data/example.json')              // Try to collect JSON data
    .done( function(data){                      // If successful
      times = data;                             // Store it in a variable
    }).fail( function() {                       // If a problem: show message
        $('#event').html('Sorry! We could not load the timetable at the moment');
    });
 }
 loadTimetable();                              // Call the function

 // CLICK ON THE EVENT TO LOAD A TIMETABLE 
 $('#content').on('click', '#event a', function(e) {  // User clicks on event

    e.preventDefault();                                // Prevent loading page
    var loc = this.id.toUpperCase();                   // Get value of id attr

    var newContent = '';                               // Build up timetable by
    for (var i = 0; i < times[loc].length; i++) {      // looping through events
        newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
        newContent += '<a href="descriptions.html#';
  }
}