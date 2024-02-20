// Define the city_country function
function city_country(city: any, country: any) {
    return `${city}, ${country}`;
}
// Define the show_magicians function
function show_magicians(magicians: any) {
    for (let magician of magicians) {
        console.log("magician");
    }
}
// Define the make_great function to modify the array of magicians
function make_great(magicians: any[]) {
    return magicians.map(magician => `the Great ${magician}`);
}
// Array of magician's names
const magicians = ["Magician1", "Magician2", "Magician3", "Magician4"];
// Call the make_great function to modify the array of magicians
const greatMagicians = make_great(magicians);
// Call the show_magicians function to display the modified list of magicians
show_magicians(greatMagicians);
export {};
