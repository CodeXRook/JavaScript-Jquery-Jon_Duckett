// ADDING ITEMS TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0];   // Get the <ul> element

// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li');    // Create element
var newTextLast = document.createTextNode('cream'); // Create text node
newItemLast