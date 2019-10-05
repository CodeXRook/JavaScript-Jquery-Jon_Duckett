$(function() {
  var $p = $('p');   

  // Create a clone of the <p> element and add it after the
  <h2> element.
    var $clonedQuote = $p.clone();
    $p.remove();\$clonedQuote.insertAfter('h2');

    // Remove first item, and add it to the end of the list.
}