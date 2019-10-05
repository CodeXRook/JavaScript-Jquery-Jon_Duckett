$(function() {
 var listItem, itemStatus, eventType;

 $('ul').on(
   'click mouseover',
   ':not(#four)'
   {status: 'important'},
   function(e) {
    listItem =  'Item: ' + e.target.textContent + '<br />';
   }
 ) ;
});