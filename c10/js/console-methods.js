console.info('And we\'re off...');                    // Info: script running

var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {  // On blur event
    console.warn('You entered ', this.value);           // Warn: what was entered
});