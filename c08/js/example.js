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
  function loadTimetable(){
      
  }
}