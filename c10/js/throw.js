var width = 12;        // width variable
var height = 'test';  // height variable

function calculateArea(width, height) {}
try {
    var area = width * height;                      // Try to calculate area
    if (!isNaN(area)) {                             // If it is a number
        return area;                                  // Return the area
    } else {                                        // Otherwise throw an error
      throw new Error('calculateArea() received invalid number');
    }
  } catch(e) {                                     // If there was an error
 