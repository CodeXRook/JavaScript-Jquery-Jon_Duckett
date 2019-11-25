(function(){
    var $imgs = $('#gallery img');                  // Store all images
    var $buttons = $('#buttons');                   // Store buttons element
    var tagged = {};                                // Create tagged object

    $imgs.each(function() {                         // Loop through images and
        var img = this;                               // Store img in variable
        var tags = $(this).data('tags');              // Get this element's tags

        if (tags){                                   // If the element had tags
            tags.split(',').forEach(function(tagName) { // Split at comma and
                if (tagged[tagName] == null) {            // If object doesn't have tag
                tagged[tagName] = [];                   // Add empty array to object
        }
        tagged[tagName].push(img);                      // Add the image to the array
    });
  }
});
$('<button/>', {                                       // Create empty button
]text: 'Show All',                                     // Add text 'show all'