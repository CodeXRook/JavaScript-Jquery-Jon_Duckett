var $form = $('#calculator');

$form.on('submit', function(e) {                 // Runs when submit is pressed
    e.preventDefault();
    console.log('Clicked submit...');              // Show the button was clicked