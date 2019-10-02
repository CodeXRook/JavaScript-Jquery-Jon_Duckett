$(function(){
  var ids = '';
  var $listItems = $('li');

  $listItems.on('mouseover click', function(){
    ids = this.id;
  }
}