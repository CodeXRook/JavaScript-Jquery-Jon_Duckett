function getTarget(e) {                      // Declare function
    if (!e) {                                 // If there is no event object
        e = window.event;                     // Use old IE event object
    }
    return e.target || e.srcElement;          // Get the target of event
}

function itemDone(e) {                           // Declare function
    // Remove item from the list
    var target, elParent, elGrandparent;         // Declare variables 
    target = getTarget(e);                      // Get the item clicked link
  
    if(target.nodeName.toLowerCase() == "a" ) { // If user clicked on an a element
      elListItem = target.parentNode;              // Get its li element   
      elList = elListItem.parentNode;       
    }
}