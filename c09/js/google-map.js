function init() {
    var mapOptions ={                // Set up the map options
      center: new google.maps.LatLng(40.782710,-73.965310),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 13
    };
    var venueMap;                                      // Map() draws a map
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}