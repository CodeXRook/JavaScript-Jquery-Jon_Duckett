function checkUsername(){  // Declare function
    var username  = el.value;  // Store username in variable
    if(username.length < 5){   // If username < 5 characters
        elMsg.className = 'warning';   // Change class on message
        elMsg.textContent = 'Not long enough, yet...';// Update message
    } else {                                                    // Otherwise
        elMsg.textContent = '';                                // Clear the message
    }
}

function  tipUsername(){                                // Declare function
    elMsg.className = 'tip';                            // Change class for message
    elMsg.innerHTML = 'Username must be at least 5 characters'; // Add message
}

var el = document.getElementById('username');     // Username input
var elMsg = document.getElementById('feedback')   // Element to hold message

// When the username input gains / loses focus call functions above:
el.addEventListener