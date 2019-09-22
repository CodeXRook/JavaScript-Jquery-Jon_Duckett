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

  function offerExpires(today){
  // Declare variables within the function for local scope
  var weekFromToday, day, date, month, year, dayNames, monthNames;

  // Add 7 days time (added in milliseconds)
  weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Create arrarys to hold the names of days / months
  dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthNames = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // Collects the parts of the date to show on the page

  day = dayNames[weekFromToday.getDay()];
  date = weekFromToday.getDate();
  month = monthNames[weekFromToday.getMonth()];
  year = weekFromToday.getFullYear();
  //Create the message
  expiryMsg = 'Offer expires next ';
  expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year +')';
  return expiryMsg;
  }
  today = new Date();    // Put today's date i variable
  elEnds = document.getElementById('offerEnds'); // Get the  offerEnds element
}