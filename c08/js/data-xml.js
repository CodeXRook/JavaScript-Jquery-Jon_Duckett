// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 35 if you are working locally

var xhr = new XMLHttpRequest();        // Create XMLHttpRequest object

xhr.onload = function(){           // When response has loaded
    // The following conditional check will not work locally - only on a server
    // if (xhr.status === 200) {             // If server status was ok

    // THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML
    var response = xhr.responseXML;       // Get XML from the server
    var events = response.getElementsByTagName('event'); // Find <event> elements
}
