"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddHotel_1 = require("./AddHotel");
function bookHotel(hotelName, roomsToBook) {
    var hotel = AddHotel_1.HotelList.find(function (h) { return h.getName() === hotelName; });
    if (hotel) {
        if (hotel.getroomAvailability() >= roomsToBook) {
            hotel.setroomAvailability(hotel.getroomAvailability() - roomsToBook);
            return "".concat(roomsToBook, " room(s) booked successfully at ").concat(hotel.getName(), ".");
        }
        else {
            return "Only ".concat(hotel.getroomAvailability(), " room(s) available at ").concat(hotel.getName(), ".");
        }
    }
    else {
        return "Hotel with name ".concat(hotelName, " not found.");
    }
}
var selectedHotelName = "Bliss";
var roomsToBook = 30;
var bookingResult = bookHotel(selectedHotelName, roomsToBook);
console.log(bookingResult);
