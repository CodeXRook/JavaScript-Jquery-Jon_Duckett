var noteInput, noteName, textEntered, target;        // Declare variables

noteName = document.getElementById('noteName');      // Element that holds note
noteInput  = document.getElementById('noteInput');   // Input for writing the note

function writeLabel(e) {                             // Declare function
    if (!e) {                                        // If event object not present
     e = window.event;                               // Use IE5-8 fallback
    }
    target = e.target || e.srcElement;              // Get target of event
    textEntered = target.value;                     // Value of that element
    noteName.textContent = textEntered;             // Update note text
}

function recorderControls(e) {                      // Declare recorderControls()
    if(!e){
      e = window.event;                             // If event object not present
    }
    target = e.target || e.srcElement;              // Get the target element
    if (e.preventDefault) {                         // If preventDefault() supported
      e.preventDefault();                           // Stop default action
    } else {                                        // Otherwise
      e.returnValue = false;                        // IE fallback: stop default action
    }

    switch(target.getAttribute('data-state')) {      // Get the data-state attribute
      case 'record':                                 // If its value is record
        record(target);                              // Call the record() function
        break;                                       // Exit function to where called
      case 'stop':                                   // If its value is stop
        stop(target);                                // Call the stop() function
        break;                                       // Exit function to where called
         // More buttons could go here...
    }
}

function record(target) {                           // Declare function
    target.setAttribute
}