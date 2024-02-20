"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the order_sandwich function with a rest parameter
function order_sandwich(...items) {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    }
    else {
        console.log("Items: " + items.join(", "));
        console.log("Summary: A delicious sandwich with " + items.length + " items.");
    }
    console.log("----------------------------");
}
// Call the function three times with a different number of arguments
order_sandwich("Cheese", "Tomato", "Lettuce");
order_sandwich("Turkey", "Bacon");
order_sandwich(); // No items selected
