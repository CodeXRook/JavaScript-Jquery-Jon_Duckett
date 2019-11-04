var $form = $('#calculator');

$form.on('submit', function(e) {                 // Runs when submit is pressed
    e.preventDefault();
    console.log('Clicked submit...');              // Show the button was clicked

    var width, height, area;
    width = $('#width').val();
    height = $('#height').val();
    area = width * height;

    console.group('Area calculations');            // Start grouping