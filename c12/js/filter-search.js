(function(){                              // Lives in an IIFE
    var $imgs = $('#gallery img');          // Get the images
    var $search = $('#filter-search');      // Get the input element
    var cache = [];                         // Create an array called cache

    $imgs.each(function() {                 // For each image
        cache.push({                          // Add an object to the cache array
}