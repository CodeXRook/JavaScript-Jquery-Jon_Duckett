$('.tab-list').each(function(){             // Find lists of tabs
  var $this = $(this);                            // Store this list
  var $tab = $this.find('li.active');             // Get the active list item
  var $link = $tab.find('a');                     // Get link from active tab