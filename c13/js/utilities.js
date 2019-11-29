// Helper function to add an event listener
function addEvent (el, event, callback) 
if ('addEventListener' in el) {                  // If addEventListener works
    el.addEventListener(event, callback, false);   // Use it
} else {                                         // Otherwise
    el['e' + event + callback] = callback;         // CreateIE fallback el[event + callback] = function () {
        el['e' + event + callback](window.event);
      };
      el.attachEvent('on' + event, el[event + callback]);
    }
  }