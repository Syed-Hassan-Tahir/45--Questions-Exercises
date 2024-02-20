// List of people to invite to dinner
let dinnerGuests = ["Ahmad", "Saim", "Hamza"];
// Print an invitation message to each person
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would be honored to have you join me for dinner.`);
}
// Print a message about the guest who can't make it
console.log(`Unfortunately, ${dinnerGuests[1]} can't make it to the dinner.`);
// Replace the name of the guest who can't make it with a new person
dinnerGuests[1] = "Hussnain";
// Announce the bigger dinner table
console.log("Great news! I found a bigger dinner table.");
// Add new guests to the array
dinnerGuests.unshift("Hussain"); // Add to the beginning
dinnerGuests.splice(Math.floor(dinnerGuests.length / 2), 0, "Zain"); // Add to the middle
dinnerGuests.push("Abdullah"); // Add to the end
// Print a new set of invitation messages
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would be honored to have you join me for dinner.`);
}
export {};
