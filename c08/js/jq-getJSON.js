$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates(){
    $.getJSON('data/rates.json')
}