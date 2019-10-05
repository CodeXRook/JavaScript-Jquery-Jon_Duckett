$(function() {
  var $listItems = $('li');

  $listItems.filter('.hot:last').removeClass('hot');
  $('li:not(.hot)').addClass('cool');
}