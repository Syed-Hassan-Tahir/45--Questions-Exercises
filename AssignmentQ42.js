"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the make_album function with an optional parameter for the number of tracks
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    // Add the number of tracks to the album's object if provided
    if (tracks !== undefined) {
        album = tracks;
    }
    return album;
}
// Define the show_magicians function
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Define the make_great function to modify the array of magicians
function make_great(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
// Array of magician's names
const originalMagicians = ["Magician1", "Magician2", "Magician3", "Magician4"];
// Create a copy of the array of magician's names
const copiedMagicians = [...originalMagicians];
// Call the make_great function with the copied array of magicians
const greatMagicians = make_great(copiedMagicians);
// Call the show_magicians function to display the original array of magicians
console.log("Original Magicians:");
show_magicians(originalMagicians);
// Call the show_magicians function to display the modified array of magicians
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
