function checkUsername(){  // Declare function
    var username  = el.value;  // Store username in variable
    if(username.length < 5){   // If username < 5 characters
        elMsg.className = 'warning'; 

    }
}