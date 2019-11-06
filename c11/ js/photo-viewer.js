var request;   // Latest image to be requested
var $current;   // Image currently being shown 
var cache = {};    // Cache object
var $frame = $('#photo-viewer');     // Container for image
var $thumbs = $('.thumb');           // Thumbnails