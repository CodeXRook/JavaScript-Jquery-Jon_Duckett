var request;   // Latest image to be requested
var $current;   // Image currently being shown 
var cache = {};    // Cache object
var $frame = $('#photo-viewer');     // Container for image
var $thumbs = $('.thumb');           // Thumbnails

function crossfade($img) {   // Function to fade between images
                             // Pass in new image as parameter
  if ($current) {            // If there is currently an image showing
    $current.stop().fadeOut('slow'); // Stop any animation & fade it out
  }

  $img.css({                         // Set the CSS margins for the image
    marginLeft: -$img.width() / 2,   // Negative margin of half image's width
    marginTop: -$img.height() / 2    // Negative margin of half image's height
  });

  $img.stop().fadeTo('slow', 1);     // Stop animation on new image & fade in

  $current = $img;                   // New image becomes current image
}

$(document).on('click', '.thumb', function(e){ // When a thumb is clicked on
    var $img,                               // Create local variable called $img
    src = this.href;                    // Store path to image
    request = src;                      // Store latest image request