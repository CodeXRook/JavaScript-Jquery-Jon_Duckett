(function(){

    // STORE EACH PERSON AS AN OBJECT IN AN ARRAY
    var people =[
        {
            name: 'Casey',              // Each person is an object
            rate: 60                    // It holds name and rate
        },
        {
            name: 'Camile',
            rate:80
        },
        {
           name:'Gordon',
           rate:75 
        },
        {
            name:'Nigel',
            rate:120
        }
    ];

    var rows = [],         // rows array
        $min = $('#value-min'),     // Minimum text input
        $max = $('#value-max'),     // Maximun text input
        $table = $('rates');        //The table that shows resutls
})