// Create an array with numbers
let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

// Function to implement Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                console.log(`Swapping ${arr[j]} and ${arr[j + 1]}`);
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                console.log(`Array after swap: ${arr}`);
            }
        }
        console.log(`Pass ${i + 1} complete. Array: ${arr}\n`);
    }
    return arr;
}

// Call the bubble sort function and log the sorted array
console.log("Original array: ", numbers);
let sortedArray = bubbleSort(numbers);
console.log("Sorted array: ", sortedArray);