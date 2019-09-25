var table = 3;             // Unit of table
var operator = 'addition'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '';              // Message

if (operator === 'addition'){
     // Do addition 
     while (i < 11) {
      msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
      i++;    
     }
}