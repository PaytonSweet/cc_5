// Task 1: Object Properties

let customer = {
    name: "John Doe",
    age: 35,
    email: "John.doe@gmail.com"
}; // creates customer object with data

console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`); // logs each customer property

// Task 2:

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
