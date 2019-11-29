// Helper function to add an event listener
function addEvent (el, event, callback) 
if ('addEventListener' in el) {                  // If addEventListener works
    el.addEventListener(event, callback, false);   // Use it
} else {                                         // Otherwise