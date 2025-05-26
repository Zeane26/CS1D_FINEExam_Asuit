// Declare the numbers and names
let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Initial arrays
console.log("Numbers: ", numbers);
console.log("Names: ", names);

// Merge both arrays into a single array
let mergedArray = [...numbers, ...names];
console.log("Merged Array: ", mergedArray);

// Sort numbers numerically in reverse
numbers.sort((a, b) => b - a);
console.log("Numbers in Reverse Order: ", numbers);

// Sort names alphabetically
names.sort((a, b) => a.localeCompare(b));
console.log("Names in Alphabetical Order: ", names);