"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// Print a second set of invitation messages
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would be honored to have you join me for dinner.`);
}
