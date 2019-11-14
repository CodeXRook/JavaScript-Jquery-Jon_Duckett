$(function(){
    // STORE EACH PERSON AS AN OBJECT IN AN ARRAY
    
    var people = [
        {
          name: 'Casey',                      //Each person is an object
          rate: 60                           //It holds name and rate
        },
        {
            name: Camile,
            rate:60
        },
        {
           name: 'Nigel',
           rate: 120
        }
    ];

    // CHECKS EACH PERSO AND ADDS THOSE IN RANGE TO ARRAY
    var results =[];                         // Array for people in range
    people.forEach(function(person) {        // For each person
        if (person.rate >= 65 && person.rate <= 90) { // Is rate in range 
            results.push(person);                      // If yes add to array
        }
});

    // LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
    var $tableBody = $('<tbody></tbody>');         // New table body
    for (var i = 0; i < results.length; i++) {      // Loop through matches
        var person = results[i];                    // Store current person

    }
    
})
