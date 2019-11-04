console.info('And we\'re off...');                    // Info: script running

var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {  // On blur event
    console.warn('You entered ', this.value);           // Warn: what was entered
});

$('#calculator').on('submit', function(e) {           // When form is submitted
    e.preventDefault();

    width = $('#width').val();
    height = $('#height').val();