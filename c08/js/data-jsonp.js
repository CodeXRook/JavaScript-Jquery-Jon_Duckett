function showEvents(data){       // Callback when JSON loads
    var newContent = '';         // Variable to hold HTML

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    for (var i = 0; i < data.events.length; i++) {    // Loop through object
        newContent += '<div class="event">';
        newContent += '<img src="' + data.events[i].map + '" ';
        newContent += '<p><b>' + data.events[i].location + '</b><br>';
        newContent += data.events[i].date + '</p>';
        newContent += '</div>';
}