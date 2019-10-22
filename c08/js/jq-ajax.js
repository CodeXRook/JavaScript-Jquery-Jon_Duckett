$('nav a').on('click', function(e){
e.preventDefault();
var url = this.href;                                      // URL to load
var $content = $('#content');                             // Cache selection

$('nav a.current').removeClass('current');                // Update links
$(this).addClass('current');
$('#container').remove();                                 // Remove content

$.ajax({
}