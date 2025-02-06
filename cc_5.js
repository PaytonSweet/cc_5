// Task 1: Object Properties

let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
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
console.log(`OrderId: ${this.orderId}, Total Amount: $${this.totalAmount}, Status: ${this.status}`); 
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

function discountApply(prices, discountRate){ // used discount apply name as apply discount is used later on
    return prices.map(price => price * (1 - discountRate)); // mapped discount to each price
}
let discountedPrices = discountApply(prices, 0.1); // creates new variable representing discount prices
console.log(`Discounted Prices: ${discountedPrices}`); // logs discounted prices

// Task 5: Filter Method

let inventory = [5, 0 , 12, 8, 0]; // declares inventory array
let stock = inventory.filter(stock => stock > 0); // filters out inventory not greater than 0
console.log(`Inventory: ${stock}`); // logs filtered inventory

// Task 6: Reduce Method

let sales = [500, 300, 200, 400]; // creates sales array
let totalSales = sales.reduce((total, sale) => total + sale, 0); // combines all values in array
console.log(`Total Revenue: $${totalSales}`); // logs total sales

// Task 7: find() Method

const customers = ["Alice", "Bob", "Charlie", "David"]; // creates an arrary of customers
const cust = customers.find(customer => customer === "Charlie"); // finds Charlie in the array
console.log(`Customer: ${cust}`); //logs the found customer

// Task 8: Function Declaration

// This function will calculate tax based on the amount and tax rate
function calculateTax(amount, taxRate) { 
    return amount * taxRate;
};
console.log(`Calculated Tax: $${calculateTax(1000, 0.07)}`); // logs the tax based on amount put in

// Task 9: Function Expression

// made function that calculates discount applied to an item
function applyDiscount(price, discount){ 
    return price - (price * (discount / 100));
}
console.log(`Discounted price: $ ${applyDiscount(100, 7)}`)
// logs the discounted price

// Task 10: Arrow Function

const calculatePoints = (purchaseAmount) => purchaseAmount / 10; // defines a function using arrow syntax
 // divides purchase amount by 10 to determine points
console.log(`Loyalty Points Redemeed: ${calculatePoints(140)}`); // logs loyalty points
