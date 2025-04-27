async function f() {
    return 1;
}
const val = await f();
console.log(val);  // Output: 1

function P() {
    return new Promise((resolve, reject) => {
        resolve("Promise is resolved");
    });
}

function P1(data) {
    return new Promise((resolve, reject) => {
        resolve(data + " Processed by P1");
    });
}

function P2() {
    return new Promise((resolve, reject) => {
        resolve("Promise 3 is resolved");
    });
}

async function x() {
    const data = await P();
    console.log("step1:", data);  // Output: "step1: Promise is resolved"

    const data1 = await P1(data);  // Pass `data` to `P1`
    console.log("step2:", data1);  // Output: "step2: Promise is resolved Processed by P1"

    const data2 = await P2();
    console.log("step3:", data2);  // Output: "step3: Promise 3 is resolved"
}

// Call the async function
x();


//Write a function retry Promise



//If fn function rejects, delay for miliseconds
// Keep retrying upto a userdefined number of times
// If all attemots fail return the final rejction error
// If fn function fucceedds at any attempt, return its resolved value immediately
