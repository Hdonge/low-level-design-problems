class ParkingLot {
    name: string;
    id: string;
    address: Address;

    parkingFloors: Array<ParkingFloor>;
    entrances: Array<Entrance>;
    exists: Array<Exit>;

    isParkingSpaceAvailableForVahicle(vehicle: Vehicle): boolean { return; }
    updateParkingAttendant(parkingAttendant: ParkingAttendant, gateId: number): boolean { return; }
}

class Address {
}

class ParkingFloor {
    levelId: number;
    isFull: boolean;
    parkingSpace: Array<ParkingSpace>;
    parkingDisplayBoard: ParkingDisplayBoard;
}

class Gate {
    gateId: number;
    parkingAttendant: ParkingAttendant;
}

class Entrance extends Gate {
    getParkingTicket(vehicle: Vehicle): ParkingTicket { return; }
}

class Exit extends Gate {
    payForParking(parkingTicket: ParkingTicket, paymentType: PaymentType): ParkingTicket { return; }
}

class ParkingSpace {
    spaceId: number;
    isFree: boolean;
    costPerHour: number;
    vehicle: Vehicle;
    parkingSpaceType: ParkingSpaceType;
}

class ParkingDisplayBoard {
    freeSpotsAvailableMap: Map<ParkingSpaceType, number>;

    updateFreeSpotsAvailable(parkingSpaceType: ParkingSpaceType, spaces: number): void { return; }
}

class Account {
    fullname: string;
    email: string;
    password: string;
    empId: string;
    address: Address;
}

class Admin extends Account {
    addParkingFloor(parkingLot: ParkingLot, floor: ParkingFloor): boolean { return; }
    addParkngSpace(parkingFloor: ParkingFloor, parkingSpace: ParkingSpace): boolean { return; }
    addParikingDispayboard(floor: ParkingFloor, parkingDisplayBoard: ParkingDisplayBoard): boolean { return; }

    //
    //
    //
}

class ParkingAttendant extends Account {
    paymentService: Payment;

    processVehicleEntry(vehicle: Vehicle): boolean { return; }
    processPayment(parkingTicket: ParkingTicket, paymentType: PaymentType) { return; }
}

class Vehicle {
    licensenumber: string;
    vehicleType: VehicleType;
    parkingTicket: ParkingTicket;
    paymentInfo: PaymentInfo;
}

class ParkingTicket {
    ticketId: number;
    levelId: number;
    spaceId: string;
    vehicleEntryDateTime: Date;
    VehicleExitDateTime: Date;
    parkingSpaceType: ParkingSpaceType;
    totalCost: number;
    parkingTicketStatus: ParkingTicketStatus;

    updateTotalCost(): void { return; }
    updateVehicleExitTime(vehicleExitDateTime: Date): void { return; }
}

enum PaymentType {
    CASH, CREDIT_CARD, DEBIT_CARD, UPI
}

enum ParkingSpaceType {
    BIKE_PARKING, CAR_PARKING, TRUCK_PARKING
}

class Payment {
    makePayment(parkingTicket: ParkingTicket, paymentType: PaymentType): PaymentInfo { return; }
}

class PaymentInfo {
    amount: number;
    paymentDate: Date;
    transactionId: string;
    parkingTicket: ParkingTicket;
    paymentStatus: PaymentStatus;
}

enum VehicleType {
    BIKE, CAR, TRUCK
}

enum ParkingTicketStatus {
    PAID, ACTIVE
}

enum PaymentStatus {
    UNPAID, PENDING, COMPLETED, DECLINED, CANCELLED, REFUNDED
}
