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
}