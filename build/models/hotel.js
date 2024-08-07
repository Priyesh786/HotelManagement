"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor(id, name, roomsAvailable, location, contact) {
        this.id = id;
        this.name = name;
        this.roomsAvailable = roomsAvailable;
        this.location = location;
        this.contact = contact;
    }
    getroomAvailability() {
        return this.roomsAvailable;
    }
    setroomAvailability(roomsToBook) {
        this.roomsAvailable = roomsToBook;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getLocation() {
        return this.location;
    }
    getContact() {
        return this.contact;
    }
}
exports.Hotel = Hotel;
