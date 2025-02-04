// Task 1: Object Properties

let customer = {
    name: "John Doe",
    age: 35,
    email: "John.doe@gmail.com"
}; // creates customer object with data

console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`); // logs each customer property

// Task 2: Object Methods

let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
 // creates order and properties
displayOrder(){
console.log(`OrderId: ${this.orderId}
Total Amount: $${this.totalAmount}
Status: ${this.status}`); 
} // creates a display order to display the properties
};
order.displayOrder(); // displays the order in console log

// Task 3: Array Manipulation

let cartItems = ["Milk", "Eggs", "Bread"]; // creates array of cart items
cartItems.push("Cookies"); // adds cookies to the end
cartItems.pop(); // removes item from the end
cartItems.unshift("Ham"); // adds Ham to the beginning
cartItems.shift(); // removes item from the beginning
console.log(`Cart Items: ${cartItems}`); // logs cart items

// Task 4: Map Method

let prices = [100, 200, 300]; // declared prices variable

function applyDiscount(prices, discountRate){
    return prices.map(price => price * (1 - discountRate)); // mapped discount to each price
}
let discountedPrices = applyDiscount(prices, 0.1); // creates new variable representing discount prices
console.log(`Discounted Prices: ${discountedPrices}`); // logs discounted prices