(function() {

    var pwd = document.getElementById('pwd');     // Get password input
    var chk = document.getElementById('showPwd'); // Get checkbox

    addEvent(chk, 'change', function(e)  {        // When user clicks on checkbox
        var target = e.target || e.srcElement;      // Get that element
    }