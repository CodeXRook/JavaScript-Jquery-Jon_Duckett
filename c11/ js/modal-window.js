var modal = (function() {            // Declare modal object
    var $window = $(window);                        // Store the window
    var $modal = $('<div class="modal"/>');         // Create markup for modal
    var $content = $('<div class="modal-content"/>');
    var $close = $('<button role="button" class="modal-close">close</button>');

    $modal.append($content, $close);                // Add close button to modal

    $close.on('click', function(e){                 // If user clicks on close
        e.preventDefault();                           // Prevent link behavior
        modal.close();                                // Close the modal window
  });
  
  return {                                        // Add code to modal
}