console.info('And we\'re off...');                    // Info: script running

var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {  // On blur event