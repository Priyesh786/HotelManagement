import { HotelList } from "./AddHotel";


function bookHotel(hotelName: string, roomsToBook: number): string {
    const hotel = HotelList.find(h => h.getName() === hotelName);
    if (hotel) {
        if (hotel.getroomAvailability() >= roomsToBook) {
            hotel.setroomAvailability(hotel.getroomAvailability() - roomsToBook);
            return `${roomsToBook} room(s) booked successfully at ${hotel.getName()}.`;
        } else {
            return `Only ${hotel.getroomAvailability()} room(s) available at ${hotel.getName()}.`;
        }
    } else {
        return `Hotel with name ${hotelName} not found.`;
    }
}



const selectedHotelName= "Bliss"; 
const roomsToBook = 30; 
const bookingResult = bookHotel(selectedHotelName, roomsToBook);
console.log(bookingResult);