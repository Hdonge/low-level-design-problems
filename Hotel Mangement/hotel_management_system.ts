class Hotel {
    name: string;
    id: number;
    hotelLocation: Address;
    roomList: Array<Room>;
}

class Address {
    pin: number;
    street: string;
    area: string;
    city: string;
    state: string;
    country: string;
}

class Room {
    roomNumber: string;
    roomStyle: RoomStyle;
    roomStatus: RoomStatus;
    bookingPrice: number;
    roomKeys: Array<RoomKey>;
    houseKeepingLogs: Array<HouseKeepingLog>;
}

enum RoomStyle {
    STANDARD,
    DELUX,
    FAMILY_SUITE
}

enum RoomStatus {
    AVAILABLE,
    RESERVED,
    NOT_AVAILABLE,
    OCCUPIED,
    SERVICE_IN_PROGRESS
}

class RoomKey {
    keyId: string;
    barCode: string;
    issuedAt: string;
    isActive: string;
    isMaster: string;

    assignRoom(room: Room) { }
}

class HouseKeepingLog {
    description: string;
    startDate: string;
    duration: string;
    houseKeeper: HouseKeeper;

    addRoom(room: Room) { }
}

class Person {
    name: string;
    accountDetail: Account;
    phone: string;
}

class Account {
    username: string;
    password: string;
    accountStatus: AccountStatus
}

enum AccountStatus {
    ACTIVE,
    CLOSED,
    BLOCKED
}

class HouseKeeper extends Person {
    getRoomsServiced(date: Date): Array<Room> { return; }
}

class Guest extends Person {
    searchObj: Search;
    bookingObj: Booking;

    getAllRoomBookings(): Array<RoomBooking> { return; }
}

class Receptionist extends Person {
    searchObj: Search;
    bookingObj: Booking;

    checkInGuest(guest: Guest, roomBooking: RoomBooking): void { }
    checkOutGuest(guest: Guest, roomBooking: RoomBooking): void { }
}

class Admin extends Person {
    addRoom(room: Room): void { }
    removeRoom(roomId: string): Room { return; }
    editRoom(updatedRoom: Room): void { return; }
}

class Search {
    searchRoom(roomStyle: RoomStyle, startDate: Date, duration: number) { }

}

class Booking {
    createBooking(guest: Guest): RoomBooking { return; }
    cancelBooking(bookingId: string): RoomBooking { return; }
}

class RoomBooking {
    bookingId: string;
    startDate: Date;
    endDate: Date;
    duration: number;
    guest: Guest;
    room: Room;
    baseCharge: BaseRoomCharge;
}

/**
 * Decorator pattern is used to decorate the prices here
 */

interface BaseRoomCharge {
    getCost(): number;
}

class RoomCharge implements BaseRoomCharge {
    cost: number;

    getCost(): number {
        return this.cost;
    }

    setCost(cost: number) {
        this.cost = cost;
    }
}

class RoomServiceCharge implements BaseRoomCharge {
    cost: number;
    baseRoomCharge: RoomCharge;

    getCost(): number {
        this.baseRoomCharge.setCost(this.baseRoomCharge.getCost() + this.cost);
        return this.getCost();
    }
}

class InRoomPurchaseCharges implements BaseRoomCharge{
    cost:number;
    baseRoomCharge: RoomCharge;

    getCost(){
        this.baseRoomCharge.setCost(this.baseRoomCharge.getCost() + this.cost);
        return this.getCost();
    }
}
