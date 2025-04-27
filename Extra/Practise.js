// //create  a program that uses an anonymous function to display a countdown timer from one to 10. after the countdown which is 0, it should display Happy new year message using another anonymous function.

// const countdown= function (){
//     for (let i = 10; i >= 0; i--) {
//         setTimeout(() => console.log(i), i*1000);
//     }
//     newyear()
// }
// const newyear = function(){
//     setTimeout(() => console.log("Happy new year"), 11*1000);
// }

// countdown()



////Write a recursive function to calculate factorial of a number, then create an anonymous function to call this recursive function and display the result

// function fatorial(n){
//     let ans=n
//     for (i=n-1;i>1;i--){
//         ans=ans*i
//         // console.log(ans)
//     }
//     return ans
// }

// const printfact= function(n){
//     console.log(fatorial(n))
// }

// printfact(5)


////create an online shopping flow with callbacks
////1. Add items to a cart
////2. Calculate the total price
////3. Make payment and confirm the order
////4. Display a confirmation message

// function Display(){
//     console.log("Order confirmed")
// }

// function MakePayemnet(Display){
//     console.log("Payment made")
//     Display()
// }

// function TotalPrice(arr,MakePayment,Display){
//     let total=0
//     arr.forEach(item=>{
//         total+=item
//     })
//     console.log(total)
//     MakePayment(Display)
// }

// function AddItems(TotalPrice,MakePayemnet,Display){
//     let cart = [1,2,3,4]
//     console.log("Added Items",cart)
//     TotalPrice(cart,MakePayemnet,Display)

// }

// AddItems(TotalPrice,MakePayemnet,Display)

//// Define a parent class and a child class, define methods as the same as parent's static and isntance method. Investigate whether javascript allows shadowing for static methods and explain how calling these methods behave in both parent and child context.

// class Car{
//     constructor(brand){
//         this.brand = brand
//     }
//     getBrand(){
//         console.log("ABC")
//         }
// }

// class Model extends Car{
//     constructor(brand, mod){
//         super(brand)
//         this.model=mod;
        
//     }
//     getBrand(){
//         console.log("DEF")
//     }
    
// }
// Car1= new Model('Toyota','F1')
// Car1.getBrand()

// console.log("statisc methods can not be used by instances and also that statisc methods do not have access to class properties")


//How can call, apply and bind be used to borrow methods from one object and use them in another
