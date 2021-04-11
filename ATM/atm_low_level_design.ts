class ATM {
    atm: number;
    address: Address;

    cashDispenser: CashDispenser;
    screen: Screen;
    cardReader: CardReader;
    keypad: Keypad;
    cashDeposit1: CashDeposit;
    ChequeDeposit: ChequeDeposit;
    bankService: BankService;
}

class Address {
    pincode: number;
    street: string;
    city: string;
    state: string;
    country: string;
}

class CashDispenser {
    cashAvailable: Map<CashType, Array<Cash>>;

    dispenseCash(amount: number): void { };
}

enum CashType {
    FIFTY, HUDNRED, FIVEHUNDRED
}

class Cash {
    cashType: CashType;
    serialNumber: string;
}

class Screen {
    display(message: string): void { };
}

class CardReader {
    fetchCardDetails(): CardInfo { return; };
}

class CardInfo {
    cardType: CardType;
    bank: Bank;
    cardNumber: string;
    expiryDate: Date;
    cvv: number;
    withdrawLimit: number;
}

enum CardType {
    DEBIT, CREDIT
}

class Keypad {
    getInput(): string { return; }
}

class Bank {
    name: string;
    locatioon: Address;
    atmList: Array<ATM>;
}

interface BankService {
    isValidUser(pin: string, cardInfo: CardInfo): boolean;
    getCustomerDetails(cardInfo: CardInfo): Customer;
    exceuteTransaction(transactionInfo: Transaction, customer: Customer): TransactionDetail;
}

class BankA implements BankService {
    isValidUser(pin: string, cardInfo: CardInfo): boolean { return; }
    getCustomerDetails(cardInfo: CardInfo): Customer { return; };
    exceuteTransaction(transactionInfo: Transaction, customer: Customer): TransactionDetail { return; };
}

class BankB implements BankService {
    isValidUser(pin: string, cardInfo: CardInfo): boolean { return; };
    getCustomerDetails(cardInfo: CardInfo): Customer { return; };
    exceuteTransaction(transactionInfo: Transaction, customer: Customer): TransactionDetail { return; };
}

class BankServiceFactory {
    getBankServiceObject(cardInfo: CardInfo): BankService { return; }
}

class Customer {
    firstname: string;
    lastname: string;
    cardInfo: CardInfo;
    account: Account;

    bankServiceObj: BankService;
    customerStatus: CustomerStatus;
}

class Account {
    accountNumber: string;
    availableBalance: number;
}

enum CustomerStatus {
    BLOCKED, ACTIVE, CLOSED
}

class Transaction {
    transactionId: number;
    sourceAccount: string;
    transactionDate: Date;
}

class Deposit extends Transaction {
    amount: number;
}

class ChequeDeposit extends Deposit {
    getCheque(): Cheque { return; };
}

class CashDeposit extends Deposit {
    getCash(): Array<Cash> { return; }
}

class Withdraw extends Transaction {
    amount: number;
}

class Transfer extends Transaction {
    destAccount: string;
    amount: number;
}

class TransactionDetail {
    transactionStatus: TransactionStatus;
    sourceAccountNumber: string;
    transactionDate: Date;
    transactionType: TransactionType;

    transactionId: number;
}

enum TransactionStatus {
    PENDING, CANCELLED, SUCCESS, ERROR
}

enum TransactionType {
    WITHDRAW, DEPOSIT, TRANSFER
}

class Cheque {
    serialNumber: string;
    amount: number;
    date: Date;
    bank:Bank;
    account:Account;
}
