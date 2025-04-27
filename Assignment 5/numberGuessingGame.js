console.log("------------------------------------")
console.log("Welcome to the Number Guessing Game")
console.log("------------------------------------")
console.log("I will now tell you the Rules")
console.log("1. I will firstly choose a number between 1-10")
console.log("2. You will have to guess the number")
console.log("3. If you guess the number correctly, you will win the game")
console.log("4. You will get 5 tries at this..")
console.log("May the winds guide you...")

var tries=5
myNum=Math.floor(Math.random() * 10)+1
var guesses=[]
const readline=require('node:readline')
var  guessed=false
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

function ask(){
    if (tries>0 && !guessed ){
        rl.question (`Guessed the number? `, hisNum=>{  if(guesses.includes(hisNum)){
            console.log("You have already tried this one, try something else.")
        }else{
            guesses.push(hisNum)
            if (parseInt(hisNum)===myNum) {
                guessed=true
                console.log("You guessed it right!!")
                console.log("You won the game!!")
                rl.close();
                return;
                } 
            else {
                tries-=1;
                console.log("You guessed it wrong!!")
                console.log(`You have ${tries} tries left!!`)
    
        }}
    ask();}
        
    )}
    
    else{
        console.log("||||   YOU LOSE   ||||")
        console.log(`The number was ${myNum}`)
        console.log(`Your Guesses: ${guesses}`)
    }
}

ask()