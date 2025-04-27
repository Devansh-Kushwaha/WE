// console.log("Before")
// setTimeout(()=>{
//     console.log("User Sign In")
// },2000);
// setTimeout(()=>{
//     console.log("Check if User has Token")
// },0)
// setTimeout(()=>{
// console.log("Get Prodcut Details")},1000)
// console.log("After")


// console.log("Before")
// setTimeout(()=>{
//     console.log("User Sign In");
//     setTimeout(()=>{
//         console.log("Check if User has Token")
//         setTimeout(()=>{
//             console.log("Get Prodcut Details")},1000)
//     },0)
// },2000);
// console.log("After")

// let promise= new Promise (function(resolve,reject){
//     var condition=false;
//     if (condition){
//         resolve("User Signed In")
//     }
//     else{
//         reject("User Rejected")
//     }
// })

// promise.then((res)=>{
//     console.log("then",res)
// })
// .catch((error)=>{
//     console.log("catch",error)
// })
// .finally(()=>{
// console.log("Promise is completed")})

// console.log(promise)

// let promise1=new Promise(function(resolve,reject){
//     resolve("promise1")
// })
// let promise2=new Promise(function(resolve,reject){
//     resolve("promise2")
// })
// let promise3=new Promise(function(resolve,reject){
//     resolve("promise3")
// })
// Promise.race([promise2,promise3,]).then((messages)=>
// {
//     console.log(messages);
// })

let promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(5);
    },3000)})

promise.then((res)=>{
    console.log(res)
    return res+1
}).then((res2)=>{
    console.log(res2)
    return res2+1
}).then((res3)=>{
    console.log(res3)
})