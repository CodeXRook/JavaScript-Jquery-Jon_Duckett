$(function() {

    $('#arrival').datepicker();      // Turn input to JQUI datepicker

    var $amount = $('#amount');      // Cache the price input
    var $range = $('#price-range');  // Cache the <div> for the price range
    $('#price-range').slider({       // Turn price-range input into a slider
        range: true,                   // If it is a range it gets two handles
}