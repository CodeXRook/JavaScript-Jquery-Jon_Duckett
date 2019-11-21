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

        function makeRows() {       // Create table rows and the array
            people.forEach(function(person) {  // For each person object in people
                var $row = $('<tr></tr>');      // Create a row for them
                $row.append( $ ('<td></td>').text(person.name) ) // Add their name
                $row.append( $ ('<td></td>').text(person.rate) ); // Add their rate
                rows.push({ //Create rows arrat which link people objects to table rows})
                   person: person,                 // Reference to the person object
                   $element: $row                  // Reference to row as jQuery selection
            });
        });
}

 function appendRows(){                         // Adds rows to the table
    var $tbody = $('<tbody></tbody>');          // Create <tbody> element
    rows.forEach(function(row) {                // For each object in the rows array
        $tbody.append(row.$element);      // Add the HTML for the row
 }
