// Array of places to visit
let placesToVisit = ["Tokyo", "Paris", "New York", "Turkey", "Afghanistan"];
// Print the array in its original order
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...placesToVisit].sort());
// Show that the array is still in its original order
console.log("Original Order (not modified):", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
// Show that the array is still in its original order
console.log("Original Order (not modified):", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
export {};
