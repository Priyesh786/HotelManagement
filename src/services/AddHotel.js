"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelList = void 0;
var hotel_1 = require("../models/hotel");
var hotel1 = new hotel_1.Hotel(1, 'Ambar', 50, 'Rohini', 989848);
var hotel2 = new hotel_1.Hotel(2, 'Bliss', 30, 'CP', 748394);
var hotel3 = new hotel_1.Hotel(3, 'Tulip', 60, 'Rajivnagar', 732224);
var hotel4 = new hotel_1.Hotel(4, 'Elegant', 45, 'Sultanpur', 873478);
var hotel5 = new hotel_1.Hotel(5, 'French-villa', 20, 'Chandni-Chowk', 998839);
var HotelList = [hotel1, hotel2, hotel3, hotel4, hotel5];
exports.HotelList = HotelList;
