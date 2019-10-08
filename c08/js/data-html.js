var xhr = new XMLHttpRequest();   // Create XMLHttpRequest object

xhr.onload = function() {          // When response has loaded
    // The following conditional check will not work locally - only on a server
    if(xhr.status === 200) 
}
