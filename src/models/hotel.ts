export class Hotel{
    private id: number;
    private name: string;
    private roomsAvailable : number;
    private location : string;
    private contact : number;

    constructor(id: number, name: string, roomsAvailable: number, location: string, contact: number) {
        this.id = id;
        this.name = name;
        this.roomsAvailable = roomsAvailable;
        this.location = location;
        this.contact = contact;
    }
    getroomAvailability(): number {
        return this.roomsAvailable;
    }
    setroomAvailability(roomsToBook: number): void {
        this.roomsAvailable -= roomsToBook;
    }
    getID(): number{
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getLocation(): string{
        return this.location;
    }
    getContact() : number {
        return this.contact;
    }
}