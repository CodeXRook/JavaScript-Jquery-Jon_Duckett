$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates(){
    $.getJSON('data/rates.json')
    .done( function(data){                            // SERVER RETURNS DATA
        var d = new Date();                           // Create date object
        var hrs = d.getHours();                       // Get hours
        var mins = d.getMinutes();                    // Get mins
        var msg = '<h2>Exchange Rates</h2>';          // Start message
        $.each(data, function(key, val) {             // Add each rate
            msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
}