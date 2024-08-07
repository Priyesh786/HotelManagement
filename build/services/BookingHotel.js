"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddHotel_1 = require("./AddHotel");
const DisplayHotel_1 = require("./DisplayHotel");
var read = require('readline-sync');
function bookHotel(roomsToBook) {
    let HotList = [];
    for (let i = 0; i < AddHotel_1.HotelList.length; ++i) {
        if (AddHotel_1.HotelList[i].getroomAvailability() >= roomsToBook) {
            HotList.push(AddHotel_1.HotelList[i]);
        }
    }
    if (HotList.length === 0) {
        console.log("No available Hotels found.");
        return;
    }
    console.log("These are the available hotels for you.");
    for (let i = 0; i < HotList.length; ++i) {
        console.log(`hotel-id: ${HotList[i].getID()}, hotel-name: ${HotList[i].getName()}, hotel-location: ${HotList[i].getLocation()}, contact-no ${HotList[i].getContact()}`);
    }
    const inp_id_str = read.question("Type the hotel-id to book: ");
    const inp_id = parseInt(inp_id_str, 10);
    const search = HotList.find(h => h.getID() === inp_id);
    if (!search) {
        console.log("You have entered wrong Hotel ID.");
        return;
    }
    console.log(`Your Hotel ${search.getName()} is successfully booked. Contact ${search.getContact()}.`);
    search.setroomAvailability(search.getroomAvailability() - roomsToBook);
}
while (1) {
    let check_str = read.question('Type 1 if you want to Book the Hotel. Type 2 if you want to see the Hotel-List.');
    let check = parseInt(check_str, 10);
    if (check !== 1 && check !== 2) {
        console.log("You have entered wrong Input.");
    }
    switch (check) {
        case 1:
            let roomsToBook = read.question("Enter the number of rooms you want to have in the Hotel.");
            bookHotel(parseInt(roomsToBook, 10));
            break;
        case 2:
            (0, DisplayHotel_1.displayHotel)();
            break;
    }
}
