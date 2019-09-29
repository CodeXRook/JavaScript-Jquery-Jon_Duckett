function checkLength(e, minLength) {    // Declare function
var el, elMsg;                         // Declare variables
if (!e){                                // If event object doesn't exist
e = window.event;                         // Use IE fallback
}
el = e.target || e.srcElement;            // Get target of event
elMsg = el.nextSibling;                    // Get its next sibling

if (el.value.length < minLength) {          // If length is too short set msg
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
} else {                                   //Otherwise
    elMsg.innerHTML = '';                     // Clear message
  }
}

var