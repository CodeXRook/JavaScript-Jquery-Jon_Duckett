$(function() {
  var listHeight = $('#page').height();

  $('ul').append('<p>Height: ' + listHeight + 'px</p>');
  $('li').width('50%');
}