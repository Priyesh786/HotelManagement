import { Hotel } from "../models/hotel";

let hotel1 = new Hotel(1,'Ambar', 50, 'Rohini', 989848);
let hotel2 = new Hotel(2,'Bliss', 30, 'CP', 748394);
let hotel3 = new Hotel(3,'Tulip', 60, 'Rajivnagar', 732224);
let hotel4 = new Hotel(4,'Elegant', 45, 'Sultanpur', 873478);
let hotel5 = new Hotel(5,'French-villa', 20, 'Chandni-Chowk', 998839);

let HotelList = [hotel1,hotel2,hotel3,hotel4,hotel5];

export {HotelList};