var sx = document.getElementById('sx');            // Element to hold screenX
var sy = document.getElementById('sy');            // Element to hold screenY
var px = document.getElementById('px');            // Element to hold pageX
var py = document.getElementById('py');            // Element to hold pageY
var cx = document.getElementById('cx');           // Element to hold clientX
var cy  = document.getElementById('cy');          // Element to hold clientY

function showPosition(){                          // Declare function
  sx.value = event.screenX;                       // Update element with screenX
  sy.value = event.screenY;                       // Update element with screenY
  px.value = event.pageX;                          // Update element with pageX
  py.value = event.pageY;                           // Update element with pageY
}