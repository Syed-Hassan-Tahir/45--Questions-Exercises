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
// Make three dictionaries representing different albums
const album1 = make_album("Artist1", "Album1", 10);
const album2 = make_album("Artist2", "Album2", 5);
const album3 = make_album("Artist3", "Album3", 15);
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
