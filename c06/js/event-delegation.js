function getTarget(e) {                      // Declare function
    if (!e) {                                 // If there is no event object
        e = window.event;                     // Use old IE event object
    }
    return e.target || e.srcElement;          // Get the target of event
}

function itemDone(e) {
    
}