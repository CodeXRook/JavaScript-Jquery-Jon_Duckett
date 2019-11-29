(function()
var form = document.getElementById('login');       // Get form element

addEvent(form, 'submit', function(e) {             // When user submits form
    e.preventDefault();                              // Stop it being sent
    var elements = this.elements;                    // Get all form elements