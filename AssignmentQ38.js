"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the city_country function
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with three city-country pairs and print the returned values
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("New York", "USA"));
