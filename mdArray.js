// Declare the names and ages
let names = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let ages = [24, 65, 21, 5, 9];

// Restructure the arrays into a multi-dimensional array
let restructuredArray = names.map((name, index) => [name, ages[index]]);

// Log the restructured array to the console
console.log("Restructured Array:");
restructuredArray.forEach((subArray) => {
    console.log(subArray);
});