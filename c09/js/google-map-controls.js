function  init() {
    // the mapOptions object contains the information to initialise the map to how we want it
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(40.782710,-73.965310),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
        }
    }
}