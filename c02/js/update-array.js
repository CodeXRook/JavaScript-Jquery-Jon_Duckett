//Create the array
var colors = ['white',
              'black', 
              'cusotm']

//Update the third item in the array
colors[2] = 'beige';

//Get the element with an id of colors
var el = document.getElementById('colors');

// Replace with third item from the array
el.textContent = colors[2];