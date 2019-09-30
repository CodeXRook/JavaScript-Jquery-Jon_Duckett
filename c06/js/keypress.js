var el;                               // Declare variables

function charCount(e){                 // Declare function
  var textEntered, charDisplay, counter, lastkey;   // Declare variables
  textEntered = document.getElementById('message').value;  // User's text
  charDisplay = document.getElementById('charactersLeft');  // Counter element
  counter  = (180 - (textEntered.length));                    // Num of chars left
  charDisplay.textContent = counter;                         // Show chars left
  lastkey = document.getElementById('lastKey');              // Get last key elem
  lastkey.textContent
}