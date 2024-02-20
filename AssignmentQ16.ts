// List of people to invite to dinner
let dinnerGuests = ["Hussain", "Hussnain", "Saim", "Zain", "Hamza", "Abdullah"];
// Print an invitation message to each person
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would be honored to have you join me for dinner.`);
}
// Announce the bigger dinner table
console.log("Great news! I found a bigger dinner table.");
// Announce that only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.");
// Remove guests until only two names remain
while (dinnerGuests.length > 2) {
    const removedGuest = dinnerGuests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
// Print an invitation message to the two remaining people
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, you're still invited to dinner.`);
}
// Remove the last two names from the list
dinnerGuests.pop();
dinnerGuests.pop();
// Print the list to ensure it's empty
console.log("Updated list:", dinnerGuests);
export {};
