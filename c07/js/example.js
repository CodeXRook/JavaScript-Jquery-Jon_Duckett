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

}