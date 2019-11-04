console.log('And we\'re off...');               // Indicates script is running
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() { // When input loses focus
    console.log('You entered ', this.value );          // Write value to console
});

$('#calculator').on('submit', function(e) {     // When the user clicks submit
    e.preventDefault();                           // Prevent the form submitting