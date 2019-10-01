var noteInput, noteName, textEntered, target;        // Declare variables

noteName = document.getElementById('noteName');      // Element that holds note
noteInput  = document.getElementById('noteInput');   // Input for writing the note

function writeLabel(e) {                             // Declare function
    if (!e) {                                        // If event object not present
     e = window.event;                               // Use IE5-8 fallback
    }
    target = e.target || e.srcElement;   
}
