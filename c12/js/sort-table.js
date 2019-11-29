var compare = {                             // Declare compare object
    name: function(a, b) {                  // Add a method called name
        a = a.replace(/^the /i, '');        // Remove The from start of parameter
        b = b.replace(/^the /i, '');          // Remove The from start of parameter

        if (a < b) {                          // If value a is less than value b
            return -1;                          // Return -1
        } else {                              // Otherwise
          return a > b ? 1 : 0;               // If a is greater than b return 1 OR
        }                                     // if they are the same return 0
    },
    duration: function(a, b) {              // Add a method called duration
        a = a.split(':');                     // Split the time at the colon
        b = b.split(':');                     // Split the time at the colon

        a = Number(a[0]) * 60 + Number(a[1]); // Convert the time to seconds
        b = Number(b[0]) * 60 + Number(b[1]); // Convert the time to seconds

        return a - b;                         // Return a minus b
},
  date: function(a, b) {                  // Add a method called date
    a = new Date(a);                      // New Date object to hold the date
    b = new Date(b);                      // New Date object to hold the date

    return a - b;                         // Return a minus b
  }
};

$('.sortable').each(function() {
    var $table = $(this);                     // This sortable table
    var $tbody = $table.find('tbody');        // Store table body
    var $controls = $table.find('th');        // Store table headers
    var rows = $tbody.find('tr').toArray();   // Store array containing rows

 $controls.on('click', function() {        // When user clicks on a header
    var $header = $(this);                  // Get the header
    var order = $header.data('sort');       // Get value of data-sort attribute
    var column;                             // Declare variable called column
