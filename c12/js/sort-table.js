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

}