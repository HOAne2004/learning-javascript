console.log("Scopes");
console.log("1. Global Scope");
let globalVar = "I am a global variable";

function functionScopeExample() {
    console.log(globalVar); // Accessible here
}

functionScopeExample(); // Output: I am a global variable
console.log(globalVar); // Accessible here

console.log("2. Function Scope");
function functionScopeExample() {
    let functionVar = "I am a function variable";
    console.log(functionVar); // Accessible here
}

functionScopeExample(); // Output: I am a function variable
console.log(functionVar); // Error: functionVar is not defined

console.log("3. Block Scope");
function blockScopeExample() {
    if (true) {
        let blockVar = "I am a block variable";
        console.log(blockVar); // Accessible here
    }
    console.log(blockVar); // Error: blockVar is not defined
}
blockScopeExample(); // Output: I am a block variable