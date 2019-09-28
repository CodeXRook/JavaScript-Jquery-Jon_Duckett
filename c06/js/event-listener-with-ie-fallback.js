var elUsername = document.getElementById('username'); // Get username input
var elMsg = document.getElementById('feedback'); // Get feedback element

function checkUsername(minLength) {              // Declare funcion
    if (elUsername.nodeValue.length < minLength) { // If username too short
        //Set mesage
        elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
    }else {                                        // Otherwise
        elMsg.innerHTML = '';                       // Clear message
    }
}
if(elUsername.addEventListener) {                  // If event listener supported
    elUsername.addEventListener('blur', function(){// When username loses focus

    }

}