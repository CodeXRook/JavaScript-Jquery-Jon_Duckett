// NOTE: Because this example uses jQuery's load() method (as introduced in the previous chapter)
// It will not work locally in some browsers 
// or run it on your own web server
$(function() {                                  // DOM has loaded
    function loadContent(url){                    // Load new content into page
        $('#content').load(url + ' #container').hide().fadeIn('slow');
  }

  $('nav a').on('click', function(e) {          // Click handler 
    e.preventDefault();                         // Stop link loading new page