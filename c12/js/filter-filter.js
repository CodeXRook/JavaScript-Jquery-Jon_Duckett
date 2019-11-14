$(function () {
    // STORE EACH PERSON AS AN OBJECT IN AN ARRAY 
    var people = [
        {
         name: 'Casey',                 // Each person is an object 
         rate:60                        // It holds name and rate
        },
        {
            name:'Camile',
            rate:80
        },
        {
            name: 'Gordon',
            rate: 75
        },
        {
            name: 'Nigel',
            rate:120
        }
      ];


    // THE FUNCTION ACTS AS A FILTER 
    function priceRange(person) {                    // Declare priceRange()
        return(person.rate >= 65) && (person.rate <=90);// IN range returns true
    };

    //FILTER THE PEOPLE ARRAY & ADDD MATCHES TO THE REUSLTS ARRAY
    var results = [];                           // Array for matching people
    results = people.filter(priceRange);        // filter(calls priceRange()


    //  LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
    var $tableBody =$('<tbody><tbody>');           // New table body
    for (var i = 0; i < results.length; i++) {     // Loop through matches
        var person = results[i];                   // Store current person 
        var $row = $('<tr></tr>');                 // Create a row for them
        $row.append($('<td></td>').text(person.name)); //Add their name
        $row.append($('<td><t/td>').text(person.rate)); // Add their rate
        $tableBody.append( $row );                      // Add row to new content
    })
});