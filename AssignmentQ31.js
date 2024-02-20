"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// List of current usernames
let current_users = ["John", "Hassan", "Hamza", "Hussain", "Zain"];
// List of new usernames
let new_users = ["Hussain", "Touqeer", "Mateen", "J ohn", "Abdullah"];
// Loop through the new_users list to check for unique usernames
for (let i = 0; i < new_users.length; i++) {
    let new_username = new_users[i];
    let usernameExists = false;
    // Check if the new username exists in current_users (case insensitive)
    for (let j = 0; j < current_users.length; j++) {
        if (new_username.toLowerCase() === current_users[j].toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    // Print messages based on whether the username exists or not
    if (usernameExists) {
        console.log(`Sorry, the username '${new_username}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
    }
}
