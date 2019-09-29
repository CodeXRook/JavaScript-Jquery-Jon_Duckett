function checkLength(e, minLength)    // Declare function
var el, elMsg;                         // Declare variables
if (!e){                                // If event object doesn't exist
e = window.event;                         // Use IE fallback
}
el = e.target || e.srcElement;            // Get target of event
elMsg = el.nextSibling; 