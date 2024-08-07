import { HotelList } from "./AddHotel";

//                                          DISPLAY ALL HOTELS                                           //
function displayHotel(): void {
    HotelList.forEach(hotel => {
        if(parseInt(`${hotel.getroomAvailability()}`) === -1){
            console.log( `ID: ${hotel.getID()}, Hotel Name: ${hotel.getName()}, Location: ${hotel.getLocation()}, Contact: ${hotel.getContact()},  Rooms Are Not Available`);
        }
        else {
        console.log(`ID: ${hotel.getID()}, Hotel Name: ${hotel.getName()}, Location: ${hotel.getLocation()}, Contact: ${hotel.getContact()}, Rooms Available: ${hotel.getroomAvailability()}`);
        }
    });
}
export {displayHotel};



