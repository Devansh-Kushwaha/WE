showMe()

function showMe(){
    console.log('Welcome')
}

const add=(a,b)=>{
    return a+b
}
const printeven=(a)=>{
    for(i=1;i<=a;i++){
        if (i%2==0){
            console.log(i)
        }

    }
}

console.log(add(6,7))

printeven(5)

/*(function() {
    console.log("ABC");
})();*/

function addr(num1,num2,callback){
    console.log(num1+num2)
    callback()
}

function sayHello(){
    console.log("Hello");
}

addr(5,7,sayHello)

function outerFunction(a){
    function innerFunction(b){
        return a+b
    }
    return innerFunction
}

console.log(outerFunction(5)(7));

function check(a){
    function divisibility(b){
        if (a%b==0){
            return true;
        }
        return false;}
    return divisibility;

    
};

console.log(check(9)(4));

//Ask the user for tow numbers using call back
    // It uses another callback to add them
    //Pass the result to third callback to check if the number is even or odd

function question(inputFunction,addFunction,checkeven){
    let a=inputFunction();
    let b=inputFunction();
    let c=addFunction(a,b,checkeven);
  

}

function input(){
    
    return Number(5);
}

function addii(a,b,checkeven){
    return checkeven(a+b);
}

function evenodd(a){
    if (a%2==0){
        console.log("Even");
        }
    else{
        console.log("Odd");
    }
}

question(input,addii,evenodd)
