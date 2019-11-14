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

});