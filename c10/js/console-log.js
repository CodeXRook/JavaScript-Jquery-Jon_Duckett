console.log('And we\'re off...');               // Indicates script is running
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() { // When input loses focus