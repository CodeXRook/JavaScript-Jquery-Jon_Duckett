/* The script is placed inside an immediately invoked function expression
which helps protect the scope od variables */

(function() {
  // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS
  var hotel = {
    name: 'Park',
    roomRate: 240, // Amount in dollars
    discount: 15,
    offerPrice: function(){
        var offerRate = this.roomRate * ((100 - this.discount) / 100); 
        return offerRate; 
    }
  };

  // Write out the hotel name, standard rate, and the special rate
  var hotelName, roomRate, specialRate;    //Declare variables

  hotelName = document.getElementById('hotelName');       // Get elements
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');

  hotelName.textContent = hotel.name;             //Write hotel name
  roomRate.textContent = '$' + hotel.roomRate.toFixed(2);  // Write room rate
  specialRate.textContent = '$' + hotel.offerPrice();    // Write offer price

  // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
  var expiryMsg; //Message display to users
  var today; // Today's date
  var elEnds; // The element that shows the message about the offer ending
}