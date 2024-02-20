// Modified make_shirt function with default values
function make_shirt(size = "Large", message = "I love Myself") {
    console.log(`Shirt Summary: Size - ${size}, Message - "${message}"`);
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt("Medium");
// Create a shirt of any size with a different message
make_shirt("Small", "Custom Message");
export {};
