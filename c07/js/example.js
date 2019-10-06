$(function() {
  // SETUP
  var $list, $newItemForm, $newItemButton;
  var item = '';            // item is an empty string
  $list = $('ul');         // Cache the unordered list
  $newItemForm = $('#newItemForm');    // Cache form to add new items
  $newItemButton = $('#newItemButton');   // Cache button to show form

  $('li').hide().each(function(index) {   // Hide list items
   $(this).delay(450 * index).fadeIn(1600);  // Then fade them in
  });

  // ITEM COUNTER
  function updateCount() {      // Create function to update counter
    var items = $('li[class!=complete]').length; // Number of items in list
    $('#counter').text(items);                   // Added into counter circle
  }
  updateCount();                                 // Call the function

  // SETUP FORM FOR NEW ITEMS
  $newItemButton.show();                         // Show the button
  $newItemForm.hide();                           // Hide the form
  $('#showForm').on('click', function() {        // When click on add item button
    $newItemButton.hide();                       // Hide the button
    $newItemForm.show();                         // Show the form
});

 // ADDING A NEW LIST ITEM
 $newItemForm.on('submit', function(e) {       // When a new item is submitted
  e.preventDefault();                         // Prevent form being submitted
  var text = $('input:text').val();           // Get value of text input
  $list.append('<li>' + text + '</li>');      // Add item to end of the list
  $('input:text').val('');                    // Empty the text input
  updateCount();                              // Update the count
});

 }