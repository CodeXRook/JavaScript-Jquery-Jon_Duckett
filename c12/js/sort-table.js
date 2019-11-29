var compare = {                             // Declare compare object
    name: function(a, b) {                  // Add a method called name
        a = a.replace(/^the /i, '');        // Remove The from start of parameter
        b = b.replace(/^the /i, '');          // Remove The from start of parameter

        if (a < b) {                          // If value a is less than value b
            return -1;                          // Return -1
        } else {                              // Otherwise

}