var hotel = {
    name: 'Quary',
    rooms: 40,
    booked: 25,
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
    
};

var elName = document.getElementById('hotelName');