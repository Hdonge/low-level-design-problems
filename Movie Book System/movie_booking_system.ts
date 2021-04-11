class BMService {
    cinemas: Array<CinemaHall>;
    movies: Array<Movie>;

    getMovies(date: Date, city: string): Array<Movie> { return; }
    getCinemaHalls(city: string): Array<CinemaHall> { return; }
}

class CinemaHall {
    cinemaHallId: number;
    cinemaHallName: string;
    address: Address;
    audiList: Array<Audi>;

    getMovies(dateList: Array<Date>): Map<Date, Movie> { return; }
    getShows(dateList: Array<Date>): Map<Date, Show> { return; }
}

class Address {
    pinCode: number;
    street: string;
    city: string;
    state: string;
    country: string;
}

class Audi {
    audiId: string;
    audiName: string;
    totalSeats: number;
    shows: Array<Show>;
}

class Show {
    showId: number;
    movie: Movie;
    startTime: Date;
    endTime: Date;
    cinemaPlayedAt: CinemaHall;
    seats: Array<Seat>;
}

class Seat {
    seatId: number;
    seatType: SeatType;
    seatStatus: SeatStatus;
    price: number;
}

enum SeatType {
    DELUX, VIP, ECONOMY, OTHER
}

enum SeatStatus {
    BOOKED, AVAILABLE, RESERVED, NOT_AVAILABLE
}

class Movie {
    movieName: string;
    movieId: number;
    durationInMins: number;
    language: string;
    genre: Genre;
    releaseDate: Date;
    cityShowMap: Map<string, Array<Show>>;
}

enum Genre {
    SCI_FI, DRAMA, ROM_COM, FANTACY
}

class User {
    userId: number;
    searchObj: Search;
}

class SystemMember extends User {
    account: Account;
    name: string;
    email: string;
    address: Address;
}

class Member extends SystemMember {
    makeBooking(booking: Booking): Booking { return; }
    getBookng(show: Show): Array<Booking> { return; }
}

class Admin extends SystemMember {
    addMovie(movie: Movie): boolean { return; }
    addShow(show: Show): boolean { return; }
}

class Account {
    userName: string;
    password: string;
}

class Search {
    searchMoviesByNames(name: string): Array<Movie> { return; }
    searchMoviesByGenre(genre: Genre): Array<Movie> { return; }
    searchMoviesByLanguage(language: string): Array<Movie> { return; }
    searchMoviesByDate(releaseDate: Date): Array<Movie> { return; }
}

class Booking {
    bookingId: string;
    bookingDate: Date;
    member: Member;
    show: Show;
    audi: Audi;
    bookingStatus: BookingStatus;
    totalAmount: number;
    seats: Array<Seat>;
    paymentObj: Payment;

    makePayment(payment: Payment): boolean { return; }
}

enum BookingStatus {
    REQUESTED, PENDING, CONFIRMED, CANCELLED
}

class Payment {
    amount: number;
    paymentDate: Date;
    transactionId: number;
    paymentStatus: PaymentStatus;
}

enum PaymentStatus {
    UNPAID, PENDING, COMPLETED, DECLINED, CANCELLED, REFUNDED
}
