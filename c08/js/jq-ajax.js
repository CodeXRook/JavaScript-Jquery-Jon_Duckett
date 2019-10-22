$('nav a').on('click', function(e){
e.preventDefault();
var url = this.href;                                      // URL to load
var $content = $('#content');                             // Cache selection

$('nav a.current').removeClass('current');                // Update links
$(this).addClass('current');
$('#container').remove();                                 // Remove content

$.ajax({
    type: "GET",                                            // GET or POST
    url: url,                                               // Path to file
    timeout: 2000,                                          // Waiting time
    beforeSend: function() {                                // Before Ajax 
        $content.append('<div id="load">Loading</div>');      // Load message
},
complete: function() {                                  // Once finished
    $('#load').remove();                                  // Clear message
},
success: function(data) {                               // Show content
    $content.html( $(data).find('#container') ).hide().fadeIn(400);
},
error: function() {                                     // Show error msg 
  $content.html('<div id="container">Please try again soon.</div>');
}
});

});
