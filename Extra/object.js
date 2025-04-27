// // const person={
// //     firstname:"John",
// //     lastname:"Doe",
// //     age:30,
// //     // greet:function(){
// //     //     console.log("Hello, my name is "+this.firstname+" "+this.lastname)
// //     // }
// // }


// // person.greet=function(){
// //     console.log("Hello")
// // }
// // person.greet()

// // let car={
// //     brand:"Toyota",
// //     model:"Camry",
// //     year:2015,
// // }

// // car.color="Blue"
// // let owner={
// //     name:"John",
// //     age:30,
// //     ca:car,
// //     now:car.brand
// // }

// // console.log(owner)

// function person(first,last,age,cls){
//     this.firstname=first
//     this.lastname=last
//     this.age=age
//     this.cls=cls
// }

// var person1 =new person("Devansh","Kushwaha",20,15)
// person.prototype.nationality="KOR"
// console.log(person1)

// // person1.nationality="Indian"
// console.log(person1)

person6={
firstname:"Something",
fun:function(nationality){
    console.log(this.firstname+nationality
    )
}
}
person7={
    firstname:"ACLASS",
    lastname:"XYZ"
}

person6.fun.call(person7," COUNT")

person6.fun.apply(person7,"ABCD")
person6.fun.bind(person7,"ABCD")