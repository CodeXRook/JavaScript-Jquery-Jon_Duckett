function checkUsername() { // Declar function
    var elMsg = document.getElementById('feddback'); //Get feedback element
    var elUsername = document.getElementById('username'); // Get username input
    if(elUsername.nodeValue.lenght<5) {                   // If username too short
        elMsg.textContent = 'Username must be 5 characters or more'; // Set msg
    }else {
        
    }
}