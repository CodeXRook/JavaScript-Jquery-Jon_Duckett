(function(){                              // Lives in an IIFE
    var $imgs = $('#gallery img');          // Get the images
    var $search = $('#filter-search');      // Get the input element
    var cache = [];                         // Create an array called cache

    $imgs.each(function() {                 // For each image
        cache.push({                          // Add an object to the cache array
            element: this,                      // This image
            text: this.alt.trim().toLowerCase() // Its alt text (lowercase trimmed)
    });
  });

  function filter() {                     // Declare filter() function
    var query = this.value.trim().toLowerCase();  // Get the query
    cache.forEach(function(img) {         // For each entry in cache pass image 
}