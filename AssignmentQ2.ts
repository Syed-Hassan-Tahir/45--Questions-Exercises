// Store a person's name in a variable
let personName = "Hassan";
// Print the name in lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);
// Print the name in uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);
// Print the name in title case
console.log(`Title Case: ${toTitleCase(personName)}`);
// Function to convert a string to title case
function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, (word: string) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
}
export {};
