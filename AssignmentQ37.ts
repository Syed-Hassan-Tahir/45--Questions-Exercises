// Define the describe_city function with a default country value
function describe_city(city: string, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city("Lahore", "Pakistan");
describe_city("Tokyo", "Japan");
describe_city("New York"); // Using the default country value
export {};
