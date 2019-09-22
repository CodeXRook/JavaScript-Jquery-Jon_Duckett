var hotel = {
    name: 'Park',
    rooms : 120,
    booked : 77
};

hotel.gym= true;
hotel.pool = false;
delete hotel.booked;

var elName = document.getElementById('hotelName');