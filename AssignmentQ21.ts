// List of people to invite to dinner
let dinnerGuests = ["Hussain", "Hussnain", "Saim", "Zain", "Hamza", "Abdullah"];
// Try to access an index that is out of bounds
try {
    console.log(dinnerGuests[10]); // This index is out of bounds
}
catch (error) {
    console.error("Index Error:", error.message);
}
// Print an invitation message to each person
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would be honored to have you join me for dinner.`);
}
export {};
