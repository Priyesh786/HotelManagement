"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
var Hotel = /** @class */ (function () {
    function Hotel(id, name, roomsAvailable, location, contact) {
        this.id = id;
        this.name = name;
        this.roomsAvailable = roomsAvailable;
        this.location = location;
        this.contact = contact;
    }
    Hotel.prototype.getroomAvailability = function () {
        return this.roomsAvailable;
    };
    Hotel.prototype.setroomAvailability = function (roomsToBook) {
        console.log(`Before update rooms avaialable ${this.roomsAvailable}`);
        this.roomsAvailable -= roomsToBook;
        console.log(`After update rooms avaialable ${this.roomsAvailable}`);
    };
    Hotel.prototype.getID = function () {
        return this.id;
    };
    Hotel.prototype.getName = function () {
        return this.name;
    };
    Hotel.prototype.getLocation = function () {
        return this.location;
    };
    Hotel.prototype.getContact = function () {
        return this.contact;
    };
    return Hotel;
}());
exports.Hotel = Hotel;
