$(function() {

    $('#arrival').datepicker();      // Turn input to JQUI datepicker

    var $amount = $('#amount');      // Cache the price input
    var $range = $('#price-range');  // Cache the <div> for the price range
    $('#price-range').slider({       // Turn price-range input into a slider
        range: true,                   // If it is a range it gets two handles
        min: 0,                        // Minimum value
        max: 400,                      // Maximum value
        values: [175, 300],            // Values to use when the page loads 
}