// Create an empty array to represent the stack
let groceryStack = [];

// Function to peek the top element of the stack
function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
        return null;
    } else {
        console.log(`Top element: ${groceryStack[groceryStack.length - 1]}`);
        return groceryStack[groceryStack.length - 1];
    }
}

// Function to push an element onto the stack
function push(item) {
    groceryStack.push(item);
    console.log(`Added ${item} to the stack.`);
    console.log(`Current stack: ${groceryStack}`);
    peek();
}

// Function to pop an element from the stack
function pop() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty. Cannot pop.");
    } else {
        let poppedItem = groceryStack.pop();
        console.log(`Removed ${poppedItem} from the stack.`);
        console.log(`Current stack: ${groceryStack}`);
        peek();
    }
}