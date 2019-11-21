(function(){
    var $imgs = $('#gallery img');                  // Store all images
    var $buttons = $('#buttons');                   // Store buttons element
    var tagged = {};                                // Create tagged object

    $imgs.each(function() {                         // Loop through images and
        var img = this;                               // Store img in variable
        var tags = $(this).data('tags');              // Get this element's tags

}