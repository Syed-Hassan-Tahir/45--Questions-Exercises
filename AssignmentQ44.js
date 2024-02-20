"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the createCar function with required parameters and optional keyword arguments
function createCar(manufacturer, modelName, ...options) {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Add optional keyword arguments to the car's object
    options.forEach(option => {
        const [key, value] = Object.entries(option)[0];
        car[key] = value;
    });
    return car;
}
// Call the function with required information and two additional name-value pairs
const carInfo = createCar("Toyota", "Camry", { Color: "Blue", feature: ["Navigation", "Sunroof"] });
// Print the returned object to verify the information
console.log("carInfo");
