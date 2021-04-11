class Library {
    name: string;
    id: number;
    address: Address;
    books: Array<Book>;
}

class Address {
    pin: number;
    street: string;
    area: string;
    city: string;
    state: string;
    country: string;
}

class Book {
    uniqueIdNumber: string;
    title: string;
    authors: Array<Author>;
    bookType: BookType;
}

class BookItem extends Book {
    barcode: string;
    publishedDate: Date;
    rackLocation: Rack;
    bookStatus: BookStatus;
    bookFormat: BookFormat;
}

enum BookType {
    SCI_FI, ROMANTIC, FANTACY, DRAMA
}

enum BookStatus {
    AVAILABLE, ISSUED, RESERVED, LOST
}

enum BookFormat {
    HARDCOVER, PAPERBACK, FANTACY, DRAMA
}

class Rack {
    number: number;
    locationId: string;
}

class Person {
    firstname: string;
    lastname: string;
}

class Author extends Person {
    booksPublished: Array<Book>;
}

class SystemUser extends Person {
    email: string;
    phoneNumer: string;
    account: Account;
}

class Member extends SystemUser {
    totalBookCheckedOut: number;

    searchObj: Search;
    issueService: BookIssueService;
}

class Librarian extends SystemUser {
    searchObj: Search;
    issueService: BookIssueService;

    addBookItem(bookItem: BookItem): void { }
    deleteBookItem(bookItemId: string): BookItem { return; }
    editBookItem(bookItem: BookItem): BookItem { return; }
}

class Account {
    username: string;
    password: string;
    sessionId: number;
}

class Search {
    getBooksByTitle(title: string): Array<BookItem> { return; }
    getBookByAuthor(author: Author): Array<BookItem> { return; }
    getBookByType(bookType: BookType): Array<BookType> { return; }
    getBookByPublicationDate(publicationDate: Date) { return; }
}

class BookIssueService {
    fineService: FineService;

    getReservationDetail(bookItem: BookItem): BookReservationDetail { return; }
    updateReservationDetail(bookReservationDetail: BookReservationDetail): void { }
    reserveBook(book: BookItem, user: SystemUser): BookReservationDetail { return; }
    renewBook(book: BookItem, user: SystemUser): BookIssueDetail { return; }
    issueBook(book: BookItem, user: SystemUser): BookIssueDetail { return; }
    returnBook(book: BookItem, user: SystemUser): void { return; }
}

class BookLending {
    book: BookItem;
    startDate: Date;
    user: SystemUser;
}

class BookReservationDetail extends BookLending {
    reservationStatus: ReservationStatus;
}

class BookIssueDetail extends BookLending {
    dueDate: Date;
}

class FineService {
    calculateFine(book: BookItem, user: SystemUser, days: number): Fine { return; }
}

class Fine {
    fineDate: Date;
    book: BookItem;
    user: SystemUser;
    fineValue: number;
}

class ReservationStatus {
    user: SystemUser;
    status: BookStatus;
    reservationDate: Date;
    reservationUpto: Date;
}
