class Customer {
    cart: ShoppingCart;
    searchObj: Search;
    customerId: number;

    getShoppingCart(customerId: String): ShoppingCart { return; }
    addItemsToShoppingCart(item: Item): void { return; }
    upDateItemFromShoppingCart(item: Item): void { return; }
    removeItemFromShoppingCart(item: Item): void { return; }
}

class Guest extends Customer {
    createNewAccount(): Account { return; }
}

class User extends Customer {
    account: Account;
}

class Seller extends User {
    addProduct(product: Product): void { return; }
}

class Buyer extends User {
    orderObj: Order;

    addReview(review: ProductReview): void { return; }
    placeOrder(cart: ShoppingCart): OrderStatus { return; }
}

class Account {
    username: string;
    password: string;
    email: string;
    fullname: string;
    phoneNumber: string;
    shoppingAddresses: Array<Address>;
    accountStatus: AccountStatus;
}

class Address {
    pincode: string;
    street: string;
    city: string;
    state: string;
    country: string;
}

enum AccountStatus {
    ACTIVE, BLOCKED, INACTIVE
}

class ShoppingCart {
    items: Array<Item>;
    cartValue: number;

    addItem(item: Item): void { }
    updateItem(item: Item): void { }
    deleteItem(item: Item): void { }
    checkoutItems(): void { }
    getItems(): Array<Item> { return; }
    getCartValue(): number { return; }
}

class Item {
    product: Product;
    qty: number;
}

class Product {
    productId: string;
    productDescription: string;
    name: string;
    productCategory: ProductCategory;
    seller: Seller;
    cost: number;

    productReviews: Array<ProductReview>;
}

enum ProductCategory {
    ELECTRONICS, FURNITURE, GROCERY, MOBILE
}

class ProductReview {
    details: string;
    reviewer: Buyer;
    rating: number;
}

class Order {
    orderId: string;
    orderItems: Array<Item>;
    orderValue: number;
    buyer: Buyer;
    orderDate: Date;
    notificationService: NotificationService;
    orderLog: Array<OrderLog>;

    placeOrder(): OrderStatus { return; }
    trackerOrder(): OrderStatus { return; }
    addOrderLogs(): void { return; }
    makePayment(paymentType: PaymentType): PaymentStatus { return; }
}

enum OrderStatus {
    PACKED, SHIPPED, ENROUTE, OUT_FOR_DELIVERY, DELIVERED, CANCELLED
}

enum PaymentStatus {
    SUCCESS, ERROR, CANCELLED, REFUND_INITIATED, REFUNDED
}

enum PaymentTyoe {
    CREDIT_CARD, DEBIT_CARD, NET_BANKING, UPI
}

class OrderLog {
    orderDetail: string;
    createdDate: Date;
    status: OrderStatus;
}

class NotificationService {
    sendNotification(notificationDomain: NotificationDomain): boolean { return; }
}

class NotificationDomain {
    notificationID: string;
    notificationType: NotificationType;
    user: User;
}

class MessageAttribute {
    to: string;
    from: string;
    message: string;
}

interface Notification {
    sendNotification(messageAttribute: MessageAttribute): boolean;
}

class EmailNotification implements Notification {
    sendNotification(messageAttribute: MessageAttribute): boolean { return true; }
}

class WhatsappNotification implements Notification {
    sendNotification(messageAttribute: MessageAttribute): boolean { return true; }
}

class SMSNotification implements Notification {
    sendNotification(messageAttribute: MessageAttribute): boolean { return true; }
}

enum NotificationType { }

enum PaymentType { }
