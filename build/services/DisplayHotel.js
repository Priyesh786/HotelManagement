"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayHotel = displayHotel;
const AddHotel_1 = require("./AddHotel");
//                                          DISPLAY ALL HOTELS                                           //
function displayHotel() {
    AddHotel_1.HotelList.forEach(hotel => {
        if (parseInt(`${hotel.getroomAvailability()}`) === -1) {
            console.log(`ID: ${hotel.getID()}, Hotel Name: ${hotel.getName()}, Location: ${hotel.getLocation()}, Contact: ${hotel.getContact()},  Rooms Are Not Available`);
        }
        else {
            console.log(`ID: ${hotel.getID()}, Hotel Name: ${hotel.getName()}, Location: ${hotel.getLocation()}, Contact: ${hotel.getContact()}, Rooms Available: ${hotel.getroomAvailability()}`);
        }
    });
}
