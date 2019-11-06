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
 