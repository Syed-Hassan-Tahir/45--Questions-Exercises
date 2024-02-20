// Store a person's name with whitespace characters including "\t" and "\n"
let personName = "\t\n   Syed Hassan Tahir   \t\n";
// Print the original name
console.log(`Original Name: "${personName}"`);
// Remove leading and trailing whitespace
let trimmedName = personName.trim();
// Print the trimmed name
console.log(`Trimmed Name: "${trimmedName}"`);
export {};