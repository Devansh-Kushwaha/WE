// Write a function retryPromise (fn retry delays) Retrys a given asynchronus functio fn if it fails. Th efunction should. Attempt to execute fn funtion which returns a promise
// If fn function rejects, delay for miliseconds
// Keep retrying upto a userdefined number of times
// If all attemots fail return the final rejction error
// If fn function fucceedds at any attempt, return its resolved value immediately

// function retryPromise(fn,retries,delay){
//     let tries=0
//     while (tries<retries){
//         try {
//             const response= fn();
//             return response
//         } catch (error) {
//             attempt++

//             setTimeout(() => {console.log("Retrying")},delay)

//         }
//     }
//     return Promise.reject(error)

// }

// function P() {

//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(5);
//         },3000)

//     });
// }

// console.log(retryPromise(P,7,8))

// ---------------------------------------------------------------

//You have an array of numbers. Each number needs to be processed asynchronusly in sequence. Each functioninn the chain should
// 1. Double the Number
// 2. Add 5 to a Number
// 3. COnvert number into String.fromCharCode

// Write a function that takes an array as input
// Uses a chain of promises to process each number sequentially
// Returns the promise taht resolves with an array of transformed results

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

function charConv(num) {
  return String(num);
}

function processNumber(nums) {
  return nums.reduce((promise, num) => {
    return promise.then((results) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubleNum = double(num);
          const addFiveNum = addFive(doubleNum);
          const charCode = charConv(addFiveNum);
          results.push(charCode);
          resolve(results);
        }, 1000);
      });
    });
  }, Promise.resolve([]));
}

const array = [1, 2, 34, 4];
processNumber(array).then((result) => console.log(result));
