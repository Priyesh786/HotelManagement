"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayHotel = displayHotel;
var AddHotel_1 = require("./AddHotel");
//                                          DISPLAY ALL HOTELS                                           //
function displayHotel() {
    AddHotel_1.HotelList.forEach(function (hotel) {
        if (parseInt("".concat(hotel.getroomAvailability())) === -1) {
            console.log("ID: ".concat(hotel.getID(), ", Hotel Name: ").concat(hotel.getName(), ", Location: ").concat(hotel.getLocation(), ", Contact: ").concat(hotel.getContact(), ",  Rooms Are Not Available"));
        }
        else {
            console.log("ID: ".concat(hotel.getID(), ", Hotel Name: ").concat(hotel.getName(), ", Location: ").concat(hotel.getLocation(), ", Contact: ").concat(hotel.getContact(), ", Rooms Available: ").concat(hotel.getroomAvailability()));
        }
    });
}
displayHotel();
