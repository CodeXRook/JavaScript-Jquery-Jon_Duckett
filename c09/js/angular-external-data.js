// NOTE: Because this example loads external data it will not work locally in some browsers
// You can try it online at http://javascriptbook.com/code/c09 
function TimetableCtrl($scope, $http){
    $http.get('js/items.json')
}